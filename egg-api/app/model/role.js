'use strict';
module.exports = app => {
  const mongoose = app.mongoose;
  const Schema = mongoose.Schema;
  const conn = app.mongooseDB.get('server');

  const RoleSchema = new Schema({
    name: { type: String, unique: true, required: true },
    access: { type: String, required: true, default: 'user' },
    extra: { type: mongoose.Schema.Types.Mixed },
    createdAt: { type: Date, default: Date.now() },
  });

  return conn.model('Role', RoleSchema, 'role');
};
