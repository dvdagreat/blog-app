class Response {
  fail(data) {
    return {
      status: "failed",
      data,
    };
  }

  success(data) {
    return {
      status: "success",
      data,
    };
  }

  send(res, status, json) {
    return res.status(status).json(json);
  }
}

export default new Response();
