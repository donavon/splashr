# 🌊 Splashr

A React component that takes the effort out of adding a Splash Screen to your web application.

❤️ it? ⭐️ it on [GitHub](https://github.com/donavon/splashr/stargazers)
or [Tweet](https://twitter.com/intent/tweet?text=Check%20out%20%F0%9F%8C%8ASplashr.%20A%20custom%20React%20component%20that%20adds%20a%20splash%20screen%20to%20your%20web%20app.&url=https%3A%2F%2Fgithub.com%2Fdonavon%2Fsplashr&via=donavon&hashtags=reactjs,hooks,splashscreen)
about it.

[![npm version](https://badge.fury.io/js/splashr.svg)](https://badge.fury.io/js/splashr)
[![All Contributors](https://img.shields.io/badge/all_contributors-1-orange.svg?style=flat-square)](#contributors)

<div style="text-align: center">
<img src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/apple/155/water-wave_1f30a.png" alt="ocean wave">
</div>


## New in Version 0.3.x

* Support for [React Suspense](https://reactjs.org/docs/code-splitting.html) and lazy loading of components (see below for details)!

## Installation

```bash
$ npm i splashr
```

or

```bash
$ yarn add splashr
```

⚠️ Note: Splashr has a peerDependency on React 16.8.0 or greater.

## Basic Usage

Here is a simple example use of Splashr.

```js
import Splashr from 'splashr';

const splash = (
  <div className="splash-screen">
    Welcome to my app
  </div>
);

const App = () => (
  <Splashr splash={splash}>
    <div className="app">
      This is my app.
    </div>
  </Splashr>
);
```

### Props

Here are some of the props that you can use to customize Splashr. (\* = required)


| Parameter | Description                                |
| :-------- | :----------------------------------------- |
| `splash`\*     | Your rendered splash screen. |
| `children`\*     |  Your app.  |
| `minDelay`     |  How long to show the splash screen in msecs. Default = 2000  |
| `extend`     |  A boolean that will extend the splash screen. Set to `true` to extend the splash screen past `minDelay`, maybe to load a resource. Default = `false`.   |
| `transitionTime`     |  By default, Splashr will transition between the splash screen and your app. This value will set the transition time in msecs. To disable the transition, set `transitionTime` to 0. Default = 700  |
| `transitionTimingFunction`     |  The string representing the [timing function](https://developer.mozilla.org/en-US/docs/Web/CSS/transition-timing-function) to perform on the transition. Default = "ease"  |

## Suspense

Starting with version 0.3.0, there is support for React Suspense and lazy loading.

Let's say you lazy load some components. With Suspense,
the splash screen will remin visible for _at least_ 2 seconds
(by default, or whatever value you speify in `minDelay`),
but possibly longer if the components have yet to load.
This is very useful for slower 2G/3G connections on mobile devices.

One might do this to get the splash screen rendered as soon as possible while the rest of the app is sill loading (or
[First Meaningful Paint](https://developers.google.com/web/tools/lighthouse/audits/first-meaningful-paint)).

To support Suspense, simply change `<Splashr>` to `<Splashr.Suspense>`.
All props are supported except `extend`, which is ignored with `<Splashr.Suspense>`.

```js
import Splashr from 'splashr';

const OtherComponent = React.lazy(() => import('./OtherComponent'));
const AnotherComponent = React.lazy(() => import('./AnotherComponent'));

const splash = (
  <div className="splash-screen">
    Welcome to my app
  </div>
);

const App = () => (
  <Splashr.Suspense splash={splash}>
    <div className="app">
      <OtherComponent />
      <AnotherComponent />
    </div>
  </Splashr.Suspense>
);
```

### Why not just use React's `Suspense`?

`Splashr.Suspense` is simular to React's built-in `Suspense` (in fact it's built on top of it), but supports a smooth transition between the splash screen and the rest of the app. it also supports a `minDelay`, which React's `Suspense` does not.

## Sample Apps

Here is a list of apps build with Splashr.
If you have an app you would like to include on this list, open a PR.

* [Demo App on CodeSandbox](https://codesandbox.io/s/9on6o2076y) - by [@donavon](https://twitter.com/donavon)
* [Splash.Suspense demo on CodeSandbox](https://codesandbox.io/s/o5pqnq49w6) - by [@donavon](https://twitter.com/donavon)

## License

**[MIT](LICENSE)** Licensed

## Contributors

Thanks goes to these wonderful people ([emoji key](https://github.com/all-contributors/all-contributors#emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore -->
| [<img src="https://avatars3.githubusercontent.com/u/887639?v=4" width="100px;" alt="Donavon West"/><br /><sub><b>Donavon West</b></sub>](http://donavon.com)<br />[🚇](#infra-donavon "Infrastructure (Hosting, Build-Tools, etc)") [⚠️](https://github.com/donavon/splashr/commits?author=donavon "Tests") [💡](#example-donavon "Examples") [🤔](#ideas-donavon "Ideas, Planning, & Feedback") [🚧](#maintenance-donavon "Maintenance") [👀](#review-donavon "Reviewed Pull Requests") [🔧](#tool-donavon "Tools") [💻](https://github.com/donavon/splashr/commits?author=donavon "Code") |
| :---: |
<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!
