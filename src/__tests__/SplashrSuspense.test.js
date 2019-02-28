import React from 'react';
import {
  render, cleanup, waitForElement, getByTestId, fireEvent,
} from 'react-testing-library';
import 'jest-dom/extend-expect';

import SplashrSuspense from '../SplashrSuspense';

afterEach(cleanup);
jest.useFakeTimers();

const simulateDynamicImport = (component, delay) => () => (delay
  ? new Promise(resolve => setTimeout(() => resolve({ default: component }), delay))
  : Promise.resolve({ default: component })
);

const splash = <div data-testid="splash">splash!</div>;
const Children = () => <div data-testid="children">children</div>;

const LazyChildren = React.lazy(simulateDynamicImport(Children, 10000));

describe('SplashrSuspense', async () => {
  test('accepts lazy loaded children', async () => {
    const { container } = render(
      <SplashrSuspense
        transitionTime={700}
        splash={splash}
      >
        <LazyChildren />
      </SplashrSuspense>
    );
    const transitionEl = container.children[0];

    expect(container.children[0].children.length).toBe(1);
    jest.advanceTimersByTime(10000);
    expect(container.children[0].children.length).toBe(1);

    const lazySplashElement = await waitForElement(() => getByTestId(container, 'splash'));
    expect(lazySplashElement).toBeInTheDocument();

    fireEvent.transitionEnd(transitionEl);
    expect(container.children.length).toBe(1);
  });
});
