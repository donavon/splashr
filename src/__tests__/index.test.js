import index from '..';
import Splashr from '../Splashr';
import SplashrSuspense from '../SplashrSuspense';

describe('index', () => {
  test('exports Splashr as default`', () => {
    expect(index).toBe(Splashr);
  });
  test('adds a static Splashr.Suspense`', () => {
    expect(index.Suspense).toBe(SplashrSuspense);
  });
});
