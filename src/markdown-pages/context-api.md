---
title: "Context API in React"
date: "2019-12-04"
description: "React"
---

![][react]

---

Recently, I've been working with React's Context system and I must say, it grows on you.

Imagine you have a small application, with nested child components. Let's say nesting goes 4 levels deep.

If we use the props system, each component of the application would need to pass `props` to the child at each level
but with Context API, we can pass `props` to whatever component we want without passing it to the components in between.

<img style="display: block; margin: auto; margin-bottom: 1.45rem;" alt="App diagram" src="../../app.png" />

In this example, we could simply create a `MyContext.Provider` in ComponentA and use a `MyContext.Consumer` in Component D

For this to be successful, we first have to create a Context object. Optionally we can add a default value to it.

```
// src/MyContext.js
import React from 'react';

export default MyContext = React.createContext();
```

The caveat is that the value cannot be changed if we pass a default value to it
without using `Provider` component and `Consumer` component to consume the value.


```
// src/ComponentA.js

import React from 'react';
import MyContext from './MyContext'

const ComponentA = () => (
  <MyContext.Provider value="THIS IS THE VALUE">
    <ComponentC />
  </MyContext.Provider>
);
```

Component A holds only Component C, so the context will be passed to ComponentC

```
// src/ComponentC.js
const ComponentC = () => <ComponentD />;
```

From ComponentC we return ComponentD, which consumes the context.

```
// src/ComponentD.js

import React from 'react';
import MyContext from './MyContext'

const ComponentD = () => (
  <MyContext.Consumer>{value => <p>{value}</p>}</MyContext.Consumer>
);
```
In order to extract the value from the context object we have to use a Consumer component and its child is always an arrow function.

App component would only need to hold ComponentA, which in turn renders ComponentC and ComponentD, as well as ComponentB on its own.

Other examples of the context API can be found on my Github [here][git1] and [here][git2].



[react]: https://hackernoon.com/hn-images/1*h8d-4wYLN9wwiEsLAA_5yg.jpeg

[git1]: https://github.com/palm002/react-context-intro

[git2]: https://github.com/palm002/react-context