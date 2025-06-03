
export default {
  basePath: 'https://amjad-m0.github.io/devly-landing',
  supportedLocales: {
  "en-US": ""
},
  entryPoints: {
    '': () => import('./main.server.mjs')
  },
};
