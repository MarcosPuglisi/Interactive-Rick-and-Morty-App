import React from 'react';
import '../styles/footer.css';

function Footer(){
    return(
        <footer>
          <div className="social-links">
        <a href="https://www.linkedin.com/in/marcos-puglisi-7b07bb194/" target="_blank" rel="noopener noreferrer">
          <h5 className='h5'>LinkedIn</h5>
        </a>
        <a href="https://github.com/MarcosPuglisi" target="_blank" rel="noopener noreferrer">
          <h5 className='h5'>Github</h5>
        </a>
      </div>
        </footer>
    )
}

export default Footer;