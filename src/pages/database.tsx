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
        title="Individual Patient Data"
        description={`COVID-19 individual patient database`}
        urlSlug="database/"
      />

      <Container>
        <PageTitle>Individual Patient Data</PageTitle>

        <PageBody>
          <p>
            If you use this data in any way, <b>please cite:</b>
<br/>
Imran, A., Iqbal, Q., Mikhakhanova, A., Benhenda, M. 
<br/>
COVIND: COVID-19 individual patient database (in preparation) 
<br/>
Available at: www.covind.org 
</p>

<p>

 (more co-authors will be added as data flows in)
</p>

<p>



<iframe width="100%" height="450" src="https://docs.google.com/spreadsheets/d/e/2PACX-1vQ75zoGOKxBxvGp2FbeJyZrHsv51UdxgEBamgSK7EswdfVYS6QPD1J3R_GynwvBh8iL0IOM_1Tv5XIR/pubhtml?widget=true&amp;headers=false"></iframe>


<em>All content on this website is provided for research purposes only. Use for medical guidance at your own risk.</em>

</p>

        </PageBody>
      </Container>
    </Layout>
  );
};

export default TermsPage;
