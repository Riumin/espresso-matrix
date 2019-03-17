---
layout: post
title: "Notation of Telecommunication"
date: 2019-03-12
excerpt:
tags: "telecommunication note"
comments: true
---

|LABEL|MATHEMATICAL SYMBOL|
|:-:|:-:|:-:|
|communication<br/>(*as well* telecommunication)|
|communication system|
|communication system```.```transmitter|
|communication system```.```channel|
|communication system```.```receiver|
|source<br/>(*as well* message from courier)|
|digital source| $X=\{a_i\}^n_{i=1}$
|destination|
|terminal|
|communication```::```boardcasting|
|communication```::```point-to-point|
|communication system```::```simplex system|
|communication system```::```duplex system|
|communication system```::```half-duplex system|
|message|
|signal|$s(t)$
|information|
|source```::```digital information system|
|source```::```analog information system|
|digital symbol|$\{a_i\}^n_{i=1}=\{a_1,a_2,\dots,a_n\}$|
|digital signal|
|analog signal|
|数字通信系统```::```符号速率（传输速率）|$R_s$($\text{sym}\cdot \text{s}^{-1}$,*normally* $\text{bps}$)
|数字通信系统```::```元数|$M$
|M-any symbol|
|bit<br/>(*as well* Binary symbol)|$\text{b}$|
|二元符号速率|$(\text{b}\cdot\text{s}^{-1})$, $\text{bps}$|
|模拟```::```频带宽度|$B$($\text{Hz}$)|
|baseband signal|
|数字信源```::```随机序列|$\{x_n\}$|
|数字信源```::```取值概率|$P(x_n=a_i)=p_i,a_i\isin \{a_i\}^N_{i=1}$|
|模拟信源```::```随机过程|$x(t)$
|模拟信源```::```|$f_{x(t)}(x)$, $f_x(x,t)$|
|确定信号|
|digitial source<br/>(*as well* digital message)|$X$($\text{bit}$)|
|信息量|$I_i=-\log_2p_i(\text{bit}),1\leqslant i\leqslant M$<br/>$I_i=-\ln p_i(\text{nat}),1\leqslant i\leqslant M$<br/>$I_i=-\lg (\text{Hartley}),1\leqslant i\leqslant M$|
|additive noise|n(t)|
|数字通信系统```::```频带利用率|($\text{bps}\cdot \text{Hz}^{-1}$)|
|数字通信系统```::```平均比特错误概率<br/>（误比特率）|$\text{BER}$|
|digital source```::```entropy|$H(X)=$
|AGWN-C```::```channel capacity|$C=B\log_2\Big(1+\frac{S}{N}\Big)$ (bps)|
|singal```::```voltage<br/>(*as well as* waveform```::```voltage)|$v(t)$|
|electric current<br/>(*as well as* waveform```::```eletric current)|$i(t)$|
|signal<br/>(*as well as* telecommunication```::```waveform)|$x(t)$
|基础信号```::```理想正弦波|$\cos \omega t\vert t\isin (-\infin, +\infin)$|
|基础信号```::```冲击函数|$\delta(t)$
|基础信号```::```矩形脉冲|
|waveform```::```period|$T$
|waveform```::```baseband|$T^{-1}$
|waveform```::```direct current component<br/> (*as well as* **dc**)|$v_{dc}=\lim\limits_{T\to \infin}\frac{1}{2T}\int^{T}_{-T}v(t)\text{d}t$
|


# Morse's telegraph system

# Bianry symbol & M-any symbol

$1$ M-any symbol $= \log_2{M} \text{b}$

# 正弦波

> Reference: 李晓峰，周宁，周亮等《通信原理》（清华大学出版社，ISBN 978-7-302-18166-8）

# $\text{bit}$ and $\text{Hartley}$

$$1 \text{ Hartley}=-\lg p_i=\frac{\log_2 p_i}{\log_2 10}=-3.32\log_2 p_i \text{ bit}$$

# channel```::```additive 

# ##

> By contrast to **Ananlog Communication System**, **Digital Comuunication System** with the following advantages: <br/>
> **Definite state of signals with ease reproducted** avoid the reposit of noise. Its quantity as well break the restricton of communication distance with repeater. <br/>
> **Distinguishable** digital signals hold probability of communication with less error rate under strong noise. <br/>
> **Less cost** enables **mass intergration** of **stability** and ease for **debugging**. <br/>
> More convinience on **error correcting**, more reliable transportation can be taken. <br/>
> More convinience on **compression** and **encipherment**.<br/>
> Different types of *source* are able to be formed as standard *transmit sequence*, which can be dealt mass in *digital communication system*.<br/>
> Convinience on network and computer.<br/>
<br/>
> The disadvantages exist as well.<br/>
> By contrast to *analog communication system*, **more bander** required to transmit *digital communication system*.<br/>
> More complex and accurate *corresponding system* required for *digital communication system*.

> 当信道带宽一定时，通信系统能够提供的速率越高，则有效性越好。


# Entropy

$$H(X)=\sum^M_{i=1}I_ip_i=-\sum^M_{i=1}p_i\log_2p_i\text{ (bit)}:X=\{a_i\}^n_{i=1},P\{\omega|X(\omega)=a_i\}=\{p_i\}^n_{i=1}$$

- entropy rate

$$R=\frac{H(X)}{T}$$