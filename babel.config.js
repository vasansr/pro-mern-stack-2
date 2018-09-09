const presets = [
  ["@babel/preset-env", {
    targets: {
      edge: "15",
      ie: "11",
      firefox: "50",
      chrome: "49",
      safari: "10",
    },
  }],
  "@babel/preset-react",
];

module.exports = { presets };
