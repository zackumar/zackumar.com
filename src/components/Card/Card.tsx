import React from "react";

import styled from "styled-components";

const CardWrapper = styled.div`
  flex: 1 1 auto;

  padding: 1.5rem;
  border-radius: 1.5rem;
  height: auto;
  border: 1px solid rgba(75, 85, 99, 1);
  min-width: 40%;
`;

const CardLink = styled.a`
  text-decoration: none;
  color: black;
`;

const CardTitle = styled.h1`
  margin: 0px;
`;

const CardSubtitle = styled.h2`
  font-size: 1.125em;
  font-weight: 400;
  margin-top: 0px;
  color: rgba(75, 85, 99, 1);
  text-overflow: ellipsis;
  word-wrap: break-word;
`;

const CardText = styled.span`
  font-size: 1.125em;
  font-weight: 400;
  margin-top: 0px;
  color: rgba(75, 85, 99, 1);
`;

interface CardProps {
  title: string;
  link: string;
  description: string;
}

export function Card({ title, link, description }: CardProps) {
  return (
    <CardWrapper>
      <CardLink href={link}>
        <CardTitle>{title}</CardTitle>
        <CardSubtitle>{link}</CardSubtitle>
        <CardText>{description}</CardText>
      </CardLink>
    </CardWrapper>
  );
}
