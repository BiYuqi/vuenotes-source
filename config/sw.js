const path = require('path')
const dist = './dist'

module.exports = {
  workbox: {
    cacheId: 'loadingmore-',
    globPatterns: ['**/*.{html, js, css}'],
    swDest: './service-worker.js',
    clientsClaim: true,
    skipWaiting: true,
  },
  register: {
    version: 'biyuqi',
    filePath: path.resolve(__dirname, '../src/sw-worker.js'),
    prefix: '.',
    output: 'sw-worker.js'
  }
}
