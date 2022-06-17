class UsersDatabaseWrapper {
  constructor(model) {
    this.model = model;
  }

  async findByUsername(email) {
    try {
      const user = await this.model.findOne({ email });
      return user;
    } catch (error) {
      return false;
    }
  }

  async createNew(user) {
    try {
      const user = new this.model(user);
      return true;
    } catch (error) {
      return false;
    }
  }
}

export default UsersDatabaseWrapper;
