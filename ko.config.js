const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const serverConfig = require('./server.config');

module.exports = (context) => {
  const { webpack } = context;
  return {
    server: {
      "host": serverConfig.host,
      "port": serverConfig.port
    },
    proxy: [{
      "path": '/api/v1/**',
      "target": 'http://172.16.8.194:8891',
      "changeOrigin": true
    }],
    dll:[],
    webpack: {
      entry: {
        index:path.resolve(__dirname,'src/index.tsx')
      },
      output: {},
      module: {
        rules: []
      },
      plugins: [
        new webpack.DefinePlugin({__PRODUCTION: JSON.stringify(false)}),
        new CopyWebpackPlugin([
          {from: path.resolve(__dirname,'public/config'),to:'./conf'},
          {from: path.resolve(__dirname,'public/mock'),to:'./mock'},
          {from: path.resolve(__dirname,'public/assets/libs'),to:'./libs'},
          {from: path.resolve(__dirname,'public/assets/images'),to:'./imgs'}
        ])
      ],
      externals :{
        'FRONT_CONF': 'FRONT_CONF'
      }
    }
  };
};