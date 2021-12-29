import * as React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { pdfjs, Document, Page } from 'react-pdf'

import Layout from '../components/layout'
import * as styles from './resume.module.css'

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`

const pageQuery = graphql`
    {
        gcms {
            asset(where: { id: "ckxqf9uaw56720a76zcocd2qs" }) {
                url
            }
        }
    }
`

const ResumePage = () => {
    const {
        gcms: {
            asset: { url },
        },
    } = useStaticQuery(pageQuery)

    return (
        <Layout pageTitle="Resume">
            <main className={styles.content}>
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
            </main>
        </Layout>
    )
}

export default ResumePage
