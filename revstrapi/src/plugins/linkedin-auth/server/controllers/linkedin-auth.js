'use strict';

const axios = require('axios');
const https = require('https'); 

const httpsAgent = new https.Agent({
  rejectUnauthorized: false,
});

module.exports = {
  async getToken(ctx) {
    const { code } = ctx.request.body;

    try {
      const response = await axios.post('https://www.linkedin.com/oauth/v2/accessToken', new URLSearchParams({
        grant_type: 'authorization_code',
        code: code,
        redirect_uri: 'http://localhost:1337/admin/plugins/linkedin-auth',
        client_id: '86ul5yh2ppqr7n',
        client_secret: 'AUpK3HxOQ2z9Cev3',
      }).toString(), {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        httpsAgent, 
      });

      const accessToken = response.data.access_token;

      const userInfoResponse = await axios.get('https://api.linkedin.com/v2/userinfo', {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
        httpsAgent, 
      });

      // Optionally save user details in Strapi
      /* const userInfo = userInfoResponse.data;
      await strapi.query('plugin::linkedin-auth.linkedin-user').create({
        data: {
          name: userInfo.name,
          email: userInfo.email,
        },
      }); */

      return ctx.send(userInfoResponse.data);
    } catch (error) {
      ctx.throw(500, error.message);
    }
  },
};
