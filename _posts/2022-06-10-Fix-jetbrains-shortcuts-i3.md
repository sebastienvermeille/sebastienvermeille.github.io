---
layout: post
title:  "[WIP][How to] Fix Jetbrains shortcuts on i3wm"
author: sbeex
categories: [ tool, productivity ]
tags: [ linux, i3]
image: assets/images/articles/i3wm.png
subtheme: sub-theme-git
---
## Introduction

1) In jetbrains toolbox app > tools: enable generate shortcuts and define the path to be `~/.local/bin`

```bash
PATH=$PATH:~/.local/bin
```

Note: It will only work for new installations (remove and reinstall your apps evtl)

## References
* [Jetbrains youtrack ticket](https://youtrack.jetbrains.com/issue/IDEA-206235)
