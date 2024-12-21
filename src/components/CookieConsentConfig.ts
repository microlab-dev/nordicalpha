import type { CookieConsentConfig } from 'vanilla-cookieconsent';

export const config: CookieConsentConfig = {
  guiOptions: {
    consentModal: {
      layout: 'box inline',
      position: 'bottom left',
    },
    preferencesModal: {
      layout: 'box',
      position: 'right',
      equalWeightButtons: true,
      flipButtons: false,
    },
  },
  categories: {
    necessary: {
      readOnly: true,
    },
    functionality: {},
    analytics: {
      services: {
        ga4: {
          label:
            '<a href="https://marketingplatform.google.com/about/analytics/terms/us/" target="_blank">Google Analytics 4 (dummy)</a>',
          onAccept: () => {
            console.log('ga4 accepted');
            // TODO: load ga4
          },
          onReject: () => {
            console.log('ga4 rejected');
          },
          cookies: [
            {
              name: /^_ga/,
            },
          ],
        },
        another: {
          label: 'Another one (dummy)',
        },
      },
    },
  },
  language: {
    default: 'en',
    autoDetect: 'browser',
    translations: {
      en: {
        consentModal: {
          title: "Hello traveller, it's cookie time!",
          description:
            'We and selected third parties use cookies or similar technologies for technical purposes and, with your consent, for experience, measurement and “marketing (personalised ads)” as specified in the cookie policy. \
            You can freely give, deny, or withdraw your consent at any time by accessing the preferences panel. Denying consent may make related features unavailable. Use the “Accept all” button to consent. \
            Use the “Reject all” button or close this notice to continue without accepting..',
          acceptAllBtn: 'Accept all',
          acceptNecessaryBtn: 'Reject all',
          showPreferencesBtn: 'Manage preferences',
          footer:
            '<a href="privacy">Privacy Policy</a>\n<a href="terms">Terms and conditions</a>',
        },
        preferencesModal: {
          title: 'Consent Preferences Center',
          acceptAllBtn: 'Accept all',
          acceptNecessaryBtn: 'Reject all',
          savePreferencesBtn: 'Save preferences',
          closeIconLabel: 'Close modal',
          serviceCounterLabel: 'Service|Services',
          sections: [
            {
              title: 'Cookie Usage',
              description:
                'In this panel you can express some preferences related to the processing of your personal information.\
You may review and change expressed choices at any time by resurfacing this panel via the provided link.\
To deny your consent to the specific processing activities described below, switch the toggles to off or use the “Reject all” button and confirm you want to save your choices.',
            },
            {
              title:
                'Strictly Necessary Cookies <span class="pm__badge">Always Enabled</span>',
              description:
                'These trackers are used for activities that are strictly necessary to operate or deliver the service you requested from us and, therefore, do not require you to consent.',
              linkedCategory: 'necessary',
            },
            {
              title: 'Functionality Cookies',
              description:
                'These trackers help us to improve the quality of your user experience and enable interactions with external content, networks and platforms.',
              linkedCategory: 'functionality',
            },
            {
              title: 'Analytics Cookies',
              description:
                'These trackers help us to measure traffic and analyse your behaviour to improve our service.',
              linkedCategory: 'analytics',
            },
            {
              title: 'More information',
              description:
                'The options provided in this section allow you to customise your consent preferences for any tracking technology used for the purposes described below. \
                To learn more about how these trackers help us and how they work, refer to the <a class="cc__link" href="cookie-policy">cookie policy</a>. \
                Please be aware that denying consent for a particular purpose may make related features unavailable.',
            },
          ],
        },
      },
    },
  },
};
