import React from 'react';
import { Link } from 'react-router-dom';

function Footer(){
    return(
        <section className = "bg-dark text-white py-5">
            <div className = "container">
                        <div className = "row">
                           
                            <div className = "col-md-4">
                                <h6>Company Info</h6>
                                <hr/>
                                <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."</p>

                            </div>

                            <div className = "col-md-4">
                                <h6>Quick Links</h6>
                                <hr/>
                               <div><Link to = "/" className = "text-decoration-none " >Home</Link></div>
                               <div><Link to = "/About" className = "text-decoration-none ">About</Link></div>
                               <div><Link to = "/Contact" className = "text-decoration-none ">Contact</Link></div>

                            </div>
                            <div className = "col-md-4">
                                <h6>Contact Information</h6>
                                <hr/>
                                <div><p>No.1, Major L. Fakrogha street, lekki, Lagos</p></div>
                                <div><p>+2346378939</p></div>
                                <div><p>+2348596783</p></div>
                                <div><p>demo@demo.com</p></div>
        
                               

                            </div>
                        </div>
            </div>
        </section>
    )
}

export default Footer;