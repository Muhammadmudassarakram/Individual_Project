const env = require('./env-config.js');   //just babel conf

module.exports = {
  presets: ['next/babel'],
  plugins: [['transform-define', env]]
}
