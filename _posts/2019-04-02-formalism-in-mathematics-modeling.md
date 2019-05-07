---
layout: post
title: "Formalism in Mathematics Modeling"
date: 2019-04-03
excerpt: "Product papers you like."
tags: "mathematics-modeling reference latex"
comments: true
---

# What makes up your ideal papers of mathematics modeling?


<div class="mermaid" align="center">
graph TD
id1(Abstract & Keywords) --> id2(Review of the issue)
id2 --> id3(Analysis of the issue)
id3 --> id41(declaration of the Parameters)
subgraph Modeling
id41 --> id42(mathematics expression)
id42 --> id43(theoritical improvement of the model)
end
id43-->id5(test by cases)
id5-->id6(practical improvement of the model)
id6-->id42
id6-->id7(conclusion and product the Papers)
</div>

# Appendix

## How to start up your papers in $\LaTeX$

```latex
\documentclass{article}
\usepackage{}

\title{Here is the title}
\author{Shaun Leo, Shaun Leo, Shaun Leo}
\date{Apr 3, 2019}
\begin{document}
	\maketitle
	\tableofcontents
	\section[Preview]{Here is a sentence within the preview.}
	Here is the first sentence in the article.
	
	\subsection{Here is a subsection}
	Here is a sentence within a subsection.
	\subparagraph{Here is a subparagraph.}
	\subsubsection{Here is a subsubsection}
\end{document}
```