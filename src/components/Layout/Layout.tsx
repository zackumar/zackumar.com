import React from "react";
import { Helmet } from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";

import Header from "../Header";
import { GlobalStyle, LayoutContent, LayoutWrapper } from "./Layout.styles";

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
        <Header menuLinks={data.site.siteMetadata.menuLinks} />
        <LayoutContent>{children}</LayoutContent>
        {/* <Footer /> */}
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
      <LayoutContent>{children}</LayoutContent>
    </div>
  );
};
