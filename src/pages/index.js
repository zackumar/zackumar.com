import * as React from 'react'
import styled from 'styled-components'

import Layout from '../components/layout'

const HeaderText = styled.div`
  flex: 0 1 auto;

  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  padding-top: 4rem;

  h1 {
    font-size: 3em;
    max-width: 50rem;
    text-align: center;
  }

  @media (min-width: 600px) {
    h1 {
      font-size: 4em;
    }

    margin-bottom: 1rem;
  }
`
const ContentPane = styled.div`
  flex: 1 1 auto;
  background-color: #f4f6f8;
  padding: 5rem;

  section {
    margin-bottom: 5rem;
    line-height: 1.5;

    h1 {
      font-size: 2em;
    }

    h2 {
      font-size: 1.75em;
      margin-bottom: 0;
      padding-bottom: 0;
    }

    p {
      font-size: 1.25em;
    }
  }
`

const Footer = styled.footer`
  flex: 0 1 100px;
  background-color: #edeeef;
  // height: 100px;
`

// markup
const IndexPage = () => {
  return (
    <Layout pageTitle="Home">
      <HeaderText>
        <h1>Hi, I'm Zack. I code things sometimes.</h1>
      </HeaderText>
      <ContentPane>
        <section>
          <h1>Hello, I'm Zack Umar 👋</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nec ullamcorper sit amet risus. Dui nunc mattis enim ut tellus
            elementum sagittis. Sed blandit libero volutpat sed cras ornare arcu dui. Pellentesque eu tincidunt tortor aliquam nulla facilisi cras fermentum odio. Velit ut tortor pretium viverra
            suspendisse. Eu feugiat pretium nibh ipsum. Scelerisque varius morbi enim nunc faucibus a pellentesque sit. Dictum sit amet justo donec enim diam vulputate ut. Quam viverra orci sagittis
            eu volutpat. Id leo in vitae turpis massa. Id consectetur purus ut faucibus pulvinar elementum integer. At ultrices mi tempus imperdiet. Diam donec adipiscing tristique risus nec feugiat.
            Nibh mauris cursus mattis molestie a iaculis at erat. Aliquet enim tortor at auctor. In arcu cursus euismod quis viverra nibh.
          </p>
        </section>
        <section>
          <h1>A Handful of Projects 🤲</h1>
          <h2>Project 1</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nec ullamcorper sit amet risus. Dui nunc mattis enim ut tellus
            elementum sagittis. Sed blandit libero volutpat sed cras ornare arcu dui. Pellentesque eu tincidunt tortor aliquam nulla facilisi cras fermentum odio. Velit ut tortor pretium viverra
            suspendisse.
          </p>
        </section>
      </ContentPane>
      <Footer>hi</Footer>
    </Layout>
  )
}

export default IndexPage
