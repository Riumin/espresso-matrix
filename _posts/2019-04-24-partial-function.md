bounded
unbounded
interior point
boundary point
dependent variable <br/> (*as well as* input variable)
independent variables <br/> (*as well as* input variables)
Domain
level curve
level surface
graph or surface

# Limit (Bounded)

$\begin{cases}\vert f(x)-L \vert < \epsilon, & \forall \epsilon > 0 \\ \\ 0< \vert x-x_0 \vert < \delta, & x_0 \isin D_f, \exist \delta >0 \\ \end{cases} \implies \lim\limits_{x\to x_0}f(x)=L$$
<br/>

$\begin{cases}\vert f(x,y)-L \vert < \epsilon, & \forall \epsilon > 0 \\ \\ 0< \sqrt{(x-x_0)^2+(y-y_0)^2}< \delta, & (x_0,y_0) \isin D_f, \exist \delta >0 \\  \end{cases} \implies \lim\limits_{x\to x_0}f(x)=L$
<br/>

$\begin{cases}\vert f(x_1,\dots,x_n)-L \vert < \epsilon, & \forall \epsilon > 0 \\ \\ 0< \sqrt{\displaystyle{\sum^n_{i=1}}(x_i-x_i')^2}< \delta, & (x_0,y_0) \isin D_f, \exist \delta >0 \\  \end{cases} \implies \lim\limits_{x\to x_0}f(x)=L$

$\blacksquare$ The expression $\displaystyle{\sum^n_{i=1}}(x-x_i)^2$ *as well as* $\lVert A-A' \rVert=\lVert (x_1,\dots,x_n)-(x_1',\dots,x_n')\rVert,A'\isin D_f$.

# Continuity (Continuous)

<div align="center" class="mermaid">
graph LR
id1(Defined) --> con((Continuous))
id2(Bounded) --> con
id3("Equivalent image and limit") --> con
</div>

$$\begin{cases}  \end{cases}$$

> **Continuity of Composites** <br/>
> If $f$ is continuous at $(x_0 , y_0)$ and $g$ is a single-variable function continuous at $f(x_0 , y_0)$ then the composite function $h = g\circ f$ defined by $h(x, y) = g\big( f(x, y)\big)$ is continuous at $(x_0, y_0)$.

# Derivative

<div align="center" class="mermaid">
graph LR
con((Continuous)) --> dif((differentiable))
ex(existent slope) --> dif
</div>
<br/>

$\displaystyle{\frac{\text{d}}{\text{d}x}f(x)=\lim\limits_{h\to 0}\frac{f(h+x_0)-f(x_0)}{h}}$

$\displaystyle{\frac{\text{d}^nf}{\text{d}x^n}=\frac{\text{d}^{n-1}f}{\text{d}x^{n-1}}\frac{\text{d}}{\text{d}x}f(x)}$

$\displaystyle{\frac{\text{d}}{\text{d}x}f(x,y_0)=\frac{\partial}{\partial x}f(x,y)=\lim\limits_{h\to 0}\frac{f(h+x_0,y_0)-f(x_0,y_0)}{h}}$

# Differential

$$\Delta y=\text{d}x+\omicron( \Delta x),y=f(x)$$

> **Take an attempt to comprehense partial differential of function with two parameters** <br/> Consider the expression $z=f(x,y)$ as an image from a point $(x,y)$ in a region *and* $\big(x,y,f(x,y)\big)$ in the 3-dimentional space as a vector, the change $\Delta z=f(\Delta x+x,\Delta y+y)-f(x,y)$ can be expressed in vector as $\big(\Delta x+x,\Delta y+y, f(\Delta x+x,\Delta y+y)\big)$. As long as a vector can be separated in diverse directions, which applies to $(\Delta x+x,\Delta y+y)$ as $(\Delta x+x,0)+(0,\Delta y-y)$ *and* 

$$\Delta z=\frac{\partial f}{\partial x}\Delta x+\frac{\partial f}{\partial y}\Delta y+\epsilon_1\Delta x+\epsilon_2\Delta y,z=f(x,y)$$

<br/>

|DIFFERENTIAL|VECTOR|
|:-:|:-:|
|$\begin{aligned}\Delta z&=f(\Delta x+x_0,\Delta y+y_0)-f(x_0,y_0) & \Delta z=\lang \Big(\Delta x,\Delta y,f(\Delta x+x_0,\Delta y+y_0)-f(x_0,y_0)\Big),(0,0,1)\rang\\ & &=\lang \Big(\Delta x,0,\Big)\rang \\ &= \Big(f(\Delta x+x_0,y_0)-f(x_0,y_0)\Big)+\Big(f(x_0,\Delta y+y_0)-f(x_0,y_0)\Big)\\&=\Bigg(\frac{\partial f}{\partial x}\Delta x+\omicron(\Delta x)\Bigg)+\Bigg(\frac{\partial f}{\partial y}\Delta y+\omicron(\Delta y)\Bigg)\\&=\frac{\partial f}{\partial x}\Delta x+\frac{\partial f}{\partial y}\Delta y+\epsilon_1\Delta x+\epsilon_2\Delta y \end{aligned}$|

<br/>

$$\frac{\text{d}w}{\text{d}t}=\frac{\partial w}{\partial x}\frac{\text{d}x}{\text{d}t}+\frac{\partial w}{\partial y}\frac{\text{d}y}{\text{d}t},w=f\big(x(t),y(t)\big)$$