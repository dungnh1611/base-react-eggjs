'use strict';
// {app_root}/app/model/user.js
module.exports = app => {
  const mongoose = app.mongoose;
  const Schema = mongoose.Schema;
  const conn = app.mongooseDB.get('server');

  const UserSchema = new Schema(
    {
      name: {
        type: String,
        trim: true,
        required: true,
      },
      description: {
        type: String,
        trim: true,
      },
    },
    {
      timestamps: true,
    }
  );

  return conn.model('User', UserSchema, 'user');
};
