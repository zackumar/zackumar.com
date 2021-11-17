import * as React from 'react'
import styled from 'styled-components'

import Layout from '../components/layout'

const HeaderText = styled.div`
  padding-top: 4rem;
  display: flex;
  justify-content: center;
  align-items: center;

  h1 {
    font-size: 5em;
    max-width: 50rem;
    text-align: center;
  }
`

const ContentPane = styled.div`
  display: flex;
  flex-flow: column;
  height: 100%;

  background-color: #efefef;
  width: auto;
  margin-top: 5rem;
  padding: 1rem;
`

// markup
const IndexPage = () => {
  return (
    <Layout pageTitle="Home">
      <HeaderText>
        <h1>Hi, I'm Zack. I code things sometimes.</h1>
      </HeaderText>
      <ContentPane>Test</ContentPane>
    </Layout>
  )
}

export default IndexPage
