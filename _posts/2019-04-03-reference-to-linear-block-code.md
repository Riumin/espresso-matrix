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
main((Linear Block Code)) --- id1(How to generate?)
main --- id2(What characteristic it holds?)
id3(How to make it true?) --- main
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
id21(1)
id22
id23
id24
id25
id26
end
subgraph based on check matrix
id27
id28
id29
id2a
end
id311 --- id3
id312 --- id3
id313 --- id3
subgraph prime realization
id311
id312
id313
end
id32(Hamming Code) --- id3
id33 --- id3
id34(Low Density Parity Check Code) --- id3
id35 --- id3
id36 --- id3
id37 --- id3
</div>

# How to generate ~ **binary linear block code** for instance

## $C=\{\overrightarrow{c}\vert\overrightarrow{c}=\overrightarrow{u}\cdot G_{k\times n},u(x)=\displaystyle{\sum^{k-1}_{i=0}u_i\cdot x^i},u_i=0,1\}$

> $$\begin{aligned} \overrightarrow{c}&=\overrightarrow{u}\cdot G_{k\times n}\\&=(u_0,u_1,\dots,u_{k-1})\begin{bmatrix} g_{0,0} & \cdots & g_{0,n-1} \\ \vdots & \ddots & \vdots \\ g_{k-1,0} & \cdots & g_{k-1,n-1}\end{bmatrix}_{k\times n}\\ &=(c_0,c_1,\dots,c_{n-1})\end{aligned}$$

## $\overrightarrow{c}\cdot H^T_{r\times n}$