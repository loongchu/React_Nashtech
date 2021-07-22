import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div>
            <div className="footer clear-fix">
                <div className="row">
                    <ul>
                        <li>
                            <button><a href="#"> <i className="fab fa-facebook-f"></i> </a> </button>
                        </li>
                        <li>
                            <button><i className="fab fa-instagram"></i></button>
                        </li>
                        <li>
                            <button><i className="fab fa-github"></i></button>
                        </li>
                    </ul>
                </div>
                <div className="copyright">Copyright © Ocean Nguyen 2019</div>
            </div>
        </div>
    );
};

export default Footer;