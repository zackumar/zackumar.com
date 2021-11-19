import React from 'react'
import { Helmet } from 'react-helmet'
import styled from 'styled-components'

const FooterContainer = styled.footer`
  flex: 0 1;
  background-color: #edeeef;
  padding: 2rem;
  bottom: 0;

  display: flex;
  justify-content: space-between;
  align-items: center;

  max-height: 10px;

  a.fa {
    color: #000;
    margin: auto 1.5rem auto;
    text-decoration: none;
    font-size: 1.5em;
  }

  a.fa span {
    display: none;
  }
`

const Footer = () => {
  return (
    <FooterContainer>
      <Helmet>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
      </Helmet>

      <p>Oh, you're still here? You're done. That was it. You can leave now. Have a good day. Bye-bye now.</p>
      <div>
        <a aria-label="github" href="https://www.github.com/zackumar" class="fa fa-github">
          <span>Github</span>
        </a>
        <a aria-label="email" href="mailto:zack@zackumar.com?subject=Contact Me!" class="fa fa-paper-plane">
          <span>Email Us</span>
        </a>
        <a aria-label="linkedin" href="https://www.linkedin.com/in/zackumar" class="fa fa-linkedin">
          <span>Instagram</span>
        </a>
      </div>
    </FooterContainer>
  )
}

export default Footer
