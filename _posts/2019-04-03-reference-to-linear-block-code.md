---
layout: post
title: "A Reference to Linear Block Code"
date: 2019-04-03
excerpt: "Telecommunication```::```ErrorCorrectingCode```::```LinearBlockCode"
tags: "telecommunication encoding reference"
comments: true
---

<div class="mermaid" align="center">
graph LR
main((Linear Block Code)) --- id1(defination)
main --- id2(characteristic)
id3(case) --- main
id1 --- id11(generate matrix)
id1 --- id12(check matrix)
id2 --- id21
id2 --- id22
id2 --- id23
id2 --- id24
id2 --- id25
id2 --- id26
id2 --- id27
id2 --- id28
id2 --- id29
id2 --- id2a
subgraph based on generate matrix
id21(A zero vector is in code.)
id22(The sum of double codeword, <br/>which are in codeword, <br/>is in codeword as well.)
id23(The minium code distance of a code <br/>is equivalent to <br/>the minium of its codewords' Hamming weight.)
id24(There could be multiple generate matrices.)
id25(The amount of binary linear block code <br/>can be figured out.)
id26(The encoding mapping is equivalent to <br/>a boolean system)
end
subgraph based on check matrix
id27(A vector which times the check matrix <br/>to generate a zero vector is in the code)
id28
id29
id2a
end
subgraph encoding
id32
id33
id34
end
id32(Hamming Code) --- id3
id33 --- id3
id34(Low Density Parity Check Code) --- id3
id35(Syndrome Decoding) --- id3
id36(Standard Array) --- id3
id37(Bit Flipping) --- id3
subgraph decoding
id35
id36
id37
end
subgraph bound of structural property
id41(Hamming Bound)
id42(Singleton Bound)
id43(Plotkin Bound)
id44(Elias Bound)
id45(Gilbert-Varshamov Bound)
id46(... ...)
end
subgraph bound of probabilistic property
id47("不可检差错概率")
id48("译码码字差错概率限（<i>亦称</i> 误字率限）")
id49("不可纠比特差错概率（<i>亦称</i> 误码率）限")
end
id41 --- id4
id42 --- id4
id43 --- id4
id44 --- id4
id45 --- id4
id47 --- id4
id4(bound) --- main
</div>

# defination ~ **binary linear block code** for instance

## message vector & generate matrix 

$C=\{\overrightarrow{c}\mid\overrightarrow{c}=\overrightarrow{u}\cdot G_{k\times n},u(x)=\displaystyle{\sum^{k-1}_{i=0}u_i\cdot x^i},u_i=0,1\}$
<br/><div align="right"> $^*$ The vector $\overrightarrow{u}$ can be expressed as well as $\overrightarrow{u}=(u_0,u_1,\dots,u_{k-1})$.</div>

> $\begin{aligned} \overrightarrow{c}&=\overrightarrow{u}\cdot G_{k\times n}\\&=(u_0,u_1,\dots,u_{k-1})\begin{bmatrix} g_{0,0} & \cdots & g_{0,n-1} \\ \vdots & \ddots & \vdots \\ g_{k-1,0} & \cdots & g_{k-1,n-1}\end{bmatrix}_{k\times n}\\ &=(c_0,c_1,\dots,c_{n-1})\end{aligned}$

## codeword & check matrix

$C=\{\overrightarrow{c}\mid\overrightarrow{c}\cdot H^T_{r\times n}=\overrightarrow\theta^{(r)},c(x)=\displaystyle{\sum^{n-1}_{i=0}c_i\cdot x^i,c_i=0,1}\}$

> $\begin{aligned}\overrightarrow\theta&=\overrightarrow{c}\cdot H^T_{r\times n} \\ &=(c_0,c_1,\dots,c_{n-1})\begin{bmatrix} h_{0,0} & h_{1,0} &\cdots & h_{r-1,0}\\ h_{0,1} & h_{1,1} & \cdots &h_{r-1,1}\\ \vdots & \vdots &\ddots & \vdots \\ h_{0,n-1} & h_{1,n-1} & \cdots & h_{r-1,n-1} \end{bmatrix}\\ &=(\underbrace{0,\dots,0}_{r})\end{aligned}$

# Characteristics

## [1] $\overrightarrow\theta \isin C$
## [2] $\overrightarrow{c}+\overrightarrow{c}'\isin C\mid \overrightarrow{c},\overrightarrow{c}'\isin C$
## [3] $d_{\min}(C)=\displaystyle{\min_{\overrightarrow{c}\isin C,\overrightarrow{c}\not=\overrightarrow\theta}\{w_H(\overrightarrow{c})\}}$
## [4] 行初等变换等价 码，行初等变换等价 生成矩阵(attention to the transform of codeword)
## [5] The amount of **generate matrices** $G_{k\times n}$ (equivalent to **binary linear block code** $C(n.k)$) can be figure out with the consequence $N(n,k)$ as the following:

$$N(n.k)=\frac{\displaystyle{\prod^{n-k+1}_{i=n}(2^i-1)}}{\displaystyle{\prod^{k}_{j=1}(2^j-1)}}=\prod^{k}_{i=1}\frac{2^{n+1-i}-1}{2^i-1}$$

## [6]

$$\overrightarrow{c}=\overrightarrow{u}\cdot G_{k\times n} \Longleftrightarrow \begin{cases} c_0=\varphi_0(u_0,\dots,u_{k-1})\\ \vdots \\ c_{n-1}=\varphi(u_0,\dots,u_{k-1})\end{cases}$$

## [7] Another method to generate a **linear block code**

## [8] $G^*_{k\times n}\cdot H^{*T}_{r\times n}=[0]_{k\times r}\mid G^*_{k\times n}\isin\{G_{k\times n},G_{s_{k\times n}}\},H^*_{r\times n}\isin\{H_{r\times n},H_{s_{r\times n}}\},\overrightarrow{c}=\overrightarrow{u}\cdot G_{k\times n},\overrightarrow{c}\cdot H^T_{r\times n}=\overrightarrow\theta$

## [9] The row rank of $H_{r\times n}$ is $r$.

## [10] $G_s=[I_k\cdot Q_{k\times r}]_{k\times n}\Longrightarrow H_s=[-(Q_{k\times r}^T\cdot I_r)]$

# **$^*$*Minium Code Distance Principle***

$$d_{min}=$$

# Case

<div class="mermaid">

</div>