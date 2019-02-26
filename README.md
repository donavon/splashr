# 🌊 Splashr

A React component that takes the effort out of adding a Splash Screen to your web application.

❤️ it? ⭐️ it on [GitHub](https://github.com/donavon/splashr/stargazers)
or [Tweet](https://twitter.com/intent/tweet?text=Check%20out%20%F0%9F%8C%8ASplashr.%20A%20custom%20React%20component%20that%20adds%20a%20splash%20screen%20to%20your%20web%20app.&url=https%3A%2F%2Fgithub.com%2Fdonavon%2Fsplashr&via=donavon&hashtags=reactjs,hooks,splashscreen)
about it.

[![npm version](https://badge.fury.io/js/splashr.svg)](https://badge.fury.io/js/splashr)

<div style="text-align: center">
<img src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/apple/155/water-wave_1f30a.png" alt="ocean wave">
</div>

## Installation

```bash
$ npm i splashr
```

or

```bash
$ yarn add splashr
```

⚠️ Note: Splashr has a peerDependency on React 16.8.0 or greater.

## Usage

Here is a simple example use of Splashr.

```js
import Splashr from 'splashr';

const splash = (
  <div cloassName="splash-screen">
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

## Sample Apps

Here is a list of apps build with Splashr.
If you have an app you would like to include on this list, open a PR.

* [Demo App on CodeSandbox](https://codesandbox.io/s/9on6o2076y) - by [@donavon](https://twitter.com/donavon)

## License

**[MIT](LICENSE)** Licensed
