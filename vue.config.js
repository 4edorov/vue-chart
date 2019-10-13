module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? "/vue-chart/" : "/",
  configureWebpack: {
    module: {
      rules: [
        {
          test: /\.less$/,
          loader: "less-loader"
        }
      ]
    }
  }
};
