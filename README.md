
<p><a href="https://jekyll-themes.com">
<img src="https://img.shields.io/badge/featured%20on-JT-red.svg" height="20" alt="Jekyll Themes Shield"/></a></p>
<p><a href="http://jekyllthemes.org">Jekyll Themes</a></p>
<p><a href="http://www.qingbloger.com">氢客</a></p>
<p></p>
# Copyright Notice
JOYTOU(http://joytou.net) is a BootStrap blog template developed by Joytou Wu. You can create your blog by forking or copying this project. JOYTOU works fine with Git. You can use Coding、GitHub、BitBucket、GitLab as your Git repository. JOYTOU is free and you can change it to suit your theme.

# Content

| Directory | 目录 | 目錄 | 
|:----------:|:----------:|:----------:|
| [English](#user-content-en) | [简体中文](#user-content-cn)| [繁體中文](#user-content-tw) |
| [Introduction](#user-content-introduction) | [概述](#user-content-概述) | [概述](#user-content-概述tw) |
| [Features](#user-content-features) | [功能特色](#user-content-功能特色) | [功能特色](#user-content-功能特色tw)|
| [Native Server](#user-content-native-server) | [服务版本](#user-content-服务版本) | [服務版本](#user-content-服務版本) |
| [File directories](Mainfest.md) | [文件目录](Mainfest.md) | [文件目錄](Mainfest.md) |
| [Configurations](#user-content-configurations) | [配置](#user-content-配置) | [配置](#user-content-配置tw) |
| [Writting article](#user-content-writting-article) | [写文章](#user-content-写文章) | [寫文章](#user-content-寫文章) |
| [License](#user-content-license) | [许可协议](#user-content-许可协议) | [許可協議](#user-content-許可協議)|

-------


# Framework

```
.
├── 404.html
├── BingSiteAuth.xml
├── CNAME
├── LICENSE
├── Mainfest.md
├── README.md
├── _config.yml
├── _data
│   ├── configuration.yml
│   ├── lang.yml
│   ├── language
│   │   ├── cn.yml
│   │   ├── en.yml
│   │   └── tw.yml
│   ├── lines.yml
│   ├── links.yml
│   └── metas.yml
├── _includes
│   ├── category.html
│   ├── comment.html
│   ├── foot.html
│   ├── friendlinks.html
│   ├── head.html
│   ├── header.html
│   ├── masthead.html
│   ├── post_item.html
│   ├── post_pagination.html
│   ├── post_share.html
│   ├── search.html
│   └── select_language.html
├── _layouts
│   ├── dashboard.html
│   ├── default.html
│   ├── postcn.html
│   ├── posten.html
│   └── posttw.html
├── _posts
│   ├── 1997-06-08-another-for-testing-the-archive-cn.md
│   ├── 1997-06-08-another-for-testing-the-archive-en.md
│   ├── 1997-06-08-another-for-testing-the-archive-tw.md
│   ├── 2015-04-05-test-article-cn.md
│   ├── 2015-04-05-test-article-en.md
│   ├── 2015-04-05-test-article-tw.md
│   ├── 2015-06-08-for-testing-the-archive-cn.md
│   ├── 2015-06-08-for-testing-the-archive-en.md
│   ├── 2015-06-08-for-testing-the-archive-tw.md
│   ├── 2017-08-04-LOG-cn.md
│   ├── 2017-08-04-LOG-en.md
│   ├── 2017-08-04-LOG-tw.md
│   ├── 2017-08-07-multiple-languages-cn.md
│   ├── 2017-08-07-multiple-languages-en.md
│   ├── 2017-08-07-multiple-languages-tw.md
│   ├── 2017-12-06-wechat-public-account-cn.md
│   ├── 2017-12-06-wechat-public-account-en.md
│   ├── 2017-12-06-wechat-public-account-tw.md
│   ├── 2018-08-12-Introducing-(Unofficial)-GitHub-Profile-cn.md
│   ├── 2018-08-12-Introducing-(Unofficial)-GitHub-Profile-en.md
│   └── 2018-08-12-Introducing-(Unofficial)-GitHub-Profile-tw.md
├── about
│   ├── index.en.html
│   ├── index.html
│   └── index.tw.html
├── app
│   ├── category.json
│   ├── post.json
│   └── tag.json
├── archives
│   ├── index.en.html
│   ├── index.html
│   └── index.tw.html
├── assets
│   ├── 1534058755587.jpg
│   ├── ScreenshortDemo
│   │   ├── cover.base64
│   │   ├── cover.jpg
│   │   ├── mo_cn.png
│   │   ├── mo_cn_ac91a0843a8dd1a87003b3431abf3578.png
│   │   ├── mo_en.png
│   │   ├── mo_en_423f9c5f305055de488c7ac325f20874.png
│   │   ├── pc_cn.png
│   │   ├── pc_cn_3965515e02c432f4b076dfa5b867952a.png
│   │   ├── pc_en.png
│   │   └── pc_en_d6e97bac984ae939a698ab9876c40110.png
│   ├── css
│   │   ├── bootstrap-theme.min.css
│   │   ├── bootstrap-theme.min.css.map
│   │   ├── bootstrap.min.css
│   │   ├── bootstrap.min.css.map
│   │   ├── cb-search.css
│   │   ├── dashboard.css
│   │   ├── import.css
│   │   ├── pictonic.css
│   │   └── styles.css
│   ├── favicon-128.ico
│   ├── favicon-16.ico
│   ├── favicon-32.ico
│   ├── favicon-48.ico
│   ├── favicon-64.ico
│   ├── font
│   │   ├── pictonic.eot
│   │   ├── pictonic.svg
│   │   ├── pictonic.svgz
│   │   ├── pictonic.ttf
│   │   └── pictonic.woff
│   ├── fonts
│   │   ├── glyphicons-halflings-regular.eot
│   │   ├── glyphicons-halflings-regular.svg
│   │   ├── glyphicons-halflings-regular.ttf
│   │   ├── glyphicons-halflings-regular.woff
│   │   └── glyphicons-halflings-regular.woff2
│   ├── js
│   │   ├── bootstrap.min.js
│   │   ├── bootstrap3-typeahead.min.js
│   │   ├── docs.min.js
│   │   ├── jquery-3.2.1.min.js
│   │   ├── languages.js
│   │   ├── myfunction.js
│   │   ├── npm.js
│   │   └── pictonic.min.js
│   ├── logo.png
│   ├── logo_112px.png
│   ├── logo_b6e8782d08efd809c0b5076a3d24a5eb.png
│   ├── mmqrcode.png
│   ├── qqqrcode.jpg
│   ├── qrcode_for_gh_fdcd74bd5633_1280.jpg
│   └── qrcodejoytoublog.jpg
├── baidu-verify-F5956EE664.txt
├── categories
│   ├── index.en.html
│   ├── index.html
│   └── index.tw.html
├── cn
│   ├── index.html
│   └── test.html
├── contact
│   ├── index.en.html
│   ├── index.html
│   └── index.tw.html
├── dashboard
│   ├── index.en.html
│   ├── index.html
│   └── index.tw.html
├── downloads
│   ├── index.en.html
│   ├── index.html
│   └── index.tw.html
├── en
│   └── index.html
├── feed.xml
├── hello51la85xb5y8e44uk4hs2.html
├── index.html
├── index1.html
├── robots.txt
├── search.json
├── sitemap.xml
├── sitemap_google.xml
├── tags
│   ├── index.en.html
│   ├── index.html
│   └── index.tw.html
├── tw
│   └── index.html
└── yandex_b0fa1bb60ade6707.html

22 directories, 141 files
```

# en

## Introduction
JOYTOU(http://joytou.net) is a BootStrap blog template developed by Joytou Wu. You can create your blog by forking or copying this project. JOYTOU works fine with Git. You can use Coding、GitHub、BitBucket、GitLab as your Git repository. JOYTOU is free and you can change it to suit your theme. But no matter what, you must keep the copyright.

## Features
1. BootStrap style
2. Blog basic functions
3. Top navigation bar
4. Automatically generate Sitemap.xml
5. View the article by date, category, tag, etc.
6. The important articles can be placed at the top
7. Article sharing
8. Multi-language
9. Article comment
10. Global search
11. JQuery responsive design

## Native Server
Clone from coding.net:

- Clone with SSH:
```
git clone git@git.coding.net:joytou/JOYTOU.git
```

- Clone with HTTPS:
```
git clone https://git.coding.net/joytou/JOYTOU.git
```

## Configurations
in _config.yml:

| Key | Value | Annotation |
|:----------:|:----------:|:----------|
|      email      |      1540294142@qq.com      |       Your e-mail address     |
|      author      |      Joytou Wu      |      The article author's name      |
|       url     |     http://joytou.net       |      Your site address, and do not add  `/`  in the end      |
|      git_username      |      joytou      |       Your git account name     |
|      repo      |      JOYTOU      |      Your repository name     |
|      owner_name      |      joytou      |      The site owner name      |
|     description       |      ---      |     Your site description       |
|      keywords      |      ---      |      Your site keywords, and it must listted as array      |
> Please refer to the official website for other variables.

in each /_data/(languages code).yml:

| Key | Value | Annotation |
|:----------:|:----------:|:----------|
| sitename | JOYTOU | Your site name |
| sitesubname | An amateur programmer who loves to sit around and refuse to rest! | Your site subname |
| sitedescription | This blog template build by builder from style | Your site descriphtion(please keeping the string: 'builder', 'style') |
| siteabout | JOYTOU was done by me (Joytou). If you like this template, you can subsidize me a little. | Writting something about your site or yourself(yourselves) |

## Writting article
post format:
```
--- 
layout: post 

title:  test       
#article title 

description: Summary Content
#Summary content. 

date:   2015-04-05 08:00:00 +0800     
#publish date 

nav: post     

stickie: true         
#Make the article stick to the top if true 

category: official         
#the category for the article 

tags: [log, bootstrap, joytou]     
#the tags for the article, it should be a array 
--- 
* content 
{:toc} 

Article mainly content
#Writting the article here. 
```


## License
By using the Service, you [agree to comply with all the terms of this Agreement](https://github.com/joytou/joytou.github.io/raw/master/LICENSE).
 
-------

# cn

## 概述
JOYTOU(http://joytou.net) 是一款由Joytou Wu基于Bootstrap开发的博客模板。您可以通过fork或者复制本项目进行创建您的博客。JOYTOU集成了Git代码版本控制，用户可以选择 Coding、GitHub、BitBucket、GitLab 等任意的代码仓库。JOYTOU是免费的，您可以更改以适应您的主题。但不管如何您务必保留相关版权。

## 功能特色
1. BootStrap样式
2. 博客基本功能
3. 顶部导航栏
4. 自动Sitemap.xml
5. 通过日期、类别、标签等分类文章
6. 重要文章可置顶
7. 文章分享
8. 多语言
9. 文章评论
10. 全局搜索
11. JQuery响应式设计

## 服务版本
从Coding克隆项目：

- 用SSH克隆：
```
git clone git@git.coding.net:joytou/JOYTOU.git
```

- 用HTTPS克隆：
```
git clone https://git.coding.net/joytou/JOYTOU.git
```

## 配置
_config.yml:

| 键 | 值 | 备注 |
|:----------:|:----------:|:----------|
|      email      |      1540294142@qq.com      |       您的电子邮件地址     |
|      author      |      Joytou Wu      |      文章作者名称      |
|       url     |     http://joytou.net       |      您的网址，末尾不能加上 `/`       |
|      git_username      |      joytou      |       您的Git用户名     |
|      repo      |      JOYTOU      |      您的repository名字     |
|      owner_name      |      joytou      |      网站所有者名字      |
|     description       |      ---      |     网站的描述       |
|      keywords      |      ---      |      网站的关键词，必须以数组形式列出      |
> 其它变量请参考官网的介绍。

各个 /_data/(语言代码).yml 文件:

| 键 | 值 | 备注 |
|:----------:|:----------:|:----------|
| sitename | JOYTOU | 您的网站名称 |
| sitesubname | 一个热爱折腾、不肯休息的业余程序员！ | 您的网站副名称 |
| sitedescription | 此博客模板由builder通过style创建 | 您的网站描述(请保留字符串：'builder'、'style') |
| siteabout | JOYTOU是由我(Joytou)单独完成的。如果您喜欢此模板，可以对此模板小额资助。 | 一些关于您的网站或者您(们)的信息 |

## 写文章
文章格式：
```
--- 
layout: post 

title:  test       
#文章标题 

description: Summary Content
#摘要内容 

date:   2015-04-05 08:00:00 +0800     
#发布日期 

nav: post     

stickie: true         
#如果为true则文章置顶 

category: official         
#文章的分类 

tags: [log, bootstrap, joytou]     
#文章的标签，必须是数组 
--- 
* content 
{:toc} 

Article mainly content
#在这儿写文章
```

## 许可协议
一旦您使用本服务，即表示[您同意遵循本协议的所有约定](https://github.com/joytou/joytou.github.io/raw/master/LICENSE)。

-------

# tw 

## 概述tw 
JOYTOU(http://joytou.net) 是一款由Joytou Wu基於Bootstrap開發的博客模板。您可以通過fork或者復製本項目進行創建您的博客。 JOYTOU集成了Git代碼版本控制，用戶可以選擇 Coding、GitHub、BitBucket、GitLab 等任意的代碼倉庫。 JOYTOU是免費的，您可以更改以適應您的主題。但不管如何您務必保留相關版權。 

## 功能特色tw 
1. BootStrap樣式 
2. 博客基本功能 
3. 頂部導航欄 
4. 自動Sitemap.xml 
5. 通過日期、類別、標籤等分類文章 
6. 重要文章可置頂 
7. 文章分享 
8. 多語言 
9. 文章評論 
10. 全局搜索 
11. JQuery響應式設計 

## 服務版本 
從Coding克隆項目： 

- 用SSH克隆： 
``` git clone git@git.coding.net:joytou/JOYTOU.git ``` 

- 用HTTPS克隆： 
``` git clone https://git.coding.net/joytou/JOYTOU.git ``` 

## 配置tw 
_config.yml: 

| 鍵 | 值 | 備註 | 
|:----------:|:----------:|:----------| 
| email | 1540294142@qq.com | 您的電子郵件地址 | 
| author | Joytou Wu | 文章作者名稱 | 
| url | http://joytou.net | 您的網址，末尾不能加上 `/` | 
| git_username | joytou | 您的Git用戶名 | 
| repo | JOYTOU | 您的repository名字 | 
| owner_name | joytou | 網站所有者名字 | 
| description | --- | 網站的描述 | 
| keywords | --- | 網站的關鍵詞，必須以數組形式列出 | 
> 其它變量請參考官網的介紹。 

各個 /_data/(語言代碼).yml 文件:

| 鍵 | 值 | 備註 |
|:----------:|:----------:|:----------|
| sitename | JOYTOU | 您的網站名稱 |
| sitesubname | 一個熱愛折騰、不肯休息的業餘程序員！ | 您的網站副名稱 |
| sitedescription | 此博客模板由builder通過style創建 | 您的網站描述(請保留字符串：'builder'、'style') |
| siteabout | JOYTOU是由我(Joytou)單獨完成的。如果您喜歡此模板，可以對此模板小額資助。 | 一些關於您的網站或者您(們)的信息 |
## 寫文章
post format:
```
--- 
layout: post 

title:  test       
#文章標題

description: Summary Content
#摘要內容

date:   2015-04-05 08:00:00 +0800     
#發佈日期

nav: post     

stickie: true         
#如果為true則文章置頂

category: official         
#文章的分類

tags: [log, bootstrap, joytou]     
#文章的標籤，必須是數組
--- 
* content 
{:toc} 

Article mainly content
#在這兒寫文章
```

## 許可協議 
一旦您使用本服務，即表示[您同意遵循本協議的所有約定](https://github.com/joytou/joytou.github.io/raw/master/LICENSE)。
