import TokenLibrary from "../api/v1/services/Token.js";

function fetchJWTUserData(req, res, next) {
  const userdata = TokenLibrary.decodeToken(req.headers.authorization);
  try {
    if (!userdata.id) throw "Cannot authenticate JWT token";
  } catch (err) {
    return res.status(500).send(err);
  }

  req.body.user = userdata;
  next();
}

export default fetchJWTUserData;
