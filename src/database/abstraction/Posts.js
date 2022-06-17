class PostsDatabaseWrapper {
  constructor(model) {
    this.model = model;
  }

  async getPosts(filters, limit = 30, offset = 0) {
    try {
      await this.model
        .find({ ...filters }, offset)
        .skip(offset)
        .limit(limit);
      return true;
    } catch (err) {
      return false;
    }
  }

  async deletePost(postId) {
    try {
      await this.model.findByIdAndDelete(postId);
      return true;
    } catch (err) {
      return false;
    }
  }

  async updatePost(postId, post) {
    try {
      const post = await this.model.findByIdAndUpdate(postId, post);
      return post;
    } catch (err) {
      return false;
    }
  }

  async checkPostAuthor(postId, authorId) {
    try {
      await this.model.findOne({ id: postId, author: authorId });
      return true;
    } catch (err) {
      return false;
    }
  }
}

export default PostsDatabaseWrapper;
