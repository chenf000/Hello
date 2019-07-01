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

## 改造 九宫格 区域的样式

## 改造 新闻资讯 路由链接

## 新闻资讯 页面 制作

1. 绘制界面, 使用mui中的media-list
2. 使用vue-resource获取数据 /api/getnewslist
3. 渲染真实 数据

## 实现 新闻资讯链表 点击跳转到新闻详情

1. 把列表中的每一项改造为 router-link, 同时, 在跳转的时候应该提供唯一的ID标识符
2. 创建新闻详情组件页面 NewsInfo.vue
3. 在 路由模块中, 将新闻详情的路由地址 和 组件页面对应起来

## 实现新闻详情页的渲染

1. 发送ajax请求  /api/getnew/:newid

## 单独封装一个 comment.vue 评论子组件

1. 县创建一个单独的 comment.vue 组件模板
2. 在需要使用comment.vue 的地方手动导入comment组件
3. 在父组件中, 使用'components'属性, 将comment注册为自己的子组件
4. 以 标签形式在页面中引用

## 获取所有的评论数据, 显示到页面中 /api/getcomments/:artid?pageindex=1

## 实现点击加载更多评论的功能

1. 为按钮绑定事件, 请求下一页数据
2. 点击加载更多, 让pageIndex++, 然后重新吊桶this.getCommnets() 方法从新获取最新一页数据
3. 为了防止新数据覆盖老数据, 我们在获得新数据的时候, 应该让老数据调用数组的 concat 方法, 拼接上新数组
