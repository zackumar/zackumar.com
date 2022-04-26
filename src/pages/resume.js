// import * as React from 'react'
import React, { useState, useRef, useEffect } from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { pdfjs, Document, Page } from 'react-pdf'
import throttle from 'lodash.throttle'

import Layout from '../components/layout'
import * as styles from './resume.module.css'

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`

const pageQuery = graphql`
    {
        contentfulAsset(filename: { regex: "/resume/gi" }) {
            file {
                url
            }
        }
    }
`

const ResumePage = () => {
    const pdfWrapper = useRef()
    const [initialWidth, setInitialWidth] = useState()

    const {
        contentfulAsset: {
            file: { url },
        },
    } = useStaticQuery(pageQuery)

    const setPdfSize = () => {
        if (pdfWrapper && pdfWrapper.current) {
            console.log(pdfWrapper.current.getBoundingClientRect().width)
            setInitialWidth(pdfWrapper.current.getBoundingClientRect().width)
        }
    }

    useEffect(() => {
        window.addEventListener('resize', throttle(setPdfSize, 3000))
        setPdfSize()
        return () => {
            window.removeEventListener('resize', throttle(setPdfSize, 3000))
        }
    }, [setPdfSize])

    const onDocumentLoadSuccess = () => {
        const element = document.getElementById('resume')
        element.classList.add(styles.fade)
    }

    return (
        <Layout pageTitle="Resume">
            <main className={styles.content}>
                <div id="resume" className={styles.resumeWrapper} ref={pdfWrapper}>
                    <Document file={{ url: url }} onLoadSuccess={onDocumentLoadSuccess} noData="None" loading="Loading">
                        <Page pageNumber={1} loading="" width={initialWidth} />
                    </Document>
                </div>
            </main>
        </Layout>
    )
}

export default ResumePage
