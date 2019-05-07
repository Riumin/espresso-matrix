---
layout: post
title: "Partial Derivatives"
date: 2019-04-03
excerpt: ""
tags: ""
comments: true
---

# 

$$w=f(x_1,\dots,x_n),(x_1,\dots,x_n)\isin D$$

$$\begin{matrix}w&\text{dependent variable }  or \text{ input variable}\\ x_1,\dots, x_2 & \text{independent variables } or \text{ input variables} \\ D & \text{Domain}\end{matrix}$$

#

$$z=f(x,y),(x,y)\isin R$$
$$\begin{matrix}(x,y)\mid f(x,y)=0&\text{boundary point}\\(x,y)\mid f(x,y)<0 &\text{interior point}\\\{(x,y)\mid f(x,y)=c\}&\text{level curve}\\\{\big(x,y,f(x,y)\big)\}&\text{graph } or \text{ surface}\end{matrix}$$

#

LABEL	|	MONICKER	|	INTRODUCTION
|:-:|:-:|:-| 
码	|	code	|	
编码	|	encode	|	
码率	|	code rate	|	平均每个码元$c_i$等效传输的消息符号数[^ms]称为$q$元$[n,M]$码的编码码率$R_c$[^cr]。
信道编码	|		|	
纠错码	|	error correcting code	|	
二元对称信道	|	binary symmetric channel<br/>(*as well as* BSC)	|	
差错图案<br/>（*亦称* 差错向量）	|	error patten	|	以差错值$e_i$为分量构成的分组或向量$\overrightarrow{e}$。<br/>特别地，对于BSC，当且仅当传输分组中的第$i$位符号或比特出现差错时$e_i=1$。
前向纠错	|	forward error correction<br/>(*as well as* FEC)	|	
自动重传请求	|	automatic repeat request<br/>(*as well as* ARQ)	|	
香农限	|		|	
编码增益	|		|	
传信率	|		|	
误码率	|		|	
分组码	|		|	
卷积码	|		|	
循环码	|		|	
系统码	|		|	
汉明距离	|		|	
汉明重量	|		|	
最小码距	|		|	
设计距离	|		|	
奇偶校验	|		|	
循环冗余校验CRC	|		|	
译码	|		|	
译码模式	|		|	
伴随式	|		|	
标准阵列	|		|	
纠错数	|		|	
检错数	|		|	
重复码	|		|	
汉明码	|		|	
Golay码	|		|	
有限域 	|		|	
既约多项式 	|		|	
本原元 	|		|	
BCH码	|		|	
RS码	|		|	
生成矩阵	|		|	
校验矩阵	|		|	
生成多项式	|		|	
约束长度	|		|	
栅格图	|		|	
幸存路径	|		|	
维特比算法	|		|	
译码深度	|		|	
低密度校验码	|		|	
二分图	|		|	
比特翻转	|		|	
Turbo码	|		|	
分量码	|		|	

[^ms]: 数字消息的每一种取值称作一种**消息符号**。数字信源产生离散的消息（符号）序列$\{x_1,\dots,x_i,\dots\}$，其中令消息符号共有$N$种取值，$x_i\isin \{a_i\}^n_{i=1}=\{a_1,\dots,a_N\}$
[^cr]: 对于$q$元$[n,M]$码，码率$R_c=\displaystyle{\frac{\log_q M}{n}}$。特别地，对于$q$元$[n,k]$分组码，即：$M=q^k$，码率$R_c=kn^{-1}$，其中$k$为消息向量$\overrightarrow{u}$的维度（亦称：$k$长消息向量）。

# Case: Repetition Code

对于$q$元$n$-重复码，即：$\overrightarrow{u}=\{a_0,a_1, \cdots ,a_{k-1}\}\to \overrightarrow{v}=\{\underbrace{a_0,\cdots ,a_0}_{k},\underbrace{a_1,\dots,a_1}_{k}, \dots,\underbrace{a_{n-1},\dots,a_{n-1}}_{k}\}\mid a_i\isin F_q$，码率$R_c=n^{-1}$：从概念上来理解，将$1$个消息符号拓展成为$n$个重复的码元，这$n$个码元只能等效传输$1$个消息符号，平均每$n$个码元传输$1$个消息符号、$1$个码元等效传输$n^{-1}$个消息符号；从计量上来理解，单个传输$k$长消息向量的$q$元$n$-重复码共有$M=q^k$个码元，因此码率$R_c=\displaystyle{\frac{\log_q q^k}{n}}$