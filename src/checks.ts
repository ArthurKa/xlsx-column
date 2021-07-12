import { toNumber } from './utils';

export function isString(p: unknown): void | never {
  if(typeof p !== 'string' && !(p instanceof String)) {
    throw new Error('The parameter should be only String type');
  }
}
export function isNumber(p: unknown): void | never {
  if(typeof p !== 'number' && !(p instanceof Number)) {
    throw new Error('The parameter should be only Number type');
  }
}
export function strOrNum(p: unknown): 'str' | 'num' {
  let res;

  try {
    isString(p);
    res = 'str' as const;
  } catch {}
  try {
    isNumber(p);
    res = 'num' as const;
  } catch {}

  if(!res) {
    throw new Error('The parameter should be one of type String or Number');
  }

  return res;
}
export function isInteger(n: number): void | never {
  if(!(Number.isFinite(n) && Math.floor(n) === n)) {
    throw new Error('The number should be integer');
  }
}
export function isPositive(n: number, label = 'number'): void | never {
  if(n <= 0) {
    throw new Error(`The ${label} should be positive`);
  }
}
export function stringNotEmpty(s: string): void | never {
  if(!s.length) {
    throw new Error('The string should not be empty');
  }
}
export function hasLettersOnly(s: string): void | never {
  if(s.match(/[^a-z]/i)) {
    throw new Error('The string should contain letters only');
  }
}
export const combine = {
  forConstructor(p: string | number): number | never {
    const type = strOrNum(p);
    if(type === 'str') {
      stringNotEmpty(p as string);
      hasLettersOnly(p as string);
      // eslint-disable-next-line no-param-reassign
      p = toNumber((p as string).toUpperCase());
    } else {
      isInteger(p as number);
      isPositive(p as number);
    }

    return p as number;
  },
  forAction(s: string, n: number): number | never {
    isString(s);
    stringNotEmpty(s);
    hasLettersOnly(s);
    isNumber(n);
    isInteger(n);
    const column = toNumber(s.toUpperCase());
    isPositive(column + n, 'result');
    return column;
  },
};
