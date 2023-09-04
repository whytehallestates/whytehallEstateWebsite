import careersImg from "../../assets/images/careers/careers.jpg"

const Careers = () => {
    return (
        <div id="careers">
            <div className="breadcrumb-area pt-80 pb-160 bg-property" data-overlay="black" data-opacity="7" style={{ backgroundImage: `url(${careersImg})` }}>
                <div className="container">
                    <div className="row" style={{ paddingTop: "90px" }}>
                        <div className="col-xl-12 justify-content-center">
                            <div className="carrers-content-wrapper text-center">
                                <h2>Careers!</h2>

                                <p >Join our dynamic team of real estate enthusiasts and embark on a rewarding career where your passion for property meets limitless opportunities for growth and success.</p>
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
export default Careers