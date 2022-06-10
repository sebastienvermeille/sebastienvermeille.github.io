---
layout: post
title:  "Falmeshot - Do screenshots and annotate them in seconds !"
author: sbeex
categories: [ i3 ]
tags: [ linux, i3wm]
image: assets/images/articles/flameshot-logo.png
subtheme: sub-theme-git
---

`nano ~/.config/i3/config` (or vim whatever)

```bash
# ~/.config/i3/config

# bind flameshot to printscr button
bindsym Print exec flameshot gui
```

Then:
`i3-msg reload` and `i3-msg restart`

Voila !
