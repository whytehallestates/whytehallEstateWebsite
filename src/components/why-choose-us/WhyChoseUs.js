import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import WhyChooseUsBg from '../../assets/images/why-choose-us/whyChoose.jpg';
// import Icon_Estimates from '../../assets/images/why-choose-us/estimates.png';
// import Icon_Equipment from '../../assets/images/why-choose-us/equipment.png';
// import Icon_Work from '../../assets/images/why-choose-us/work.png';
// import Icon_Irreigation from '../../assets/images/why-choose-us/irreigation.png';

// const WhyChooseUsOneData = [
//     {
//         id: uuidv4(),
//         heading: 'Free Estimates',
//         description: 'There are many variations of passages the majority have suffered alteration form',
//         img: Icon_Estimates,
//     },
//     {
//         id: uuidv4(),
//         heading: 'Modern Equipment',
//         description: 'There are many variations of passages the majority have suffered alteration form',
//         img: Icon_Equipment,
//     },
//     {
//         id: uuidv4(),
//         heading: 'Quality Work',
//         description: 'There are many variations of passages the majority have suffered alteration form',
//         img: Icon_Work,
//     },
//     {
//         id: uuidv4(),
//         heading: 'Watering & Irrigation',
//         description: 'There are many variations of passages the majority have suffered alteration form',
//         img: Icon_Irreigation,
//     },

// ];

// const WhyChooseUsOneItem = ({ heading, description, img }) => {
//     return (
//         <>
//             <div className="col-xl-3 col-lg-3 col-md-6">
//                 <div className="single-choose-us">
//                     <div className="single-choose-us-content bb-1 b-color-2">
//                         <h3>{heading}</h3>
//                         <p>{description}</p>
//                     </div>
//                     <div className="single-choose-us-icon">
//                         <img src={img} alt="" />
//                     </div>
//                 </div>
//             </div>
//         </>
//     )
// }

const WhyChoseUs = () => {
    return (
        <>
            <div className="breadcrumb-area pt-80 bg-property" data-overlay="bgColor" data-opacity="7" style={{ backgroundImage: `url(${WhyChooseUsBg})` }}>
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12 justify-content-center">
                            <div className="whyUs-content-wrapper">
                                <h2 className="text">Why Us </h2>
                                <ul className="conatct-why-us" >
                                    <li>Our robust experience in having helped the NRIs in the US and the Gulf and the HNIs of India
                                        in making the right choice of investment makes us stand out from our competition.</li>
                                    <li>Our elaborate database both of India and overseas gives us an edge and speed to market
                                        projects at greater lengths.</li>
                                    <li>We thrive on our engagement and cordial relationship with our channel partners and the
                                        channel partner members of CREA and BRAI.</li>
                                    <li>Our warm relationship with our existing clientele brings us closer each day and we only seem
                                        to be growing stronger together.</li>
                                    <li>Our expertise in the right usage of digital tools and adverts, to target the potential leads in
                                        great precision using SEO, SMO etc.</li>
                                    <li>We possess greater bandwidth and experience to create and engage successfully in
                                        property events, roadshows, corporate events etc.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    {/* <div className="row">
                    <div className="col-xl-12">
                        <div className="breadcrumb-navigation">
                            <nav aria-label="breadcrumb">
                                <ul>
                                    <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                                    <li className="breadcrumb-item active" aria-current="page">About Us</li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div> */}
                </div>
            </div>
            <div style={{ paddingBottom: "20px" }}>

            </div>
        </>
    )
}

export default WhyChoseUs;