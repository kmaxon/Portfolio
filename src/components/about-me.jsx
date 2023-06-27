import React from 'react';
import '../index.css';
import './about-me.css'

export default function AboutMe() {
    return (
        <div id='about-me' className='container-style'>
            <p id='about-me-title' className='container-title'>About Me:</p>
            <p className='about-me-text'>
                In 2022, I made a bold decision to leave my job and fully dedicate myself 
                to a career in coding. I initially explored Python, while also venturing 
                into the world of front-end development to broaden my skill set. 
            </p>
            <p className='about-me-text'>
                Throughout my exploration of front-end development, I discovered a genuine 
                passion for the design process and the gratifying experience of bringing 
                those designs to life.
            </p>
            <p className='about-me-text'>
                Currently, I am actively engaged in assisting several friends in launching 
                their own websites. Simultaneously, I consistently strive to enhance my coding 
                skills by embracing diverse coding challenges and acquiring proficiency in new 
                libraries and languages.
            </p>
            <p className='about-me-text'>
                Beyond the realm of coding, I prioritize my personal well-being through 
                regular physical exercise such as biking, playing frisbee golf, and weight 
                training. Additionally, I nourish my mind through avid reading, culinary 
                pursuits, and various forms of gaming. While my free time is often cherished 
                with loved ones, I also seek enrichment through attending concerts, comedy 
                shows, and indulging in podcasts.
            </p>
        </div>
    );
}