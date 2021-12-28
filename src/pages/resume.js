import * as React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack'

import Layout from '../components/layout'
import * as styles from './resume.module.css'

const pageQuery = graphql`
    {
        gcms {
            asset(where: { id: "ckxqf9uaw56720a76zcocd2qs" }) {
                url
            }
        }
    }
`

const ResumeView = () => {
    const {
        gcms: {
            asset: { url },
        },
    } = useStaticQuery(pageQuery)

    console.log(url)

    return (
        <Document
            className={styles.resume}
            file={url}
            onClick={() => {
                console.log('boop')
                window.location.href = url
            }}
        >
            <Page className={styles.resumePage} pageNumber={1} scale={1.5}></Page>
        </Document>
    )
}

class ResumePage extends React.Component {
    render() {
        return (
            <Layout pageTitle="Resume">
                <main className={styles.content}>
                    <ResumeView></ResumeView>
                </main>
            </Layout>
        )
    }
}

export default ResumePage
