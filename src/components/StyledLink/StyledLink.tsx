import { Link } from "gatsby";
import styled from "styled-components";
import { ColorType } from "../../theme/types";

export const StyledLinkExternal = styled.a<{
  colors?: {
    leftColor?: ColorType;
    rightColor?: ColorType;
    mergeColor?: ColorType;
    textColor?: ColorType;
    hoverColor?: ColorType;
  };
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
    width: 50%;
    height: 100%;
  }

  &:before {
    transform: translateY(8%);
    left: 5%;
    background-color: ${({ colors }) =>
      colors?.rightColor ? colors.rightColor : "#71e2a6"};
  }

  &:after {
    transform: translateY(-8%);
    right: 5%;
    background-color: ${({ colors }) =>
      colors?.leftColor ? colors.leftColor : "#fee440"};
  }

  &:hover {
    color: ${({ colors }) => (colors?.hoverColor ? colors.hoverColor : "#fff")};

    &:before,
    &:after {
      background-color: ${({ colors }) =>
        colors?.mergeColor ? colors.mergeColor : "#4c3d6d"};
      transform: translateY(0);
    }

    &:before {
      left: -0%;
    }

    &:after {
      right: -0%;
    }
  }
`;

export const StyledLink = styled(Link)<{
  colors?: {
    leftColor?: ColorType;
    rightColor?: ColorType;
    mergeColor?: ColorType;
    textColor?: ColorType;
    hoverColor?: ColorType;
  };
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
    width: 50%;
    height: 100%;
  }

  &:before {
    transform: translateY(8%);
    left: 5%;
    background-color: ${({ colors }) =>
      colors?.rightColor ? colors.rightColor : "#71e2a6"};
  }

  &:after {
    transform: translateY(-8%);
    right: 5%;
    background-color: ${({ colors }) =>
      colors?.leftColor ? colors.leftColor : "#fee440"};
  }

  &:hover {
    color: ${({ colors }) => (colors?.hoverColor ? colors.hoverColor : "#fff")};

    &:before,
    &:after {
      background-color: ${({ colors }) =>
        colors?.mergeColor ? colors.mergeColor : "#4c3d6d"};
      transform: translateY(0);
    }

    &:before {
      left: -0%;
    }

    &:after {
      right: -0%;
    }
  }
`;
