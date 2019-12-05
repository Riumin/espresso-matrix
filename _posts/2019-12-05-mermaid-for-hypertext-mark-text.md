---
layout: post
title: Mermaid for Hypertext Mark Text
date: 2019-11-27T17:41:56.697Z
---
Mermaid is a graphicalization tool by javascripts implenmented in Hypertext Mark Text, which provides an excellent visual effect in a form of flowchart, gantt, sequence, etc. Since the time when its version 7 published have I deployed it for my websites and blogs. Recently the newest version 8 carry on **state** and **pie** diagram in a much more brilliant graphical items.

> GitHub Repo: [mermaid](https://github.com/mermaid-js/mermaid) (on continuous maintanence)
>
> Publishing Page: [mermaid](http://mermaid-js.github.io/mermaid/#/)
>
> Live Editor: [Mermaid Live Editor](https://mermaidjs.github.io/mermaid-live-editor/#/edit/eyJjb2RlIjoic3RhdGVEaWFncmFtXG4gICAgWypdIC0tPiBTdGlsbFxuICAgIFN0aWxsIC0tPiBbKl1cbiAgICBTdGlsbCAtLT4gTW92aW5nXG4gICAgTW92aW5nIC0tPiBTdGlsbFxuICAgIE1vdmluZyAtLT4gQ3Jhc2hcbiAgICBDcmFzaCAtLT4gWypdIiwibWVybWFpZCI6eyJ0aGVtZSI6ImRlZmF1bHQifX0)

- the present website implements mermaid in a version of 8.4.2 from local repository.

# A test for mermaid script 

```
stateDiagram
    [*] --> Still
    Still --> [*]

    Still --> Moving
    Moving --> Still
    Moving --> Crash
    Crash --> [*]
```

<div class="mermaid" align="center">
stateDiagram
    [*] --> Still
    Still --> [*]

    Still --> Moving
    Moving --> Still
    Moving --> Crash
    Crash --> [*]
</div>
