/* eslint-disable no-unused-vars */
/* eslint-disable space-before-function-paren */
'use strict';

module.exports = options => {
  return async function (ctx, next) {
    const authorization = ctx.request.header.authorization;
    if (authorization) {
      const token = authorization.split(' ')[1];
      const _id = ctx.app.jwt.decode(token).data._id;
      const user = await ctx.model.User.findById(_id).populate('role');
      if (user && user.role.name === 'admin') {
        await next();
      } else {
        ctx.helper.unthorization({ ctx });
      }
    } else {
      ctx.helper.unthorization({ ctx });
    }
  };
};
