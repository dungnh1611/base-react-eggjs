/* eslint-disable space-before-function-paren */
'use strict';
const { Controller } = require('egg');

class UserController extends Controller {
  constructor(ctx) {
    super(ctx);
    this.UserCreateTransfer = {
      //   mobile: { type: 'string', required: true, allowEmpty: false, format: /^[0-9]{11}$/ },
      password: { type: 'password', required: true, allowEmpty: false, min: 6 },
      userName: {
        type: 'string',
        required: true,
        allowEmpty: false,
      },
    };
    this.UserUpdateTransfer = {
      //   mobile: { type: 'string', required: true, allowEmpty: false, format: /^[0-9]{11}$/ },
      realName: {
        type: 'string',
        default: 'Username',
        allowEmpty: false,
      },
    };
  }
  async index() {
    const { ctx, service } = this;
    ctx.logger.info('[UserController]:[index]');
    const res = await service.user.getAll();
    this.ctx.helper.success({ ctx, res });
  }
  async show() {
    const { ctx, service } = this;
    ctx.logger.info('[UserController]:[show]');
    const { id } = ctx.params;
    const res = await service.user.show(id);
    ctx.helper.success({ ctx, res });
  }
  async create() {
    this.ctx.logger.info('[UserController]:[create]');
    const { ctx, service } = this;

    const formData = ctx.request.body;
    ctx.validate(this.UserCreateTransfer, formData);
    const res = await service.user.create(formData);
    ctx.helper.success({ ctx, res });
  }
  async update() {
    const { ctx, service } = this;
    ctx.logger.info('[UserController]:[update]');
    const { id } = ctx.params;
    const formData = ctx.request.body;
    ctx.validate(this.UserUpdateTransfer, formData);
    const res = await service.user.update(id, formData);
    ctx.helper.success({ ctx, res });
  }
  async destroy() {
    const { ctx } = this;
    ctx.logger.info('[UserController]:[delete]');
    const { id } = ctx.params;
    const res = await ctx.service.user.destroy(id);
    ctx.helper.success({ ctx, res });
  }
}

module.exports = UserController;
