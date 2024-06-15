import React from 'react'
// import {pdfjs} from 'react-pdf';
import { Button } from './Button';
import './Pdf.css'

const mle_cv = 'https://drive.google.com/file/d/1hi3jnwJLSvFQ1nEjJhNoVyn5TdCStK7v/view?usp=sharing';
const ds_cv = 'https://drive.google.com/file/d/1ap-VMVdM0L4NEAGYDk2pmx9kSGcW8t4s/view?usp=sharing'

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
    const download_mle = "machine learning resume"
    const download_ds = "data science resume"
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