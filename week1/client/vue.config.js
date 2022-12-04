// const { defineConfig } = require("@vue/cli-service");
module.exports = {
  runtimeCompiler: true,
  configureWebpack: {
    devServer: {
      proxy: {
        "/api": {
          target: 
            "https://638d20c61c52d87459600b90--soft-cendol-429c0f.netlify.app",
        },
      },
    },
  },
};
