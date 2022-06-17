import jwt from "jsonwebtoken";

class TokenLibrary {
  async generateToken(data, secret) {
    try {
      return await jwt.sign(data, secret);
    } catch (err) {
      return false;
    }
  }

  async verifyToken(token, secret) {
    try {
      return await jwt.verify(token, secret);
    } catch (err) {
      return false;
    }
  }

  async decodeToken(token) {
    return jwt.decode(token, { complete: true });
  }
}

export default new TokenLibrary();
