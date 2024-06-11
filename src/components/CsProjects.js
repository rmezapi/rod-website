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
            <h1> Background </h1>
            <p>
                I attented the University of North Carolina at Chapel Hill to pursue my dream carreer in Computer Science. Shortly into my time at Carolina,
                I discovered the world of Artificial Intelligence and Machine Learning which became my obsession in the computer science world. However, my experience at Carolina was a lot more than AI and ML, 
                seeing as I designed databases for a few years with Dr. Andy Lang and Dr. Aaron Delgaty. I also minored in Statistics, a result of my passion for data manipulation, understanding, and modeling. 
                I also took courses in Object Oriented Programming, Computer Organization, and Modern Web Programming. I have coded in a variety of languages, including but not limited to C, Python, Java,
                MATLAB, R, and even SQL. Late into my time at Carolina, I discovered attention based transformers and their potential to change the way we interact with technology. I am passionate about everything computer related and love to learn new coding languages and ways of interacting with a computer to create both art and functionality. I see coding as an art,
                seeing as everyone chooses their own medium, has their own style, and is driven to create programs never seen before. 
            </p>
            <div className='btn'>
                <Button children="Follow my GitHub!" buttonStyle="btn--outline" onClick={() => window.open(url, '_blank')} />
            </div>
            
        </div>
        <hr class="solidFull" />
        <div className='projects-container'> 
            <h1> Projects </h1>
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
                    (IN PROGRESS) This object detection model aims to learn what stomata cells look like in an image and identify whether the cells are open or closed.
                    Stomata cells are known as the guard cells of a plant, seeing as they control the gas exchange key to the plants health. The stomata cells open when the plant 
                    needs carbon dioxide intake, release of oxygen, and water loss.  
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
                    This website was built from the ground up using React for Javascript and HTML. I created this website to showcase the different projects I have worked on 
                    (or currently am working on), whether they are computer science projects or arts projects. 
                    I hope you enjoy looking through it as much as I enjoyed making it!
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