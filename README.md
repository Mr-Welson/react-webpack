# 

## 框架概述

- 技术选型：react-v16.2.0 + react-router-v4.2.2 + ant-design-v3.3.1 + webpack-v3.10.0
- 数据管理：可选redux、mobx

> 更多版本信息查看 package.json 文件

## 项目启动指令

### 安装

```bash
   npm install 或 yarn install
```

###  运行开发环境

```bash
   npm start 或 yarn start
```

### 输出生产环境文件

```bash
   npm run build 或 yarn run build
```

### 输出生产环境，并查看模块分配

```bash
   yarn run build --report
```

### 运行本地开发服务器

```bash
   npm run server 或 yarn run server
```

### 安装 yarn

> yarn 是用来代替 npm 的 node 包管理工具, 与 npm 有类似的命令，具体安装方式及使用方法查看 [yarn 命令使用](http://blog.csdn.net/mjzhang1993/article/details/70092902)


## 目录结构说明

```
   ├── README.md 
   ├── dist                         // 生产编译后的文件
   │   ├── index.html				// 生产编译后的主页
   │   └── static					// 生产编译后的静态文件
   │       ├── css
   │       │   └── app.ec6e1795a1.css
   │       └── js
   │           ├── app.ef434871b5.bundle.js
   │           ├── runtime.c7cc772ab3.bundle.js
   │           └── vendor.e69a77365d.bundle.js
   ├── docs                         // 项目文档
   ├── public                       // 静态文件，会打包到dist文件夹中
   │   ├── index.html				// 主页模板
   │   └── mock					    // 模拟数据，不会打包到dist中
   ├── src                          // 源码目录
   │   ├── assets                   // 静态资源 图片、音频、视频等
   │   │   ├── css					// 公共样式文件
   │   │   ├── iconfont				// 字体文件
   │   │   ├── img					// 图片文件
   │   │   └── theme				// 主题配置文件   
   │   ├── libs                     // 工具库
   │   ├── locale               	// 国际化语言库
   │   ├── store                    // 数据层
   │   │   ├── index.js				// mobx-store配置文件
   │   │   ├── basic				// 基础模块的store
   │   │   └── project				// 功能模块的store
   │   │	   └── baselibModel		// baselib的store文件
   │   │		   └── baselibModel.js 
   │   ├── view                     // 视图层
   │   │   ├── components           // 公共组件
   │   │   ├── layout               // 布局模块
   │   │   │   ├── index.jsx		// 布局模块代码
   │   │   │   └── index.scss		// 布局模块样式表
   │   │   └── baselib              // 功能模块
   │   │       ├── component		// 模块子组件
   │   │       ├── index.jsx		
   │   │       └── index.scss		
   │   ├── util.js                  // 组件工具库       
   │   └── index.js                 // 入口文件
   ├── webpack                      // webpack 构建工具配置文件夹
   │   ├── build.js                 // 生产环境启动
   │   ├── config.js                // 一些可定制化的用户选项，协助配置 webpack
   │   ├── dev-server.js            // 开发环境启动
   │   ├── utils.js                 // 一些工具文件
   │   ├── webpack.base.config.js   // 基础 webpack 配置文件
   │   ├── webpack.dev.config.js    // 开发环境配置
   │   └── webpack.prod.config.js   // 生产环境配置     
   ├── nginx-template.conf			// ng代理配置模板
   └── package.json
```