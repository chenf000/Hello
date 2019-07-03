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

## 发表评论功能

1. 把文本框做双向数据绑定
2. 为发表按钮绑定一个时间
3. 效验评论内容是否为空, 如果为空, 则 Toast 提示用户
4. 通过vue-resource 发送一个请求, 把评论内容提交各服务器 api/postcomment/:artid
5. 当发表评论ok后, 重新刷新列表, 已查看最新的评论

## 图片分享组件

## 绘制图片列表组件页面结构 并 美化样式

1. 顶部的滑动条
2. 制作底部图片列表

## 制作顶部滑动条的坑

1. 需要借助于 MUI 中的 tab-top-webview-main.html 文件
2. 需要把slider的 mui-fullscreen 去掉
3. 滑动条无法正常滑动, 需要初始化,导入  mui.js, 调用官方文档提供的方法
4. 初始化滑动条的时候, 导入的mui.js, 但是报错, 可能是mui.js中用到了 'caller', 'callee', and 'arguments', 但是, webpack 打包好的bundle.js中, 默认是启用严格模式, 所以, 这两者 发生冲突
解决方法: 禁用webpack的严格模式, 使用插件babel-plugin-transform-remove-strictt-mode, 加上样式 * { touch-action: pan-y; }
5. 刚进入图片分享页面, 不会滑动, 解决方法: 将初始化放在mounted钩子函数中
6. tabbar失效, 类名冲突, 解决犯法:  将tabbar按钮的样式 'mui-tab-item' 重新改一下名字

## 获取图片分类列表 /api/getimgcategory , 实现图片列表的懒加载改造和样式美化

1. 图片列表需要使用 懒加载技术, 我们可以使用 mint-ui 提供的现成的组件 'lazy-load'
2. 根据'lazy-load'的使用该文档
3. 渲染图片列表数据  /api/getimages/:cateid

## 实现点击图片跳转到图片详情页面, 在改造li成router-link的时候, 需要使用tag属性指定要渲染为那种元素

## 实现详情页面的布局和美化, 同时获取数据渲染页面 api/getimageinfo/:imgid 

## 实现图片详情中的 缩略图 功能: api/getthumimages/:imgid

1. 使用插件 vue-preview 这个缩略图插件
2. 获取到所有的图片列表, 然后使用v-for 指令渲染数据
3. 注意: img标签上的class不能去掉
4. 注意: 每个图片数据对象中, 必须有w和h属性

## 绘制商品列表页面基本结构并美化 api/getgoods?pageindex=1

## 尝试在手机上 去进行项目的预览和测试(在package.json文件中的dev脚本中, 添加一个--host指令, 设置ip地址)

## 商品详情页面绘制并美化, 获取数据渲染 /api/goods/getinfo/:id

1. 图文详情页面绘制  api/goods/getdesc/:id
2. 商品评论页面绘制  
