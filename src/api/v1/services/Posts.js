class PostServices {
  validateFilters(validator, filters) {
    let limit = 0;
    let offset = 0;
    const confirmedFilters = {};
    const { error, value } = validator(filters);
    if (error) return { error };

    if (typeof filters.limit !== "undefined") {
      limit = filters.limit;
    }

    if (typeof filters.page !== "undefined") {
      offset = filters.page;
    }

    if (typeof filters.author !== "undefined") {
      confirmedFilters.author = filters.author;
    }

    if (typeof filters.published_date !== "undefined") {
      confirmedFilters.published_date = filters.published_date;
    }

    if (typeof filters.cateogory !== "undefined") {
      confirmedFilters.category = filters.category;
    }

    return { limit, offset, confirmedFilters };
  }

  async checkBlogPostAuthorById(checkBlogAuthor, blogId, authorId) {
    return checkBlogAuthor(blogId, authorId);
  }

  async getPosts(getPosts, filters) {
    return getPosts(filters);
  }

  async createPost(createPost, post) {
    return await createPost(post);
  }

  async deletePost(deletePost, postId) {
    return await deletePost(postId);
  }

  async updatePost(postId, post, updatePost) {
    return await updatePost(postId, post);
  }

  checkRequiredFields(post) {
    const fields = ["title", "body", "userId", "description", "status", "category"];

    for (let i = 0; i < fields.length; i++) {
      if (!post.hasOwnProperty(fields[i])) return false;
    }

    return true;
  }

  mapRequestPostWithFields(post) {
    return {
      title: post.title,
      body: post.body,
      description: post.description,
      status: post.status,
      category: post.category,
      author: post.userId,
    };
  }
}

export default new PostServices();
