class PostsDatabaseWrapper {
  constructor(model) {
    this.model = model;
  }

  async createPost(post) {
    try {
      const postObj = new this.model(post);
      const data = await postObj.save();
      return { data };
    } catch (error) {
      return { error };
    }
  }

  async getPosts(filters, limit = 30, offset = 0) {
    try {
      const data = await this.model
        .find({ ...filters })
        .skip(offset)
        .limit(limit);
      return { data };
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
      const data = await this.model.findByIdAndUpdate(postId, post, { new: true });
      return { data };
    } catch (err) {
      return { error };
    }
  }

  async checkPostAuthor(postId, authorId) {
    try {
      const data = await this.model.findOne({ id: postId, author: authorId });
      return data ? true : false;
    } catch (error) {
      return { error };
    }
  }
}

export default PostsDatabaseWrapper;
