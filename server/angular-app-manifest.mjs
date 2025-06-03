
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'https://amjad-m0.github.io/devly-landing',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/devly-landing"
  },
  {
    "renderMode": 2,
    "route": "/devly-landing/about"
  },
  {
    "renderMode": 2,
    "route": "/devly-landing/services"
  },
  {
    "renderMode": 2,
    "route": "/devly-landing/contact"
  },
  {
    "renderMode": 2,
    "route": "/devly-landing/footer"
  },
  {
    "renderMode": 2,
    "route": "/devly-landing/testmonials"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 2179, hash: '11b227828a614f834da8f7512719dcdc259c635e42a3691f868db893afab58a5', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1048, hash: '4da90f6e1c4c1a82240a564db7162d111982dfa4188b0b17af81e675145a5b72', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 22884, hash: '5fba53e85e8ad94b918d5ea26e0927fe4dc1a72e083b392ee5f0f1d07a94e4df', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'about/index.html': {size: 22884, hash: '5fba53e85e8ad94b918d5ea26e0927fe4dc1a72e083b392ee5f0f1d07a94e4df', text: () => import('./assets-chunks/about_index_html.mjs').then(m => m.default)},
    'testmonials/index.html': {size: 22884, hash: '5fba53e85e8ad94b918d5ea26e0927fe4dc1a72e083b392ee5f0f1d07a94e4df', text: () => import('./assets-chunks/testmonials_index_html.mjs').then(m => m.default)},
    'footer/index.html': {size: 22884, hash: '5fba53e85e8ad94b918d5ea26e0927fe4dc1a72e083b392ee5f0f1d07a94e4df', text: () => import('./assets-chunks/footer_index_html.mjs').then(m => m.default)},
    'services/index.html': {size: 22884, hash: '5fba53e85e8ad94b918d5ea26e0927fe4dc1a72e083b392ee5f0f1d07a94e4df', text: () => import('./assets-chunks/services_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 22884, hash: '5fba53e85e8ad94b918d5ea26e0927fe4dc1a72e083b392ee5f0f1d07a94e4df', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'styles-SNFA6BMQ.css': {size: 14395, hash: 'CLUA8w8oFR4', text: () => import('./assets-chunks/styles-SNFA6BMQ_css.mjs').then(m => m.default)}
  },
};
