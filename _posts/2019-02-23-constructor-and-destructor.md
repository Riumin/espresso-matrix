---
layout: post
title: "Constructor and Destructor"
date: 2019-02-23
tags: "code C++ note C++_Primer_Plus"
---


# ```Stock```
You may first have to get throught the **self-defined** ```class```, ```Stock```, in case of further instance.
```cpp
// stock.h

#ifndef STOCK00_H_
#define STOCK00_H_

#include <string>

class Stock
{
    private:                    // ```private``` unnecessarily explicit
        std::string company;    // 1. the name of ltd.,co.
        long shares;            // 2. the amount of stocks in storage
        double share_val;       // 3. the price of each stock
        double total_val;       // 4. the prive of the whole stocks 
        void set_tot() { total_val=shares * share_val;}
        // a peivate method above defined locally rather in another file

    public:
        void acquire(const std::string & co, long n, double pr);    // 1. to gain stocks
        void buy(long num, double prive);                           // 2. to sell out stocks
        void sell(long num, double price);                          // 3. to add up stocks
        void update(double price);                                  // 4. to refresh the price of stocks 
        void show();                                                // 5. to display the info of stocks in storage    
        Stock(const std::string &_company_,long _shares_=0,double _share_value=0.0);            // the constructor of the class Stock
		Stock() {};
		~Stock() {};

		double total() const {return total_val};
};

# endif
```
```cpp
// stock.cpp


```

Here you may find something interesting, which lies as some ```public``` functions named after the class ```Stock```. It puzzles you with ease, yet we still have to figure them out, one by one.

# Constructor

It's believed you have noticed a specified function accepts three parameters, named after the class ```Stock```. It benefits if we first analyse it.

<table border="0">
<tr>
<td colspan="2" align="center"><code>Stock(const std::string &_company_,long _shares_=0,double _share_value=0.0);</code></td>
</tr>
<tr>
<td align="left">Parameters</th><th align="left"><code>const std::string &_company_</code><br/><code>long _shares_</code><br/><code>double _share_value</code></td>
</tr>
<tr>
<td>Return</td>

</tr>
</table>

Congratulations if you notice some relevance between those parameters and the ```private``` members. Indeed, as long as a constructor aims to initialize a new-created class, it's supposed to be so.

> Note <br/> A constructor is to initialize a newly created class.

However, there are more than 3 members in the class ```Stock```, the reason for the existence of the inline function, ```void set_tot() { total_val=shares * share_val;}``` in the ```private``` part. It's of great possibility that it will be called amid the definition of ```Stock```, as we employ separated processing technique here.

# Default Constructor

What if no arguments provided at the very beginning of a newly created ```Stock``` object, which is to say, it cannot be initialized when created. Factually, C++ compiler forbids such action. At the same time, a **default constructor** is as well necessary for the initialization without any manual providing with arguments.

> Note <br/> A default constructor called when no arguments manually provided when an object newly created.

One thing to mention: the compiler will provided a default constructor when **no constructor declared or defined** for a self-defined class. We don't exactly know what it like, mayhap just simple ```Stock::Stock() {}```, yet that's not our business.

> Note <br/> Only when no constructor declared or defined, the compiler automatically produce a constructor.

So far as the default constructor is aimed at handling the initialization without manually provided arguments, there are 2 methods to get it solved: **default argument** and **function overloading**.

It's easy to understand how default arguments work for this issue(If you forget about anything about default arguments, please check the post []() or look up the book *C++ Primer Plus** for help), yet another method, function overloading, could cause a totally different consequence. The overloaded function ```Stock()``` in the code of ```Stock``` accepts no parameter, just corresponding to a command aimed at creating a new object which calls the constructor yet provides no argument.

What's up after the overloading constructor ```Stock::Stock()``` declared in the header file may draw your curiosity. Honest to say, anything. The definition of ```Stock::Stock()``` is able to do what equivalent to default arguments, yet as well is it available to do nothing, just like the simple ```Stock::Stock() {}```. You can be surprised that we have just warned the error, no arguments for initialization of a newly created object, which is forbidden by the compiler, but it is true. It's just like to create a variable without providing it with a value for initialization - the compiler just cannot distinguish a self-defined class with self-defined constructor out of default edition. 

> Note <br/> Once a constructor provided explicitly, its default edition is a must.

# Destructor

A destructor is designed to free the storage from an object. Just like constructor, a destructor cannot be called by its object as what done to other member functions. It's the program itself that decides when to call destructor. Besides no return, destructor do not accept any parameter.
<table border="0">
</table>

You may appear to ask about the implicit declaration of destructor. Sometimes an implicit destructor is well done, but for other situations it is supposed to be explicit. For instance, if a new obejct is created with ```new```, an explicit destructor must be provided as it will be called when ```free``` called to free the storage of a dynamic variable. For another instance, if the object created as an auto variable, it will be freed when the program ends. Implicit destructor is ok for such situation.

> Note <br/> An implicit destructor is ok for auto object.

# Appendix

## ```const``` after function header

If we defined one member function of ```Stock```, ```Stock::show```, we may use ```const``` to restrict its access to reading only. Not only the parameter and return, the whole progress can be restricted reading only as well, like the definition below.

```cpp
void show(const std::string *_company, long _shares, double _share_val, double _tot_val) const {        // Here the const restrict the function to only read the parameter during its operation
std::cout << "\nCompany: " << *_company
            "\nShares: " << _shares
            "\nShare Value: " << _share_val
            "\nTotal Value: " << _tot_val << std::endl;
]
```

> Reference: Stephen Prata, *C++ Primer Plus*, P.p.524 ~ Class Constructors and Destructors