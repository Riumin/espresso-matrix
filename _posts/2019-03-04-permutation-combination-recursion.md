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
|（有限）划分|$B_1,B_2,\dots, B_n:B_i\cap B_j=\varnothing \vert i\not=j, \textstyle{\bigcup^n_{i=1}A_i=\varOmega}$

# De Morgan Law

$$\overline{A\cup B}=\overline{A}\cap \overline{B},\overline{A \cap B}=\overline{A} \cup \overline{B}$$

$$\overline{\bigcap^{(\infin) \atop n}_{i=0} A_i}=\bigcup^{(\infin) \atop n}_{i=0} \overline{A_i}, \overline{\bigcup^{(\infin) \atop n}_{i=0} A_i}=\bigcap^{(\infin) \atop n}_{i=0} \overline{A_i}$$

# 古典概率

# 条件概率

$\displaystyle{P(A|B)=\frac{P(AB)}{P(B)}}$

# 概率加法定理

基本形式：$P(A\cup B)=P(A)+P(B)-P(AB)$

推广形式： |$\displaystyle{P \bigg( \bigcup^{(\infin) \atop n}_{i=1} A_i \bigg)=\sum^{(\infin) \atop n}_{i=1}P(A_i)-}$

# 条件概率乘法公式

基本形式：$\displaystyle{P(AB)=P(B)P(A\vert B):P(B)>0}$, $\displaystyle{P(AB)=P(A)P(B \vert A):P(A)>0}$

推广形式：$\displaystyle{P \bigg( \prod^{(\infin) \atop n}_{i=1}A_i \bigg)=P(A_1)\frac{P(A_1A_2)}{P(A_1)}\frac{P(A_1A_2A_3)}{P(A_1A_2)}\cdots\frac{P(A_1A_2\cdots A_n)}{P(A_1A_2\cdots A_{n-1})}}$

# 全概率公式

$\displaystyle{P(A)=\sum^{n}_{i=1}P(AB_i)=\sum^{n}_{i=1}P(B_i)P(A\vert B_i)}$

# Note

[1] As for **AND** event, a simplified or infine form lies as: $\displaystyle{\bigcup^{(\infin) \atop n}_{i=0} A_i}$.

[2] As for **OR** event, a simplified or infine form lies as: $\displaystyle{\bigcap^{(\infin) \atop n}_{i=0} A_i}$.                                                        

$$P^m_n=\frac{n!}{(n-m)!}$$

$\frac{n(n-1)\cdots(n-m+1)}{m!}=\big( {n \atop m}\big)$. 

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


