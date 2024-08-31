// module.exports = {
//   routes: [
//     // {
//     //  method: 'GET',
//     //  path: '/auth',
//     //  handler: 'auth.exampleAction',
//     //  config: {
//     //    policies: [],
//     //    middlewares: [],
//     //  },
//     // },
//   ],
// };

// src/api/auth/routes/auth.js
// module.exports = {
//   routes: [
//     {
//       method: 'GET',
//       path: '/v2/userinfo',
//       handler: 'auth.linkedinAuth',
//       config: {
//         policies: [],
//         middlewares: [],
//       },
//     },
//     {
//       method: 'GET',
//       path: '/connect/linkedin/callback',
//       handler: 'auth.linkedinCallback',
//       config: {
//         policies: [],
//         middlewares: [],
//       },
//     },
//   ],
// };





// module.exports = {
//   routes: [
//     {
//       method: 'GET',
//       path: '/connect/linkedin',
//       handler: 'auth.linkedinAuth',
//       config: {
//         policies: [],
//         middlewares: [],
//       },
//     },
//     {
//       method: 'GET',
//       path: '/connect/linkedin/callback',
//       handler: 'auth.linkedinCallback',
//       config: {
//         policies: [],
//         middlewares: [],
//       },
//     },
//   ],
// };


module.exports = {
  routes: [
    {
      method: 'GET',
      path: '/connect/linkedin',
      handler: 'auth.linkedinAuth',
      config: {
        policies: [],
        middlewares: [],
      },
    },
    {
      method: 'GET',
      path: '/connect/linkedin/callback',
      handler: 'auth.linkedinCallback',
      config: {
        policies: [],
        middlewares: [],
      },
    },
  ],
};




