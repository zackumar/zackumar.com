type HEX = `#${string}`;
export type ColorType = HEX;

export const BREAKPOINT = {
  XSMALL: "xsmall",
  SMALL: "small",
  MEDIUM: "medium",
  LARGE: "large",
} as const;

export type BreakpointName = typeof BREAKPOINT[keyof typeof BREAKPOINT];
export type BreakpointRecord = Record<BreakpointName, number>;
export type BreakpointArray = [number, number, number, number];
export interface Breakpoints extends BreakpointArray, BreakpointRecord {}
