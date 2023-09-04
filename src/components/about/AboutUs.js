import { Link } from 'react-router-dom';
import about from "../../assets/images/about/about.jpg"
const AboutUs = () => {
    return (
        <div id='aboutUs'>
            <div className="breadcrumb-area pt-80 pb-160 bg-property" data-overlay="theme3" data-opacity="7" style={{ backgroundImage: `url(${about})` }}>
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12 justify-content-center">
                            <div className="aboutUs-content-wrapper text-center" style={{ paddingTop: "45px" }}>
                                <h2>You matter to us! </h2>
                                <p>Thus at Whytehall Estates your property investment is made easy, effective and
                                    profitable/ reliable through our strategic and individual approach.
                                </p>
                                <p>We guide our clients in smart investments through strategic investing, managing the
                                    entire process and making property investing simple.
                                    We’re based in Bangalore and operate across India and overseas markets to ensure
                                    our clients get the best properties in the right market.</p>
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
        </div>
    )
}
export default AboutUs