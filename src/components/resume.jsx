import React from 'react';
import '../index.css';
import './resume.css';

export default function Resume() {
    return (
        <div id='resume-container' className='container-style'>
            <p className='container-title'>Resume</p>
            <div id='resume'>
                <a href={'/resume.PDF'} target='_blank' rel='noreferrer'>
                    <img src='https://keith-maxon.com/preview-resume.PNG' alt='resume' />
                </a>
            </div>
        </div>
    );
}