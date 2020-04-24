module.exports = {
  plugins: [
    require('postcss-prefixer')({
      prefix: 'ming-',  // 为所有css的class类名添加前缀
    })
  ]
};
