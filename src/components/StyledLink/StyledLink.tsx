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

export const StyledLinkExternal = styled.a<{
  colors?: ColorProps;
  extended: boolean;
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

export const StyledLinkInternal = styled(Link)<{
  colors?: ColorProps;
  extended: boolean;
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

type StyledLinkProps =
  | {
      colors?: ColorProps;
      href: string;
      to?: never;
      extended?: boolean;
      children?: React.ReactNode;
    }
  | ({
      colors?: ColorProps;
      href?: never;
      to: string;
      extended?: boolean;
      children?: React.ReactNode;
    } & Omit<GatsbyLinkProps<{}>, "ref">);

export function StyledLink({
  colors,
  href,
  to,
  extended = false,
  children,
  ...props
}: StyledLinkProps) {
  if (href) {
    return (
      <StyledLinkExternal
        colors={colors}
        href={href}
        extended={extended}
        {...props}
      >
        {children}
      </StyledLinkExternal>
    );
  }

  return (
    <StyledLinkInternal
      colors={colors}
      to={to ?? ""}
      extended={extended}
      {...props}
    >
      {" "}
      {children}
    </StyledLinkInternal>
  );
}
