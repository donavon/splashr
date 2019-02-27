import { useEffect } from 'react';

const Dummy = ({ onUnmount }) => {
  useEffect(
    () => () => {
      onUnmount();
    },
    [onUnmount]
  );

  return null;
};

export default Dummy;
