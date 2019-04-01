# Vue-Test

## 简介

```
非常基础的 Vue2.0 练习
Node.js + Element-Ui + Vue2.0 + Vue-Router 
```

## 启动项目
```
# 克隆项目 
git clone git@github.com:AmosHuKe/Vue-Test.git  
  
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

## 目录
```
├── App.vue  // APP入口文件
├── main.js  // 项目配置文件 
├── components  // 组件文件夹  
│   └── Common  // 共用组件文件夹
│   │   ├── Common.js  // 共用组件
│   └── Frame  // 头部及侧边栏组件
│   │   ├── Aside  // 侧边栏组件
│   |   |   ├──MainAside.vue
│   │   ├── Header  // 头部组件
│   |   |   ├──MainHeader.vue
│   │   ├── Footer  // 底部组件
│   |   |   ├──MainFooter.vue
│   └── Pages  // 页面组件文件夹  
│   │   ├── home（例）  // 模块划分文件夹  
│   │   ├── user（例）  // 模块划分文件夹  
│   └── MainIndex.vue  // 项目主入口文件  
├── plugins  // 项目相关配置文件夹 
├── router  // 路由配置文件夹  
│   └── index.js  // 路由配置文件  
├── style  // scss 样式存放目录（待定，选用less或scss）   
```

