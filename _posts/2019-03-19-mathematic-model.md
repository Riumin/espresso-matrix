

# from **differencial equation** to **difference equation**

$$\begin{aligned}\text{d}y+y\cdot\text{d}x=0\\f(\frac{k}{n})-f(\frac{k-1}{n})+f(\frac{k-1}{n})\cdot\frac{1}{n}=0\end{aligned}$$

Besides, $y=f(x)$, $n\to\infin$, $k=2,3,\dots,n$.


```mermaid
graph LR
移动端 ==json信号==> 服务器
服务器 ==POST==> ESP8266P
id1((家用wifi)) --> ESP8266P
id1 --> 移动端
ESP8266P ==> 主控核心-STM32ZET6
主控核心-STM32ZET6 ==> ESP8266A
主控核心-STM32ZET6 ==> ESP8266M
主控核心-STM32ZET6 ==> ESP8266C
主控核心-STM32ZET6 ==> ESP8266D
ESP8266A ==stm32==> 智能家门
ESP8266M ==> 智能灯光
ESP8266C ==> 智能窗帘
ESP8266D ==> 智能电饭煲
主控核心-STM32ZET6 -.-> id2[更多好物, 正在开发]
```