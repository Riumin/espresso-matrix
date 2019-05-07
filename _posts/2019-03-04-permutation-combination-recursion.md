---
layout: post
title: "Permutation and Combination"
date: 2019-03-04
excerpt: 
tags: "mathematics"
comments: true
---

# Permutation

$$P^m_n=\frac{n!}{(n-m)!}$$


# Combination

$$C^m_n=\frac{n!}{m!(n-m)!}=\frac{n(n-1)\cdots(n-m+1)}{m!}=\big({n \atop m}\big)$$



# Entry
|LABEL|SYMBOL|
|:-:|:-:|
|随机现象
|随机实验|
|随机事件（事件）|$A=\{...\}$|
|必然事件|$\varOmega$|
|不可能事件|$\varnothing$|
|基本事件|$A = \{\omega\}$|
|样本点|$\omega$|
|样本空间|$\varOmega = \{\omega_1,\omega_2,...\omega_n\} = \{\omega_i \}^n_{i=1}$|
|复合事件|
|包含|$A\subset B$|
|相等|$A=B$ $\vert$ $A \subset B \land B\subset A$|
|和事件<sup>1</sup>|$A \cup B=AB=\{\omega \isin A \lor \omega \isin B\}$|
|积事件<sup>2</sup>|$AB=A\cap B=\{\omega\isin A \land \omega\isin B\}$|
|互不相容事件（互斥事件）|$A\cap B=\varnothing$|
|对立事件（互逆事件）|$A \cap B=\varnothing \land A \cup B=\varOmega \vert A \cap \overline{A}=\varnothing \land A \cup \overline{A} = \varOmega$|
|差事件|$A-B=A \cap \overline{B}=A\overline{B}=\{\omega \isin A \land \omega \notin B \}$
|概率|$P(A)$|
|频率|$f_n(A)=\frac{m}{n}$|
|（有限）划分|$B_1,B_2,\dots, B_n:B_i\cap B_j=\varnothing \vert i\not=j, \textstyle{\bigcup^n_{i=1}A_i=\varOmega}$|
|随机变量|$X(\omega): \omega\isin\varOmega, P\{\omega\vert X(\omega)\leqslant x:x\isin R \}$
|分布函数|$F(x)=P\{X(\omega)\leqslant x\}$|
|分布律|$P_i=\{X(\omega)=x_i\}=p_i,i=1,2,\dots$|
|$n$重伯努利试验<br/>（伯努利概型）|
|随机变量```.```离散型```::```二项分布|$X\sim B(n,p)$|
|随机变量```.```离散型```::```泊松分布|
|随机变量```.```连续型```::```概率密度|
|概率曲线|
|随机变量```.```连续型```::```连续分布|
|随机变量```.```连续型```::```均匀分布|$X\sim U(a,b)$
|随机变量```.```连续型```::```指数分布|$X\sim E(\lambda)$
|随机变量```.```连续型```::```正态分布|$X\sim N(\mu,\sigma^2)$
|随机变量```.```连续型```::```指数分布```::```无后效性（无记忆性）|$P\{X>t+s\vert X>t\}=P\{ X>s \}$




# De Morgan Law

$$\overline{A\cup B}=\overline{A}\cap \overline{B},\overline{A \cap B}=\overline{A} \cup \overline{B}$$


$$\overline{\bigcap^{(\infin) \atop n}_{i=0} A_i}=\bigcup^{(\infin) \atop n}_{i=0} \overline{A_i}, \overline{\bigcup^{(\infin) \atop n}_{i=0} A_i}=\bigcap^{(\infin) \atop n}_{i=0} \overline{A_i}$$

# 古典概率

# 条件概率

$\displaystyle{P(A|B)=\frac{P(AB)}{P(B)}}$

# 概率加法定理

基本形式：$P(A\cup B)=P(A)+P(B)-P(AB)$

推广形式： |$\displaystyle{P \bigg( \bigcup^{(\infin) \atop n}_{i=1} A_i \bigg)=\sum^{(\infin) \atop n}_{i=1}P(A_i)-}$

# 条件概率```::```乘法公式

基本形式：$\displaystyle{P(AB)=P(B)P(A\vert B):P(B)>0}$, $\displaystyle{P(AB)=P(A)P(B \vert A):P(A)>0}$

推广形式：$\displaystyle{P \bigg( \prod^{(\infin) \atop n}_{i=1}A_i \bigg)=P(A_1)\frac{P(A_1A_2)}{P(A_1)}\frac{P(A_1A_2A_3)}{P(A_1A_2)}\cdots\frac{P(A_1A_2\cdots A_n)}{P(A_1A_2\cdots A_{n-1})}}$

# 全概率公式

$\displaystyle{P(A)=\sum^{n}_{i=1}P(AB_i)=\sum^{n}_{i=1}P(B_i)P(A\vert B_i)}$




## 全概率::抽签

# 贝叶斯公式

$\displaystyle{P(B_i\vert A)=\frac{P(AB_i)}{P(A)}=\frac{P(B_i)P(A\vert B_i)}{\displaystyle{\sum^n_{k=1}P(AB_k)}}=\frac{P(B_i)P(A\vert B_i)}{\displaystyle{\sum^n_{k=1}P(B_k)P(A\vert B_k)}}}$

$$\therefore P(B_i\vert A)=\frac{P(B_i)P(A\vert B_i)}{\displaystyle{\sum^n_{k=1}P(B_k)P(A\vert B_k)}}$$

# Characteristics of Probability

- 非负性
- 规范性
- 可列可加性/有限可加性
基本形式：$P(A \cup B)=P(A)+P(B)$ $\vert$ $A \cap B=\varnothing$
推广形式：$\displaystyle{P \bigg( \bigcup^{(\infin) \atop n}_{i=1} A_i \bigg)=\sum^{(\infin) \atop n}_{i=1}P(A_i)}$ $\vert$ $\displaystyle{\bigcap^{(\infin) \atop n}_{i=1} A_i=\varnothing}$
- 单调性 $A\subset B:P(A)\leqslant P(B),P(A-B)=P(A)-P(B)$

# 事件，概率，矩阵

样本空间$A=\{ x_1,x_2,\cdots,x_n \}$，每一个事件$x_i$导致另一个事件$x_j$发生的概率可以以矩阵的形式表现。
$* x_i,x_j\isin A, i,j=1,2,\cdots,n$

- table

||$x_1$|$x_2$|$\cdots$|$x_n$|
|:-:|:-:|:-:|:-:|:-:|
|$x_1$|$p_{11}$|$p_{12}$|$\cdots$|$p_{1n}$|
|$x_2$|$p_{21}$|$p_{22}$|$\cdots$|$p_{2n}$|
|$\vdots$|$\vdots$|$\vdots$|$\ddots$|$\vdots$|
|$x_n$|$p_{n1}$|$p_{n2}$|$\cdots$|$p_{nn}$|

- matrix

$$\begin{bmatrix}
p_{11} & p_{12} & \cdots & p_{1n} \\
p_{21} & p_{22} & \cdots & p_{2n} \\
\vdots & \vdots & \ddots & \vdots \\
p_{n1} & p_{n2} & \cdots & p_{nn} \\
\end{bmatrix} 
\begin{bmatrix}
x_1 \\
x_2 \\
\vdots \\
x_n \\
\end{bmatrix}=
\begin{bmatrix}
x_1 \\
x_2 \\
\vdots \\
x_n \\
\end{bmatrix}$$

# Distribution Function
## Definition

- Initial Definition

$$F(x)=P\{X(\omega)\leqslant x\}$$

- Variant

$$\{X(\omega)> x\}=P\{\varOmega\cap \overline{X(\omega)\leqslant x}\}=1-F(x)$$ $$P\{ x_1 < X(\omega)\leqslant x_2 \}=P\{X(\omega) \leqslant x_2\}\cap P\{\overline{X(\omega) \leqslant x_1} \}=F(x_2)-F(x_1)$$

## Characteristics

- $F(x_1)\leqslant F(x_2):x_1\leqslant x_2$
- $0\leqslant F(x) \leqslant 1$. Besides, $\displaystyle{\lim_{x\to 0}F(x)=0}$, $\displaystyle{\lim_{x\to +\infin}F(x)=1}$.
- $F'(x)=F_+(x)$ (the distribution function continuous at right)

# Note

[1] As for **AND** event, a simplified or infine form lies as: $\displaystyle{\bigcup^{(\infin) \atop n}_{i=0} A_i}$.

[2] As for **OR** event, a simplified or infine form lies as: $\displaystyle{\bigcap^{(\infin) \atop n}_{i=0} A_i}$.                                                        

[3] 常用变换

基本形式：$P(A\cup B)=1-P(\overline{A}\cdotp \overline{B})$
推广形式：$\displaystyle{P\bigg(\bigcup^{(\infin) \atop n}_{i=1} A_i\bigg)=1-P\bigg(\bigcap^{(\infin) \atop n}_{i=1}\overline{A_i} \bigg)}$

[4] 常用变换

$$\sum^{n}_{i=0}\bigg({n \atop i}\bigg)=2^n$$

# Random Experiment```::```Bernoulli Experiment
$$$$


# Discrete Type and Continuous Type

|Discrete Type|Continuous Type|
|:-|:-|
|$P_i=\{X(\omega)=x_i\}=p_i$ <br />$* \text{[1] }p_i\geqslant 0$<br/>$\text{ }\text{ [2] }\displaystyle{\sum^{(\infin)\atop n}_{i=1}p_i=1}$|$F(x)=\displaystyle{\int ^{x(+\infin)}_{-\infin}f(u)\text{d}u}$ <br/> $*\text{[1] }f(u)>0$ <br/> $\text{ }\text{ [2] }\displaystyle{\int^{x(+\infin)}_{-\infin}f(u)\text{d}u=1}$<br/>$\text{ }\text{ [3] }P\{x_1\leqslant X\leqslant x_2\}=\displaystyle{\int^{x_2}_{x_1}f(x)\text{d}x}$|

# Discrete Distribution Type```::```Binary Distribution & Possion Distribution

**Binary distribution** and **Possion Distribution** don't stand two independent types of random variable distribution. The later based on a certain condition evolves from the former, which is 

$$n\to \infin$$

## Binary Distribution

$$P\{X=k\}=\Big({n \atop k}\Big)p^k(1-p)^{n-k}:k=1,2,\dots,n$$

as well as $X \sim B(n,p)$.

## Possion Distribution

$$P\{X=k\}=\frac{\lambda^k}{k!}\text{e}^{-\lambda}:k=1,2,\dots,n;\lambda>0$$

as well as $X\sim P(\lambda)$, which evolves from

$$\lim\limits_{n\to \infin}B(n,p)=P(\lambda)=\frac{\lambda^k}{k!}\text{e}^{-\lambda}:\lim\limits_{n\to \infin}np_n=\lambda >0$$

> ***Q***: How to comprehense the condition equivalent $\displaystyle{\lim\limits_{n\to \infin}np_n=\lambda}$? <br/>***A***: $\displaystyle{\{\frac{1}{n}\}}$ and $\{p_n\}$ stand identify order and thus both infinite small array.

# random variable```::```Continuous Distribution Type```::```uniform distribution & exponential distribution & Gaussian distribution

||Uniform|Exponential|Gaussian|
|:-:|:-:|:-:|:-:|
|expression|$X\sim U(a,b)$|$X\sim E(\lambda)$|$X\sim N(\mu,\sigma^2)$|
|Probability Density|$\displaystyle{f(x)=\begin{cases}0 & x\leqslant a \\ \displaystyle{\frac{1}{b-a}} & a<x<b \\ 0 & b\leqslant x\end{cases}}$|$\displaystyle{f(x)=\begin{cases}0 & x \leqslant\alpha \\ \lambda\text{e}^{-\lambda x}& \alpha < x\end{cases}}$|$\displaystyle{f(x)=\frac{1}{\sigma \sqrt{2\pi}}\exp{-\frac{(x-\mu)^2}{2\sigma ^2}}}$

## random variable```::```Continuous Distribution Type```::```stdGaussianDistribution

$$f(x)=\frac{\text{e}^{-\frac{x^2}{2}}}{\sqrt{2\pi}}$$

as well as $X\sim N(0,1)$.

 


$$\begin{bmatrix}

 &  a_{1,6}\frac{U}{80.84\%TS}+(1-\frac{U}{80.84\%TS})a_{1,7} & \cdots & a_{1,9}\frac{U}{80.84\%TS}+(1-\frac{U}{62.35\%\times80.84\%TS})a_{1,10} & a_{1,10}\frac{U}{62.35\%\times80.84\%TS}+(1-\frac{U}{62.35\%\times80.84\%TS})a_{1,11} & \cdots \\ 

&&\frac{U}{TS}a_{1,2} & \cdots & \vdots & \vdots & \cdots & \vdots&\vdots & \cdots\\ 

&&&\ddots &\vdots & \vdots & \cdots & \vdots&\vdots& \cdots\\

&&&& \frac{U}{TS}a_{6,5} & \vdots & \cdots &\vdots&\vdots& \cdots\\ 

&&&&& \frac{U}{80.84\%TS}a_{6,7}  & \cdots&\vdots&\vdots& \cdots \\ 

&&&&&&\ddots &\frac{U}{80.84\%TS}a_{8,9}&\vdots& \cdots\\ 

&&&&&&&& \frac{U}{62.35\%\times80.84\%TS}a_{10,11} & \cdots \\ 

&&&&&&&&& \ddots
\end{bmatrix}$$

$$\begin{bmatrix}
a_{0,0}=TS &  \\
 TS-U & U\\
(1-\frac{U}{TS})a_{0,1} & a_{1,1}\frac{U}{TS}+(1-\frac{U}{TS})a_{1,2} &\\
\vdots & \vdots &\\ 
a_{0,6}=(1-\frac{U}{TS})a_{0,5} & \\
a_{0,7}=(1-\frac{U}{80.84\%TS})a_{0,6} & \\
\vdots &\\
 a_{0,10}=(1-\frac{U}{80.84\%TS})a_{0,9} & \\
 a_{0,11}=(1-\frac{U}{62.35\%\times80.84\%TS})a_{0,10} & \\
 \vdots
\end{bmatrix}$$