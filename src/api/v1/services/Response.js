class Response {
  static fail(data) {
    return {
      status: "failed",
      data,
    };
  }

  static success(data) {
    return {
      status: "success",
      data,
    };
  }

  static send(res, status, json) {
    return res.send(status).json(json);
  }
}

export default new Response();
