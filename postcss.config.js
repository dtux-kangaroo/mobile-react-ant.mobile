module.exports = {
  plugins: [
    require('autoprefixer')({
      browsers: [
        "iOS >= 8" ,
        "Android >= 4"
      ]
    }),
    // require('postcss-adaptive')({
    //   remUnit: 75, 
    //   autoRem: true
    // })
  ]
}