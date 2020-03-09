import { getStyleSheet, getTheme, registerStyleSheet, registerTheme } from '../../../src';

describe('theme', () => {
  test('theme API', () => {
    expect(getTheme()).toEqual(getTheme('default'));

    // 都是 default
    expect(getTheme('xxxxx')).toEqual(getTheme('yyyyy'));

    registerTheme('default', {});
    registerTheme('a', { a: 1 });

    expect(getTheme('a')).toEqual({ a: 1 });
    expect(getTheme('default')).toEqual({});

    expect(getStyleSheet()).toEqual(getStyleSheet('default'));
    expect(getStyleSheet('xxxxx')).toEqual(getStyleSheet('yyyyy'));
    registerStyleSheet('default', {});
    registerStyleSheet('a', { brandColor: 'red' });

    expect(getStyleSheet('a')).toEqual({ brandColor: 'red' });
    expect(getStyleSheet('default')).toEqual({});
  });
});