require('@babel/register')({
  presets: ['@babel/preset-env'],
  plugins: [
    '@babel/plugin-transform-runtime',
    ['module-resolver', {
      root: ['./'],
      alias: {
        '@': './'
      }
    }]
  ]
});

module.exports = require('./server.js');