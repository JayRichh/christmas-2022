// const { defineConfig } = require("@vue/cli-service");
module.exports = {
  runtimeCompiler: true,
  configureWebpack: {
    devServer: {
      proxy: {
        "/api": {
          target: "elf-gp9m-1j4cyf3jf-jayrichh.vercel.app",
        },
      },
    },
  },
};
