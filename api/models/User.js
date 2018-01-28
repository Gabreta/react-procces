import bcrypt from 'bcrypt-nodejs';

module.exports = (sequelize, Datatypes) => {
  const User = sequelize.define('User', {
    username: {type: Datatypes.STRING, unique: true, allowNull: false, validate: {notEmpty: true}},
    password: {type: Datatypes.STRING, allowNull: false, validate: { notEmpty: true}},
    email: {type: Datatypes.STRING, unique: true, allowNull: false, validate: {notEmpty: true}},
    name: {type: Datatypes.STRING, allowNull: false, validate: { notEmpty: true}}
  },
  {
    classMethods: {
      validPassword: function(password, passwd, done, user) {
        bcrypt.compare(password, passwd, (err, isMatch) => {
          if (err) {
            console.log(err);
          }
          if (isMatch) {
            return done(null, user);
          } else {
            return done(null, false);
          }
        });
      }
    }
  },
  {
    dialect: 'postgres'
  }
  );

  User.hook('beforeCreate', (user, option) => {
    const SALT_WORK_FACTOR = 12;
    const salt = bcrypt.genSalt(SALT_WORK_FACTOR, (err, salt) => {
      return salt;
    });
    bcrypt.hash(user.password, salt, null, (err, hash) => {
      if (err) {
        return next(err);
      }
      user.password = hash;
      user.save();
    });
  });

  return User;
};
