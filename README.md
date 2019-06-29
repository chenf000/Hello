## [主流开源协议之间有何异同?] (https://www.zhihu.com/question/19568896)

## 命令行吧修改过后的代码上传

1. git add .
2. git commit -m "提交信息"
3. git push 

## 制作首页APP组件

1. 完成Header 区域, 使用的是 Mint-ui 中的Header组件
2. 制作底部的Tabbar区域, 使用的是MUI的Tabbar.html
    + 在制作购物车小图标时:
    + 先把扩展图标的css样式, 拷贝到项目中
    + 拷贝 扩展字体库ttf文件到项目中
    + 为购物车小图标, 添加如下样式 `mui-icon mui-icon-extra mui-icon-extra-cart`
3. 要在中间区域放置一个 router-view 来展示路由匹配到的组件

## 改造tabbar为router-link

## 设置路由高亮

## 点击tabbar 中的路由连接, 展示对应的路由组件

## 制作首页轮播图

1. 获取数据, 使用vue-resource, 请求地址 http://www.liulongbin.top:3005/api
2. 使用vue-resource的this.$http.get获取数据
3. 获取到的数据, 要保存到 data 中
4. 使用v-for循环渲染 每个item项, 要使用key
