'use strict';

module.exports = ({ strapi }) => ({
  index(ctx) {
    ctx.body = strapi
      .plugin('linkedin-auth')
      .service('myService')
      .getWelcomeMessage();
  },



  // async callback(ctx) {
  //   try {
  //     const { code } = ctx.query;
      
  //     // Exchange the authorization code for an access token
  //     const tokenResponse = await fetch('https://www.linkedin.com/oauth/v2/accessToken', {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/x-www-form-urlencoded',
  //       },
  //       body: new URLSearchParams({
  //         grant_type: 'authorization_code',
  //         code,
  //         redirect_uri: 'http://localhost:1337/api/connect/linkedin/callback',
  //         client_id: process.env.LINKEDIN_CLIENT_ID,
  //         client_secret: process.env.LINKEDIN_CLIENT_SECRET,
  //       }),
  //     });
      
  //     const tokenData = await tokenResponse.json();
  //     console.log('Token Response:', tokenData);
      
  //     const { access_token } = tokenData;
      
  //     if (!access_token) {
  //       throw new Error('Failed to obtain access token.');
  //     }

  //     // Fetch user information
  //     const userResponse = await fetch('https://api.linkedin.com/v2/userinfo', {
  //       headers: {
  //         Authorization: `Bearer ${access_token}`,
  //       },
  //     });      

  //     const userData = await userResponse.json();
      
  //     ctx.send(userData);

  //   } catch (err) {
  //     ctx.send({ error: err.message }, 500);
  //   }
  // },

});
