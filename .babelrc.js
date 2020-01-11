module.exports = {
  presets: [
    "@babel/preset-env",
    [
      "@babel/preset-react",
      {
        development: process.env.NODE_ENV === "development",
      },
    ],
  ],
  plugins: [
    ["@babel/plugin-proposal-decorators", { legacy: true }],
    "@babel/plugin-proposal-class-properties",
    "@babel/plugin-proposal-async-generator-functions",
    "react-hot-loader/babel",
    ["import", {
      "libraryName": "antd",
      "libraryDirectory": "es",
      "style": "css" // `style: true` 会加载 less 文件
    }],
    
  ]
};