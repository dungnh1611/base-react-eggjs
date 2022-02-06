/* eslint-disable dot-notation */
/* eslint-disable space-before-function-paren */
'use strict';
const { Service } = require('egg');
class UserService extends Service {
  /**
   * @param {any} params - params
   * @description Get all data by params
   */
  async getAll(params) {
    return await this.ctx.model.User.find(params);
  }
  /**
   * @param {any} uid - uid
   * @description Show data by id
   */
  async show(uid) {
    const model = await this.ctx.model.User.findById(uid);
    return model;
  }

  /**
   * @param {Object} data - Model data
   * @description Update data by uid
   */
  async create(data) {
    data.password = await this.ctx.genHash(data.password);
    return this.ctx.model.User.create(data);
  }

  /**
   * @param {String} uid - uid
   * @param {Object} data - Model data
   * @description Update data by uid
   */
  async update(uid, data) {
    // ignore
    delete data.userName;
    delete data.password;
    delete data.isDeleted;
    await this.ctx.model.User.findOneAndUpdate({ _id: uid }, data);
    return null;
  }

  /**
   * @param {String} uid - uid
   */
  async destroy(uid) {
    await this.ctx.model.User.findOneAndUpdate({ _id: uid }, { isDeleted: true });
    return null;
  }
  /**
   * @param {String} userName - username
   */
  async findByUsername(userName) {
    return await this.ctx.model.User.findOne({ userName });
  }
}

module.exports = UserService;
