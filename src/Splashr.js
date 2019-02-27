import React, {
  Fragment,
  useState,
  useRef,
} from 'react';
import PropTypes from 'prop-types';
import useListener from '@use-it/event-listener';

import useInitialDelay from './useInitialDelay';

const Splashr = ({
  splash,
  children,
  minDelay,
  extend,
  transitionTime,
  transitionTimingFunction,
}) => {
  const showSplashScreen = useInitialDelay(minDelay, extend);
  const [isCompleted, setCompleted] = useState(false);
  const splashScreenEl = useRef();

  if (!showSplashScreen && !transitionTime && !isCompleted) {
    setCompleted(true);
  }

  useListener(
    'transitionend',
    () => {
      setCompleted(true);
      splashScreenEl.current = null;
    },
    transitionTime ? splashScreenEl.current : null
  );

  const transitionStyle = transitionTime
    ? { transition: `opacity ${transitionTime}ms ${transitionTimingFunction}` }
    : {};

  return isCompleted ? (
    children
  ) : (
    <Fragment>
      {children}
      {!isCompleted && (
        <div
          ref={splashScreenEl}
          style={{
            position: 'fixed',
            margin: 0,
            padding: 0,
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            opacity: showSplashScreen ? 1 : 0,
            ...transitionStyle,
          }}
        >
          {splash}
        </div>
      )}
    </Fragment>
  );
};

Splashr.propTypes = {
  splash: PropTypes.element.isRequired,
  children: PropTypes.element,
  minDelay: PropTypes.number,
  extend: PropTypes.bool,
  transitionTime: PropTypes.number,
  transitionTimingFunction: PropTypes.string,
};

Splashr.defaultProps = {
  children: null,
  minDelay: 2000,
  extend: false,
  transitionTime: 700,
  transitionTimingFunction: 'ease',
};

export default Splashr;
