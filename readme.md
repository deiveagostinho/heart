Made with ♥
===========

  React component to easily add `Made with ♥` to your project/whatever. [Want a demo?](http://jugoncalv.es/heart)


Getting Started
---------------

Grab it from npm

```
npm install made-with-heart
```

Add it to your project

```javascript
/**
* @jsx React.DOM
*/

var React = require('react')
  , Heart = require('made-with-heart')

React.render(
  <Heart made="</>" heart="♥"/>,
  document.querySelector('#heart')
)

```

Expected output

```
</> with ♥
```

You can add any text or unicode to `made` or `heart` you may want.

API
---

###JavaScript/React

`<Heart/>` component expects 4 attributes:

  - `made`: the word/unicode to be used as first element
  - `heart`: the word/unicode to be placed after "with"
  - `animation`: css class to animate `heart`
  - `author`: an object with `name` and `link` properties about the author. If `author` object is not specified, it doesn't display anything related to it (even the "by", of course).

There's a built-in `animation` to be used called `hrt-beating`, that does what you expect.

Heart does use CommonJS, if you're not using CommonJS, you can grab the compiled version at `dist/`, but React is also included.

###CSS/Stylus

Heart has built-in stylesheets, but you don't need to use it. You can make your own.

Here's the classes are being used, all of them are prefixed with `hrt_`:

   - `.hrt`: wrapper of the component
   - `.hrt_made`: class used on `made`
   - `.hrt_heart`: class used on `heart`
   - `.hrt_author`: class used on `author`
   - `.hrt_heart--beating`: class used for the animation of `heart`
   - `hrt_animation--beating`: @keyframe of beating.

If you're not using the built-in styles, the beating animation is not going to work. If you're not using Stylus (you're probably not), you can use the compiled version available at `dist/`.


Contributing
------------

It'd be awesome to have your fix/improvement here. So, make a Pull Request following these steps:

1. Fork it and create a branch for your fix/improvement.
2. Pull request it.
3. ????
4. PROFIT!!!1

License
-------

MIT
