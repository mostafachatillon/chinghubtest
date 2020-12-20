import React, { FC } from 'react';

import {
  Container,
  Layout,
  PageTitle,
  PageBody,
  Seo,
} from '@components/shared';
import { useSiteMetadata } from '@hooks';

/** Displays the Terms and Conditions pages for the website. */
const TermsPage: FC = () => {
  const siteMetadata = useSiteMetadata();

  return (
    <Layout>
      <Seo
        title="Projects"
        description={`COVID-19 individual patient database`}
        urlSlug="projects_list/"
      />

      <Container>
        <PageTitle>Projects</PageTitle>

        <PageBody>
          <p>

<h3 id="treatments">Treatments</h3>
<ul>
<li><p>Azoximer bromide (commercial name: Polioxidonium)<p></p>In partnership with Petrovax LLC</p>
</li>
<li><p>Chloroquine</p>
</li>
<li><p>Azithromycin   </p>
</li>
<li><p>Tocilizumab    </p>
</li>
<li><p>Artemisia    </p>
</li>
<li><p>Remdesivir…</p>
</li>
</ul>
<h3 id="interventions">Interventions</h3>
<ul>
<li><p>Extra-Corporeal Membrane Oxygenation</p>
</li>
<li><p>Invasive Ventilation</p>
</li>
<li><p>Helmet Ventilation</p>
</li>
<li><p>High-Flow Nasal Cannula...</p>
</li>
</ul>
<h3 id="rehab">Long-term rehabilitation</h3>

<p> <a href='contact'>Contact us</a> to participate, or propose your project! </p>




</p>

        </PageBody>
      </Container>
    </Layout>
  );
};

export default TermsPage;
