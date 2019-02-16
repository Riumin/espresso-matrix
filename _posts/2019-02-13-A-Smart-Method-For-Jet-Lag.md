---
layout: post
title: "A Smart Method for Jet Lag"
date: 2019-02-13
excerpt: "It feels smart!"
tags: [code] [C++]
comments: true
---

# Introduction 
Well, everything took place because of the huge amount of travel fund used during my 2-week journey in the US. I have used mom's credit card and there is jet lag if I wanna check my record with the warning message she received. There are in total about 20 messages and it feels like a fool to manually add up the jet lag. Therefore I producted a piece of code for this work.

# Source Code
```cpp
#include <iostream>
#include <stdio.h>

int main() {
    int a[20],b[20],c[20],d[20];
    for (int i =0; i<20; i++) {
        std::cin >> a[i] >> b[i] >> c[i] >> d[i];
    }
    
    for (int i =0; i<20; i++) {
        if(c[i]>13) c[i] -= 13;
        else if(a[i]==2 && b[i]==1) {a[i]=1;b[i]=31;c[i] +=24; c[i]-=13;}
        else {b[i] -=1; c[i] +=24; c[i]-=13;}
        std::cout << a[i] << "." << b[i] << " " << c[i] << ":" << d[i] << std::endl;
    }
    return 0;
}
```
**Complier:** g++ <br />
**OS:** macOS Mojace ~ version 10.14.2(18C54)

# Input
![]({{site.baseurl}}/features/Input.png)

# Output
![]({{site.baseurl}}/features/Output.)