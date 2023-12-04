// import { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import Footer from '~/components/Footer';
import Header from '~/components/Header';
import { WebFrame } from '~/components/WebFrame';
import textLayer from 'react-pdf/dist/Page/TextLayer.css';
import annotationLayer from 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import type { LinksFunction } from '@remix-run/cloudflare';
import { useEffect, useRef, useState } from 'react';
import throttle from 'lodash.throttle';

import rainbow from '~/styles/global.css';

export const links: LinksFunction = () => [
  { rel: 'stylesheet', href: textLayer },
  { rel: 'stylesheet', href: annotationLayer },
  { rel: 'stylesheet', href: rainbow },
];

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;
const options = {
  standardFontDataUrl: `https://unpkg.com/pdfjs-dist@${pdfjs.version}/standard_fonts`,
  cMapUrl: `https://unpkg.com/pdfjs-dist@${pdfjs.version}/cmaps/`,
};

export default function Resume() {
  const [initialWidth, setInitialWidth] = useState(0);
  const pdfWrapper = useRef<HTMLDivElement | null>(null);

  const setPdfSize = () => {
    if (pdfWrapper && pdfWrapper.current) {
      setInitialWidth(pdfWrapper.current.getBoundingClientRect().width);
    }
  };

  useEffect(() => {
    window.addEventListener('resize', throttle(setPdfSize, 500));
    setPdfSize();
    return () => {
      window.removeEventListener('resize', throttle(setPdfSize, 500));
    };
  }, []);

  // const [numPages, setNumPages] = useState<number>();
  // const [pageNumber] = useState<number>(1);

  // function onDocumentLoadSuccess({ numPages }: { numPages: number }): void {
  // setNumPages(numPages);
  // }

  return (
    <main className="container mx-auto flex min-h-screen max-w-5xl flex-col p-5 pb-16 text-black dark:text-white">
      <Header animate={false} />
      <div className="py-8">
        <section className="container relative mx-auto space-y-4">
          <div ref={pdfWrapper} className="w-500">
            <WebFrame title="resume.pdf" className="min-h-[500px] w-full">
              <Document
                options={options}
                file="/files/resume.pdf"
                className="mx-auto w-fit"
              >
                <Page
                  pageNumber={1}
                  renderAnnotationLayer={false}
                  renderTextLayer={true}
                  width={initialWidth}
                />
              </Document>
            </WebFrame>
          </div>
          <a
            className="col-span-2 mx-auto flex w-fit transform flex-row items-center justify-center space-x-1 rounded-full bg-zinc-900 px-5 py-3 text-white shadow duration-100 ease-in-out hover:-translate-y-0.5 hover:scale-105"
            href="/files/resume.pdf"
          >
            <span>View PDF</span>
          </a>
        </section>
      </div>
      <Footer className="mx-auto max-w-2xl space-y-4" />
    </main>
  );
}
