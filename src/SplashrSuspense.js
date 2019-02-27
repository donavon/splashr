import React, {
  Fragment, Suspense, useState, useMemo,
} from 'react';
import PropTypes from 'prop-types';

import Splashr from './Splashr';
import Dummy from './Dummy';

const SplashrSuspense = ({ children, ...otherProps }) => {
  const [isSuspended, setSuspended] = useState(true);

  const memoizedDummy = useMemo(
    () => <Dummy onUnmount={() => setSuspended(false)} />,
    [setSuspended]
  );

  return (
    <Fragment>
      <Suspense maxDuration={Infinity} fallback={memoizedDummy}>
        {isSuspended ? children : null}
      </Suspense>
      <Splashr {...otherProps} extend={isSuspended}>
        {isSuspended ? null : children}
      </Splashr>
    </Fragment>
  );
};

SplashrSuspense.propTypes = {
  children: PropTypes.element,
};

SplashrSuspense.defaultProps = {
  children: null,
};

export default SplashrSuspense;
