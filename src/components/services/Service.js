import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import buyingImg from '../../assets/images/service/buying.jpg';
import Icon_growing from '../../assets/images/service/rent.jpg';
import InteriorImg from '../../assets/images/service/interior.jpg';
import PropertyImg from '../../assets/images/service/property.jpg';
// import ServiceBgImage from '../../assets/images/service/newBG.png';
import { LazyLoadImage } from "react-lazy-load-image-component";
import loader from "../../assets/images/loader.gif"
const ServiceData = [
    {
        id: uuidv4(),
        heading: 'Buying & Selling',
        description: 'Experience seamless transactions and find your perfect property with our expert assistance in buying and selling real estate.',
        img: buyingImg,
        serviceLink: '/',
    },
    {
        id: uuidv4(),
        heading: 'Rentals',
        description: 'Discover a wide range of rental properties tailored to your preferences and let us help you find a place to call home.',
        img: Icon_growing,
        serviceLink: '/',
    },
    {
        id: uuidv4(),
        heading: 'Interior Designing',
        description: 'Transform your space into a stunning sanctuary with our exceptional interior design services, adding style and functionality to every corner.',
        img: InteriorImg,
        serviceLink: '/',
    },
    {
        id: uuidv4(),
        heading: 'Property Management',
        description: 'Simplify your property ownership experience with our reliable and comprehensive property management solutions, ensuring peace of mind and maximizing returns.',
        img: PropertyImg,
        serviceLink: '/',
    },


];

const ServiceItem = ({ img, heading, description, serviceLink }) => {
    return (
        <>
            <div className="col-xl-3 col-lg-4 col-md-6">
                <div className="single-service">
                    <div className="service-icon">
                        <LazyLoadImage loading='lazy' placeholderSrc={loader} effect='blur' src={img} alt="Service Icon" height={150} width={150} />
                    </div>
                    <h3>{heading}</h3>
                    <p>{description}</p>
                    {/* <a href={serviceLink}>Read More <FaLongArrowAltRight /></a> */}
                </div>
            </div>
        </>
    )
}

const ServiceStyle = () => {
    return (
        <div id='services'>
            <div className="service-area theme-bg-4 pt-110 pb-110" data-overlay="theme3" data-opacity="7" >
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="section-title text-center mb-70">
                                {/* <span>Our Services</span> */}
                                <h2>Our Service Offerings</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        {ServiceData.map((data) => (
                            <ServiceItem
                                key={data.id}
                                img={data.img}
                                heading={data.heading}
                                description={data.description}
                                serviceLink={data.serviceLink}
                            />
                        ))}
                        {/* <div className="col-xl-6 col-lg-12 col-md-12">
                            <div className="single-service-large">
                                <h3>We are professional <span>Landscape & Gardening service</span></h3>
                                <p>Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat omnis voluptas assumenda est, omnis dolor repellendus. </p>
                                <a href="/" className="l-btn">Appointment</a>
                            </div>
                        </div> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ServiceStyle;