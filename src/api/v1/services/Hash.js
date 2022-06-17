import bcrypt from "bcrypt";

class HashingLibrary {
  async hashPassword(password) {
    try {
      const salt = await bcrypt.genSalt(10);
      return await bcrypt.hash(password, salt);
    } catch (err) {
      return false;
    }
  }

  async matchPassword(passwordRequest, passwordDatabase) {
    try {
      return await bcrypt.compare(passwordRequest, passwordDatabase);
    } catch (err) {
      return false;
    }
  }
}

export default new HashingLibrary();
