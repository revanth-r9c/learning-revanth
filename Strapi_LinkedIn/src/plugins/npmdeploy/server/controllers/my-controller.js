'use strict';

module.exports = ({ strapi }) => ({
  index(ctx) {
    ctx.body = strapi
      .plugin('npmdeploy')
      .service('myService')
      .getWelcomeMessage();
  },
});
