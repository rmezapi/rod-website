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
            <h1 className='main_title'> background </h1>
            <p>
                Attending the University of North Carolina at Chapel Hill not only allowed me to pursue my dream career but also exposed me to the diverse paths and opportunities available with a degree in Computer Science. Early in my time at Carolina, I discovered Artificial Intelligence (AI) and Machine Learning (ML), which ignited my passion for computer science. Before committing to AI and ML, I explored designing databases for a few years with Dr. Andy Lang and Dr. Aaron Delgaty. I also took courses in Object Oriented Programming, Computer Organization, and Modern Web Programming.
            </p>
            <p className='space'> -- </p>
            <p>
                As I progressed in my studies, I encountered attention-based transformers and their potential to revolutionize our interaction with technology. This discovery highlighted the continuous growth and evolution in computer science, inspiring me about the role I could play in its future. Alongside my major in Computer Science, I pursued a minor in Statistics, driven by my passion for data manipulation, understanding, and modeling.
            </p>
            <p className='space'> -- </p>
            <p>
                During my time at UNC I learned to code in a variety of languages, including but not limited to C, Python, Java, MATLAB, R, and SQL. I am passionate about learning new programming languages and discovering innovative ways to interact with computers to create both art and functionality. I view coding as an art form, with computers as my medium, and I am excited to further cultivate my own coding style and collaborate in groundbreaking projects.
            </p>
            <div className='btn'>
                <Button children="Follow my GitHub!" buttonStyle="btn--outline" onClick={() => window.open(url, '_blank')} />
            </div>
            
        </div>
        <hr class="solidFull" />
        <div className='projects-container'> 
            <h1 className='main_title'> projects </h1>
            <hr class="solid" />


            {/* dementia vit */}
            <div className='project'>
                <div className='left'> 
                    <h3 className='title'> Dementia ViT </h3>
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
                    <h3 className='title'> Stomata Cell DETR </h3>
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
                    <h3 className='title'> Personal Website </h3>
                    <img className='image' src='https://res.cloudinary.com/dxewrioco/image/upload/v1718141300/website_vibtjc.png' />
                </div>
                <div className='description'>
                    <p>
                        I built this website from the ground up coding it using React for Javascript and HTML. I created it to showcase the different projects I have worked on or are currently working on. Whether they are computer science projects or arts projects I wanted to showcase my work on a platform I created. I hope you enjoy looking through it as much as I enjoyed making it!
                    </p>
                </div>
                <div className='btn-proj'>
                    <Button children={btn} buttonStyle="btn--outline" onClick={() => window.open(url+'/dementia_vit', '_blank')} />
                </div>
            </div>
            <hr class="solid" />


            {/* carolina data challenge */}
            <div className='project'>
                <div className='left'> 
                    <h3 className='title'> Carolina Data Challenge </h3>
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