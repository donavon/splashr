import React from 'react';
import { render, cleanup, fireEvent } from 'react-testing-library';

import Splashr from '../Splashr';

afterEach(cleanup);
jest.useFakeTimers();

const splash = <div data-testid="splash">splash!</div>;
const children = <div data-testid="children">children</div>;

describe('Splashr', () => {
  test('renders the splash screen until minDelay expires (which defaults to 2 seconds)`', () => {
    const { container } = render(<Splashr transitionTime={0} splash={splash}>{children}</Splashr>);

    expect(container.children.length).toBe(2);
    expect(container.children[0].attributes['data-testid'].value).toBe('children');
    expect(container.children[1].children.length).toBe(1);
    const splashEl = container.children[1].children[0];
    expect(splashEl.attributes['data-testid'].value).toBe('splash');

    jest.advanceTimersByTime(2000);

    expect(container.children.length).toBe(1);
    expect(container.children[0].attributes['data-testid'].value).toBe('children');
  });

  test('acepts minDelay`', () => {
    const { container } = render(
      <Splashr minDelay={100} transitionTime={0} splash={splash}>{children}</Splashr>
    );

    expect(container.children.length).toBe(2);
    expect(container.children[0].attributes['data-testid'].value).toBe('children');
    expect(container.children[1].children.length).toBe(1);
    const splashEl = container.children[1].children[0];
    expect(splashEl.attributes['data-testid'].value).toBe('splash');

    jest.advanceTimersByTime(100);

    expect(container.children.length).toBe(1);
    expect(container.children[0].attributes['data-testid'].value).toBe('children');
  });

  test('accepts an extend prop which extends the splash screen past the expiration timeout`', () => {
    const props = {
      extend: true,
      transitionTime: 0,
      splash,
    };

    const { rerender, container } = render(<Splashr {...props}>{children}</Splashr>);

    expect(container.children.length).toBe(2);
    expect(container.children[0].attributes['data-testid'].value).toBe('children');
    expect(container.children[1].children.length).toBe(1);
    const splashEl = container.children[1].children[0];
    expect(splashEl.attributes['data-testid'].value).toBe('splash');

    jest.advanceTimersByTime(2000);

    expect(container.children.length).toBe(2);
    jest.advanceTimersByTime(2000);

    props.extend = false;
    rerender(<Splashr {...props}>{children}</Splashr>);

    expect(container.children.length).toBe(1);
    expect(container.children[0].attributes['data-testid'].value).toBe('children');
  });

  test('accepts a transitionTime prop`', () => {
    const { container } = render(
      <Splashr transitionTime={100} splash={splash}>{children}</Splashr>
    );
    const transitionEl = container.children[1];

    expect(container.children.length).toBe(2);
    jest.advanceTimersByTime(2000);
    expect(container.children.length).toBe(2);
    fireEvent.transitionEnd(transitionEl);
    jest.advanceTimersByTime(100);
    expect(container.children.length).toBe(1);
  });

  test('has a default transitionTime of 700 msecs`', () => {
    const { container } = render(
      <Splashr splash={splash}>{children}</Splashr>
    );
    const transitionEl = container.children[1];

    expect(container.children.length).toBe(2);
    jest.advanceTimersByTime(2000);
    expect(container.children.length).toBe(2);
    fireEvent.transitionEnd(transitionEl);
    jest.advanceTimersByTime(700);
    expect(container.children.length).toBe(1);
  });

  test('calls onCompleted method`', () => {
    const onCompleted = jest.fn();
    const { container } = render(
      <Splashr splash={splash} onCompleted={onCompleted}>{children}</Splashr>
    );
    const transitionEl = container.children[1];

    expect(onCompleted).not.toHaveBeenCalled();
    expect(container.children.length).toBe(2);
    jest.advanceTimersByTime(2000);
    expect(container.children.length).toBe(2);
    expect(onCompleted).not.toHaveBeenCalled();
    fireEvent.transitionEnd(transitionEl);
    jest.advanceTimersByTime(700);
    expect(container.children.length).toBe(1);
    expect(onCompleted).toHaveBeenCalledTimes(1);
  });

  test('accepts a position prop`', () => {
    const { container } = render(
      <Splashr position="absolute" splash={splash}>{children}</Splashr>
    );
    const transitionEl = container.children[1];

    expect(transitionEl.style.position).toBe('absolute');
  });

  test('has default fixed position`', () => {
    const { container } = render(
      <Splashr splash={splash}>{children}</Splashr>
    );
    const transitionEl = container.children[1];

    expect(transitionEl.style.position).toBe('fixed');
  });
});
