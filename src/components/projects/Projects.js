
import React from 'react';
import { FaAngleDoubleRight } from 'react-icons/fa';
import { v4 as uuidv4 } from 'uuid';
import image1 from "../../assets/images/project/ezzy.jpg"
import image2 from "../../assets/images/project/prestige.jpg"
import image3 from "../../assets/images/project/pride.jpg"
import image4 from "../../assets/images/project/prime.jpg"
import image5 from "../../assets/images/project/shoba.jpg"




const ProjectStyleOneData = [
    
    {
        id: uuidv4(),
        img: image1,
        heading: 'Garden Care',
        description: 'Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime',
        btnLink: '/project-details',
    },
    
    {
        id: uuidv4(),
        img: image2,
        heading: 'Tree Plantation',
        description: 'Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime',
        btnLink: '/project-details',
    },
    
    {
        id: uuidv4(),
        img: image3,
        heading: 'Branch Cutting',
        description: 'Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime',
        btnLink: '/project-details',
    },
    {
        id: uuidv4(),
        img: image4,
        heading: 'Branch Cutting',
        description: 'Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime',
        btnLink: '/project-details',
    },
    {
        id: uuidv4(),
        img: image5,
        heading: 'Branch Cutting',
        description: 'Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime',
        btnLink: '/project-details',
    },
 
    

];

const ProjectStyleOneItem = ({ img, heading, description, btnLink }) => {
    return (
        <>
            <div className="col-xl-2 col-lg-2 col-md-2">
                <div className="single-project">
                    <div className="single-project-img bg-property bg-hover-style-1" style={{ backgroundImage: `url(${img})` }}>
                        <div className="single-project-img-icon">
                            {/* <Link to={btnLink}><FaAngleDoubleRight /></Link> */}
                        </div>
                    </div>
                    {/* <div className="single-project-content">
                        <h3>{heading}</h3>
                        <p>{description}</p>
                    </div> */}
                </div>
            </div>
        </>
    )
}
const Projects = () => {
    return (
        <div id='projects'>
            <div className="project-area pt-110 pb-110">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="section-title text-center mb-70">
                                <h2>Partnered With</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row mb-60">
                        {ProjectStyleOneData.map((data) => (
                            <ProjectStyleOneItem
                                key={data.id}
                                img={data.img}
                                heading={data.heading}
                                description={data.description}
                                btnLink={data.btnLink}
                            />
                        ))}
                    </div>
                    {/* <div className="row">
                        <div className="col-12">
                            <div className="project-btn text-center">
                                <Link to="/" className="l-btn">More Project</Link>
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>
        </div>
    )
}
export default Projects