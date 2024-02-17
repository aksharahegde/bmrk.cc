const isProduction = process.env.NODE_ENV === 'production';

const domain = 'bmrk.cc';
const local = 'localhost:3000';
const home = isProduction ? domain : local;
const protocol = isProduction ? 'https://' : 'http://';

export const urls = {
  homeWithoutProtocol: home,
  home: `${protocol}${home}`,
  authCallback: `${protocol}app.${home}/auth/callback/`,
  account: `${protocol}app.${home}/account`,
  intro: `${protocol}app.${home}/intro`,
  app: `${protocol}app.${home}`,
  api: `${protocol}${home}`,
  twitter: 'https://twitter.com/gokul_i',
  github: 'https://github.com/gokulkrishh/bmrk.cc',
  extensions: {
    chrome:
      'https://chromewebstore.google.com/detail/bookmark-it/fgnmdiklfcddmhmmmppepijecbljfjbm?utm_source=bmrk.cc',
  },
};

export const plans = {
  free: {
    type: 'free',
    name: 'Free',
    limit: {
      bookmarks: 25,
      tags: 25,
      favorites: 25,
    },
  },
  pro: {
    type: 'pro',
    name: 'Pro',
    limit: {
      bookmarks: 250,
      tags: 250,
      favorites: 250,
    },
  },
} as {
  [key: string]: {
    type: string;
    name: string;
    limit: {
      bookmarks: number;
      tags: number;
      favorites: number;
    };
  };
};
