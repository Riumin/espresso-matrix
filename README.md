<<<<<<< HEAD
<<<<<<< HEAD
##[点我查看中文说明](https://github.com/dubuyuye/blog/blob/gh-pages/README_zh_CN.md)
=======
=======
>>>>>>> 133676e178c9917b89eaa4ea5dd1f22126e288f9

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
>>>>>>> 133676e178c9917b89eaa4ea5dd1f22126e288f9

# Blog Address

<https://bit-ranger.github.io/blog/>


# Must Modify

## 1.swiftype

This service provides the on-site search function.

Service address： <https://swiftype.com/>.

After the setup is complete， you need to modify the `swiftype.searchId` in `_config.yml`.

In your swiftype engine, go to `Setup and integration` -> `Install Search`, you could find the `swiftype.searchId`.

```html
<script type="text/javascript">
...
...
  _st('install','swiftype.searchId','2.0.0');
</script>
```

## 2.gitment

This service provides the comment function.

Service address： <https://github.com/imsun/gitment>.

After the setup is complete， you need to modify the `gitment`  in `_config.yml`.
