'use strict';
exports.success = ({ ctx, res = null, msg = 'Success' }) => {
  ctx.body = {
    success: true,
    data: res,
    msg,
  };
  ctx.status = 200;
};
exports.unthorization = ({ ctx, msg = 'Unthorization' }) => {
  ctx.body = {
    msg,
  };
  ctx.status = 401;
};
