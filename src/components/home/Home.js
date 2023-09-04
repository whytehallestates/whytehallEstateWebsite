import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ModalVideo from 'react-modal-video';
import { FaPlay } from "react-icons/fa";
import HeroStyleOneImg1 from '../../assets/images/home/home.jpg';
import HeroStyleOneImg2 from '../../assets/images/home/videoClick.jpg';
import { LazyLoadImage } from "react-lazy-load-image-component";

const Home = () => {
    const [isOpen, setOpen] = useState(false);
    return (
        <div className='home'>
            {/* <ModalVideo
                channel="youtube"
                autoplay
                isOpen={isOpen}
                videoId="4jnzf1yj48M"
                onClose={() => setOpen(false)}
            /> */}
            <div className="hero-area height-800 bg-property d-flex align-items-center" data-overlay="bgColor" data-opacity="7" style={{ backgroundImage: `url(${HeroStyleOneImg1})` }}>
                <div className="container">
                    <div className="row hero-wrapper-row">
                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                            <div className="hero-wrapper">
                                <h1>Welcome to <span>Whytehall Estates</span></h1>
                                <p>A premier real estate consulting firm dedicated to providing the highest quality services to the clients in the ever-growing housing and commercial market.</p>
                                {/* <Link to="/" className="l-btn">Our Solution</Link> */}
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                            <div className="hero-popup-content">
                                <LazyLoadImage src={HeroStyleOneImg2} alt="" />
                                {/* <div className="hero-popup-video">
                                    <button
                                        className="popup-video pulse-effect"
                                        onClick={() => setOpen(true)}>
                                        <FaPlay />
                                    </button>
                                </div> */}
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Home;