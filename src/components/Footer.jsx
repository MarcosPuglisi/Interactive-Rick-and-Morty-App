import React from 'react';
import '../styles/footer.css';

function Footer(){
    return(
        <footer className='Footer'>
          <div className="social-links">
        <a href="https://www.linkedin.com/in/marcos-puglisi-7b07bb194/" target="_blank" rel="noopener noreferrer">
          <h5 className='h5'>LinkedIn 
            <span className='footer-icons'>
              <i className="fab fa-linkedin"></i>
            </span> 
          </h5>
          
        </a>
        <a href="https://github.com/MarcosPuglisi" target="_blank" rel="noopener noreferrer">
          <h5 className='h5'>
            Github
            <span className='footer-icons'>
              <i className="fab fa-github"></i>
            </span> 
          </h5>

        </a>
      </div>
        </footer>
    )
}

export default Footer;