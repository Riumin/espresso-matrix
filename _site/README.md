Theme original designed by [bit-range](https://github.com/bit-ranger), appreciation.

# Framework

The diagram last refreshed on July 21, 2019.

```
.
├── 404.html
├── LICENSE
├── README.md
├── README_zh_CN.md
├── _config.yml
├── _includes
│   ├── footer.html
│   ├── head.html
│   └── header.html
├── _layouts
│   ├── default.html
│   ├── page.html
│   └── post.html
├── _posts
├── favicon.ico
├── feed.xml
├── index.html
├── pages
│   ├── 1archive.html
│   ├── 2category.html
│   ├── 3tag.html
│   ├── 4about.md
│   └── 5link-external.md
├── sign.svg
├── sitemap.xml
└── static
    ├── bg.jpg
    ├── css
    │   ├── archive.css
    │   ├── article-list.css
    │   ├── category.css
    │   ├── gitment.css
    │   ├── highlight.css
    │   ├── post.css
    │   ├── style.css
    │   ├── tagCloud.css
    │   └── tags.css
    ├── img
    ├── js
    │   ├── category.js
    │   ├── gitment.js
    │   ├── post.js
    │   ├── script.js
    │   ├── tagCloud.js
    │   ├── tags.js
    │   └── toc.js
    └── octicons
        ├── LICENSE.txt
        ├── README.md
        ├── octicons-local.ttf
        ├── octicons.css
        ├── octicons.eot
        ├── octicons.less
        ├── octicons.svg
        ├── octicons.ttf
        ├── octicons.woff
        └── sprockets-octicons.scss

9 directories, 48 files
```

# Post Syntax

## Header

Do ensure each post include the following heading declaration.

```
---
layout: post
title: title
tags: tag_1 tag_2
categories: common
---

* TOC
{:toc}
```

Categories contain **common** and custom types, which uniquely occupy a post.

## Insert an image

```
![enlightment]({{"/img_filename" | prepend: site.imgrepo }})
```
