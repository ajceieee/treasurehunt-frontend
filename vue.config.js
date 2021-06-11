module.exports = {
  devServer: {
    host: "0.0.0.0",
    https: false,
    port: 8080,
    public: "http://0.0.0.0:8080",
  },
};

module.exports = {
  // ...other vue-cli plugin options...
  pwa: {
    themeColor: "#f2f8fa",
    msTileColor: "#f2f8fa",
    name: "Treasure Hunt - QuaRunTime 2.0",
    iconPaths: {
      msTileImage: "./public/icon.png",
    },
  },
};
