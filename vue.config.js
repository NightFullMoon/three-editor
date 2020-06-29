module.exports = {
  chainWebpack: (config) => {
    // 开发模式下使用eslint自动格式化
    if (process.env.NODE_ENV !== "production") {
      config.module
        .rule("eslint")
        .use("eslint-loader")
        .loader("eslint-loader")
        .tap((options) => {
          if (options) {
            options.fix = true;
            return options;
          }
        });
    }
  },
};
