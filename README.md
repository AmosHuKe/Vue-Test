﻿# Vue-Test

## 概述

```
非常基础的 Vue2.0 练习

Node.js + Vue2.0 + Ant-Design + Vue-Router + Vuex + Axios + Vue-Cookies + Mock + Less
```

## 启动项目（Nodejs 6.0+）
```
# 克隆项目 
git clone https://github.com/AmosHuKe/Vue-Test.git  
  
# 进入目录  
cd Vue-Test
  
# 安装依赖  
npm install   
  
# 启动项目 localhost:9099 
npm run serve 

```

```
# 项目打包  /dist
npm run build
```

## Src目录概述
```
├── App.vue  // APP入口文件
├── main.js  // 项目配置文件 
├── components  // 组件文件夹  
│   └── Common  // 共用组件文件夹
│   │   ├── Common.js  // 共用组件
│   └── Layout  // 头部及侧边栏（布局）组件
│   │   ├── Aside  // 侧边栏组件
│   |   |   ├──MainAside.vue
│   │   ├── Header  // 头部组件
│   |   |   ├──MainHeader.vue
│   │   ├── Footer  // 底部组件
│   |   |   ├──MainFooter.vue
│   └── Pages  // 页面组件文件夹  
│   │   ├── home（例）  // 模块划分文件夹  
│   |   |   ├── css // 样式  
│   │   ├── user（例）  // 模块划分文件夹  
│   |   |   ├── css // 样式  
│   └── MainIndex.vue  // 项目布局组件  
├── plugins  // 项目相关配置及插件文件夹 
│   └── http  // 网络请求相关配置
│   └── api  // 接口api
├── router  // 路由配置文件夹  
│   └── index.js  // 路由配置文件  
├── store  // 状态控制文件夹  
│   └── index.js  // 状态控制文件  
│   |   ├── module // 状态控制module  
├── style  // scss 样式存放目录
├── lib  // 第三方插件/组件
├── mock  // 模拟请求数据（json）
```

© AmosHuKe. All Rights Reserved.