import * as React from "react";

import { NoNavLayout } from "../components/Layout/Layout";
import StyledLink from "../components/StyledLink";
import styled from "styled-components";

const FourOhFourWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
`;

export default function FourOhFour() {
  return (
    <NoNavLayout pageTitle="Page Not Found">
      <FourOhFourWrapper>
        <h1>404</h1>
        <br />
        <h2>Well, this is awkward.</h2>
        <div>
          <p>
            It seems you've been routed to a page that doesn't exist. Weird.
          </p>
        </div>
        <br />
        <StyledLink to="/">Go home</StyledLink>
      </FourOhFourWrapper>
    </NoNavLayout>
  );
}
