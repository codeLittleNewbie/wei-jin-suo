# wei-jin-suo
use bootstrap build wei-jin-suo demo..

## 1.搭建Bootstrap页面骨架及项目结构

```
├ /wei-jin-suo/ ················· 我们所在目录
└┬ /js/ ························· 我们自己的js文件
 ├ /css/ ························ 我们自己的css文件
 ├ /img/ ························ 使用到的图片文件
 ├ /font/ ······················· 使用到的字体文件
 ├ /lib/ ························ 从第三方下载回来的库[只用不改]
 ├ /favicon/ ···················· 网站图标
 └ /index.html/ ················· 入口文件
```

### 1.1.预定编码规范
#### 1.1.1.HTML约定
- 在head中引入必要的CSS文件,优先引用第三方的CSS文件,方便我们自己的样式覆盖
- 在body中引入必要的JS文件,优先引用第三方的JS文件,注意JS文件之间的依赖关系,比如`bootstrap`需要依赖`jQuery`,此时需要先引用`jQuery`,再应用`bootstrap`

##### 1.1.2.CSS约定
- 除了公共级别样式,其余样式全部添加`模块前缀`
	- 比如:当前处于`banner`模块,给这个模块最外层添加一个盒子,设置一个`id`或者`class`,所有的子元素都需要通过这个`id`或者`class`开始搜寻
- 尽量使用直接子代选择器,少用间接子代选择器,避免`错杀`

### 1.2.HTML文档结构

```html
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>我是页面标题</title>
</head>
<body>

</body>
</html>
```
### 1.3.Viewport设置

```html
<meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0">
```
> 在html中插入视口的快捷方式 __meta:vp__











```
								   ---------------------
									-by codeLitterNewBie
											- 15.7.21 (1)
```