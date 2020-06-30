---
title: Multiple tests
layout: subpost-1
comments: true
# category: blog
---

## KaTeX

This is a section to test the katex render. Here is an inline mathematical expression writes <span>\\(A=[a_{ij}]_{m\times n}\\)</span>. The following is  a block writes
    
$$
\begin{bmatrix}
a_{1,1} & \dotsb & a_{1,j} & \dotsb & a_{1,n} \\ 

\vdots & & \vdots & & \vdots \\

a_{i,1} & \dotsb & a_{i,j} & \dotsb & a_{i,n} \\

\vdots & & \vdots & & \vdots \\

a_{m,1} & \dotsb & a_{m,j} & \dotsb & a_{m,n} \\
\end{bmatrix}
$$

```md
This is a section to test the katex render. Here is an inline mathematical expression writes <span>\\(A=[a_{ij}]_{m\times n}\\)</span>. The following is  a block writes
    
$$
\begin{bmatrix}
a_{1,1} & \dotsb & a_{1,j} & \dotsb & a_{1,n} \\ 

\vdots & & \vdots & & \vdots \\

a_{i,1} & \dotsb & a_{i,j} & \dotsb & a_{i,n} \\

\vdots & & \vdots & & \vdots \\

a_{m,1} & \dotsb & a_{m,j} & \dotsb & a_{m,n} \\
\end{bmatrix}
$$
```

## Mermaid

<div class="mermaid">
graph LR
A --> B
</div>

```md
<div class="mermaid">
graph LR
A --> B
</div>
```

## Graphviz

<div id="graphviz-0" style="text-align: center;"></div>
<script>
d3.select("#graphviz-0")
  .graphviz()
    .renderDot('digraph G { size="8,6"; ratio=fill; node[fontsize=24]; ciafan->computefan; fan->increment; computefan->fan; stringdup->fatal; main->exit; main->interp_err; main->ciafan; main->fatal; main->malloc; main->strcpy; main->getopt; main->init_index; main->strlen; fan->fatal; fan->ref; fan->interp_err; ciafan->def; fan->free; computefan->stdprintf; computefan->get_sym_fields; fan->exit; fan->malloc; increment->strcmp; computefan->malloc; fan->stdsprintf; fan->strlen; computefan->strcmp; computefan->realloc; computefan->strlen; debug->sfprintf; debug->strcat; stringdup->malloc; fatal->sfprintf; stringdup->strcpy; stringdup->strlen; fatal->exit; subgraph "cluster_error.h" { label="error.h"; interp_err; } subgraph "cluster_sfio.h" { label="sfio.h"; sfprintf; } subgraph "cluster_ciafan.c" { label="ciafan.c"; ciafan; computefan; increment; } subgraph "cluster_util.c" { label="util.c"; stringdup; fatal; debug; } subgraph "cluster_query.h" { label="query.h"; ref; def; } subgraph "cluster_field.h" { get_sym_fields; } subgraph "cluster_stdio.h" { label="stdio.h"; stdprintf; stdsprintf; } subgraph "cluster_<libc.a>" { getopt; } subgraph "cluster_stdlib.h" { label="stdlib.h"; exit; malloc; free; realloc; } subgraph "cluster_main.c" { main; } subgraph "cluster_index.h" { init_index; } subgraph "cluster_string.h" { label="string.h"; strcpy; strlen; strcmp; strcat;}}`');
</script>

```html
<div id="graphviz-0" style="text-align: center;"></div>
<script>
d3.select("#graphviz-0")
  .graphviz()
    .renderDot('digraph G { size="8,6"; ratio=fill; node[fontsize=24]; ciafan->computefan; fan->increment; computefan->fan; stringdup->fatal; main->exit; main->interp_err; main->ciafan; main->fatal; main->malloc; main->strcpy; main->getopt; main->init_index; main->strlen; fan->fatal; fan->ref; fan->interp_err; ciafan->def; fan->free; computefan->stdprintf; computefan->get_sym_fields; fan->exit; fan->malloc; increment->strcmp; computefan->malloc; fan->stdsprintf; fan->strlen; computefan->strcmp; computefan->realloc; computefan->strlen; debug->sfprintf; debug->strcat; stringdup->malloc; fatal->sfprintf; stringdup->strcpy; stringdup->strlen; fatal->exit; subgraph "cluster_error.h" { label="error.h"; interp_err; } subgraph "cluster_sfio.h" { label="sfio.h"; sfprintf; } subgraph "cluster_ciafan.c" { label="ciafan.c"; ciafan; computefan; increment; } subgraph "cluster_util.c" { label="util.c"; stringdup; fatal; debug; } subgraph "cluster_query.h" { label="query.h"; ref; def; } subgraph "cluster_field.h" { get_sym_fields; } subgraph "cluster_stdio.h" { label="stdio.h"; stdprintf; stdsprintf; } subgraph "cluster_<libc.a>" { getopt; } subgraph "cluster_stdlib.h" { label="stdlib.h"; exit; malloc; free; realloc; } subgraph "cluster_main.c" { main; } subgraph "cluster_index.h" { init_index; } subgraph "cluster_string.h" { label="string.h"; strcpy; strlen; strcmp; strcat;}}`');
</script>
```

## Gittalk

At the end of the page, wrapped within the `<article></article>` block.

## Table of Content

At the beginning of the page, wrapped within the `<article></article>` block, edited within the markdown post file.
