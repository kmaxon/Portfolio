import React from 'react';
import { Link } from 'react-router-dom';
import '../index.css';
import './projects.css';

export default function Projects() {
    return (
        <div id='projects' className='container-style'>
            <p className='container-title'>Projects</p>
            <div id='quote-generator-app' className='project'>
                <Link to ={`/quote-generator`}>
                    <img src='https://keith-maxon.web.app/quote-generator.PNG' alt="quote generator" />
                </Link>
            </div>
            <div id='interval-timer-app' className='project'>
                <Link to ={`/interval-timer`}>
                    <img src='https://keith-maxon.web.app/interval-timer.PNG' alt="interval timer" />
                </Link>
            </div>
        </div>
    );
}