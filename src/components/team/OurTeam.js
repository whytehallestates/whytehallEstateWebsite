import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaPinterestP } from 'react-icons/fa';
import { v4 as uuidv4 } from 'uuid';
import { Link } from 'react-router-dom';
// import TeamStyleImg1 from '../../assets/images/team/1.png';
// import TeamStyleImg2 from '../../assets/images/team/2.png';
// import TeamStyleImg3 from '../../assets/images/team/3.png';
// import Pagination from '../pagination/Pagination';
import teamImage from "../../assets/images/team/team.jpg"

const TeamStyleData = [
    {
        id: uuidv4(),
       // img: TeamStyleImg1,
        name: 'Monika Mandanna',
        position: 'Director',
        fbLink: '/',
        twitterLink: '/',
        instagramLink: '/',
        pinterestLink: '/',
        heading: "Real estate is the only investment which is contemporary and eternal. And I know it never fails",
        description: "Monika Mandanna is qualified with a P.G Diploma in International Business from St. Joseph's College of Business Administration, Bangalore.Monika is a Sales and marketing professional with over two decades of work experience which includes five years in the nutraceutical industry where she handled seven international markets in addition to sixteen years of real estate experience in Bangalore, Chennai, Hyderabad and Mysore markets.Proven professional capabilities of handling a team of sales professionals, planning and execution of marketing goals and customer relationship management. She truly believes in the wealth creation power of property.She is passionate about the vital role that the team at Whytehall Realtors provide in this process along with the full- service offering extended to our clients."
    },

    {
        id: uuidv4(),
       // img: TeamStyleImg2,
        name: 'Nithin CC',
        position: 'Director',
        fbLink: '/',
        twitterLink: '/',
        instagramLink: '/',
        pinterestLink: '/',
        heading: "Quality of work speaks more than going overboard. And hence, a satisfied customer is always the best marketing",
        description: "After working for 10 years in the hospitality industry in various supervisory and managerial positions, Nithin brings his vast experience in customer relations into Whytehall Realtors. Nithin entered customer relations and hospitality industry in 2006 and ever since has managed to work towards developing, managing and providing world class customer experience, He has developed and implemented marketing techniques, monitored relationships with HNI clients through CRM systems."
    },

    {
        id: uuidv4(),
       // img: TeamStyleImg3,
        name: 'Ujjwal Kashyap',
        position: 'Director',
        fbLink: '/',
        twitterLink: '/',
        instagramLink: '/',
        pinterestLink: '/',
        heading: "Good investment in the past could have made our present better. Good investment in the present can make our future better",
        description: "Ujjwal brings over thirteen years’ property experience to Whytehall Realtors. Ujjwal helps investors identify strategies to maximize the growth potential of their investment property portfolio. With his vast experience in the facility and administration, sales and marketing an established record in decision making and experience in all phases of management systems, personnel management, guest services and overall support functions or facilities, Ujjwal is particularly strong in attaining organizational goals, cost control, training of employees and quality initiatives, build strong customer relationships to ensure repeat and referral business."
    },
];

const TeamStyleItem = ({ img, name, position, heading, description, fbLink, twitterLink, instagramLink, pinterestLink }) => {
    return (
        <>
            <div className="col-xl-4 col-lg-4 col-md-6">
                <div className="single-team-style-1 mb-80 ">
                    <div className="single-team-style-1-img text-center">
                        {/* <img src={img} alt="" /> */}
                        <h2>{name}</h2>
                        <div className='position'>{position}</div>
                        {/* <div className="team-social-style-1 ">
                            <a href={fbLink}><FaFacebookF /></a>
                            <a href={twitterLink}><FaTwitter /></a>
                            <a href={instagramLink}><FaInstagram /></a>
                            <a href={pinterestLink}><FaPinterestP /></a>
                        </div> */}
                    </div>
                    <h4 style={{padding:"0 10px"}}><q> {heading} </q></h4>
                    <h6 style={{padding:"0 10px"}}>{description}</h6>
                    <br/>

                </div>
            </div>
        </>
    )
}

const TeamStyle = () => {
    return (
        <div id='ourTeam'>
            <div className="team-area team-bg pt-80" data-overlay="theme3" data-opacity="7"  >
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="section-title text-center mb-70">
                                {/* <span>Team Members</span> */}
                                <h2>Team Members</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        {TeamStyleData.map((data) => (
                            <TeamStyleItem
                                key={data.id}
                                img={data.img}
                                name={data.name}
                                position={data.position}
                                heading={data.heading}
                                description={data.description}
                                fbLink={data.fbLink}
                                twitterLink={data.twitterLink}
                                instagramLink={data.instagramLink}
                                pinterestLink={data.pinterestLink}
                            />
                        ))}
                    </div>

                    <div className="row">
                        <div className="col-12 text-center">
                            {/* <Pagination /> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TeamStyle;