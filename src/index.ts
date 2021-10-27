import * as checks from './checks';
import { toString, toNumber } from './utils';

export function incColumn(s: string, n = 1) {
  const column = checks.combine.forAction(s, n);
  return toString(column + n);
}
export const decColumn = (s: string, n = 1) => incColumn(s, -n);
export const numToColumn = (n: number) => toString(n);
export const colToNumber = (str: string) => toNumber(str.toUpperCase());

type XLSXColumn = {
  inc(n?: number): XLSXColumn;
  dec(n?: number): XLSXColumn;
  valueOf(): number;
  toString(): string;
};

const XLSXColumn = function(p: string | number) {
  let column = checks.combine.forConstructor(p);

  const res: XLSXColumn = {
    inc(n = 1) {
      column = toNumber(incColumn(toString(column), n));
      return res;
    },
    dec(n = 1) {
      column = toNumber(decColumn(toString(column), n));
      return res;
    },
    valueOf: () => column,
    toString: () => toString(column),
  };

  return res;
} as any as new (p: string | number) => XLSXColumn;

export default XLSXColumn;

export function range(from: string | number, to: string | number) {
  const column = new XLSXColumn(from);
  const lastColumn = new XLSXColumn(to);
  return {
    *[Symbol.iterator]() {
      while(column <= lastColumn) {
        yield column;
        column.inc();
      }
    },
  };
}
