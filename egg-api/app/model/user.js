/* eslint-disable array-bracket-spacing */
/* eslint-disable space-before-function-paren */
'use strict';
// const bcrypt = require('bcryptjs');
// {app_root}/app/model/user.js
module.exports = app => {
  const mongoose = app.mongoose;
  const Schema = mongoose.Schema;
  const conn = app.mongooseDB.get('server');

  const UserSchema = new Schema({
    userName: {
      type: String,
      required: true,
      unique: [true, 'Unique'],
    },
    realName: {
      type: String,
      default: 'Username',
    },
    mobilePhone: {
      type: String,
      trim: true,
      unique: true,
      sparse: true,
    },
    password: { type: String },
    avatar: {
      type: String,
      default: 'https://1.gravatar.com/avatar/a3e54af3cb6e157e496ae430aed4f4a3?s=96&d=mm',
    },
    isDeleted: {
      type: Boolean,
      default: false,
      required: true,
    },
    role: {
      type: mongoose.Schema.Types.ObjectId,
      default: mongoose.Types.ObjectId('61ffd1af6dfeec6749e9aaab'),
      ref: 'Role',
    },
    createdAt: {
      type: Date,
      default: Date.now(),
    },
  });

  //   UserSchema.pre('save', function (next) {
  //     const user = this;
  //     if (this.isModified('password') || this.isNew) {
  //       bcrypt.genSalt(10, function (saltError, salt) {
  //         if (saltError) {
  //           return next(saltError);
  //         }
  //         bcrypt.hash(user.password, salt, function (hashError, hash) {
  //           if (hashError) {
  //             return next(hashError);
  //           }

  //           user.password = hash;
  //           next();
  //         });
  //       });
  //     } else {
  //       return next();
  //     }
  //   });
  //   UserSchema.methods.comparePassword = function (password, callback) {
  //     bcrypt.compare(password, this.password, function (error, isMatch) {
  //       if (error) {
  //         return callback(error);
  //       }
  //       callback(null, isMatch);
  //     });
  //   };
  return conn.model('User', UserSchema, 'user');
};
