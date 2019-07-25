---
layout: post
title: Python Graphicalization of Encapsulated Module
tags: python graphicalization code
categories: Python
---

* TOC
{:toc}

> reference: [【知乎】给深度学习入门者的Python快速教程 - numpy和Matplotlib篇](https://zhuanlan.zhihu.com/p/24309547)<br/>
> reference: [【常用对照表】RGB颜色参考](http://tool.oschina.net/commons?type=3)
> 

# Discrete Diagram in two-dimension

```py
# coding=utf-8

from numpy import *
import numpy as np
import matplotlib as mpl
import matplotlib.pyplot as plt

def two_dimPlotDiscrete(_xAxisFontSize, _yAxisFontSize,  _array, _diagramName, _fileName, _numpyRandomSeed = None):

	# 通过rcParams设置全局横纵轴字体大小
	mpl.rcParams['xtick.labelsize'] = _xAxisFontSize
	mpl.rcParams['ytick.labelsize'] = _yAxisFontSize

	np.random.seed(_numpyRandomSeed)

	# x轴的采样点
	x_list = []
	for i in range(len(_array)):
		x_list.extend([_array[i,0]])

	# y轴的采样点
	y_list = []
	for i in range(len(_array)):
		y_list.extend([_array[i,1]])

	# figure()指定图表名称
	plt.figure(_diagramName)

	# '.'标明画散点图，每个散点的形状是个圆
	# plt.plot(x, y, '.')

	# 画模型的图，plot函数默认画连线图
	# plt.figure('model')
	# plt.plot(x, y)

	# 两个图画一起
	# plt.figure('data & model')

	# 通过'k'指定线的颜色，lw指定线的宽度
	# 第三个参数除了颜色也可以指定线形，比如'r--'表示红色虚线
	# 更多属性可以参考官网：http://matplotlib.org/api/pyplot_api.html
	# plt.plot(x, y, 'k', lw=3)

	# scatter可以更容易地生成散点图
	plt.scatter(x_list, y_list)

	# 将当前figure的图保存到文件result.svg
	plt.savefig(_fileName)

	# 一定要加上这句才能让画好的图显示在屏幕上
	# plt.show()

	return None
```