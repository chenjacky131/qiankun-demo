# qiankun-demo

##### 1.安装依赖
yarn add

##### 2.安装子包的依赖
yarn examples:install

##### 3.启动项目
yarn examples:start
````
    "examples:install": "npm-run-all --serial install:*", --serial顺序启动
    "examples:start": "npm-run-all --parallel start:*", --parallel并行启动
    "install:main": "cd main && yarn",
    "install:app1": "cd app1 && yarn",
    "install:app2": "cd app2 && yarn",
    "start:main": "cd main && yarn start",
    "start:app1": "cd app1 && yarn start",
    "start:app2": "cd app2 && yarn start"
````