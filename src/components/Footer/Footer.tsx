import React from "react";
import styled from "styled-components";

const FooterContainer = styled.footer`
  flex: 0 1;
  background-color: #eaebec;
  padding: 2rem;
  bottom: 0;

  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;

  a.icon {
    color: #000;
    margin: auto 1.5rem auto;
    text-decoration: none;
    font-size: 1.5em;
  }

  a.icon span {
    display: none;
  }

  .link-container {
    display: flex;
    flex-direction: row;
    flex-shrink: 0;
  }

  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <p>
        Oh, you're still here? You're done. That was it. You can leave now. Have
        a good day. Bye-bye now.
      </p>
      <div className="link-container">
        <a
          aria-label="github"
          href="https://www.github.com/zackumar"
          className="icon fab fa-github"
        >
          <span>Github</span>
        </a>
        <a
          aria-label="email"
          href="mailto:zack@zackumar.com?subject=Contact Me!"
          className="icon fas fa-paper-plane"
        >
          <span>Email Us</span>
        </a>
        <a
          aria-label="linkedin"
          href="https://www.linkedin.com/in/zackumar"
          className="icon fab fa-linkedin-in"
        >
          <span>Instagram</span>
        </a>
      </div>
    </FooterContainer>
  );
};

export default Footer;
