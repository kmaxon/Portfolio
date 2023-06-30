import React from 'react';
import '../index.css';
import './resume.css';

export default function Resume() {
    return (
        <div id='resume-container' className='container-style'>
            <p className='container-title'>Resume</p>
            <div id='resume'>
                <a href={'https://keith-maxon.com/resume.PDF'} target='_blank'>
                    <img src='https://keith-maxon.com/preview-resume.PNG' alt='resume' />
                </a>
            </div>
        </div>
    );
}