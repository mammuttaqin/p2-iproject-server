const bcrypt = require("bcryptjs");

const hashPassword = (password) => {
  const salt = bcrypt.genSaltSync(10);
  const hash = bcrypt.hashSync(password, salt);
  return hash;
};

const syncPassword = (hash, password) => {
  return bcrypt.compareSync(password, hash);
};

module.exports = {
  hashPassword,
  syncPassword,
};
