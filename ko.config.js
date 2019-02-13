const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = (context) => {
  const { webpack } = context;
  return {
    "server": {
      "host": "127.0.0.1",
      "port": 8989
    },
    "proxy": [{
      "path": '/log/api/v2/**',
      "target": 'http://log.dev.dtstack.net:81',
      "changeOrigin": true
    }],
    webpack: {
      entry: {},
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
      resolve: {
        alias: { 
          assets: path.resolve(__dirname, 'public/assets'),
          components: path.resolve(__dirname, 'src/components/'),
          pages: path.resolve(__dirname, 'src/pages/'),
          utils: path.resolve(__dirname, 'src/utils/'),
          constants: path.resolve(__dirname, 'src/constants/'),
          layout: path.resolve(__dirname, 'src/layout/')
        }
      },
      externals :{
        'FRONT_CONF': 'FRONT_CONF'
      }
    }
  };
};