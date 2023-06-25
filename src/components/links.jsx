import { FaLinkedin, FaGithub, FaTwitter, FaEnvelope, FaFreeCodeCamp } from 'react-icons/fa';
import './links.css';

function Links() {
    return (
        <>
            <ul id="links">
                <li id='linkedIn' className='link' >
                    <a href="https://www.linkedin.com/in/keith-maxon/" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin />
                    </a>
                </li>
                <li id='github' className='link' >
                    <a href="https://github.com/kmaxon" target="_blank" rel="noopener noreferrer">
                        <FaGithub />
                    </a>
                </li>
                <li id='free-code-camp' className='link' >
                    <a href="https://www.freecodecamp.org/kmaxon" target="_blank" rel="noopener noreferrer">
                        <FaFreeCodeCamp />
                    </a>
                </li>
                <li id='twitter' className='link' >
                    <a href="https://twitter.com/MaxonMaxoff" target="_blank" rel="noopener noreferrer">
                        <FaTwitter />
                    </a>
                </li>
                <li id='email' className='link' >
                    <a href="mailto:maxonkeith@gmail.com" target="_blank" rel="noopener noreferrer">
                        <FaEnvelope />
                    </a>
                </li>
            </ul>
        </>
    )
};

export default Links;