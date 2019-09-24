---
title: "What Min height CSS property means"
date: "2019-09-24"
description: "What I learned while styling this blog with."
---

![][css]

---

### What is it?

>
> The `min-height` property defines the minimum 
> height element of an element - _W3SCHOOLS_
>

### The Problem

Initially my footer kept appearing in the middle of the page and
it just didn't sit right with me. I started reasearching why it
was occuring -- initially I thought it will be fine eventually
once I add more content, but then I started dwelling on it.

Soon I became aware of a CSS property called `min-heigh`
so I started to play around with it to see what I could do.

### What I did to fix it

With that definition in mind from earlier, it means that if the 
content is smaller than the minimum height the height will be applied.

I added a style to the `<main>` tag.
```
<main style={{minHeight: `100vh`}}> {content} </main>
```

And that's it! This solved my footer problem.


[css]: https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80