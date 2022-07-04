import React from "react";
import { GatsbyLinkProps, Link } from "gatsby";
import styled from "styled-components";
import { ColorType } from "../../theme/types";

interface ColorProps {
  leftColor?: ColorType;
  rightColor?: ColorType;
  mergeColor?: ColorType;
  textColor?: ColorType;
  hoverColor?: ColorType;
}

type StyledLinkProps =
  | {
      href: string;
      to?: never;
      children?: React.ReactNode;
    }
  | ({
      href?: never;
      to: string;
      children?: React.ReactNode;
    } & Omit<GatsbyLinkProps<{}>, "ref">);

export function HybridLink({ href, to, children, ...props }: StyledLinkProps) {
  if (href) {
    return (
      <a href={href} {...props}>
        {children}
      </a>
    );
  }

  return (
    <Link to={to ?? ""} {...props}>
      {children}
    </Link>
  );
}

export const StyledLink = styled(HybridLink)<{
  colors?: ColorProps;
  extended?: boolean;
}>`
  white-space: nowrap;
  position: relative;
  text-decoration: none;
  color: ${({ colors }) => (colors?.textColor ? colors.textColor : "#4c3d6d")};
  transition: all 0.3s ease;
  font-weight: bold;

  &:before,
  &:after {
    transition: all 0.3s ease;
    content: "";
    position: absolute;
    z-index: -1;
    top: 5%;
    width: ${({ extended }) => (extended ? "55%" : "47%")};
    height: 100%;
  }

  &:before {
    transform: translateY(8%);
    left: ${({ extended }) => (extended ? "-2%" : "5%")};
    background-color: ${({ colors }) =>
      colors?.rightColor ? colors.rightColor : "#71e2a6"};
  }

  &:after {
    transform: translateY(-8%);
    right: ${({ extended }) => (extended ? "-2%" : "5%")};
    background-color: ${({ colors }) =>
      colors?.leftColor ? colors.leftColor : "#fee440"};
  }

  &:hover {
    color: ${({ colors }) => (colors?.hoverColor ? colors.hoverColor : "#fff")};

    &:before,
    &:after {
      width: 55%;
      background-color: ${({ colors }) =>
        colors?.mergeColor ? colors.mergeColor : "#4c3d6d"};
      transform: translateY(0);
    }

    &:before {
      left: -2%;
    }

    &:after {
      right: -2%;
    }
  }
`;
