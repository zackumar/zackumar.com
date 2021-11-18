import * as React from 'react'
import styled from 'styled-components'

import Layout from '../components/layout'

const HeaderText = styled.div`
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
// const ContentPane = styled.div`
//     flex-grow: 4;

//     position: relative;
//     background-color: #efefef;
//     width: auto;
//     padding: 3rem;
// `

// const Footer = styled.footer`
//   background-color: #aaaaaa;
//   height: 100px;
// `

// markup
const IndexPage = () => {
    return (
        <Layout pageTitle="Home">
            <HeaderText>
                <h1>Hi, I'm Zack. I code things sometimes.</h1>
            </HeaderText>
            {/* <ContentPane>
                <h1>Hello, I'm Zack Umar 👋</h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ornare fringilla nunc in placerat. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed sed velit
                    quis risus luctus efficitur. Aenean porttitor consequat ante eu aliquet. Aenean dignissim condimentum nisi quis accumsan. Donec fringilla condimentum magna, sed cursus justo
                    placerat sit amet. Nulla vel scelerisque tellus. Pellentesque nisl orci, dapibus nec lacinia ac, tincidunt eget nisi. Vivamus quis rhoncus lacus. Sed vel semper augue, et maximus
                    nunc. Ut pharetra id metus et placerat. In magna orci, auctor sit amet sagittis in, suscipit sed nisi. Pellentesque vestibulum imperdiet dui iaculis auctor. Proin at quam non erat
                    aliquet convallis sit amet nec ipsum. Aenean elementum, nulla tincidunt interdum varius, dolor arcu mollis sapien, vel imperdiet ex nisl euismod mi. Morbi consectetur posuere
                    euismod. Nunc sit amet tincidunt ante, a porttitor ipsum. Nullam quis est et turpis consequat fringilla. Proin volutpat molestie augue a finibus. Suspendisse at felis sapien. Class
                    aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aliquam ut consequat justo. Quisque quam dolor, facilisis sed odio ut, elementum pretium
                    velit. Aenean in gravida justo. Nunc sit amet magna ornare, feugiat eros sed, ultricies quam. Suspendisse elementum imperdiet nisl, non dapibus massa sagittis vitae. Maecenas
                    tristique ligula non convallis vulputate. Maecenas malesuada sagittis ligula at rutrum. Ut eget orci arcu. Donec pellentesque molestie magna, ut consectetur nibh volutpat et.
                    Quisque neque enim, varius vel magna id, lobortis finibus massa. Donec ultrices rhoncus tortor, eu condimentum lacus facilisis et. Ut at erat turpis. Maecenas id enim magna. Nulla
                    facilisi. Nam maximus quam at neque bibendum convallis. Pellentesque purus lectus, lacinia sed imperdiet et, consequat at eros. Quisque luctus nulla purus, viverra ultricies nulla
                    ultrices id. Integer non metus ornare, feugiat elit a, suscipit velit. Etiam non quam at sapien tristique mattis. Proin id malesuada sem. Aliquam sodales quis nunc nec pretium. Sed
                    vitae iaculis leo. Mauris enim urna, rutrum sed nulla eget, pulvinar porttitor tellus. Duis quam felis, pulvinar non nulla eget, consequat tempus massa. Curabitur at purus ornare,
                    condimentum ipsum vitae, dapibus purus. Curabitur mollis enim non velit ullamcorper, eget tincidunt magna ultrices. Ut eget ligula et elit scelerisque cursus. Curabitur laoreet
                    ornare odio, sed lobortis erat feugiat nec. Vivamus id suscipit ipsum. Praesent iaculis ornare pharetra. Proin maximus odio non nisi fringilla lacinia.
                </p>

                <br />

                <h1>A Handful of Projects 🤲</h1>
            </ContentPane> */}
        </Layout>
    )
}

export default IndexPage
