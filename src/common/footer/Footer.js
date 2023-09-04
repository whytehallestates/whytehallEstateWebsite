import React from 'react';
import { Link } from 'react-router-dom';
import FooterBG from '../../assets/images/footer-1.png';
import { FaPhoneAlt, FaFacebookF, FaTwitter, FaInstagram, FaPinterestP, FaAngleDoubleRight } from 'react-icons/fa';

const Footer = () => {
    return (
        <>
            <footer>
                <div className="footer-top bg-property theme-bg-2 pt-50 pb-10" style={{ backgroundColor: "#fff" }}>
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12">
                                <div className="footer-widget-1">
                                    <div className="footer-title">
                                        <h4>Contact Info</h4>
                                    </div>
                                    <div className="footer-text">
                                        <p>If you have any questions or need help, feel free to contact with our team.</p>
                                    </div>
                                    <div className="footer-info">
                                        <a href="#"><FaPhoneAlt /> (+91) 8431790322</a>
                                    </div>
                                    <div className="footer-text">
                                        <p>#226, 3rd Floor, Phase 5, Yelahanaka New Town, Bangalore - 560064</p>
                                        <p>RERA No: PRM/KA/RERA/1251/309/AG/221220/003305</p>
                                    </div>
                                    {/* <div className="footer-info">
                                        <a href="#"><FaPhoneAlt /> Get Directions</a>
                                    </div> */}
                                </div>
                            </div>
                            <div className="col-xl-2 col-lg-2 col-md-6 col-sm-12">
                                <div className="footer-widget-2">
                                    <div className="footer-title">
                                        <h4>Quick Links</h4>
                                    </div>
                                    <div className="footer-menu">
                                        <ul>
                                            <li><a href="/">Home</a></li>
                                            <li><a href="#aboutUs">About Us</a></li>
                                            <li><a href="#services">Services</a></li>
                                            <li><a href="#projects">Projects</a></li>
                                            <li><a href="#ourTeam">Our Team</a></li>
                                            <li><a href="#careers">Caeers</a></li>
                                            <li><a href="#contactUs">Contact Us</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-2 col-lg-2 col-md-6 col-sm-12">
                                <div className="footer-widget-3">
                                    <div className="footer-title">
                                        <h4>Our Services</h4>
                                    </div>
                                    <div className="footer-menu">
                                        <ul>
                                            <li><a href="#">Buying & Selling</a></li>
                                            <li><a href="#">Rentals</a></li>
                                            <li><a href="#">Interior Designing</a></li>
                                            <li><a href="#">Property Management</a></li>
                                           
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12">
                                <div className="footer-widget-4">
                                    {/* <div className="footer-title">
                                        <h4>Newsletter</h4>
                                    </div> */}
                                    {/* <div className="footer-text">
                                        <p>Established since 2000. Mission Eland Landscaping Company in US.</p>
                                    </div> */}
                                    <div className="footer-social mt-35">
                                        <h5>Folllow Us:</h5>
                                        <ul>
                                            <li><a href="#"><FaFacebookF /></a></li>
                                            <li><a href="#"><FaTwitter /></a></li>
                                            <li><a href="#"><FaInstagram /></a></li>
                                            {/* <li><a href="#"><FaPinterestP /></a></li> */}
                                        </ul>
                                    </div>
                                    {/* <div className="footer-newsletter mt-40">
                                        <input type="text" placeholder="Email Address" />
                                        <button><FaAngleDoubleRight /></button>
                                    </div> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom theme-bg-1 pt-20 pb-20">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                                <div className="copyright">
                                    <p>© 2023 <a href="#">Whytehall Estates</a>. All right reserved.</p>
                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 text-xl-end text-lg-end text-md-end text-center">
                                <div className="footer-menu">
                                    <ul>
                                        <li><a href="#">Powered by Satoir</a></li>
                                        {/* <li><a href="#"></a></li>
                                        <li><a href="#"></a></li> */}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer;