---
layout: post
title: "Notation of Error Correcting Encoding"
date: 2019-03-13
excerpt:
tags: "telecommunication note"
comments: true
---

|LABEL|MATHEMATICAL EXPRESSION|
|:-:|:-:|
|码元（*as well as* 消息符号）|$u_i\isin \{0,1 \}$|
|数据分组|$\overrightarrow{u}=(u_0,u_1,\dots,u_{k-1})$|
|比特信息|$\text{bit}$
|比特数据|$\text{bit}$
|

> 任何信息总是可以表述为二元随机序列或随机向量

# Understand concept under communication in a view of probability

|TELECOMMUNICATION|PROBABILITY|
|:-:|:-:|
|message|随机事件 $A$
|info|样本 $\{\omega \}$
|信息量 $I_i$|度量->样本空间的[概率均值]()|
|Modulation|$\overrightarrow{u}\to x(t)$|
|encode<br/>*in a narrow sense*|$\overrightarrow{u}=(u_0, u_1,\dots,u_{k-1})\to \overrightarrow{c}=(c_0, c_1,\dots,c_{n-1})$|
|encode<br/>*in a broad sense*|$\overrightarrow{u}=(u_0,\dots,u_{k-1})\to\begin{cases}\overrightarrow{x}(t)=\big(x(t)\big)=\big(x_0(t),\dots,x_{n-1}(t)\big)\\ \overrightarrow{x}(t)=\overrightarrow{x}(t) \end{cases}$
|codeword|$\overrightarrow{c}=(c_0, c_1,\dots,c_{n-1})$|
|code symbol|$c_i,i=0, 1,\dots, n-1$|
|redundant code|1. $\vert\{\overrightarrow{c}\}\vert\geqslant \vert\{\overrightarrow{u}\}\vert$ <br/> 2. $n>k:\vert \{c_j\}\vert= \vert\{u_j\}\vert$|
|
|


> 数学期望（*as well* 均值，期望）：试验的每次可能**结果** 与 其**概率** 的*积*，是一种最基本的数学特征，反映了*随机变量*平均取值的大小。

> **Expected value** suggests in 2 types: **Discrete Expected Value** and **Continuous Expected Value**.

- **Discrete Expected Value**

$$E(X)=\sum^{(\infin) \atop n}_{i=1} P\{\omega\vert X(\omega)= x_i:x_i\isin R\}\cdot X_i =\sum^{(\infin) \atop n}_{i=1} (p_i\cdot X_i)$$

- **Continuous Expected Value**

$$$$

> characteristics of significance <br/> $E(C)=C\vert C\isin R$ <br/> $E(CX)=C\cdot E(X)\vert ,C\isin R$ <br/> $E(X+Y)=$

# A code symbol in uniform distribution with 1 bit of info

- uniform distribution

$$\displaystyle{f(x)=\begin{cases}0 & x\leqslant a \\ \displaystyle{\frac{1}{b-a}} & a<x<b \\ 0 & b\leqslant x\end{cases}}$$

- info



# 计算传输速率

- AWGN-C

$$C_A=B\log_2(1+\frac{E_b}{N_0})\text{ (bit\cdot s^{-1}}$$

- BSC

$$$$

# a model of Uniform Bander Transmit

AGWN-C                                                 


# 纠错码 的 基本结构特征
- 汉明重量
- 汉明距离
- 汉明球
- 最小码距

# 纠错码 编译 基本原理
|LABEL|MARK|
|:-:|:-:|
|Hamming weight|
|Hamming distance|
|Hamming sphere|
|minium code distance|
|```::```分组码
|```::```码元（分量）
|```::```最大似然译码
|```::```最小化```.```译码```.```差错概率
|```::```最大化```.```码字信号
|```::```欧几里得距离
|```::```编码码率|单位信号 传输的 消息量
|[MDS code$^{[]}$](####-maxium-distance-separable-code,最大距离可分码)|
|完备码|
|```::```[DMC]()
|差错图案|$e$
|```::```重复码|
|

# Appendix

#### $[]$ maxium distance separable code,最大距离可分码
#### $[]$ discrete memoryless channel,离散无记忆信道,"硬判决"信道
