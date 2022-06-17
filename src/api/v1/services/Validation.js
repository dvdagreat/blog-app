import Joi from "joi";

class ValidationLibrary {
  async validateLoginUser(user) {
    const schema = Joi.object({
      email: Joi.string().email(),
      password: Joi.string().min(6).max(18),
    });

    try {
      const { error, value } = schema.validateAsync(user);
      if (error) return error.details[0].message;
    } catch (err) {
      return err.details[0].message;
    }
  }
  async validateRegisterUser(user) {
    const schema = Joi.object({
      firstName: Joi.string().min(6).max(18),
      lastName: Joi.string().min(6).max(18),
      email: Joi.string().email(),
      password: Joi.string().min(6).max(18),
      birthDate: Joi.string().isoDate(),
      role: Joi.string().valid("user", "admin"),
    });

    try {
      const { error, value } = schema.validateAsync(user);
      if (error) return error.details[0].message;
    } catch (err) {
      return err.details[0].message;
    }
  }

  async validatePost(post) {
    const schema = Joi.object({
      title: Joi.string().max(100),
      body: Joi.string().max(1000),
      description: Joi.string().max(100),
      status: Joi.string().valid("published", "unpublished"),
      category: Joi.string(),
      author: Joi.string(),
    });

    try {
      const { error, value } = await schema.validateAsync(post);
      if (error) return error.details[0].message;
    } catch (err) {
      return err.details[0].message;
    }
  }

  async validateFilters(filters) {
    const schema = Joi.object({
      published_date: Joi.string().allow("").isoDate(),
      category: Joi.string().allow("").min(5).max(100),
      author: Joi.string().allow("").min(5).max(30),
      limit: Joi.number().allow("").max(30),
      page: Joi.number().allow("").min(1),
    });

    try {
      const { error, value } = await schema.validateAsync(filters);
      if (error) return error.details[0].message;
      return [];
    } catch (err) {
      return err.details[0].message;
    }
  }
}

export default new ValidationLibrary();
