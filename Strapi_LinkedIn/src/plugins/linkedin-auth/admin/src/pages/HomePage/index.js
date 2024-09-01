/*
 *
 * HomePage
 *
 */

// import React from 'react';
// // import PropTypes from 'prop-types';
// import pluginId from '../../pluginId';

// const HomePage = () => {
//   return (
//     <div>
//       <h1>{pluginId}&apos;s HomePage</h1>
//       <p>Happy coding</p>
//     </div>
//   );
// };

// export default HomePage;


// import React, { memo } from 'react';
// import { Layout, BaseHeaderLayout, ContentLayout } from "@strapi/design-system/Layout";
// import { Button } from "@strapi/design-system/Button";
// import { FaLinkedin } from "react-icons/fa";
// import { useHistory } from 'react-router-dom';

// const HomePage = () => {
//   const history = useHistory();

//   const handleLinkedInSignIn = () => {
//     // Replace this URL with the actual LinkedIn authorization URL
//     const linkedInAuthURL = 'https://www.linkedin.com/oauth/v2/authorization?client_id=86ul5yh2ppqr7n&redirect_uri=http://localhost:1337/api/connect/linkedin/callback&response_type=code&scope=openid%20profile%20email';
//     window.location.href = linkedInAuthURL;
//   };

//   return (
//     <Layout>
//       <BaseHeaderLayout
//         title="LinkedIn Plugin"
//         subtitle="Sign in with LinkedIn to get started"
//         as="h2"
//       />
//       <ContentLayout>
//         <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '300px' }}>
//           <Button
//             onClick={handleLinkedInSignIn}
//             variant="secondary"
//             startIcon={<FaLinkedin />}
//           >
//             Sign in with LinkedIn
//           </Button>
//         </div>
//       </ContentLayout>
//     </Layout>
//   );
// };

// export default memo(HomePage);











import React, { memo } from 'react';
import { Layout, BaseHeaderLayout, ContentLayout } from "@strapi/design-system/Layout";
import { Button } from "@strapi/design-system/Button";
import { TextInput } from "@strapi/design-system/TextInput";
import { Stack } from "@strapi/design-system/Stack";
import { Box } from "@strapi/design-system/Box";
import { Divider } from '@strapi/design-system/Divider';
import { FaLinkedin, FaGoogle, FaEnvelope } from "react-icons/fa"; // Icons for LinkedIn, Google, and Email
import { useHistory } from 'react-router-dom';

const HomePage = () => {
  const history = useHistory();

  const handleLinkedInSignIn = () => {
    const linkedInAuthURL = 'https://www.linkedin.com/oauth/v2/authorization?client_id=86ul5yh2ppqr7n&redirect_uri=http://localhost:4200/home&response_type=code&scope=openid%20profile%20email';
    window.location.href = linkedInAuthURL;
  };

  return (
    <Layout>
      <BaseHeaderLayout
        title="Welcome to LinkedIn Plugin"
        subtitle="Sign in with LinkedIn to get started"
        as="h2"
      />
      <ContentLayout>
        <Box
          style={{ 
            maxWidth: '400px', 
            margin: '0 auto', 
            padding: '30px',
            border: '1px solid #e3e3e3',
            borderRadius: '10px',
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
            backgroundColor: '#fff',
          }}
        >
          <Stack spacing={4}>
            {/* Login Form */}
            <TextInput label="Email" placeholder="Enter your email" name="email" />
            <TextInput label="Password" placeholder="Enter your password" type="password" name="password" />
            <Button fullWidth variant="default">Login</Button>
            <Button fullWidth variant="tertiary">Forgot Password?</Button>

            <Divider />

            {/* Sign in with LinkedIn */}
            <Button
              onClick={handleLinkedInSignIn}
              variant="secondary"
              startIcon={<FaLinkedin />}
              fullWidth
            >
              Sign in with LinkedIn
            </Button>
            {/* Sign in with Google */}
            <Button fullWidth variant="tertiary" startIcon={<FaGoogle />} disabled>
              Sign in with Google
            </Button>
            {/* Sign in with Email */}
            <Button fullWidth variant="tertiary" startIcon={<FaEnvelope />} disabled>
              Sign in with Gmail
            </Button>
          </Stack>
        </Box>
      </ContentLayout>
    </Layout>
  );
};

export default memo(HomePage);



