module.exports = {
  async connect(ctx) {
    const clientId = process.env.LINKEDIN_CLIENT_ID;
    const redirectUri = encodeURIComponent(
      "http://localhost:1337/api/connect/linkedin/callback"
    );
    const scope = encodeURIComponent("openid profile email");
    const authUrl = `https://www.linkedin.com/oauth/v2/authorization?response_type=code&client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scope}`;

    ctx.redirect(authUrl);
  },
};
