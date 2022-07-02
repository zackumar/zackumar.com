import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  html,
  body {
      scroll-behavior: smooth;
      margin: 0;
      padding: 0;

      width: 100%;
      min-height: 100vh;
  }
`

export const LayoutWrapper = styled.div`
  font-family: Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  display: flex;
  flex-direction: column;
  height: 100vh;
`

export const LayoutContent = styled.div`
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;
`
