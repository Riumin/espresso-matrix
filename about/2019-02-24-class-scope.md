---
layout: post
title: "Class Scope"
date: 2019-02-24
tags: "code C++ note C++_Primer_Plus"
comments: true
---

# Another Type of Scope: Class Scope

It's known there 2 types of scope: **global** and **local**.(If you forget about anything, please check *Storage Duration, Scope, and Linkage* in chapter 9 of the book *C++ Primer Plus*) Now there is another type in C++: **class**.

Mayhap we have met class scope during the definition of a class. Such scope is necessary when definition or declaration is out of its supposed scope, as for either datum or function. 

# Declaration and Definition

Here raises a true question about the constant scoped amid a class: whether it is possible to set a constant specific to a class, so that the object of the class can get its specific constant for some syntax, such as initialization.

You may take it for granted as what takes place implicit globally or locally scoped. The truth lies opposite, but WHY?

To get it down, we first have to distinguish **declaration** from **definition**. Very different from definition, **declaration is UNABLE to spare any storage**, which means a syntax like ```const int MAX_DEGREE = 12;```  implicit scoped in a class declaration cannot be passed by the compiler, 'cause the syntax ```const int MAX_DEGREE = 12;``` is factually a definition.

Let's take a view of the following code. Pay attention to the notation.

<table border="0">
    <tr>
        <td>Declaration</td>
        <td><code>class Name {<br/>
private:<br/>
std::string first_name;<br/>
std::string last_name;<br/>
public:<br/>
void display();<br/>
Name(const std::string * _first_name, const std::string * _last_name);<br/>
~Name();<br/>
};</code></td>
    </tr>
        <tr>
        <td rowspan="3">Definition</td>
        <td><code>void Name::display() { <br/>std::cout << this->first_name << " " <br/><< this->last_name << std::endl; }<br/><br/>
Name::Name(const std::string * _first_name, const std::string * _last_name) {<br/> this->first_name = _first_name; <br/>this->last_name = _last_name; }<br/><br/>
Name::~Name() {};</code></td>
        </tr>
        </table>
       
Try to find the similarity between both code blocks above and below.

```cpp
#include <iostream>

void inline display() const;                                         // function header, as well as the declaration of a function.

int main() {
    display();
    return 0;
}

void inline display const { std::cout << "This is for test.\n" }     // function definition.
```

```cpp
#define Max 99;             // Is it a declaration? If so, how will COMPILER handle the constant?
const int Min = 0;          // Is it a definition? If so, how will PROGRAM handle the constant?
enum { Min, Max=99 };       // Is it a declaration? If so, how will COMPILER handlt the constant?
```

Have you found out the difference between declaration syntax and definition syntax? What causes the difference? Anyway, the fact is, **there is actually no storage for a declaration syntax**, no matter as for a variable or a function. **You cannot find a pointer towards a variable or function declared, but defined.**

THEREFORE, if any constant set to a class, some other way must be considered. One most recommended method is ```enum```, for its truthfully specific to a class, not like other methods. However, other scheme will as well be provided below, while further more about ```enum``` will soon be discussed.

```cpp
class Name {
    private:
        enum { LENGTH = 0x100 };      // constant *this::LENGTH available, equivalent to 256
        static int WIDTH = 0x100;     // constant ::WIDTH available
        std::string first_name;
        std::string last_name;
    public:
        void display();
        Name(const std::string * _first_name, const std::string * _last_name);
        ~Name() {}
};
```

# Further More about Enumeration

