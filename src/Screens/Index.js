import React from 'react';
import '/home/ryuk/reactapp/sparkncharge/src/Css/Style.css';
import img1 from '../Components/Images/ElectrifyAmerica-VancouverWA.jpg';
import img2 from '../Components/Images/Biz-ev-charger-1242853588.jpg';
import img3 from '../Components/Images/logo-org.png';

const Index = () => {
    return (
        <div>
            <div className="container col-xxl-8 px-4 py-5 padding-1st">
                <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
                    <div className="col-10 col-sm-8 col-lg-6">
                        <img
                            src={img1}
                            className="d-block mx-lg-auto img-fluid"
                            alt="EV Charging"
                            width="700"
                            height="500"
                            loading="lazy"
                        />
                    </div>
                    <div className="col-lg-6">
                        <h3 className="display-5 fw-bold text-body-emphasis lh-1 mb-3 hero-heading">
                            <span className="decorative-text-hero">
                                Park<span className="decorative-text-hero-2 bg-color">N</span>Charge
                                <br /> Charging, Anywhere, Anytime.
                            </span>
                        </h3>
                        <p className="lead hero-text">
                            ParkNCharge is a forward-thinking platform designed to make EV
                            charging accessible and convenient for everyone. ParkNCharge
                            supports India's EV revolution by offering a cost-effective solution
                            that saves on large-scale development and extends charging access to
                            remote areas. Our mission is to empower EV users while boosting
                            sustainability and aligning with government initiatives to grow the
                            EV sector. Join us in driving India toward a greener, more efficient
                            future!
                        </p>
                    </div>
                </div>
            </div>

            <div className="overflow-hidden" style={{ maxHeight: '30vh' }}>
                <div className="container px-5 hero-image-2nd">
                    <img
                        src={img2}
                        className="img-fluid border rounded-3 shadow-lg mb-4"
                        alt="Example"
                        width="700"
                        height="500"
                        loading="lazy"
                    />
                </div>
            </div>

            <div className="px-4 pb-5 my-5 text-center">
                <h1 className="display-5 fw-bold text-body-emphasis">
                    Ever growing charging network in India
                </h1>
                <div className="col-lg-6 mx-auto">
                    <p className="lead mb-4 justify-text">
                        With 14,000+ charging stations across the country, you can rest
                        assured that we will have your journey covered. We also offer 24x7
                        emergency charging support in five cities as part of our seamless
                        charging experience.
                    </p>
                </div>
            </div>

            <div className="info">
                <div className="info-locations">
                    <h1 className="justify-text">Find your nearest<br />charging location</h1>
                    <div className="d-flex flex-column flex-md-row p-4 gap-4 py-md-5 align-items-center justify-content-center">
                        <div className="list-group list-group-checkable d-grid gap-4 border-0">
                            <label className="list-group-item rounded-3 py-3">
                                Delhi Network
                                <span className="d-block small opacity-50">
                                    Future Network Goal 250+
                                </span>
                            </label>
                            <label className="list-group-item rounded-3 py-3">
                                Gurugram Network
                                <span className="d-block small opacity-50">
                                    Future Network Goal 325+
                                </span>
                            </label>
                            <label className="list-group-item rounded-3 py-3">
                                Greater Noida Network
                                <span className="d-block small opacity-50">
                                    Future Network Goal 200+
                                </span>
                            </label>
                            <label className="list-group-item rounded-3 py-3">
                                Pune Network
                                <span className="d-block small opacity-50">
                                    Future Network Goal 400+
                                </span>
                            </label>
                        </div>
                    </div>
                </div>
                <div className="map">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6987.977215481339!2d77.51861363620016!3d28.42073673779777!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cc0f918abee8d%3A0x8c72169fdd7154b0!2sGautam%20Buddha%20University!5e0!3m2!1sen!2sin!4v1731836146203!5m2!1sen!2sin"
                        height="600px"
                        width="100%"
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Charging Network Map"
                    ></iframe>
                </div>
            </div>
            <footer className="footer-comp">
                <div className="container bg-color">
                    <div className="row footer-main bg-color">
                        <div className="col-lg-6 col-md-5 col-sm-12 bg-color">
                            <div className="tml-footer-nav bg-color">
                                
                                <ul className="list-unstyled text-small bg-color">
                                    <li className="footer-nav-link py-2 bg-color bg-color" >
                                        <a
                                            href="#"
                                            className="d-flex align-items-center bg-color"
                                        >
                                            <span className='bg-color'> ParkNCharge</span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-12 footer-list bg-color">
                            <div className="footer-nav bg-color">
                                <p className="nav-link-heading bg-color">Quick Links</p>
                                <ul className="list-unstyled text-small bg-color">
                                    <li className="footer-nav-link py-2 bg-color bg-color">
                                        <a
                                            className="link-secondary text-decoration-none bg-color bg-color"
                                            href="#"
                                        >
                                            Contact Us
                                        </a>
                                    </li>
                                    <li className="footer-nav-link py-2 bg-color">
                                        <a
                                            className="link-secondary text-decoration-none bg-color"
                                            href="#"
                                        >
                                            Privacy Policy
                                        </a>
                                    </li>
                                    <li className="footer-nav-link py-2 bg-color">
                                        <a
                                            className="link-secondary text-decoration-none bg-color"
                                            href="#"
                                        >
                                            Terms & Conditions
                                        </a>
                                    </li>
                                    <li className="footer-nav-link py-2 bg-color">
                                        <a
                                            className="link-secondary text-decoration-none bg-color"
                                            href="#"
                                        >
                                            Plans & Subscriptions
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-3 col-sm-12 footer-list bg-color">
                            <div className="footer-nav bg-color">
                                <p className="nav-link-heading bg-color">Social</p>
                                <ul className="list-unstyled text-small bg-color">
                                    <li className="social-nav-link py-2 bg-color">
                                        <a
                                            className="link-secondary text-decoration-none bg-color"
                                            href="https://www.facebook.com"
                                            target="_blank"
                                            rel="noreferrer"
                                        >
                                            Facebook
                                        </a>
                                    </li>
                                    <li className="social-nav-link py-2 bg-color">
                                        <a
                                            className="link-secondary text-decoration-none bg-color"
                                            href="https://twitter.com"
                                            target="_blank"
                                            rel="noreferrer"
                                        >
                                            Twitter
                                        </a>
                                    </li>
                                    <li className="social-nav-link py-2 bg-color">
                                        <a
                                            className="link-secondary text-decoration-none bg-color"
                                            href="https://www.instagram.com"
                                            target="_blank"
                                            rel="noreferrer"
                                        >
                                            Instagram
                                        </a>
                                    </li>
                                    <li className="social-nav-link py-2 bg-color">
                                        <a
                                            className="link-secondary text-decoration-none bg-color"
                                            href="https://www.youtube.com"
                                            target="_blank"
                                            rel="noreferrer"
                                        >
                                            YouTube
                                        </a>
                                    </li>
                                    <li className="social-nav-link py-2 bg-color">
                                        <a
                                            className="link-secondary text-decoration-none bg-color"
                                            href="https://in.linkedin.com"
                                            target="_blank"
                                            rel="noreferrer"
                                        >
                                            LinkedIn
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="row footer-main bg-color">
                        <div className="col-lg-4 col-md-4 col-sm-12 bg-color">
                            <div className="copyright-text bg-color">
                                <p className="copy_right bg-color">All Rights Reserved to ParkNCharge</p>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Index;
