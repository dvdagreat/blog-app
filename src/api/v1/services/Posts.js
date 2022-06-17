class PostServices {
  static validatePost(validator, post) {
    return validator(post);
  }
  static validateFilters(validator, filters) {
    return validator(filters);
  }
  static async checkBlogPostAuthorById(checkBlogAuthor, blogId, authorId) {
    return checkBlogAuthor(blogId, authorId);
  }
  static async getPosts(getPosts, filters) {
    return getPosts(filters);
  }
  static async createPost(createPost, post, userId) {
    const post = { author: userId, ...post };
    return createPost(post);
  }
  static async deletePost(deletePost, postId) {
    return await deletePost(postId);
  }
  static async updatePost(postId, post, updatePost) {
    return await updatePost(postId, post);
  }
}

export default new PostServices();
