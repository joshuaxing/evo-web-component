import { defineConfig } from 'dumi';

export default defineConfig({
  title: 'evo-web-component',
  favicon:
    'https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png',
  logo: 'https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png',
  outputPath: 'docs-dist',
  mode: 'site',
  lessLoader: {
    modifyVars: {
      'primary-color': '#ed6c00',
      'link-color': '#ed6c00',
      javascriptEnabled: true
    }
  },
  extraBabelPlugins: [
    [
      'babel-plugin-import',
      {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: true,
      },
    ],
  ],
  // apiParser: {
  //   // 自定义属性过滤配置，也可以是一个函数，用法参考：https://github.com/styleguidist/react-docgen-typescript/#propfilter
  //   propFilter: {
  //     // 是否忽略从 node_modules 继承的属性，默认值为 false
  //     skipNodeModules: true,
  //   },
  // },
  // more config: https://d.umijs.org/config
});
