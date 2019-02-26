# Splashr

A React component that takes the effort out of adding a Splash Screen to your web application.

[![npm version](https://badge.fury.io/js/splashr.svg)](https://badge.fury.io/js/splashr)

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

## License

**[MIT](LICENSE)** Licensed
