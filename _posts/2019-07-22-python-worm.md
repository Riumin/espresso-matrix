---
layout: post
title: python worm
tags: python worm code
categories: Python
---

* TOC
{:toc}



# framework of python worm

<div class="mermaid">
sequenceDiagram
调度器->>URL管理器: URL管理器中是否有待爬取的URL
URL管理器->>调度器: 返回一个待爬取的URL
调度器->>网页下载器: 传入一个待爬取的URL，下载该URL所指向的网页
网页下载器->>调度器: 返回下载的网页内容
调度器->>网页解析器: 将下载好的网页内容传送给解析器进行解析
网页解析器->>调度器: 根据预设规则提取信息后并返回
调度器->>应用: 构成
</div>

# Citation

> [【原创】记一次微信公众号爬虫的经历](https://blog.csdn.net/wnma3mz/article/details/78570580) \
> [【原创】Python 爬虫介绍](https://blog.csdn.net/sinat_29957455/article/details/70846427)

# Instance: Python module ```urllib``` for requesting and storing website

ATTENTION: instance preparation

- python 


## Code

- script edition

```py
# fit for python3.7.4
# python module urllib

import urllib
from urllib import request

url = "https://cn.bing.com"
locale = "UTF-8"
file = open("/home/ryussyouu/test.html",'w')
html = urllib.request.urlopen(url)
file.write(html.read().decode(locale))
file.close()
```

- function edition

```py
# fit for python3.7.4
# python module urllib

import urllib
from urllib import request

def worm(url, path,locale="UTF-8"):
        file = open(path,'w')
        html = urllib.request.urlopen(url)
        file.write(html.read().decode(locale))
        file.close()
```
- the script and functionos above tested available on **Arch Linux** with *Python 3.7.4*, **macOS Mojave**(Version 10.14.5) with *Python 3.7.4*

# Instance: Python Module ```bs4``` for parsing  *Hypertext Mark Language* string

```bs4``` appears short for its full name ```beautifulsoup4```.

Official documentation: [Beautiful Soup Documentation](https://www.crummy.com/software/BeautifulSoup/bs4/doc/index.html?highlight=beautifulsoup)