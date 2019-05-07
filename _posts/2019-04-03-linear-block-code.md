---
layout: post
title: "Linear Block Code"
date: 2019-04-03
excerpt: "Telecommunication```::```ErrorCorrectingCode```::```LinearBlockCode"
tags: "telecommunication encoding note"
comments: true
---

# What is **linear block code**?

To clarify the concept **linear block code**, you first had to review two primer concepts:
- What is **block code** $C[n,M]$?
- How's to be **linear**?

You can look up ```Telecommunication::ChannelEncdoing::BlockCode``` and


# Cases

<div class="mermaid" align="center">
graph LR
id0((terminal)) --message vector--> id1
id1(encoding) --codeword--> id2(channel)
id2 --vector--> id3(error correcting)
id3 --corrected codeword--> id4(decoding)
id4 --decoded messgae vector--> id5((terminal))
</div>

|PARAMETER|MARK|
|:-:|:-:|
|message vector|$\overrightarrow{u}$|
|codeword|$\overrightarrow{c}$
|vector<br/>*(passed through the channel)*|$\overrightarrow{v}$
|corrected codeword|$\hat{\overrightarrow{c}}$
|decoded message vector|$\hat{\overrightarrow{u}}$

Pay attention to how the signal is transmitted through the channel, especially the following two processess:
- **encoding**: from *message vector* $\overrightarrow{u}$ to *codeword* $\overrightarrow{c}$
- **error correcting**: from *vector* $\hat{\overrightarrow{v}}$ to *corrected codeword* $\hat{\overrightarrow{c}}$

> Don't feel surprised if the process 
> <br/><div align="center"> **decoding**: from *corrected codeword* $\hat{\overrightarrow{c}}$ to *decoded message vector* $\hat{\overrightarrow{u}}$</div> <br/> not mentioned. As long as both the encoding and decoding refer to an identical *encoding mapping* $\overrightarrow{c}=\overrightarrow{u}\cdot G_{k\times n}$, it seems no obvious difference between $\{\overrightarrow{c}\mid \overrightarrow{c}=\overrightarrow{u}\cdot G_{k\times n}\}$ nad $\{\hat{\overrightarrow{u}}\mid \hat{\overrightarrow{c}}=\hat{\overrightarrow{u}}\cdot G_{k\times n}\}$.

If you still remember the two methods to generate a *linear block code* which have been mentioned before, you shall soon convert the very special two process into the following expressions:
- $C=\{\overrightarrow{c}\mid\overrightarrow{c}=\overrightarrow{u}\cdot G_{k\times n},u(x)=\displaystyle{\sum^{k-1}_{i=0}u_i\cdot x^i},u_i=0,1\}$
- $C=\{\overrightarrow{c}\mid\overrightarrow{c}\cdot H^T_{r\times n}=\overrightarrow\theta^{(r)},c(x)=\displaystyle{\sum^{n-1}_{i=0}c_i\cdot x^i,c_i=0,1}\}$

No matter **encoding** or **error correcting**, the cases shall aim at make the processes (or the expressions above) truth. So far there have been some *linear block code*, such as: **Hamming code**, **Reed-Muller code** or **RM code**, **Golay code**, **Golay code**, **Bose–Chaudhuri–Hocquenghem code** or **BCH code**, **Reed-Solomen code** or **RS code**, **low density parity check code** or **LDPC code**, etc.
> Take a step further and think: **What's the practical meanings of those two expressions?** <br/>
> - As for **encoding**, the encoding device is always given a **message vector** and output a **codeword** with the expression $\overrightarrow{c}=\overrightarrow{u}\cdot G_{k\times n}$. Therefore, what encodes the message vector into a codeword must holds a constant *generate matrix* $G_{k\times n}$.
> - As for **error correcting**, the error correcting device is always given a **vector** *passed through the channel* and output a **error corrected codeword** with the expression $\overrightarrow{v}\cdot H^T_{r\times n}=\overrightarrow\theta^{(r)}\mid v(x)=\displaystyle{\sum^{n-1}_{i=0}v_i\cdot x^i,c_i=0,1}\Longrightarrow \overrightarrow{v}\isin C$.
>
> Remember what changed and what fixed during the process from one terminal to another. The cases are designed exactly for those dynamic and sophisticated parameters.

## Hamming Code

## Combination Code

## Syndrome Decoding ~ AWGN-DMC for instance

1














# 

令事件$A=\{一个学生参加了\omega次成电讲坛\}$，概率$p=P(A)$，其中样本点$\omega\isin[1,15]$，样本空间$\varOmega=\{\omega_i\}^{15}_{i=1}$。定义随机变量$X(\omega)=\omega,\omega\isin\varOmega$，它的分布函数$F(x)=P\{\omega\mid X(\omega)\leqslant x\}$。视发生频率为发生概率，则根据统计显示如下数据：
|$\omega$|$p$|$X(w)$|
|:-:|:-:|:-:|
|1|0.309038828771483|0.309038828771483
|2|0.152291534054742|0.461330362826225
|3|0.10852959898154|0.569859961807766
|4|0.111712285168682|0.681572246976448
|5|0.107256524506684|0.788828771483132
|6|0.0905474220241884|0.87937619350732
|7|0.0431253978357734|0.922501591343094
|8|0.0300763844684914|0.952577975811585
|9|0.0241884150222788|0.976766390833864
|10|0.0175047740292807|0.994271164863144
|11|0.00366008911521324|0.997931253978358
|12|0.00159134309357097|0.999522597071929
|13|0.000159134309357097|0.999681731381286
|14|0.000159134309357097|0.999840865690643
|15|0.000159134309357097|1
并且，由于随机变量的定义是关于样本点的一次函数，所以分布函数$F(x)$和概率$p$之间的关系可以表现为：

$$p_i=F(i)-F(i-1),i=1,2,\dots,15$$


$$\begin{bmatrix}a_{0,0}=TS & TS-U & (1-\frac{U}{TS})a_{0,1} & \cdots & a_{0,6}=(1-\frac{U}{TS})a_{0,5} & a_{0,7}=(1-\frac{U}{80.84\%TS})a_{0,6} & \cdots & a_{0,10}=(1-\frac{U}{80.84\%TS})a_{0,9} & a_{0,11}=(1-\frac{U}{62.35\%\times80.84\%TS})a_{0,10} & \cdots \\ & U & a_{1,1}\frac{U}{TS}+(1-\frac{U}{TS})a_{1,2} & \cdots &a_{1,5}\frac{U}{TS}+(1-\frac{U}{80.84\%TS})a_{1,6} & a_{1,6}\frac{U}{80.84\%TS}+(1-\frac{U}{80.84\%TS})a_{1,7} & \cdots & a_{1,9}\frac{U}{80.84\%TS}+(1-\frac{U}{62.35\%\times80.84\%TS})a_{1,10} & a_{1,10}\frac{U}{62.35\%\times80.84\%TS}+(1-\frac{U}{62.35\%\times80.84\%TS})a_{1,11} & \cdots \\ &&\frac{U}{TS}a_{1,2} & \cdots & \vdots & \vdots & \cdots & \vdots&\vdots & \cdots\\ &&&\ddots &\vdots & \vdots & \cdots & \vdots&\vdots& \cdots\\ &&&& \frac{U}{TS}a_{6,5} & \vdots & \cdots &\vdots&\vdots& \cdots\\ &&&&& \frac{U}{80.84\%TS}a_{6,7}  & \cdots&\vdots&\vdots& \cdots \\ &&&&&&\ddots &\frac{U}{80.84\%TS}a_{8,9}&\vdots& \cdots\\ &&&&&&&& \frac{U}{62.35\%\times80.84\%TS}a_{10,11} & \cdots \\ &&&&&&&&& \ddots \end{bmatrix}$$