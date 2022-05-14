import React from 'react';
import footer from '../../assets/images/footer.png';

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (
        <footer style={{
            background: `url(${footer})`,
            backgroundSize: `cover`,
            backgroundRepeat: 'no-repeat',
        }} className= 'grid place-items-center mb-5'>
            <div className="footer grid cols-rows-3 p-10 text-content  lg:place-items-center ">
            <div>
                <span className="footer-title">SERVICES</span>
                <a className="link link-hover">Emergency-Checkup</a>
                <a className="link link-hover">Monthly Checkup</a>
                <a className="link link-hover">Weekly Checkup</a>
                <a className="link link-hover">Deep Checkup</a>
            </div>
            
            <div>
                <span className="footer-title">ORAL HEALTH</span>
                <a className="link link-hover">Fluoride Treatment</a>
                <a className="link link-hover">Cavity Filling</a>
                <a className="link link-hover">Teeth Whitening</a>
                <a className="link link-hover">Teeth Drilling</a>
            </div>
            
            <div>
                <span className="footer-title">OUR ADDRESS</span>
                <a className="link link-hover">Village: Sayedtola</a>
                <a className="link link-hover">Post: Sarail-3430</a>
                <a className="link link-hover">District: Brahmanbaria</a>
                <a className="link link-hover">Country: Bangladesh</a>
                
            </div>
            </div>
           <p className='mt-20 p-5'>Copyright &copy; {year} All Rights Reserved</p> 
        </footer>
    );
};

export default Footer;