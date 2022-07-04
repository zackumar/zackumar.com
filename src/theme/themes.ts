import { Breakpoints, ColorType } from "./types";

const breakpoints = [0, 480, 768, 1024] as Breakpoints;
[breakpoints.xsmall, breakpoints.small, breakpoints.medium, breakpoints.large] =
  breakpoints;

const colors: Record<string, ColorType> = {
  black: "#000",
  white: "#fff",

  accentGreen: "#71e2a6",
  accentYellow: "#fee440",

  gray: "#fafafa",
};

const defaultThemes = {
  breakpoints,
  colors,
};

export default defaultThemes;
