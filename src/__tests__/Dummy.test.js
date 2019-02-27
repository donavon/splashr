import React from 'react';
import { render, cleanup } from 'react-testing-library';

import Dummy from '../Dummy';

afterEach(cleanup);

describe('useDummy', () => {
  test('renders nothing`', () => {
    const cb = jest.fn();
    const { container } = render(<Dummy onUnmount={cb} />);
    expect(container.innerHTML).toBe('');
  });
  test('calls the callback funtion on unmount`', () => {
    const cb = jest.fn();
    const { unmount } = render(<Dummy onUnmount={cb} />);
    expect(cb).not.toBeCalled();
    unmount();
    expect(cb).toBeCalled();
  });
});
