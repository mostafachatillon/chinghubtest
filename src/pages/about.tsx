import React, { FC } from 'react';

import {
  Container,
  Layout,
  PageTitle,
  PageBody,
  Seo,
} from '@components/shared';
import { useSiteMetadata } from '@hooks';

/** Displays the About page for the website. */
const AboutPage: FC = () => {
  const siteMetadata = useSiteMetadata();
  return (
    <Layout>
      <Seo
        title={`${siteMetadata.title} - About Us`}
        description={`About Us page for ${siteMetadata.title} website`}
        urlSlug="about/"
      />

      <Container>
        <PageTitle>About Us</PageTitle>
        <PageBody>
          <p>
            COVIND is a global registry of COVID-19 individual patient data, and of collective projects exploring them
          </p>
          <p>
            COVIND accelerates global pooling of individual patient data, and research projects based on them. COVIND has a cool community of doctors, data scientists and other partners excited about working together.
          </p>
        </PageBody>
      </Container>
    </Layout>
  );
};
export default AboutPage;
