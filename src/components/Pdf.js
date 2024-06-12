import React from 'react'
import { Document, Page, pdfjs} from 'react-pdf';
import { Button } from './Button';
import './Pdf.css'

const cv = './files/meza_rodrigo_6_04_24_mle.pdf';
const pageNumber = 1;
const targetPath = 'meza_rodrigo_cv'

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
    'pdfjs-dist/legacy/build/pdf.worker.min.mjs',
    import.meta.url,   
    ).toString();

const handleClick = () => {
    const link = document.createElement("a");
    link.href = cv;
    link.download = targetPath; // specify the filename
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

function Pdf() {
    const download = "download as pdf"
    return (
        <div>
            <div className='text'>
                <h1> resume </h1>
                <Button className='btn' children={download} onClick={handleClick} buttonStyle='btn--outline'/>
            </div>
            

            <Document file={cv}>
                <Page pageNumber={pageNumber} renderTextLayer={false}/>
            </Document>
            {/* <p>
                Page {pageNumber} of {numPages}
            </p> */}
        </div>
    )
}

export default Pdf