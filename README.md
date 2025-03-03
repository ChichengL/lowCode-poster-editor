

# 低代码的海报编辑器

## 前期工作

需求分析
- 模版
	- 模版列表
	- 使用模版创建
- 用户
	- 获取验证码进行登录
	- 手机登录
	- 获取用户信息
- 作品
	- 创建
	- 保存
	- 发布
	- 获取作品列表以及信息
	- 分享到H5
- 渠道
	- 获取渠道
	- 创建渠道
	- 删除渠道


项目总体感知
前端：
- 编辑器(核心)
- 其他页面
后端：
- RESTful API
- H5页面SSR
组件库
![image](https://files.catbox.moe/rm0g0i.png)


海报的组成：
- 背景，图片或者纯色
- 元素
	- 由各种不同的元素组成
	- 位置(props)
	- 展示(props)
可能的数据结构
```json
{
	"page": {
		"title": "about us",
		"props": {
			"backgroundImage": "",
			"backgroundColor": "",
			"backgroundPosition": ""
		}
	},
	"components": [
		{
			"name": "header",
			//因为可能存在多个相同的组件，因此需要id来进行区分
			"id": 1,
			"props": {
				"left": "10px",
				"top": "10px",
				"text": "Welcome to our website",
				"fontSize": "24px",
				"fontFamily": ""
			}
		}
	]
}

```

数据流转关系
![流转关系](https://files.catbox.moe/rm0g0i.png)


需求设置
https://imooc-lego.yuque.com/imooc-lego/zlz87z

难点分析：
- 怎样实现组件，多端统一，跨项目使用
	- 抽象为组件库，组件库的编码、单测、打包、发布npm、CI/CD——自动发布
- 组件的可扩展性
- 编辑器的整体操作
- 增加和删除元素
- 元素属性的修改如何渲染
- 属性渲染为表单，图片等
- 增加交互——拖动、快捷键、右键菜单（插件化）