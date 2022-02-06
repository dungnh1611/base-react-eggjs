'use strict';
const { Service } = require('egg');
class AuthenticationService extends Service {
  async login(payload) {
    const { ctx, service } = this;
    const user = await service.user.findByUsername(payload.userName);
    if (!user) {
      ctx.throw(404, 'Username or password incorrect');
    }
    const vertifyPsw = await ctx.compare(payload.password, user.password);
    if (!vertifyPsw) {
      ctx.throw(404, 'Username or password incorrect');
    }
    return { token: await service.actionToken.apply(user._id) };
  }
  async changePsw(payload) {
    const { ctx, service } = this;
    // ctx.state.user 可以提取到JWT编码的data
    const _id = ctx.state.user.data._id;
    const user = await service.user.find(_id);
    if (!user) {
      ctx.throw(404, 'Username or password incorrect');
    }

    const verifyPsw = await ctx.compare(payload.oldPassword, user.password);
    if (!verifyPsw) {
      ctx.throw(404, 'Username or password incorrect');
    } else {
      // 重置密码
      payload.password = await ctx.genHash(payload.password);
      return service.user.findByIdAndUpdate(_id, payload);
    }
  }
  async current() {
    const { ctx, service } = this;
    const _id = ctx.state.user.data._id;
    const user = await service.user.show(_id);
    if (!user) {
      ctx.throw(404, 'user is not found');
    }
    user.password = '********';
    return user;
  }
}

module.exports = AuthenticationService;
