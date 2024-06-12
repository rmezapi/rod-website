import React from 'react'
import { Link, redirect, useHref } from 'react-router-dom'
import { Button } from './Button'
import './CsProjects.css'

// temporary placeholder for fotos
const photo = require=('/images/foto.png')
const btn = 'GitHub'
const url = 'https://github.com/rmezapi'

function CsProjects() {
  return (
    <div  className="cs-container">
        <div className='text-container'>
            <h1> background </h1>
            <p>
            Attending the University of North Carolina at Chapel Hill not only gave me the ability to pursue my dream career, but showed me that there are a vast number of paths and opportunities one can take with a degree in Computer Science. Early on in my time at Carolina I discovered the world of Artificial Intelligence and Machine Learning, the subjects that sparked my passion in computer science. Before committing to one area of computer science, AI and ML, I explored designing databases for a few years with Dr. Andy Lang and Dr. Aaron Delgaty. I also took courses in Object Oriented Programming, Computer Organization, and Modern Web Programming. Further along in my Carolina journey I discovered attention based transformers and their potential to change the way we interact with technology, which showed me the continuous opportunities for computer science’s growth and evolution, and got me excited for the role I could play in it. Alongside my computer science degree I pursued a minor in Statistics that resulted from my passion for data manipulation, understanding, and modeling. During my time at UNC I learned to code in a variety of languages, including but not limited to C, Python, Java, MATLAB, R, and even SQL. I am passionate learning to code new languages and discovering ways of interacting with computers to create both art and functionality amidst that relationship. I see coding as an art and computers as my medium, and I am excited about cultivating my own coding style and creating programs never seen before.
            </p>
            <div className='btn'>
                <Button children="Follow my GitHub!" buttonStyle="btn--outline" onClick={() => window.open(url, '_blank')} />
            </div>
            
        </div>
        <hr class="solidFull" />
        <div className='projects-container'> 
            <h1> projects </h1>
            {/* dementia vit */}
            <div className='project'>
                <div className='left'> 
                    <h3> Dementia ViT </h3>
                    <img className='image' src="https://res.cloudinary.com/dxewrioco/image/upload/v1718140331/dementia_vit_yel9we.png" />
                </div>
                <p className='description'>
                    This image classification model has a ViT (Vision Transformer) pre-trained on ImageNet-21k as a base and is fine-tuned on a dataset containing MRI brain scans of patients with varying levels of dementia. 
                    With the help of tutorial videos (linked in GitHub READme), I was able to complete this project in just a few days. 

                    The model trains on 5,120 scans over 5 epochs, achieving a maximum accuracy of 64% on the testing dataset evaluation. While there is still room for improvement, I am currently working 
                    on different projects and will not pursue improved performance at this time. 
                </p>
                <div className='btn-proj'>
                    <Button children={btn} buttonStyle="btn--outline" onClick={() => window.open(url+'/dementia_vit', '_blank')} />
                </div>
            </div>
            <hr class="solid" />

            {/* stomata cells */}
            <div className='project'>
                <div className='left'> 
                    <h3> Stomata Cell DETR </h3>
                    <img className='image' src="https://res.cloudinary.com/dxewrioco/image/upload/v1718141803/stomata_zgkfx4.png" />
                </div>
                <p className='description'>
                    (IN PROGRESS) Stomata cells are known as the guard cells of a plant because they control the gas exchange key to the plants health. The stomata cells open when the plant needs carbon dioxide intake, release of oxygen, and water loss. This object detection model aims to learn what stomata cells look like in an image and identify whether the cells are open or closed.
                </p>
                <div className='btn-proj'>
                    <Button children='Coming soon!' buttonStyle="btn--outline" onClick={() => window.open(url, '_blank')} />
                </div>
            </div>
            <hr class="solid" />

            
            {/* website */}
            <div className='project'>
                <div className='left'> 
                    <h3> Personal Website </h3>
                    <img className='image' src='https://res.cloudinary.com/dxewrioco/image/upload/v1718141300/website_vibtjc.png' />
                </div>
                <p className='description'>
                    I built this website from the ground up coding it using React for Javascript and HTML. I created it to showcase the different projects I have worked on or are currently working on. Whether they are computer science projects or arts projects I wanted to showcase my work on a platform I created. I hope you enjoy looking through it as much as I enjoyed making it!
                </p>
                <div className='btn-proj'>
                    <Button children={btn} buttonStyle="btn--outline" onClick={() => window.open(url+'/dementia_vit', '_blank')} />
                </div>
            </div>
            <hr class="solid" />


            {/* carolina data challenge */}
            <div className='project'>
                <div className='left'> 
                    <h3> Carolina Data Challenge </h3>
                    <img className='image' src='https://res.cloudinary.com/dxewrioco/image/upload/v1718141426/map_tep72q.png' />
                </div>
                <p className='description'>
                    Utilized R, Python, Tableau, JavaScript, and HTML to clean, analyze, visualize, and model survey data in a week-long competition with a team of three members. 
                    Contributed to the development of a website showcasing models, graphics, and explanations for a dataset focused on app usage in 15 different countries worldwide.
                </p>
                <div className='btn-proj'>
                    <Button children={btn} buttonStyle="btn--outline" onClick={() => window.open('https://github.com/ZachChaloupecky/CarolinaDataChallenge', '_blank')} />
                    <Button children='Project Website' buttonStyle='btn--outline' onClick={() => window.open('https://zachchaloupecky.github.io/CarolinaDataChallenge/', '_blank')} />
                </div>
            </div>
            <hr class="solid" />
        </div>
    </div>
    
  )
}

export default CsProjects