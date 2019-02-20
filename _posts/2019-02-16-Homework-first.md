---
layout: post
title: "Notation for the first homework"
date: 2019-02-16
excerpt: Simple IO operation towards files
tags: "code C++ note"
comments: true
---

> Original guidance: [简单文件IO操作](https://github.com/guyaqi/backups/blob/master/notes/cpp1-1.md) <br />
> Additional reference: [cppreference](https://en.cppreference.com/w/)

# Function

## ```std::fopen``` <sup>```<cstdio>```</sup>

> Reference: [```std::fopen```](https://en.cppreference.com/w/cpp/io/c/fopen)

### Header

```cpp
std::FILE* fopen( const char* filename, const char* mode );
```

### Parameter

- ```const char* filename```
- ```const char* mode``` (For details, please check the appendix [```mode```](##```mode```))

### Return

- ```std::FILE*``` (For details, please check the entry [```std::FILE```](##```std::FILE```))

## ```std::fscanf``` <sup>```<cstdio>```</sup>

> Reference: [```std::fscanf```](https://en.cppreference.com/w/cpp/io/c/fscanf)

### Header

```cpp
int fscanf( std::FILE* stream, const char* format, ... );
```

### Parameter

- ```std::FILE* stream``` (For details, please check the entry [```std::FILE```](##```std::FILE```))
- ```const char* format``` (For details, please check the appdendix [```std::fscanf```](##```std::fscanf```))
- ```...``` (received arguments)

### Return

- ```int``` <br /> **Number of receiving arguments successfully assigned** (which may be ```0``` in case a **matching failure** occurred before the first receiving argument was assigned), or ```EOF``` if **input failure** occurs before the first receiving argument was assigned.

## ```std::fclose``` <sup>```<cstdio>```</sup>

> Reference: [```std::fclode```](https://en.cppreference.com/w/cpp/io/c/fclose)

### Header

```cpp
int fclose( std::FILE* stream );
```
### Parameter

- ```std::FILE* stream```

### Return

- int <br /> ```0```​ on success, ```EOF``` otherwise

## ```std::gets``` <sup>```<cstdio>```</sup>
> Reference: [```std::fopen```](https://en.cppreference.com/w/cpp/io/c/gets)

> Warning: You'd better use ```std::fgets``` instead of ```std::gets``` for its unsecurity of buffer overflowing. For details, please check [```std::fgets```](https://en.cppreference.com/w/cpp/io/c/fgets).

### Header

```cpp
char* gets( char* str );
```

### Parameter
- ```char* str``` <br /> character string to be written

### Return
- ```char*``` <br /> ```str``` on success, ```NULL``` on failure. <br />
If the failure has been caused by **end of file condition**, additionally sets the ```eof``` indicator (see [```std::feof```](https://en.cppreference.com/w/cpp/io/c/feof)) on ```stdin```. <br /> If the failure has been caused by some other error, sets **the error indicator** (see [```std::ferror```](https://en.cppreference.com/w/cpp/io/c/ferror)) on ```stdin```.

## ```std::fprintf``` <sup>```<cstdio>```</sup>

> Reference: [```std::fprintf```](https://en.cppreference.com/w/cpp/io/c/fprintf)

### Header
```cpp
int fprintf( std::FILE* stream, const char* format, ... );
```
### Parameter
- ```std::FILE* stream```
- ```const char* format``` (For details, please check the appendix [```std::fprintf```](##```std::fprintf```))
- ```...``` <br /> Arguments specifying data to print. <br />If any argument after default conversions is not the type expected by the corresponding conversion specifier, or if there are fewer arguments than required by format, the behavior is **undefined**. <br />If there are more arguments than required by format, the extraneous arguments are **evaluated and ignored**.

## ```std::fseek``` <sup>```<cstdio>```</sup>

> Reference: [```std::fseek```](https://en.cppreference.com/w/cpp/io/c/fseek)

### Header
```cpp
int fseek( std::FILE* stream, long offset, int origin );
```
### Parameter
- ```std::FILE* stream``` <br /> (There are some restritions and default settings for the mode of the stream. Please check the entry [```std::fopen```](##```std::fopen```-<sup>```<cstdio>```</sup>)) or the appendix [```mode```](##```mode```) for details.)
- ```long offset``` <br /> number of characters to shift the position relative to origin.
- ```int origin``` <br /> position to which offset is added. It can have one of the following values:<br /> [```SEEK_SET```](##```SEEK_SET```)<br /> [```SEEK_CUR```](##```SEEK_CUR```)<br /> [```SEEK_END```](##```SEEK_END```) <br /> Please check the appendix for details.
### Return
```0```​ upon success, **nonzero** value otherwise.

## ```std::malloc``` <sup>```<cstdlib>```</sup>

> Reference: [```std::malloc```](https://en.cppreference.com/w/cpp/memory/c/malloc)

### Header
```cpp
void* malloc( std::size_t size );
```
### Parameter
- ```std::size_t size``` <br /> number of bytes to allocate
### Return
On success, returns **the pointer to the beginning of newly allocated memory**. To avoid a memory leak, the returned pointer must be deallocated with ```std::free()``` or ```std::realloc()```. <br />
On failure, returns a **null pointer**.

## ```std::free``` <sup>```<cstdlib>```</sup>
### Header
```cpp
void free( void* ptr );
```
### Parameter
- ```ptr``` <br /> pointer to the memory to deallocate


# Type

## ```std::FILE```

# Constant

## ```SEEK_SET```
Argument to ```std::fseek``` indicating seeking from beginning of the file
## ```SEEK_CUR```
Argument to ```std::fseek``` indicating seeking from the current file position
## ```SEEK_END```
Argument to ```std::fseek``` indicating seeking from end of the file

# Source Code
```cpp
#include <cstdio>
#include <cstdlib>
#include <fstream>

int checkyou();
int checkme();
int check();

int checkyou(void) 
{
    FILE *file = std::fopen("you.txt","r");
    if (file) {
        fclose(file);
        return 1;
    } else {
        fclose(file);
        return 0;
    }
}

int checkme(void) 
{
    FILE *file = std::fopen("me.txt","r");
    if (file) {
        fclose(file);
        return 1;
    } else {
        fclose(file);
        return 0;
    }
}

int check() 
{
    char choice;
    std::scanf("%c",&choice);
    if(choice == 'Y') return 1;
    else {if(choice == 'n') return 0;
    else {
        std::printf("Invalid input!\n");
        return EOF;}
    }
}

int main() 
{
    if(!checkyou()) { std::printf("[warning] There is no such a file \"you.txt\", would you like to create a new one?[Y/n]\n");
        if(check()) {
            std::fopen("you.txt","w"); 
            std::printf("A new file \"you.txt\" has been added to the present path.\n");
        }
        else std::printf("The file will not be added.\n");

    } else {
        
       
    if(checkme()) {
        std::printf("The file \"me.txt\" has already existed, would you like to rewrite the file?[Y/n]");
        if(!check()) std::printf("The file \"me.txt\" will not be rewrite.\n"); EOF;
    }      

    FILE *you =std::fopen("you.txt","r");
    // FILE *me =std::fopen("me.txt","w");

    fseek(you, 0, SEEK_END);
    int size = ftell(you);
    fseek(you, 0, SEEK_SET);
    char *buf = (char*)std::malloc(size+1);
    buf[size] = 0;
    fread(buf, 1, size, you);

    // ?? std::snprintf(buf, size, "s",);
    std::ofstream me;
    me.open("me.txt");
    me << buf;

    std::fclose(you);
    // std::fclose(me);
    me.close();
    }
    return 0;
}
```

# Appendix

## ```mode```

<table>
<tr>
<th> File access <br />mode string
</th>
<th> Meaning
</th>
<th> Explanation
</th>
<th> Action if file <br /> already exists
</th>
<th> Action if file <br /> does not exist
</th></tr>
<tr>
<td> <code>"r"</code>
</td>
<td> read
</td>
<td> Open a file for reading
</td>
<td> read from start
</td>
<td> failure to open
</td></tr>
<tr>
<td> <code>"w"</code>
</td>
<td> write
</td>
<td> Create a file for writing
</td>
<td> destroy contents
</td>
<td> create new
</td></tr>
<tr>
<td> <code>"a"</code>
</td>
<td> append
</td>
<td> Append to a file
</td>
<td> write to end
</td>
<td> create new
</td></tr>
<tr>
<td> <code>"r+"</code>
</td>
<td> read extended
</td>
<td> Open a file for read/write
</td>
<td> read from start
</td>
<td> error
</td></tr>
<tr>
<td> <code>"w+"</code>
</td>
<td> write extended
</td>
<td> Create a file for read/write
</td>
<td> destroy contents
</td>
<td> create new
</td></tr>
<tr>
<td> <code>"a+"</code>
</td>
<td> append extended
</td>
<td> Open a file for read/write
</td>
<td> write to end
</td>
<td> create new
</td></tr>
<tr>
<td colspan="5"> File access mode flag <code>"b"</code> can optionally be specified to open a file <a href="/w/cpp/io/c#Binary_and_text_modes" title="cpp/io/c">in binary mode</a>. This flag has no effect on POSIX systems, but on Windows, for example, it disables special handling of <span class="t-c"><span class="mw-geshi cpp source-cpp"><span class="st0">'<span class="es1">\n</span>'</span></span></span> and <span class="t-c"><span class="mw-geshi cpp source-cpp"><span class="st0">'<span class="es2">\x1A</span>'</span></span></span>. <br /> On the append file access modes, data is written to the end of the file regardless of the current position of the file position indicator.
</td></tr>
<tr>
<td colspan="5"> File access mode flag <code>"x"</code> can optionally be appended to "w" or "w+" specifiers. This flag forces the function to fail if the file exists, instead of overwriting it. <span class="t-mark-rev t-since-cxx17">(C++17)</span>
</td></tr>
<tr>
<td colspan="5"> The behavior is undefined if the mode is not one of the strings listed above. Some implementations define additional supported modes (e.g. <a rel="nofollow" class="external text" href="https://msdn.microsoft.com/en-us/library/yeby3zcb.aspx">Windows</a>).
</td></tr></table>

## ```std::fscanf```

<table>
<tr>
<th rowspan="1"> Conversion<br /> specifier
</th>
<th rowspan="1"> Explanation
</th>
<th colspan="9"> Argument type
</th></tr>
<tr>
<th colspan="2" style="text-align:right; font-weight:normal;"> length modifier
</th>
<th> <code>hh</code>
<p><span class="t-mark-rev t-since-cxx11">(C++11)</span>
</p>
</th>
<th> <code>h</code>
</th>
<th style="font-weight:normal;"> (none)
</th>
<th> <code><b>l</b></code>
</th>
<th> <code><b>ll</b></code>
<p><span class="t-mark-rev t-since-cxx11">(C++11)</span>
</p>
</th>
<th> <code><b>j</b></code>
<p><span class="t-mark-rev t-since-cxx11">(C++11)</span>
</p>
</th>
<th> <code><b>z</b></code>
<p><span class="t-mark-rev t-since-cxx11">(C++11)</span>
</p>
</th>
<th> <code><b>t</b></code>
<p><span class="t-mark-rev t-since-cxx11">(C++11)</span>
</p>
</th>
<th> <code><b>L</b></code>
</th></tr>
<tr>
<th> <code>%</code>
</th>
<td style="text-align:left;"> matches literal <code><b>%</b></code>
</td>
<td style="background: #ececec; color: grey; vertical-align: middle; text-align: center;" class="table-na"> <small>N/A</small>
</td>
<td style="background: #ececec; color: grey; vertical-align: middle; text-align: center;" class="table-na"> <small>N/A</small>
</td>
<td style="background: #ececec; color: grey; vertical-align: middle; text-align: center;" class="table-na"> <small>N/A</small>
</td>
<td style="background: #ececec; color: grey; vertical-align: middle; text-align: center;" class="table-na"> <small>N/A</small>
</td>
<td style="background: #ececec; color: grey; vertical-align: middle; text-align: center;" class="table-na"> <small>N/A</small>
</td>
<td style="background: #ececec; color: grey; vertical-align: middle; text-align: center;" class="table-na"> <small>N/A</small>
</td>
<td style="background: #ececec; color: grey; vertical-align: middle; text-align: center;" class="table-na"> <small>N/A</small>
</td>
<td style="background: #ececec; color: grey; vertical-align: middle; text-align: center;" class="table-na"> <small>N/A</small>
</td>
<td style="background: #ececec; color: grey; vertical-align: middle; text-align: center;" class="table-na"> <small>N/A</small>
</td></tr>
<tr>
<th> <code>c</code>
</th>
<td style="text-align:left;">
<dl><dd> matches a <b>character</b> or a sequence of <b>characters</b>
</dd></dl>
<p>If a width specifier is used, matches exactly <i>width</i>  characters (the argument must be a pointer to an array with sufficient room). Unlike&#160;%s and&#160;%[, does not append the null character to the array.
</p>
</td>
<td rowspan="3" style="background: #ececec; color: grey; vertical-align: middle; text-align: center;" class="table-na"> <small>N/A</small>
</td>
<td rowspan="3" style="background: #ececec; color: grey; vertical-align: middle; text-align: center;" class="table-na"> <small>N/A</small>
</td>
<td rowspan="3"> <div class="t-vertical"><div><span class="t-c"><span class="mw-geshi cpp source-cpp"><span class="kw4">char</span><span class="sy2">*</span></span></span></div></div>
</td>
<td rowspan="3"> <div class="t-vertical"><div><span class="t-c"><span class="mw-geshi cpp source-cpp"><span class="kw4">wchar_t</span><span class="sy2">*</span></span></span></div></div>
</td>
<td rowspan="3" style="background: #ececec; color: grey; vertical-align: middle; text-align: center;" class="table-na"> <small>N/A</small>
</td>
<td rowspan="3" style="background: #ececec; color: grey; vertical-align: middle; text-align: center;" class="table-na"> <small>N/A</small>
</td>
<td rowspan="3" style="background: #ececec; color: grey; vertical-align: middle; text-align: center;" class="table-na"> <small>N/A</small>
</td>
<td rowspan="3" style="background: #ececec; color: grey; vertical-align: middle; text-align: center;" class="table-na"> <small>N/A</small>
</td>
<td rowspan="3" style="background: #ececec; color: grey; vertical-align: middle; text-align: center;" class="table-na"> <small>N/A</small>
</td></tr>
<tr>
<th> <code>s</code>
</th>
<td style="text-align:left;">
<dl><dd> matches a sequence of non-whitespace characters (a <b>string</b>)
</dd></dl>
<p>If width specifier is used, matches up to <i>width</i> or until the first whitespace character, whichever appears first. Always stores a null character in addition to the characters matched (so the argument array must have room for at least <i>width+1</i> characters)
</p>
</td></tr>
<tr>
<th> <code>[</code><span class="t-spar">set</span><code>]</code>
</th>
<td style="text-align:left;">
<dl><dd>matches a non-empty sequence of character from <span class="t-spar">set</span> of characters.
</dd></dl>
<p>If the first character of the set is <code>^</code>, then all characters not in the set are matched. If the set begins with <code>]</code> or <code>^]</code> then the <code>]</code> character is also included into the set. It is implementation-defined whether the character <code>-</code> in the non-initial position in the scanset may be indicating a range, as in <code>[0-9]</code>. If width specifier is used, matches only up to <i>width</i>. Always stores a null character in addition to the characters matched (so the argument array must have room for at least <i>width+1</i> characters)
</p>
</td></tr>
<tr>
<th> <code>d</code>
</th>
<td style="text-align:left;">
<dl><dd>matches a <b>decimal integer</b>.
</dd></dl>
<p>The format of the number is the same as expected by <a href="/w/cpp/string/byte/strtol" title="cpp/string/byte/strtol"><tt>strtol()</tt></a> with the value <span class="t-c"><span class="mw-geshi cpp source-cpp"><span class="nu0">10</span></span></span> for the <code>base</code> argument
</p>
</td>
<td rowspan="6"> <div class="t-vertical"><div><span class="t-c"><span class="mw-geshi cpp source-cpp"><span class="kw4">signed</span> <span class="kw4">char</span><span class="sy2">*</span></span></span> or <span class="t-c"><span class="mw-geshi cpp source-cpp"><span class="kw4">unsigned</span> <span class="kw4">char</span><span class="sy2">*</span></span></span></div></div>
</td>
<td rowspan="6"> <div class="t-vertical"><div><span class="t-c"><span class="mw-geshi cpp source-cpp"><span class="kw4">signed</span> <span class="kw4">short</span><span class="sy2">*</span></span></span> or <span class="t-c"><span class="mw-geshi cpp source-cpp"><span class="kw4">unsigned</span> <span class="kw4">short</span><span class="sy2">*</span></span></span></div></div>
</td>
<td rowspan="6"> <div class="t-vertical"><div><span class="t-c"><span class="mw-geshi cpp source-cpp"><span class="kw4">signed</span> <span class="kw4">int</span><span class="sy2">*</span></span></span> or <span class="t-c"><span class="mw-geshi cpp source-cpp"><span class="kw4">unsigned</span> <span class="kw4">int</span><span class="sy2">*</span></span></span></div></div>
</td>
<td rowspan="6"> <div class="t-vertical"><div><span class="t-c"><span class="mw-geshi cpp source-cpp"><span class="kw4">signed</span> <span class="kw4">long</span><span class="sy2">*</span></span></span> or <span class="t-c"><span class="mw-geshi cpp source-cpp"><span class="kw4">unsigned</span> <span class="kw4">long</span><span class="sy2">*</span></span></span></div></div>
</td>
<td rowspan="6"> <div class="t-vertical"><div><span class="t-c"><span class="mw-geshi cpp source-cpp"><span class="kw4">signed</span> <span class="kw4">long</span> <span class="kw4">long</span><span class="sy2">*</span></span></span> or <span class="t-c"><span class="mw-geshi cpp source-cpp"><span class="kw4">unsigned</span> <span class="kw4">long</span> <span class="kw4">long</span><span class="sy2">*</span></span></span></div></div>
</td>
<td rowspan="6"> <div class="t-vertical"><div><span class="t-c"><span class="mw-geshi cpp source-cpp">intmax_t<span class="sy2">*</span></span></span> or <span class="t-c"><span class="mw-geshi cpp source-cpp">uintmax_t<span class="sy2">*</span></span></span></div></div>
</td>
<td rowspan="6"> <div class="t-vertical"><div><span class="t-c"><span class="mw-geshi cpp source-cpp">size_t<span class="sy2">*</span></span></span></div></div>
</td>
<td rowspan="6"> <div class="t-vertical"><div><span class="t-c"><span class="mw-geshi cpp source-cpp">ptrdiff_t<span class="sy2">*</span></span></span></div></div>
</td>
<td rowspan="6" style="background: #ececec; color: grey; vertical-align: middle; text-align: center;" class="table-na"> <small>N/A</small>
</td></tr>
<tr>
<th> <code>i</code>
</th>
<td style="text-align:left;">
<dl><dd>matches an <b>integer</b>.
</dd></dl>
<p>The format of the number is the same as expected by <a href="/w/cpp/string/byte/strtol" title="cpp/string/byte/strtol"><tt>strtol()</tt></a> with the value <span class="t-c"><span class="mw-geshi cpp source-cpp">​<span class="nu0">0</span>​</span></span> for the <code>base</code> argument (base is determined by the first characters parsed)
</p>
</td></tr>
<tr>
<th> <code>u</code>
</th>
<td style="text-align:left;">
<dl><dd>matches an unsigned <b>decimal integer</b>. 
</dd></dl>
<p>The format of the number is the same as expected by <a href="/w/cpp/string/byte/strtoul" title="cpp/string/byte/strtoul"><tt>strtoul()</tt></a> with the value <span class="t-c"><span class="mw-geshi cpp source-cpp"><span class="nu0">10</span></span></span> for the <code>base</code> argument.
</p>
</td></tr>
<tr>
<th> <code>o</code>
</th>
<td style="text-align:left;">
<dl><dd>matches an unsigned <b>octal integer</b>.
</dd></dl>
<p>The format of the number is the same as expected by <a href="/w/cpp/string/byte/strtoul" title="cpp/string/byte/strtoul"><tt>strtoul()</tt></a> with the value <span class="t-c"><span class="mw-geshi cpp source-cpp"><span class="nu0">8</span></span></span> for the <code>base</code> argument
</p>
</td></tr>
<tr>
<th> <code>x</code>, <code>X</code>
</th>
<td style="text-align:left;">
<dl><dd>matches an unsigned <b>hexadecimal integer</b>.
</dd></dl>
<p>The format of the number is the same as expected by <a href="/w/cpp/string/byte/strtoul" title="cpp/string/byte/strtoul"><tt>strtoul()</tt></a> with the value <span class="t-c"><span class="mw-geshi cpp source-cpp"><span class="nu0">16</span></span></span> for the <code>base</code> argument
</p>
</td></tr>
<tr>
<th> <code>n</code>
</th>
<td style="text-align:left;">
<dl><dd>returns the <b>number of characters read so far</b>.
</dd></dl>
<p>No input is consumed. Does not increment the assignment count. If the specifier has assignment-suppressing operator defined, the behavior is undefined
</p>
</td></tr>
<tr>
<th> <code>a</code>, <code>A</code><span class="t-mark-rev t-since-cxx11">(C++11)</span><br /> <code>e</code>, <code>E</code><br /> <code>f</code>, <code>F</code><br /> <code>g</code>, <code>G</code>
</th>
<td style="text-align:left;">
<dl><dd>matches a <b>floating-point number</b>.
</dd></dl>
<p>The format of the number is the same as expected by <a href="/w/cpp/string/byte/strtof" title="cpp/string/byte/strtof"><tt>strtof()</tt></a>
</p>
</td>
<td style="background: #ececec; color: grey; vertical-align: middle; text-align: center;" class="table-na"> <small>N/A</small>
</td>
<td style="background: #ececec; color: grey; vertical-align: middle; text-align: center;" class="table-na"> <small>N/A</small>
</td>
<td> <div class="t-vertical"><div><span class="t-c"><span class="mw-geshi cpp source-cpp"><span class="kw4">float</span><span class="sy2">*</span></span></span></div></div>
</td>
<td> <div class="t-vertical"><div><span class="t-c"><span class="mw-geshi cpp source-cpp"><span class="kw4">double</span><span class="sy2">*</span></span></span></div></div>
</td>
<td style="background: #ececec; color: grey; vertical-align: middle; text-align: center;" class="table-na"> <small>N/A</small>
</td>
<td style="background: #ececec; color: grey; vertical-align: middle; text-align: center;" class="table-na"> <small>N/A</small>
</td>
<td style="background: #ececec; color: grey; vertical-align: middle; text-align: center;" class="table-na"> <small>N/A</small>
</td>
<td style="background: #ececec; color: grey; vertical-align: middle; text-align: center;" class="table-na"> <small>N/A</small>
</td>
<td> <div class="t-vertical"><div><span class="t-c"><span class="mw-geshi cpp source-cpp"><span class="kw4">long</span> <span class="kw4">double</span><span class="sy2">*</span></span></span></div></div>
</td></tr>
<tr>
<th> <code>p</code>
</th>
<td style="text-align:left;">
<dl><dd>matches implementation defined character sequence defining a <b>pointer</b>.
</dd></dl>
<p><code>printf</code> family of functions should produce the same sequence using <code><b>%p</b></code> format specifier
</p>
</td>
<td style="background: #ececec; color: grey; vertical-align: middle; text-align: center;" class="table-na"> <small>N/A</small>
</td>
<td style="background: #ececec; color: grey; vertical-align: middle; text-align: center;" class="table-na"> <small>N/A</small>
</td>
<td> <div class="t-vertical"><div><span class="t-c"><span class="mw-geshi cpp source-cpp"><span class="kw4">void</span><span class="sy2">**</span></span></span></div></div>
</td>
<td style="background: #ececec; color: grey; vertical-align: middle; text-align: center;" class="table-na"> <small>N/A</small>
</td>
<td style="background: #ececec; color: grey; vertical-align: middle; text-align: center;" class="table-na"> <small>N/A</small>
</td>
<td style="background: #ececec; color: grey; vertical-align: middle; text-align: center;" class="table-na"> <small>N/A</small>
</td>
<td style="background: #ececec; color: grey; vertical-align: middle; text-align: center;" class="table-na"> <small>N/A</small>
</td>
<td style="background: #ececec; color: grey; vertical-align: middle; text-align: center;" class="table-na"> <small>N/A</small>
</td>
<td style="background: #ececec; color: grey; vertical-align: middle; text-align: center;" class="table-na"> <small>N/A</small>
</td></tr></table>

## ```std::fprintf```

<table class="t-par-begin">
<tr class="t-par">
<td>  pointer to a null-terminated multibyte string specifying how to interpret the data.
<p>The format string consists of ordinary multibyte characters (except <code><b>%</b></code>), which are copied unchanged into the output stream, and conversion specifications. Each conversion specification has the following format:
</p>
<dl><dd><ul><li> introductory <code><b>%</b></code> character
</li></ul>
</dd></dl>
<dl><dd><ul><li> <span class="t-mark">(optional)</span> one or more flags that modify the behavior of the conversion:
</li></ul>
<dl><dd><ul><li> <code><b>-</b></code>: the result of the conversion is left-justified within the field (by default it is right-justified)
</li><li> <code><b>+</b></code>: the sign of signed conversions is always prepended to the result of the conversion (by default the result is preceded by minus only when it is negative)
</li><li> <i>space</i>: if the result of a signed conversion does not start with a sign character, or is empty, space is prepended to the result. It is ignored if <code>+</code> flag is present.
</li><li> <code><b>#</b></code>&#160;: <i>alternative form</i> of the conversion is performed. See the table below for exact effects otherwise the behavior is undefined.
</li><li> <code><b>0</b></code>&#160;: for integer and floating point number conversions, leading zeros are used to pad the field instead of <i>space</i> characters. For integer numbers it is ignored if the precision is explicitly specified. For other conversions using this flag results in undefined behavior. It is ignored if <code>-</code> flag is present.
</li></ul>
</dd></dl>
</dd></dl>
<dl><dd><ul><li> <span class="t-mark">(optional)</span> integer value or <code>*</code> that specifies minimum field width. The result is padded with <i>space</i> characters (by default), if required, on the left when right-justified, or on the right if left-justified. In the case when <code>*</code> is used, the width is specified by an additional argument of type <span class="t-c"><span class="mw-geshi cpp source-cpp"><span class="kw4">int</span></span></span>. If the value of the argument is negative, it results with the <code>-</code> flag specified and positive field width. (Note: This is the minimum width: The value is never truncated.)
</li></ul>
</dd></dl>
<dl><dd><ul><li> <span class="t-mark">(optional)</span> <code><b>.</b></code> followed by integer number or <code><b>*</b></code>, or neither that specifies <i>precision</i> of the conversion. In the case when <code>*</code> is used, the <i>precision</i> is specified by an additional argument of type <span class="t-c"><span class="mw-geshi cpp source-cpp"><span class="kw4">int</span></span></span>. If the value of this argument is negative, it is ignored. If neither a number nor <code><b>*</b></code> is used, the precision is taken as zero. See the table below for exact effects of <i>precision</i>. 
</li></ul>
</dd></dl>
<dl><dd><ul><li> <span class="t-mark">(optional)</span> <i>length modifier</i> that specifies the size of the argument
</li></ul>
</dd></dl>
<dl><dd><ul><li> conversion format specifier
</li></ul>
</dd></dl>
<p>The following format specifiers are available:
</p>
<table class="wikitable" style="text-align:center; font-size:85%; max-width:90em;">
<tr>
<th rowspan="1"> Conversion<br /> specifier
</th>
<th rowspan="1"> Explanation
</th>
<th colspan="9"> Argument type
</th></tr>
<tr>
<th colspan="2" style="text-align:right; font-weight:normal;"> length modifier
</th>
<th> <code>hh</code>
<p><span class="t-mark-rev t-since-cxx11">(C++11)</span>
</p>
</th>
<th> <code>h</code>
</th>
<th style="font-weight:normal;"> (none)
</th>
<th> <code><b>l</b></code>
</th>
<th> <code><b>ll</b></code>
<p><span class="t-mark-rev t-since-cxx11">(C++11)</span>
</p>
</th>
<th> <code><b>j</b></code>
<p><span class="t-mark-rev t-since-cxx11">(C++11)</span>
</p>
</th>
<th> <code><b>z</b></code>
<p><span class="t-mark-rev t-since-cxx11">(C++11)</span>
</p>
</th>
<th> <code><b>t</b></code>
<p><span class="t-mark-rev t-since-cxx11">(C++11)</span>
</p>
</th>
<th> <code><b>L</b></code>
</th></tr>
<tr>
<th> <code>%</code>
</th>
<td style="text-align:left;"> writes literal <code><b>%</b></code>. The full conversion specification must be <code><b>%%</b></code>.
</td>
<td style="background: #ececec; color: grey; vertical-align: middle; text-align: center;" class="table-na"> <small>N/A</small>
</td>
<td style="background: #ececec; color: grey; vertical-align: middle; text-align: center;" class="table-na"> <small>N/A</small>
</td>
<td style="background: #ececec; color: grey; vertical-align: middle; text-align: center;" class="table-na"> <small>N/A</small>
</td>
<td style="background: #ececec; color: grey; vertical-align: middle; text-align: center;" class="table-na"> <small>N/A</small>
</td>
<td style="background: #ececec; color: grey; vertical-align: middle; text-align: center;" class="table-na"> <small>N/A</small>
</td>
<td style="background: #ececec; color: grey; vertical-align: middle; text-align: center;" class="table-na"> <small>N/A</small>
</td>
<td style="background: #ececec; color: grey; vertical-align: middle; text-align: center;" class="table-na"> <small>N/A</small>
</td>
<td style="background: #ececec; color: grey; vertical-align: middle; text-align: center;" class="table-na"> <small>N/A</small>
</td>
<td style="background: #ececec; color: grey; vertical-align: middle; text-align: center;" class="table-na"> <small>N/A</small>
</td></tr>
<tr>
<th> <code>c</code>
</th>
<td style="text-align:left;">
<dl><dd> writes a <b>single character</b>.
</dd></dl>
<p>The argument is first converted to <span class="t-c"><span class="mw-geshi cpp source-cpp"><span class="kw4">unsigned</span> <span class="kw4">char</span></span></span>.
If the <b>l</b> modifier is used, the argument is first converted to a character string as if by <b>%ls</b> with a <span class="t-c"><span class="mw-geshi cpp source-cpp"><span class="kw4">wchar_t</span><span class="br0">&#91;</span><span class="nu0">2</span><span class="br0">&#93;</span></span></span> argument.
</p>
</td>
<td style="background: #ececec; color: grey; vertical-align: middle; text-align: center;" class="table-na"> <small>N/A</small>
</td>
<td style="background: #ececec; color: grey; vertical-align: middle; text-align: center;" class="table-na"> <small>N/A</small>
</td>
<td> <div class="t-vertical"><div><span class="t-c"><span class="mw-geshi cpp source-cpp"><span class="kw4">int</span></span></span></div></div>
</td>
<td> <div class="t-vertical"><div><span class="t-c"><span class="mw-geshi cpp source-cpp">wint_t</span></span></div></div>
</td>
<td style="background: #ececec; color: grey; vertical-align: middle; text-align: center;" class="table-na"> <small>N/A</small>
</td>
<td style="background: #ececec; color: grey; vertical-align: middle; text-align: center;" class="table-na"> <small>N/A</small>
</td>
<td style="background: #ececec; color: grey; vertical-align: middle; text-align: center;" class="table-na"> <small>N/A</small>
</td>
<td style="background: #ececec; color: grey; vertical-align: middle; text-align: center;" class="table-na"> <small>N/A</small>
</td>
<td style="background: #ececec; color: grey; vertical-align: middle; text-align: center;" class="table-na"> <small>N/A</small>
</td></tr>
<tr>
<th> <code>s</code>
</th>
<td style="text-align:left;">
<dl><dd> writes a <b>character string</b>
</dd></dl>
<p>The argument must be a pointer to the initial element of an array of characters. 
<i>Precision</i> specifies the maximum number of bytes to be written. If <i>Precision</i> is not specified, writes every byte up to and not including the first null terminator.
If the <b>l</b> specifier is used, the argument must be a pointer to the initial element of an array of <span class="t-c"><span class="mw-geshi cpp source-cpp"><span class="kw4">wchar_t</span></span></span>, which is converted to char array as if by a call to <span class="t-lc">wcrtomb</span> with zero-initialized conversion state.
</p>
</td>
<td style="background: #ececec; color: grey; vertical-align: middle; text-align: center;" class="table-na"> <small>N/A</small>
</td>
<td style="background: #ececec; color: grey; vertical-align: middle; text-align: center;" class="table-na"> <small>N/A</small>
</td>
<td> <div class="t-vertical"><div><span class="t-c"><span class="mw-geshi cpp source-cpp"><span class="kw4">char</span><span class="sy2">*</span></span></span></div></div>
</td>
<td> <div class="t-vertical"><div><span class="t-c"><span class="mw-geshi cpp source-cpp"><span class="kw4">wchar_t</span><span class="sy2">*</span></span></span></div></div>
</td>
<td style="background: #ececec; color: grey; vertical-align: middle; text-align: center;" class="table-na"> <small>N/A</small>
</td>
<td style="background: #ececec; color: grey; vertical-align: middle; text-align: center;" class="table-na"> <small>N/A</small>
</td>
<td style="background: #ececec; color: grey; vertical-align: middle; text-align: center;" class="table-na"> <small>N/A</small>
</td>
<td style="background: #ececec; color: grey; vertical-align: middle; text-align: center;" class="table-na"> <small>N/A</small>
</td>
<td style="background: #ececec; color: grey; vertical-align: middle; text-align: center;" class="table-na"> <small>N/A</small>
</td></tr>
<tr>
<th> <code>d</code><br /> <code>i</code>
</th>
<td style="text-align:left;">
<dl><dd>converts a <b>signed integer</b> into decimal representation <i>[-]dddd</i>.
</dd></dl>
<p><i>Precision</i> specifies the minimum number of digits to appear. The default precision is <span class="t-c"><span class="mw-geshi cpp source-cpp"><span class="nu0">1</span></span></span>.<br /> 
If both the converted value and the precision are <span class="t-c"><span class="mw-geshi cpp source-cpp">​<span class="nu0">0</span>​</span></span> the conversion results in no characters.
</p>
</td>
<td rowspan="1"> <div class="t-vertical"><div><span class="t-c"><span class="mw-geshi cpp source-cpp"><span class="kw4">signed</span> <span class="kw4">char</span></span></span></div></div>
</td>
<td rowspan="1"> <div class="t-vertical"><div><span class="t-c"><span class="mw-geshi cpp source-cpp"><span class="kw4">short</span></span></span></div></div>
</td>
<td rowspan="1"> <div class="t-vertical"><div><span class="t-c"><span class="mw-geshi cpp source-cpp"><span class="kw4">int</span></span></span></div></div>
</td>
<td rowspan="1"> <div class="t-vertical"><div><span class="t-c"><span class="mw-geshi cpp source-cpp"><span class="kw4">long</span></span></span></div></div>
</td>
<td rowspan="1"> <div class="t-vertical"><div><span class="t-c"><span class="mw-geshi cpp source-cpp"><span class="kw4">long</span> <span class="kw4">long</span></span></span></div></div>
</td>
<td rowspan="1"> <div class="t-vertical"><div><span class="t-c"><span class="mw-geshi cpp source-cpp">intmax_t</span></span></div></div>
</td>
<td rowspan="1"> <div class="t-vertical"><div>signed <span class="t-c"><span class="mw-geshi cpp source-cpp">size_t</span></span></div></div>
</td>
<td rowspan="1"> <div class="t-vertical"><div><span class="t-c"><span class="mw-geshi cpp source-cpp">ptrdiff_t</span></span></div></div>
</td>
<td style="background: #ececec; color: grey; vertical-align: middle; text-align: center;" class="table-na"> <small>N/A</small>
</td></tr>
<tr>
<th> <code>o</code>
</th>
<td style="text-align:left;">
<dl><dd>converts a <b>unsigned integer</b> into octal representation <i>oooo</i>.
</dd></dl>
<p><i>Precision</i> specifies the minimum number of digits to appear. The default precision is <span class="t-c"><span class="mw-geshi cpp source-cpp"><span class="nu0">1</span></span></span>. 
If both the converted value and the precision are <span class="t-c"><span class="mw-geshi cpp source-cpp">​<span class="nu0">0</span>​</span></span> the conversion results in no characters.
In the <i>alternative implementation</i> precision is increased if necessary, to write one leading zero.
In that case if both the converted value and the precision are <span class="t-c"><span class="mw-geshi cpp source-cpp">​<span class="nu0">0</span>​</span></span>, single <span class="t-c"><span class="mw-geshi cpp source-cpp">​<span class="nu0">0</span>​</span></span> is written.
</p>
</td>
<td rowspan="3"> <div class="t-vertical"><div><span class="t-c"><span class="mw-geshi cpp source-cpp"><span class="kw4">unsigned</span> <span class="kw4">char</span></span></span></div></div>
</td>
<td rowspan="3"> <div class="t-vertical"><div><span class="t-c"><span class="mw-geshi cpp source-cpp"><span class="kw4">unsigned</span> <span class="kw4">short</span></span></span></div></div>
</td>
<td rowspan="3"> <div class="t-vertical"><div><span class="t-c"><span class="mw-geshi cpp source-cpp"><span class="kw4">unsigned</span> <span class="kw4">int</span></span></span></div></div>
</td>
<td rowspan="3"> <div class="t-vertical"><div><span class="t-c"><span class="mw-geshi cpp source-cpp"><span class="kw4">unsigned</span> <span class="kw4">long</span></span></span></div></div>
</td>
<td rowspan="3"> <div class="t-vertical"><div><span class="t-c"><span class="mw-geshi cpp source-cpp"><span class="kw4">unsigned</span> <span class="kw4">long</span> <span class="kw4">long</span></span></span></div></div>
</td>
<td rowspan="3"> <div class="t-vertical"><div><span class="t-c"><span class="mw-geshi cpp source-cpp">uintmax_t</span></span></div></div>
</td>
<td rowspan="3"> <div class="t-vertical"><div><span class="t-c"><span class="mw-geshi cpp source-cpp">size_t</span></span></div></div>
</td>
<td rowspan="3"> <div class="t-vertical"><div>unsigned version of <span class="t-c"><span class="mw-geshi cpp source-cpp">ptrdiff_t</span></span></div></div>
</td>
<td style="background: #ececec; color: grey; vertical-align: middle; text-align: center;" class="table-na"> <small>N/A</small>
</td></tr>
<tr>
<th> <code>x</code><br /> <code>X</code>
</th>
<td style="text-align:left;">
<dl><dd>converts an <b>unsigned integer</b> into hexadecimal representation <i>hhhh</i>.
</dd></dl>
<p>For the <code><b>x</b></code> conversion letters <code>abcdef</code> are used.<br />
For the <code><b>X</b></code> conversion letters <code>ABCDEF</code> are used.<br />
<i>Precision</i> specifies the minimum number of digits to appear. The default precision is <span class="t-c"><span class="mw-geshi cpp source-cpp"><span class="nu0">1</span></span></span>.
If both the converted value and the precision are <span class="t-c"><span class="mw-geshi cpp source-cpp">​<span class="nu0">0</span>​</span></span> the conversion results in no characters.
In the <i>alternative implementation</i> <code><b>0x</b></code> or <code><b>0X</b></code> is prefixed to results if the converted value is nonzero.
</p>
</td>
<td style="background: #ececec; color: grey; vertical-align: middle; text-align: center;" class="table-na"> <small>N/A</small>
</td></tr>
<tr>
<th> <code>u</code>
</th>
<td style="text-align:left;">
<dl><dd>converts an <b>unsigned integer</b> into decimal representation <i>dddd</i>.
</dd></dl>
<p><i>Precision</i> specifies the minimum number of digits to appear. 
The default precision is <span class="t-c"><span class="mw-geshi cpp source-cpp"><span class="nu0">1</span></span></span>. 
If both the converted value and the precision are <span class="t-c"><span class="mw-geshi cpp source-cpp">​<span class="nu0">0</span>​</span></span> the conversion results in no characters.
</p>
</td>
<td style="background: #ececec; color: grey; vertical-align: middle; text-align: center;" class="table-na"> <small>N/A</small>
</td></tr>
<tr>
<th> <code>f</code><br /> <code>F</code>
</th>
<td style="text-align:left;">
<dl><dd>converts <b>floating-point number</b> to the decimal notation in the style <i>[-]ddd.ddd</i>.
</dd></dl>
<p><i>Precision</i> specifies the minimum number of digits to appear after the decimal point character. 
The default precision is <span class="t-c"><span class="mw-geshi cpp source-cpp"><span class="nu0">6</span></span></span>.
In the <i>alternative implementation</i> decimal point character is written even if no digits follow it.
For infinity and not-a-number conversion style see notes.
</p>
</td>
<td style="background: #ececec; color: grey; vertical-align: middle; text-align: center;" class="table-na"> <small>N/A</small>
</td>
<td style="background: #ececec; color: grey; vertical-align: middle; text-align: center;" class="table-na"> <small>N/A</small>
</td>
<td rowspan="4"> <div class="t-vertical"><div><span class="t-c"><span class="mw-geshi cpp source-cpp"><span class="kw4">double</span></span></span></div></div>
</td>
<td rowspan="4"> <div class="t-vertical"><div><span class="t-c"><span class="mw-geshi cpp source-cpp"><span class="kw4">double</span></span></span> <span class="t-mark-rev t-since-cxx11">(C++11)</span></div></div>
</td>
<td style="background: #ececec; color: grey; vertical-align: middle; text-align: center;" class="table-na"> <small>N/A</small>
</td>
<td style="background: #ececec; color: grey; vertical-align: middle; text-align: center;" class="table-na"> <small>N/A</small>
</td>
<td style="background: #ececec; color: grey; vertical-align: middle; text-align: center;" class="table-na"> <small>N/A</small>
</td>
<td style="background: #ececec; color: grey; vertical-align: middle; text-align: center;" class="table-na"> <small>N/A</small>
</td>
<td rowspan="4"> <div class="t-vertical"><div><span class="t-c"><span class="mw-geshi cpp source-cpp"><span class="kw4">long</span> <span class="kw4">double</span></span></span></div></div>
</td></tr>
<tr>
<th> <code>e</code><br /> <code>E</code>
</th>
<td style="text-align:left;">
<dl><dd>converts <b>floating-point number</b> to the decimal exponent notation.
</dd></dl>
<p>For the <code><b>e</b></code> conversion style <i>[-]d.ddd</i><code><b>e</b></code><i>±dd</i> is used.<br />
For the <code><b>E</b></code> conversion style <i>[-]d.ddd</i><code><b>E</b></code><i>±dd</i> is used.<br />
The exponent contains at least two digits, more digits are used only if necessary. 
If the value is <span class="t-c"><span class="mw-geshi cpp source-cpp">​<span class="nu0">0</span>​</span></span>, the exponent is also <span class="t-c"><span class="mw-geshi cpp source-cpp">​<span class="nu0">0</span>​</span></span>.
<i>Precision</i> specifies the minimum number of digits to appear after the decimal point character.
The default precision is <span class="t-c"><span class="mw-geshi cpp source-cpp"><span class="nu0">6</span></span></span>.
In the <i>alternative implementation</i> decimal point character is written even if no digits follow it.
For infinity and not-a-number conversion style see notes.
</p>
</td>
<td style="background: #ececec; color: grey; vertical-align: middle; text-align: center;" class="table-na"> <small>N/A</small>
</td>
<td style="background: #ececec; color: grey; vertical-align: middle; text-align: center;" class="table-na"> <small>N/A</small>
</td>
<td style="background: #ececec; color: grey; vertical-align: middle; text-align: center;" class="table-na"> <small>N/A</small>
</td>
<td style="background: #ececec; color: grey; vertical-align: middle; text-align: center;" class="table-na"> <small>N/A</small>
</td>
<td style="background: #ececec; color: grey; vertical-align: middle; text-align: center;" class="table-na"> <small>N/A</small>
</td>
<td style="background: #ececec; color: grey; vertical-align: middle; text-align: center;" class="table-na"> <small>N/A</small>
</td></tr>
<tr>
<th> <code>a</code><br /> <code>A</code>
<p><span class="t-mark-rev t-since-cxx11">(C++11)</span>
</p>
</th>
<td style="text-align:left;">
<dl><dd>converts <b>floating-point number</b> to the hexadecimal exponent notation.
</dd></dl>
<p>For the <code><b>a</b></code> conversion style <i>[-]</i><code><b>0x</b></code><i>h.hhh</i><code><b>p</b></code><i>±d</i> is used.<br />
For the <code><b>A</b></code> conversion style <i>[-]</i><code><b>0X</b></code><i>h.hhh</i><code><b>P</b></code><i>±d</i> is used.<br />
The first hexadecimal digit is not <code>0</code> if the argument is a normalized floating point value.
If the value is <span class="t-c"><span class="mw-geshi cpp source-cpp">​<span class="nu0">0</span>​</span></span>, the exponent is also <span class="t-c"><span class="mw-geshi cpp source-cpp">​<span class="nu0">0</span>​</span></span>.
<i>Precision</i> specifies the minimum number of digits to appear after the decimal point character.
The default precision is sufficient for exact representation of the value.
In the <i>alternative implementation</i> decimal point character is written even if no digits follow it.
For infinity and not-a-number conversion style see notes.
</p>
</td>
<td style="background: #ececec; color: grey; vertical-align: middle; text-align: center;" class="table-na"> <small>N/A</small>
</td>
<td style="background: #ececec; color: grey; vertical-align: middle; text-align: center;" class="table-na"> <small>N/A</small>
</td>
<td style="background: #ececec; color: grey; vertical-align: middle; text-align: center;" class="table-na"> <small>N/A</small>
</td>
<td style="background: #ececec; color: grey; vertical-align: middle; text-align: center;" class="table-na"> <small>N/A</small>
</td>
<td style="background: #ececec; color: grey; vertical-align: middle; text-align: center;" class="table-na"> <small>N/A</small>
</td>
<td style="background: #ececec; color: grey; vertical-align: middle; text-align: center;" class="table-na"> <small>N/A</small>
</td></tr>
<tr>
<th> <code>g</code><br /> <code>G</code>
</th>
<td style="text-align:left;">
<dl><dd>converts <b>floating-point number</b> to decimal or decimal exponent notation depending on the value and the <i>precision</i>.
</dd></dl>
<p>For the <code><b>g</b></code> conversion style conversion with style <code><b>e</b></code> or <code><b>f</b></code> will be performed.<br />
For the <code><b>G</b></code> conversion style conversion with style <code><b>E</b></code> or <code><b>F</b></code> will be performed.<br />
Let <code>P</code> equal the precision if nonzero, <span class="t-c"><span class="mw-geshi cpp source-cpp"><span class="nu0">6</span></span></span> if the precision is not specified, or <span class="t-c"><span class="mw-geshi cpp source-cpp"><span class="nu0">1</span></span></span> if the precision is <span class="t-c"><span class="mw-geshi cpp source-cpp">​<span class="nu0">0</span>​</span></span>. Then, if a conversion with style <code>E</code> would have an exponent of <code>X</code>:
</p>
<ul><li> if <i>P &gt; X ≥ −4</i>, the conversion is with style <code><b>f</b></code> or <code><b>F</b></code> and precision <i>P − 1 − X</i>.
</li><li> otherwise, the conversion is with style <code><b>e</b></code> or <code><b>E</b></code> and precision <i>P − 1</i>.
</li></ul>
<p>Unless <i>alternative representation</i> is requested the trailing zeros are removed, also the decimal point character is removed if no fractional part is left.
For infinity and not-a-number conversion style see notes.
</p>
</td>
<td style="background: #ececec; color: grey; vertical-align: middle; text-align: center;" class="table-na"> <small>N/A</small>
</td>
<td style="background: #ececec; color: grey; vertical-align: middle; text-align: center;" class="table-na"> <small>N/A</small>
</td>
<td style="background: #ececec; color: grey; vertical-align: middle; text-align: center;" class="table-na"> <small>N/A</small>
</td>
<td style="background: #ececec; color: grey; vertical-align: middle; text-align: center;" class="table-na"> <small>N/A</small>
</td>
<td style="background: #ececec; color: grey; vertical-align: middle; text-align: center;" class="table-na"> <small>N/A</small>
</td>
<td style="background: #ececec; color: grey; vertical-align: middle; text-align: center;" class="table-na"> <small>N/A</small>
</td></tr>
<tr>
<th> <code>n</code>
</th>
<td style="text-align:left;">
<dl><dd>returns the <b>number of characters written</b> so far by this call to the function.
</dd></dl>
<p>The result is <i>written</i> to the value pointed to by the argument. 
The specification may not contain any <i>flag</i>, <i>field width</i>, or <i>precision</i>.
</p>
</td>
<td> <div class="t-vertical"><div><span class="t-c"><span class="mw-geshi cpp source-cpp"><span class="kw4">signed</span> <span class="kw4">char</span><span class="sy2">*</span></span></span></div></div>
</td>
<td> <div class="t-vertical"><div><span class="t-c"><span class="mw-geshi cpp source-cpp"><span class="kw4">short</span><span class="sy2">*</span></span></span></div></div>
</td>
<td> <div class="t-vertical"><div><span class="t-c"><span class="mw-geshi cpp source-cpp"><span class="kw4">int</span><span class="sy2">*</span></span></span></div></div>
</td>
<td> <div class="t-vertical"><div><span class="t-c"><span class="mw-geshi cpp source-cpp"><span class="kw4">long</span><span class="sy2">*</span></span></span></div></div>
</td>
<td> <div class="t-vertical"><div><span class="t-c"><span class="mw-geshi cpp source-cpp"><span class="kw4">long</span> <span class="kw4">long</span><span class="sy2">*</span></span></span></div></div>
</td>
<td> <div class="t-vertical"><div><span class="t-c"><span class="mw-geshi cpp source-cpp">intmax_t<span class="sy2">*</span></span></span></div></div>
</td>
<td> <div class="t-vertical"><div>signed <span class="t-c"><span class="mw-geshi cpp source-cpp">size_t<span class="sy2">*</span></span></span></div></div>
</td>
<td> <div class="t-vertical"><div><span class="t-c"><span class="mw-geshi cpp source-cpp">ptrdiff_t<span class="sy2">*</span></span></span></div></div>
</td>
<td style="background: #ececec; color: grey; vertical-align: middle; text-align: center;" class="table-na"> <small>N/A</small>
</td></tr>
<tr>
<th> <code>p</code>
</th>
<td style="text-align:left;"> writes an implementation defined character sequence defining a <b>pointer</b>.
</td>
<td style="background: #ececec; color: grey; vertical-align: middle; text-align: center;" class="table-na"> <small>N/A</small>
</td>
<td style="background: #ececec; color: grey; vertical-align: middle; text-align: center;" class="table-na"> <small>N/A</small>
</td>
<td> <span class="t-c"><span class="mw-geshi cpp source-cpp"><span class="kw4">void</span><span class="sy2">*</span></span></span>
</td>
<td style="background: #ececec; color: grey; vertical-align: middle; text-align: center;" class="table-na"> <small>N/A</small>
</td>
<td style="background: #ececec; color: grey; vertical-align: middle; text-align: center;" class="table-na"> <small>N/A</small>
</td>
<td style="background: #ececec; color: grey; vertical-align: middle; text-align: center;" class="table-na"> <small>N/A</small>
</td>
<td style="background: #ececec; color: grey; vertical-align: middle; text-align: center;" class="table-na"> <small>N/A</small>
</td>
<td style="background: #ececec; color: grey; vertical-align: middle; text-align: center;" class="table-na"> <small>N/A</small>
</td>
<td style="background: #ececec; color: grey; vertical-align: middle; text-align: center;" class="table-na"> <small>N/A</small>
</td></tr></table>
<p>The floating point conversion functions convert infinity to <code>inf</code> or <code>infinity</code>. Which one is used is implementation defined.
</p><p>Not-a-number is converted to <code>nan</code> or <code>nan(<i>char_sequence</i>)</code>. Which one is used is implementation defined.
</p><p>The conversions <code><b>F</b></code>, <code><b>E</b></code>, <code><b>G</b></code>, <code><b>A</b></code> output <code>INF</code>, <code>INFINITY</code>, <code>NAN</code> instead.
</p><p>Even though <code>%c</code> expects <code>int</code> argument, it is safe to pass a <code>char</code> because of the integer promotion that takes place when a variadic function is called.
</p><p>The correct conversion specifications for the fixed-width character types (<span class="t-lc">int8_t</span>, etc) are defined in the header <a href="/w/cpp/types/integer" title="cpp/types/integer">&lt;cinttypes&gt;</a> (although <span class="t-lc"><a href="/w/cpp/types/integer" title="cpp/types/integer">PRIdMAX</a></span>, <span class="t-lc"><a href="/w/cpp/types/integer" title="cpp/types/integer">PRIuMAX</a></span>, etc is synonymous with <code>%jd</code>, <code>%ju</code>, etc).
</p><p>The memory-writing conversion specifier <span class="t-c"><span class="mw-geshi cpp source-cpp"><span class="sy2">%</span>n</span></span> is a common target of security exploits where format strings depend on user input and is not supported by the bounds-checked <code>printf_s</code> family of functions.
</p><p>There is a <a href="/w/cpp/language/eval_order" title="cpp/language/eval order">sequence point</a> after the action of each conversion specifier; this permits storing multiple <span class="t-c"><span class="mw-geshi cpp source-cpp"><span class="sy2">%</span>n</span></span> results in the same variable or, as an edge case, printing a string modified by an earlier <span class="t-c"><span class="mw-geshi cpp source-cpp"><span class="sy2">%</span>n</span></span> within the same call.
</p><p>If a conversion specification is invalid, the behavior is undefined.
</p><p>
</p>
</td></tr>
</table>