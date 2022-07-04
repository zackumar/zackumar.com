import React from "react";
import { Helmet } from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";

import Header from "../Header";

import styled, { createGlobalStyle } from "styled-components";
import SkipToContent from "./SkipToContent";
import Footer from "../Footer";

const GlobalStyle = createGlobalStyle`
  html,
  body {
      scroll-behavior: smooth;
      margin: 0;
      padding: 0;

      width: 100%;
      min-height: 100vh;

      font-family: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
        Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  }
`;

const LayoutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

const LayoutContent = styled.div`
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;
`;

interface LayoutProps {
  pageTitle: string;
  children: React.ReactNode;
}

export function Layout({ pageTitle, children }: LayoutProps) {
  const data = useStaticQuery(graphql`
    query siteTitleQuery {
      site {
        siteMetadata {
          menuLinks {
            link
            name
          }
          title
        }
      }
    }
  `);

  return (
    <>
      <GlobalStyle />
      <Helmet
        htmlAttributes={{
          lang: "en",
        }}
      >
        <title>
          {pageTitle} | {data.site.siteMetadata.title}
        </title>

        <meta charSet="utf-8" />
        <meta
          name="description"
          content="Hi, I'm Zack Umar. I code things sometimes."
        />
        <meta name="keywords" content="Zack Umar, Umar, Zack" />
        <meta name="author" content="Zack Umar" />
        <meta name="language" content="English" />

        <script
          src="https://kit.fontawesome.com/659f724388.js"
          crossOrigin="anonymous"
        ></script>
      </Helmet>
      <LayoutWrapper>
        <SkipToContent />
        <Header menuLinks={data.site.siteMetadata.menuLinks} />
        <LayoutContent>{children}</LayoutContent>
        <Footer />
      </LayoutWrapper>
    </>
  );
}

export const NoNavLayout = ({ pageTitle, children }: LayoutProps) => {
  return (
    <div>
      <Helmet>
        <title>{pageTitle}</title>
      </Helmet>
      <GlobalStyle />

      <LayoutContent>{children}</LayoutContent>
    </div>
  );
};
