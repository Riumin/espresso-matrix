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
|确定信号<br/|
|digitial source<br/>(*as well* digital message)|$X$($\text{bit}$)|
|信息量|$I_i=-\log_2p_i(\text{bit}),1\leqslant i\leqslant M$<br/>$I_i=-\ln p_i(\text{nat}),1\leqslant i\leqslant M$<br/>$I_i=-\lg (\text{Hartley}),1\leqslant i\leqslant M$|
|additive noise|n(t)|
|数字通信系统```::```频带利用率|($\text{bps}\cdot \text{Hz}^{-1}$)|
|数字通信系统```::```平均比特错误概率<br/>（*as well as* 误比特率）|$\text{BER}$|
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
|waveform```::```voltage signal```::```power|$P_{v(t)}=\frac{\overline{v^2(t)}}{R}\vert R$在纯电阻负载上<br/>
|waveform```::```current```::```power|$P_{i(t)}=\overline{i^2(t)R}\vert R$在纯电阻负载上
|时间平均（值）|$\overline{f(t)}=\lim\limits_{T\to\infin}\frac{1}{2T}\int^T_{-T}f(t)\text{d}t$
|analog signal```::```*average* power|$P=\overline{x^2(t)}=\frac{2E}{\lim\limits_{T\to\infin}T}$
|analog signal```::```*total* energy|$E=\int_{-\infin}^{+\infin}x^2(t)\text{d}t$
|模拟信号```::```功率信号|$x(t)\vert E\to\infin$
|模拟信号```::```能量信号|$x(t)\vert P\to 0$
|signal```.```root mean square<br/>(*as well as* **rms**)|$v_{rms}=\overline{v^2(t)}$
|直流信号```::```均方根值|$v_{rms}=A\vert v(t)=A$
|正弦波```::```均方根值|$v_{rms}=0.707A\vert v(t)=A\cos(2\pi ft+\theta)$
|均方根值 $\vert$ 归一化功率|$P=v^2_{rms}\vert R=1\varOmega$
|分贝<br/>(*as well as* decibel)|

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

# 归一化功率

# prime parameters of signal(waveform)
## framework
$$\text{T}+\text{dc}\cdot x+\text{P}\cdot x^2+\text{E}\cdot x^3+\text{rms}\cdot x^4+\text{dB}\cdot x^5$$
## list of parameters
|MARK|PARAMETERS|
|:-:|:-:|
|$\text{T}$|period
|$\text{dc}$|direct currency component|
|$\text{P}$|power
|$\text{E}$|energy
|$\text{rms}$|root mean square
|$\text{dB}$|decibal|  

# specturm

# Transmit of code

<div class="mermaid" align="center">
graph LR
main((Hamming Code))--- id1(product)
main --- id2(interleaving)
main --- id3(concatenating)
id4 --- main
id5 --- main
id6 --- main
id7 --- main
id8 ---main
id9 --- main
subgraph multiple code combination
id1
id2
id3
end
subgraph single code recoding
id4(extending)
id5(puncturing)
id5
end
</div>


# What differential? ~ first-ordered linear differential 

$$\begin{aligned}\lim\limits_{\Delta x\to 0}\Big(F(x+\Delta x)-F(x)\Big)&=\text{d}F(x)=f(x)\cdot \text{d}x \\ \lim\limits_{\Delta x\to 0}\Delta x&=\text{d}x \end{aligned}$$

# 

- inverse hyperbolic sine

$$f(x)=\text{arsh}\ x=\ln\Big(x+\sqrt{x^2+1}\Big)$$


- inverse hyperbolic cosine

$$f(x)=\text{arch}\ x=\ln\Big(x+\sqrt{x^2-1}\Big)$$

- inverse hyperbolic tangent

$$f(x)=\text{arth}\ x=\frac{1}{2}\ln\frac{1+x}{1-x}$$

# Mimicry of Exponential Change

$$A_0\cdot e^{rt}=\lim\limits_{k\to\infin}A_0 \Bigg(1+\frac{r}{k}\Bigg)^{kt}$$
*Especially* when $A_0=r=t=1$, the equiation is equicalent to a major limit 

$$e=\lim\limits_{x\to\infin}\Bigg(1+\frac{1}{x}\Bigg)^{x}y$$

# Case: to find out the half-life

## Analysis

- By experiments, **the rate 

$$\begin{cases}\displaystyle{\frac{\text{d}y}{\text{d}t}}=-ky \\ \\ y=y_0e^{-kt} \end{cases},k>0$$

<br/>
<table border="0">
<tr><td class="katex"><i>k</i> > 0</td><td></td><td>decay constant</td></tr>
<tr><td class="katex"><i>t</i></td><td></td><td>time since time zero</td></tr>
<tr></tr>
<tr><td class="katex"><i>y</i></td><td></td><td>radioactive nuclei</td></tr>
<tr><td class="katex"><i>y</i><sub>0</sub></td><td></td><td>radioactive nuclei at time zero</td></tr>
</table>

## Model

$$y=\frac{1}{2}y_0$$

# Case: to find out how long something cools down

## Analysis

- By principle, **the rate at which 

$$\begin{cases}\displaystyle{\frac{\text{d}H}{\text{d}t}}=-k(H-H_s)\\ \\ H-H_s=(H_0-H_s)e^{-kt}\end{cases}$$
<br/>
<table>
<tr><td class="katex"><i>H</i></td><td>the temperature of the object</td></tr>
<tr><td class="katex"><i>t</i></td><td>the time since time zero</td></tr>
<tr><td class="katex"><i>k</i></td><td>*<i>an undetermined coefficient</i></td></tr>
<tr><td class="katex"><i>H<sub>s</sub></i></td><td>the surroundings temperature</td></tr>
<tr><td class="katex"><i>H</i><sub>0</sub></td><td>the initial temperature of the object</td></tr>
</table>

# Case: to find out the resistance proportional to velocity

> Take a review of **Newton's Second Law of Motion-Force and Acceleration**, <br/> <div align="center">$F=ma$, </div><br/> and **speed** with **frustration coefficient**, <br/> <div align="center">$g=\mu v$,</div> which finds out how much 

# Differential Function & Basic Primary Functions

|DIFFERENTIAL FUNCTIONS|BASIC PRIMARY FUNCTIONS|
|:-:|:-:|
|$\displaystyle{\frac{\text{d}y}{\text{d}x}}=0$|$y=A_0$
|$\displaystyle{\frac{\text{d}y}{\text{d}x}}=a\cdot \displaystyle{\frac{y}{x}}$|$y=A_0x^{a}$
|$\displaystyle{\frac{\text{d}y}{\text{d}x}}=ky\cdot \ln a$|$y=A_0a^{kx}$
|*especially*, $\displaystyle{\frac{\text{d}y}{\text{d}x}}=ky$|$y=A_0e^{kx}$
|$\displaystyle{\frac{\text{d}y}{\text{d}x}}=$

# Basic Primary Functions the Sills of Algebra

<div class="mermaid" align="center">
graph LR
id11(constant function) --- main((basic primary function))
id2(power function) --- main
id3(exponential function) --- main
id4(logarithmic function) --- main
id51
subgraph trigonometric functions
id51(sine)
id52(tangent)
id53(secant)
id54(cosine)
id55(cotangent)
id56(cosecant)
end
main --- id51
main --- id52
main --- id53
main --- id54
main --- id55
main --- id56
subgraph inverse trigonometric functions
id61(inverse sine)
id62(inverse tangent)
id63(inverse secant)
id64(inverse cosine)
id65(inverse cotangent)
id66(inverse cosecant)
end
main --- id61
main --- id62
main --- id63
main --- id64
main --- id65
main --- id66
</div>

# exponential differential function

$$\begin{aligned}y&=A e^{kx} \\ y'&=A\cdot k e^{kx}\\ \frac{\text{d}y}{\text{d}x}&=k \cdot Ae^{kt} \\ \frac{\text{d}y}{\text{d}x}&=ky\end{aligned}$$

