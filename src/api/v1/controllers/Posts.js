class PostController {
  async createPost(req, res, dependencies) {
    const { services, database } = dependencies;
    const { response, validation, posts } = services;
    let post = {};

    try {
      if (!req.body.post) throw "'post' is not set";
      post = req.body.post;
    } catch (err) {
      return response.send(res, 403, response.fail(err));
    }

    const fieldCheckResult = posts.checkRequiredFields(post);
    if (!fieldCheckResult) return response.send(res, 403, response.fail("required fields not available"));
    post = posts.mapRequestPostWithFields(post);

    const validationResult = await validation.validatePost(post);
    if (validationResult) return response.send(res, 403, response.fail(validationResult));

    const { error, data } = await database.posts.createPost(post);
    if (error) response.send(res, 403, response.fail("Cannot create post at this moment"));
    return response.send(res, 200, response.success(data));
  }

  async getPosts(req, res, dependencies) {
    const { services, database } = dependencies;
    const { response, validation } = services;
    const user = {
      id: "asfasdfa",
      role: "admin",
    };

    let confirmedFilters = {};
    let limit = 0;
    let offset = 0;

    try {
      if (req.query) ({ confirmedFilters, limit, offset } = validation.validateFilters(req.query));
    } catch (err) {}

    const isAdmin = user.role === "admin";

    if (typeof confirmedFilters.author === "undefined") confirmedFilters.author = user.id;
    if (confirmedFilters.author != user.id && !isAdmin) confirmedFilters.author = user.id;

    const { error, data } = await database.posts.getPosts(filters, limit, offset);
    if (error) response.send(res, 403, response.fail("Cannot create post at this moment"));
    return response.send(res, 200, response.success(data));
  }

  async updatePost(req, res, dependencies) {
    const { services, database } = dependencies;
    const { response, validation, posts } = services;
    let post = {};
    let postId = 0;
    let user = req.body.user;

    try {
      if (!req.body.post) throw "'post' is not set";
      if (!req.params["id"]) throw "'postId' is not set";
      post = req.body.post;
      postId = req.params["id"];
    } catch (err) {
      return response.send(res, 403, response.fail(err));
    }

    const fieldCheckResult = posts.checkRequiredFields(post);
    if (!fieldCheckResult) return response.send(res, 403, response.fail("required fields not available"));
    post = posts.mapRequestPostWithFields(post);

    const isAuthor = await database.posts.checkPostAuthor(postId, user.id);
    const isAdmin = user.role === "admin";
    if (!isAuthor && !isAdmin) {
      return response.send(res, 403, response.fail("You are not authorized to update this post"));
    }

    const validationResult = await validation.validatePost(post);
    if (validationResult) return response.send(res, 403, response.fail(validationResult));

    const { error, data } = await database.posts.updatePost(postId, post);
    if (error) response.send(res, 403, response.fail("Cannot update post at this moment"));
    return response.send(res, 200, response.success(data));
  }

  async deletePost(req, res, dependencies) {
    console.log(dependencies);
    const { services, database } = dependencies;
    const { response } = services;
    let postId = 0;
    let user = req.body.user;

    try {
      if (!req.params["id"]) throw "'id' is not set";
      postId = req.params["id"];
    } catch (err) {
      return response.send(res, 403, response.fail(err));
    }

    const isAuthor = await database.posts.checkPostAuthor(postId, user.id);
    const isAdmin = user.role === "admin";
    if (!isAuthor && !isAdmin) {
      return response.send(res, 403, response.fail("You are not authorized to delete this post"));
    }

    const { error } = await database.posts.deletePost(postId);
    if (error) response.send(res, 403, response.fail("Cannot delete post at this moment"));
    return response.send(res, 200, response.success("Post deleted successfully"));
  }
}

export default new PostController();
