class UserServices {
  async createToken(createToken, user) {
    return await createToken(user);
  }

  async hashPassword(hashPassword, password) {
    return hashPassword(password);
  }

  async doPasswordsMatch(matchPasswords, passwordDatabase, passwordRequest) {
    return matchPasswords(passwordDatabase, passwordRequest);
  }
}

export default new UserServices();
