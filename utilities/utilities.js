var jwt = require("jsonwebtoken");
const user = require("../models/model_users");

let secret = "%)$2sF55Idf(Rm&jyPnkqAL^+8m4dSw)";

const generateToken = (user_info, callback) => {
  let token = jwt.sign(
    {
      data: user_info,
    },
    secret,
    { expiresIn: "24h" }
  );
  return callback(token);
};

const validateToken = (token, callback) => {
  if (!token) {
    return callback(false, null);
  }
  jwt.verify(token.replace("Bearer ", ""), secret, function (error, decoded) {
    let loggedUser = decoded.data.user;

    user.findOne({ username: loggedUser }, function (error, user) {
      if (user) {
        return callback(true, loggedUser);
      } else {
        return callback(false, null);
      }
    });
  });
};

exports.generateToken = generateToken;
exports.validateToken = validateToken;
