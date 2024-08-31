// const axios = require('axios');

// module.exports = {
//   async linkedinAuth(ctx) {
//     const { LINKEDIN_CLIENT_ID, LINKEDIN_CALLBACK_URL } = process.env;
//     // const scope = 'r_liteprofile r_emailaddress';
//     const scope = 'openid email profile';
//     const redirectUri = encodeURIComponent(LINKEDIN_CALLBACK_URL);

//     const authUrl = `https://www.linkedin.com/oauth/v2/authorization?response_type=code&client_id=${LINKEDIN_CLIENT_ID}&redirect_uri=${redirectUri}&scope=${scope}`;

//     ctx.redirect(authUrl);
//   },

//   async linkedinCallback(ctx) {
//     const { code } = ctx.query;
//     const { LINKEDIN_CLIENT_ID, LINKEDIN_CLIENT_SECRET, LINKEDIN_CALLBACK_URL } = process.env;

//     try {
//       // Exchange authorization code for access token
//       const response = await axios.post('https://www.linkedin.com/oauth/v2/accessToken', null, {
//         params: {
//           grant_type: 'authorization_code',
//           code,
//           redirect_uri: LINKEDIN_CALLBACK_URL,
//           client_id: LINKEDIN_CLIENT_ID,
//           client_secret: LINKEDIN_CLIENT_SECRET,
//         },
//         headers: {
//           'Content-Type': 'application/x-www-form-urlencoded',
//         },
//       });

//       const { access_token } = response.data;

//       // Use access token to fetch user profile
//       const userProfile = await axios.get('https://api.linkedin.com/v2/me', {
//         headers: {
//           Authorization: `Bearer ${access_token}`,
//         },
//       });

//       const userEmail = await axios.get('https://api.linkedin.com/v2/emailAddress?q=members&projection=(elements*(handle~))', {
//         headers: {
//           Authorization: `Bearer ${access_token}`,
//         },
//       });

//       ctx.send({
//         profile: userProfile.data,
//         email: userEmail.data,
//       });
//     } catch (error) {
//       ctx.send({ error: error.message });
//     }
//   },
// };








// const axios = require('axios');

// module.exports = {
//   async linkedinAuth(ctx) {
//     const clientId = process.env.LINKEDIN_CLIENT_ID;
//     const redirectUri = encodeURIComponent(process.env.LINKEDIN_CALLBACK_URL);
//     const scope = encodeURIComponent('email profile openid');
//     const authUrl = `https://www.linkedin.com/oauth/v2/authorization?response_type=code&client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scope}`;

//     ctx.redirect(authUrl);
//   },

//   async linkedinCallback(ctx) {
//     const { code } = ctx.query;

//     if (!code) {
//       return ctx.badRequest('No code provided');
//     }

//     try {
//       const accessTokenResponse = await axios.post('https://www.linkedin.com/oauth/v2/accessToken', null, {
//         params: {
//           grant_type: 'authorization_code',
//           code,
//           redirect_uri: process.env.LINKEDIN_CALLBACK_URL,
//           client_id: process.env.LINKEDIN_CLIENT_ID,
//           client_secret: process.env.LINKEDIN_CLIENT_SECRET,
//         },
//       });

//       const accessToken = accessTokenResponse.data.access_token;

//       const userInfoResponse = await axios.get('https://api.linkedin.com/v2/userinfo', {
//         headers: {
//           Authorization: `Bearer ${accessToken}`,
//         },
//       });

//       const user = userInfoResponse.data;

//       // Here you can handle the user info as needed,
//       // e.g., create or update user in your database, generate session tokens, etc.
//       ctx.send(user);

//     } catch (error) {
//       console.error(error);
//       ctx.badRequest('Failed to authenticate with LinkedIn');
//     }
//   },
// };


const axios = require('axios');

module.exports = {
  async linkedinAuth(ctx) {
    const { LINKEDIN_CLIENT_ID, LINKEDIN_CALLBACK_URL } = process.env;
    const scope = 'openid profile email';
    const redirectUri = encodeURIComponent(LINKEDIN_CALLBACK_URL);

    const authUrl = `https://www.linkedin.com/oauth/v2/authorization?response_type=code&client_id=${LINKEDIN_CLIENT_ID}&redirect_uri=${redirectUri}&scope=${scope}`;

    ctx.redirect(authUrl);
  },

  async linkedinCallback(ctx) {
    const { code } = ctx.query;
    const { LINKEDIN_CLIENT_ID, LINKEDIN_CLIENT_SECRET, LINKEDIN_CALLBACK_URL } = process.env;

    try {
      // Exchange authorization code for access token
      const response = await axios.post('https://www.linkedin.com/oauth/v2/accessToken', null, {
        params: {
          grant_type: 'authorization_code',
          code,
          redirect_uri: LINKEDIN_CALLBACK_URL,
          client_id: LINKEDIN_CLIENT_ID,
          client_secret: LINKEDIN_CLIENT_SECRET,
        },
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      });

      const { access_token } = response.data;

      // Use access token to fetch user profile
      const userProfile = await axios.get('https://api.linkedin.com/v2/me', {
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
      });

      const userEmail = await axios.get('https://api.linkedin.com/v2/emailAddress?q=members&projection=(elements*(handle~))', {
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
      });

      ctx.send({
        profile: userProfile.data,
        email: userEmail.data,
      });
    } catch (error) {
      ctx.send({ error: error.message });
    }
  },
};
