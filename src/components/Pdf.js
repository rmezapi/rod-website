import React from 'react'
// import {pdfjs} from 'react-pdf';
import { Button } from './Button';
import './Pdf.css'

const mle_cv = 'https://drive.google.com/file/d/14CbpMwpUQ72PDfhXebJJ_1b4fAlw4Fnu/view?usp=sharing'
const ds_cv = 'https://drive.google.com/file/d/1tb896U7lZafW33bj3-KHioUCr-vyglOj/view?usp=sharing'
const swe_cv = 'https://drive.google.com/file/d/1Vq3Ip095-_Ldc8-f6w730DLYi_1Wr9PR/view?usp=sharing'

// const pageNumber = 1;
const targetPath_mle = 'meza_rodrigo_mle_cv'
const targetPath_ds = 'meza_rodrigo_ds_cv'
const targetPath_swe = 'meza_rodrigo_swe_cv'

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

const handleClickSWE = () => {
    const link = document.createElement("a");
    link.href = swe_cv;
    link.download = targetPath_swe; // specify the filename
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

function Pdf() {
    const download_mle = "machine learning resume"
    const download_ds = "data science resume"
    const download_swe = "software engineering resume"

    return (
        <div>
            <div className='text'>
                <h1> resume </h1>
                <Button className='btn' children={download_mle} onClick={handleClickMLE} buttonStyle='btn--outline'/>
                <Button className='btn' children={download_ds} onClick={handleClickDS} buttonStyle='btn--outline'/>
                <Button className='btn' children={download_swe} onClick={handleClickSWE} buttonStyle='btn--outline'/>
            </div>
            
            {/* <p>
                Page {pageNumber} of {numPages}
            </p> */}
        </div>
    )
}

export default Pdf