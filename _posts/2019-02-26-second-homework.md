---
layout: post
title: "A Brief Analysis of the Second Homework"
date: 2019-02-26
excerpt: ""
tags: "Windows cmd C++ code homework"
comments: true
---

> Original guidance: https://github.com/guyaqi/backups/tree/master/notes cpp1-2.md ~ cpp1-5.md

# Task

> 作业:设计一个改变控制台配色的程序，预先搭配好三五个配色，在执行程序的时候可以随时切换，要求使用方向键进行控制，界面看起来就像这样。

```cassandraql

----------------------------------



            Colors
        1. White & Green
    ->  2. Red & Grey
        3. White & Black
        4. White & Blue

       This is a test text.

----------------------------------
```
箭头可以使用方向键控制，并且可以切换到指定的配色。

最好选项就用那个选项指示的配色显示，这样看起来更直观。

# Analysis

## From the Very Beginning

As for the case above, there are some apparent elements deserve attention.

- a constant displayed window
- a movable sign over each option
- changeable pre-designed along with the switch of options

It's of certainty you could just combine all those factors above simply. Create four ```char``` array ('cause ```std::string``` cannot be accepted by the function ```system``` as a parameter), set a whole framework of logical branches, fresh the display when necessary - a certain key pressed - and launch ```system``` syntax to change the color scheme of the present console. All those realization can be as simple as the following case:

```cpp
// This tiny program works more like a plug which onced include a certain heading file works along with the main program
// To display it well, an additional main function will be provided

#include <Windows.h>
#include <stdio.h>
#include <stdlib.h>
#include <iostream>

void plug(void);

char window[173] = "-----------------------\n\n Choose a color scheme\n\n   white & green\n   red & grey\n   white & black (default)\n   while & blue\n\n   Press A to quit   \n\n-----------------------\n";
COORD ptr = { 0,6 };
char scheme[][64] = {
	"color 72",
	"color 48",
	"color 70",
	"color 71"
};
CONSOLE_CURSOR_INFO null_cursor = { 100,false };
HANDLE handle;

void plug(void) {
	system("cls");
	SetConsoleCursorPosition(handle, { 0,0 });
	std::cout << window;
	SetConsoleCursorPosition(handle, ptr);
	putchar('->');

	while (true) {

		if (GetKeyState(0x41) < 0) {
			GetKeyState(0x41);
			system("cls");
			break;
		}

		if (GetKeyState(VK_UP) < 0 || GetKeyState(VK_DOWN) < 0) {

			system("cls");
			SetConsoleCursorPosition(handle, { 0,0 });
			std::cout << window;
			SetConsoleCursorPosition(handle, ptr);
			putchar('>');

			if (GetKeyState(VK_UP) < 0) {
				GetKeyState(VK_UP);
				if (ptr.Y > 4) ptr.Y -= 1;
				else ptr.Y = 7; 
				}
			else {
				GetKeyState(VK_DOWN);
				if (ptr.Y < 7) ptr.Y += 1;
				else ptr.Y = 4;
				}
		}

		switch (ptr.Y-4) {
		case 1: system(scheme[0]); break;
		case 2: system(scheme[1]); break;
		case 3: system(scheme[2]); break;
		case 4: system(scheme[3]); break;
		default: break;
		}
	}
}

int main() {
	handle = GetStdHandle(STD_OUTPUT_HANDLE);
	SetConsoleCursorInfo(handle, &null_cursor);
	while (true) {
		std::cout << "This is a main function provided for test, which prints random numeric unless manually stopped.\nTo test the plug, please press A, or press ESC to quit the program.\n\n";

		if (GetKeyState(0x41) < 0) {
			GetKeyState(0x41);
			plug();
		}
		if (GetKeyState(0x1B) < 0) {
			GetKeyState(0x1B);
			return 0;
		}
		std::cout << rand() << std::endl;
		system("cls");
	}

	return 0;
}
```

Run the code above, you may get the consequence below:

<img src="{{site.url}}/assets/img/0x0000.png"  alt="0x0000" align="center"/> <br/>
<img src="{{site.url}}/assets/img/0x0001.png"  alt="0x0001" align="center"/>

If you find something ridiculous in the 2nd image, you are totally right! The case above is my first edition, and of course, an edition of failure. A complex combination of several factors, not so readable sign and variable, with even constantly "shining" window case the *outstream* syntax is indeed scoped in a loop block!

Sounds like easy when the criticism done, un-huh? And what if told you are absolute wrong since the very beginning after a mess of checking the reference? That's cruel, but it is true.

## Restart with OOP Thought: To Create a ```Scheme```

What if more schemes provided? What if a certain variable requires modification? All those questions strike directly towards the core mistake of the code: **WHAT IT DESIGNED FOR?**

The tune is so synonymously with the so called OOP (Object Oriented Programming) thought, which exactly aims at achieve what the code itself is designed for. Let's see, just take it an attempt. **WHO**'s the code designed for? **WHAT**'s the code designed for? And most importantly, (at least for developers) **HOW**'s the code designed?

**As long as the window provides several schemes, a SCHEME should be a basic variable, RATHER THAN any datum in the code.** What a scheme is? It is an option, its function displayed in the window. It can be chosen or not, according whether there is a signal right to the scheme. For the invisible, it's as well able to change the console color.

> Note:<br/>A scheme is a basic variable for our achievement, and the factors below should be included:<br/>1. Display the scheme<br/>2. Display the sign when chosen<br/>3. Change the color of the scheme

Let's turn those concept into code achievement:

> Note:<br/>A scheme should involve the following datum and function:<br/>1. a ```const char []``` or ```const std::string``` for display<br/>2. different types of ```const char *``` or ```const std::string``` with signal or not to mark whether chosen<br/>3. a ```const char[]``` for the function ```void system(char *)``` in order to change the console color<br/>4. the function ```void convert(void)``` for instance to change the color and display the scheme when chosen<br/>5. the function ```void suspend(void)``` for instance to display the scheme when not chosen

'cause we compile the code as a single-threaded program (at the same time, such a simple program do not deserve too much storage and memory) the program can only print a single unit of datum once, we have to change the cursor frequently in order to achieve the print of each scheme. Thus, the datum below are as well needed to reset the cursor:

> Note:<br/>5. ```struct COORD { short X, short Y }```<br/>6. ```HANDLE```. This is specified for Windows if the cursor position modified

Finally, here we go a scheme, for every factor above included.

```cpp
// Header.h

#ifndef _HEADER_H_
#define _HEADER_H_

#include <iostream>
#include <Windows.h>
#include <string>

void plug(void);

class Scheme {
private:
	std::string scheme_on;
	std::string scheme_off;
	COORD position;
	HANDLE handle;
	char syntax[16];
public:
	Scheme(std::string *_scheme, short X, short Y,char background,char foreground) {
		scheme_on = "-> " + *_scheme;
		scheme_off = "   " + *_scheme;
		syntax[0] = 'c'; syntax[1] = 'o'; syntax[2] = 'l'; syntax[3] = 'o'; syntax[4] = 'r'; syntax[5] = '\0';
		syntax[6] = background; syntax[7] = foreground;
		position = {X,Y};
		handle = GetStdHandle(STD_OUTPUT_HANDLE);
	}
	Scheme() {};
	~Scheme() {};
	void convert() {
		system(syntax);
		SetConsoleCursorPosition(handle,position);
		std::cout << scheme_on << std::endl;
	}
	void suspend() { 
		SetConsoleCursorPosition(handle,position);
		std::cout << scheme_off << std::endl;
	}
};
#endif
```

Some factor supposed to be achieved at the same time, those factors are combined in one function. Some techniques as well deserve attention, such as assign *on* and *off* state scheme with just one argument in constructor, pass the pointer as parameter to save storage, etc.

## To Develop a ```Plug``` with ```Scheme```

So much has changed so far, yet not the whole. More exactly, we have just redesigned the most underlying level of the task. Factually, logical branch framework keeps its value and we only need to change the code inside the logic branch framework, which even make the logic more clear.

```cpp
// Source01.cpp

#include "Header.h"
#include <stdio.h>
#include <string>
#include <Windows.h>

int choice = 3;		
enum {TOTAL=4};
const short BEGINNING = 3;

std::string scheme[TOTAL] = {
	"white & green",
	"red & grey",
	"white & black (default)",
	"while & blue"
};

void plug() {
	system("cls");

	Scheme prescheme[TOTAL] = {
		Scheme(&scheme[0],0,4,'7','8'),
		Scheme(&scheme[1],0,5,'4','8'),
		Scheme(&scheme[2],0,6,'7','0'),
		Scheme(&scheme[3],0,7,'4','1')
	};

	printf("-----------------------\n\n Choose a color scheme\n\n");
	for (int i = 0; i < TOTAL; i++) {
		if (i == choice - 1) prescheme[i].convert();
		else prescheme[i].suspend();
	}
	printf("\n   Press A to quit   \n\n  class edition v1.0   \n-----------------------\n");

	while (true) {

		for (int i = 0; i < TOTAL; i++) {
			if (i == choice - 1) {
				prescheme[i].convert();
			}
			else prescheme[i].suspend();
		}

		
			if (GetKeyState(VK_UP) < 0 || GetKeyState(VK_DOWN) < 0 || GetKeyState(0x41) < 0) {


				if (GetKeyState(VK_UP) < 0) {
					GetKeyState(VK_UP);
					if (choice <= 0) choice = 3;
					else choice -= 1;
					
				}
				if (GetKeyState(VK_DOWN) < 0) {
					GetKeyState(VK_DOWN);
					if (choice >= TOTAL) choice = 0;
					else choice += 1;
					
				}
				if (GetKeyState(0x41) < 0) break;
			}
		
	}
}
```

The function ```plug``` aimed to work as a plug during ```main```'s running. To avoid the "shining" problem, ```plug``` separates the logical branch which distinguish a key from other code blocks.

Everything's done, why not find a function to test its function?

## Practice: to Test ```plug``` in ```main```

Considering a main function below provide:

```cpp
// Source02.cpp

#include "Header.h"
#include <Windows.h>
#include <iostream>

int main() {
	// the code just set the cursor invisible
	// with nothing to do with function
	HANDLE handle = GetStdHandle(STD_OUTPUT_HANDLE);
	 CONSOLE_CURSOR_INFO null_cursor = { 100,false };
	 SetConsoleCursorInfo(handle, &null_cursor); 

	while (true) {
		std::cout << "This is a main function provided for test, which prints random numeric unless manually stopped.\n"
			"To test the plug, please press A, or press ESC to quit the program.\n\n"
			"\n\nclass plug v1.0   by Shaun Leo\n";

		while (true) {
			if (GetKeyState(0x41) < 0) {
				// GetKeyState(0x41);
				plug();
				system("cls");
				break;
			}
			if (GetKeyState(VK_ESCAPE) < 0) break;
			SetConsoleCursorPosition(handle, { 0,3 });
			std::cout << rand() << std::endl;
		}
		if (GetKeyState(VK_ESCAPE) < 0) break;
	}
	// SetConsoleCursorPosition(handle, { 0,6 });
	// system("pause");
	return 0;
}
```

Compiler ```Header.h```, ```Source01.cpp``` and ```Source02.cpp``` together, you will get the following consequence:

<img src="{{site.url}}/assets/img/0x0002.png" alt="0x0002" align="center"> <br/>
<img src="{{site.url}}/assets/img/0x0003.png" alt="0x0003" align="center">

Everything well done so far.