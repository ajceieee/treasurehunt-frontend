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
    themeColor: "#003044",
    msTileColor: "#003044",
    name: "Treasure Hunt - QuaRunTime 2.0",
    iconPaths: {
      msTileImage: "./public/icon.png",
    },
    manifestOptions: {
      background_color: "#003044",
    },
  },
};
