import React from 'react';
import '../index.css';
import './resume.css';

export default function Resume() {
    return (
        <div id='resume-container' className='container-style'>
            <p className='container-title'>Resume</p>
            <div id='resume'>
                <a href={'src/assets/Resume.pdf'} target='_blank'>
                    <img src='src/assets/resume-preview.PNG' alt='resume' />
                </a>
            </div>
        </div>
    );
}