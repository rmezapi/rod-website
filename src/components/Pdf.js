import React from 'react'
// import {pdfjs} from 'react-pdf';
import { Button } from './Button';
import './Pdf.css'

const mle_cv = './files/meza_rodrigo_6_04_24_mle.pdf';
const ds_cv = './files/rodrigo_meza_pineda_resume .pdf'

// const pageNumber = 1;
const targetPath_mle = 'meza_rodrigo_mle_cv'
const targetPath_ds = 'meza_rodrigo_ds_cv'

// pdfjs.GlobalWorkerOptions.workerSrc = new URL(
//     'pdfjs-dist/legacy/build/pdf.worker.min.mjs',
//     import.meta.url,   
//     ).toString();

const handleClickDS = () => {
    const link = document.createElement("a");
    link.href = ds_cv;
    link.download = targetPath_ds; // specify the filename
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

const handleClickMLE = () => {
    const link = document.createElement("a");
    link.href = mle_cv;
    link.download = targetPath_mle; // specify the filename
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

function Pdf() {
    const download_mle = "download machine learning resume"
    const download_ds = "download data science resume"
    return (
        <div>
            <div className='text'>
                <h1> resume </h1>
                <Button className='btn' children={download_mle} onClick={handleClickMLE} buttonStyle='btn--outline'/>
                <Button className='btn' children={download_ds} onClick={handleClickDS} buttonStyle='btn--outline'/>
            </div>
            
            {/* <p>
                Page {pageNumber} of {numPages}
            </p> */}
        </div>
    )
}

export default Pdf