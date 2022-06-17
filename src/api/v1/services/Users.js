class UserServices {
  static async createToken(createToken, user) {
    return await createToken(user);
  }

  static async hashPassword(hashPassword, password) {
    return hashPassword(password);
  }

  static async doPasswordsMatch(matchPasswords, passwordDatabase, passwordRequest) {
    return matchPasswords(passwordDatabase, passwordRequest);
  }
}

export default new UserServices();
