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


import React, { memo } from 'react';
import { Layout, BaseHeaderLayout, ContentLayout } from "@strapi/design-system/Layout";
import { Button } from "@strapi/design-system/Button";
import { FaLinkedin } from "react-icons/fa";
import { useHistory } from 'react-router-dom';

const HomePage = () => {
  const history = useHistory();

  const handleLinkedInSignIn = () => {
    // Replace this URL with the actual LinkedIn authorization URL
    const linkedInAuthURL = 'https://www.linkedin.com/oauth/v2/authorization?client_id=86ul5yh2ppqr7n&redirect_uri=http://localhost:1337/api/connect/linkedin/callback&response_type=code&scope=openid%20profile%20email';
    window.location.href = linkedInAuthURL;
  };

  return (
    <Layout>
      <BaseHeaderLayout
        title="LinkedIn Plugin"
        subtitle="Sign in with LinkedIn to get started"
        as="h2"
      />
      <ContentLayout>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '300px' }}>
          <Button
            onClick={handleLinkedInSignIn}
            variant="secondary"
            startIcon={<FaLinkedin />}
          >
            Sign in with LinkedIn
          </Button>
        </div>
      </ContentLayout>
    </Layout>
  );
};

export default memo(HomePage);
