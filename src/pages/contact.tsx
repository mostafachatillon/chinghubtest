import React, { FC } from 'react';

import {
  Container,
  Layout,
  PageTitle,
  PageBody,
  Seo,
} from '@components/shared';
import { useSiteMetadata } from '@hooks';

/** Displays the Contact page for the website. */
const ContactPage: FC = () => {
  const siteMetadata = useSiteMetadata();
  return (
    <Layout>
      <Seo
        title={`${siteMetadata.title} - Contact Us`}
        description={`Contact page for ${siteMetadata.title} website`}
        urlSlug="contact/"
      />

      <Container>
        <PageTitle>Contact Us</PageTitle>
        <PageBody>
          <p>
            If you have any questions or would like to share any feedback, drop an email to Mostapha Benhenda (<a href={`mailto:mostapha@melwy.com`}>
              mostapha@melwy.com
            </a>), <a href='https://forms.gle/rbYXpWbe2gJ7bUZ48'>
            fill the form</a>, or <a href='https://join.slack.com/t/newworkspace-e1t7616/shared_invite/zt-edehuali-y17HLOGtrchktDYRoV5xkw'>
            talk to us on Slack</a>.
            
            .
          </p>
        </PageBody>
      </Container>
    </Layout>
  );
};
export default ContactPage;
