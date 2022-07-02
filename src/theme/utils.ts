import { BreakpointName } from "./types"
import theme from "./themes"

export const minWidthBreakpoint = (breakpoint: BreakpointName): string => {
    return `@media screen and (min-width: ${theme.breakpoints[breakpoint]}px)`
}