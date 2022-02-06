'use strict';
const { Controller } = require('egg');

class AuthController extends Controller {
  constructor(ctx) {
    super(ctx);

    this.UserLoginTransfer = {
      userName: { type: 'string', required: true, allowEmpty: false },
      password: { type: 'string', required: true, allowEmpty: false },
    };

    // this.UserResetPswTransfer = {
    //   password: { type: 'password', required: true, allowEmpty: false, min: 6 },
    //   oldPassword: { type: 'password', required: true, allowEmpty: false, min: 6 },
    // };

    // this.UserUpdateTransfer = {
    //   mobile: { type: 'string', required: true, allowEmpty: false },
    //   realName: {
    //     type: 'string',
    //     required: true,
    //     allowEmpty: false,
    //     format: /^[\u2E80-\u9FFF]{2,6}$/,
    //   },
  }

  async login() {
    const { ctx, service } = this;
    ctx.validate(this.UserLoginTransfer);
    const payload = ctx.request.body || {};
    const res = await service.auth.login(payload);
    ctx.helper.success({ ctx, res });
  }
  async current() {
    const { ctx, service } = this;
    const res = await service.auth.current();
    ctx.helper.success({ ctx, res });
  }
}

module.exports = AuthController;
