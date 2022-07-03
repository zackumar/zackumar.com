import { Link } from "gatsby";
import React from "react";

import styled from "styled-components";

const SkipLink = styled(Link)`
  position: absolute;
  transform: translateY(-100%);

  &:focus {
    transform: translateY(0);
  }
`;

interface SkipToContentProps {
  jumpId?: string;
}

export default function SkipToContent({
  jumpId = "#r_content",
}: SkipToContentProps) {
  return <SkipLink to={jumpId}>Skip to Content</SkipLink>;
}
