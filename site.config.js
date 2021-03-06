require('dotenv').config({
  path: `.env.${process.env.GATSBY_ACTIVE_ENV || 'next'}`,
});

const path = require('path');

const pkg = require('./package.json');

const requiredKeys = {
  /**
   * Used by `gatsby-plugin-google-analytics`. This value is provided through
   * the `.env.*` file located the root of the project.
   */
  googleAnalyticsTrackingId: process.env.GA_TRACKING_ID,
};

Object.entries(requiredKeys).forEach(([k, v]) => {
  if (typeof v === 'undefined') {
    throw new Error(`${k} not provided.`);
  }
});

module.exports = Object.freeze({
  ...requiredKeys,
  /** Used by Gatsby when creating production build of the website. */
  pathPrefix: process.env.BUILD_PATH_PREFIX,
  /** Number of posts to be shown on the first page of the blog index page. */
  postsPerFirstPage: 6,
  /** Number of posts to be shown on next blog post list pages. */
  postsPerPage: 6,
  /** MailChimp API endpoint */
  mailChimpAPI:
    'https://gmail.us3.list-manage.com/subscribe/post?u=fe25209984fd03f765b2af825&amp;id=71fee7bcba',
  /**
   * Information about the website. Can be accessed by components by calling
   * the `useSiteMetadata` custom React hook.
   */
  siteMetadata: {
    /** The name of the website. */
    title: 'COVIND: COVID-19 individual patient data consortium',
    titleShort: 'COVIND',
    /** Release version of website. */
    version: pkg.version,
    /** Text to be shown in the landing page heading. */
    tag: 'Individual Patient Data Consortium',
    /** The description of the website. */
    description:
      'COVIND is a global registry of COVID-19 individual patient data, and of collective projects exploring them',
    /** The url of the website. */
    siteUrl: process.env.BUILD_SITE_URL,
    logo: path.resolve(__dirname, 'src/images/logo.png'),
    /*Email displayed on static pages */
    contactEmail: 'mostapha@melwy.com',
    /*Email displayed on static pages */
    royEmail: 'mostapha@melwy.com',
    /** Contains the project's social handles. */
    social: {
      /** The website's Facebook username, */
      facebook: '',
      /** The website's Instagram username. */
      instagram: 'Covind',
      /** The website's Twitter username. */
      twitter: '@Covind',
      /** The website's LinkedIn username. */
      linkedin: 'Covind',
      /** The website's Reddit username. */
      reddit: 'Covind',
      /** The website's GitHub username. */
      github: 'Covind',
      /** Slack invite link. */
      slackInvite:
        'https://join.slack.com/t/newworkspace-e1t7616/shared_invite/zt-edehuali-y17HLOGtrchktDYRoV5xkw',
    },
  },
  manifestOptions: {
    /* eslint-disable @typescript-eslint/camelcase */
    name: 'COVIND',
    short_name: 'COVIND',
    start_url: '/projects_list',
    background_color: '#ffffff',
    theme_color: '#ffffff',
    display: 'minimal-ui',
    icon: 'src/images/logo.png',
    /* eslint-enable @typescript-eslint/camelcase */
  },
});
