import React from 'react'
import '../Css/OurVision.css'
import img1 from '../Components/Images/flying-car-color-icon-illustration-vector-removebg-preview.png';
import img2 from '../Components/Images/ElectrifyAmerica-VancouverWA.jpg';
import img3 from '../Components/Images/1027923.jpg';
import img4 from '../Components/Images/Biz-ev-charger-1242853588.jpg';
import img5 from '../Components/Images/electric-cars-charging-stations.jpg';
import img6 from '../Components/Images/evchargingstation-courtesy-the-n.jpg';
import img7 from '../Components/Images/How-Many-EV-Chargers-Do-We-Need.jpg';
import img8 from '../Components/Images/charging-station.jpg';



const AboutUs = () => {
    return (
        <div>
            <section class="namepad">
                <marquee class="flex-marquee"><img class="flying-car" src={img1} alt="" /><span class="name-car">ParkNCharge</span></marquee>
            </section>





            <div class="px-4 py-5 mb-5 text-center">
                <h1 class="display-5 fw-bold text-body-emphasis name">Park<span class="green-text">N</span>Charge</h1>
                <div class="col-lg-6 mx-auto">
                    <p class="lead mb-4">Stop, Charge, and Go—Easier Than You Know!</p>
                </div>
            </div>




            <section class="carpad py-5">
                <div id="myCarousel" class="carousel slide mb-6 py-5" data-bs-ride="carousel">
                    <div class="carousel-indicators">
                        <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" class="active" aria-label="Slide 1" aria-current="true"></button>
                        <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1" aria-label="Slide 2" class=""></button>
                        <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="2" aria-label="Slide 3" class=""></button>
                        <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="3" aria-label="Slide 4" class=""></button>
                        <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="4" aria-label="Slide 5" class=""></button>
                        <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="5" aria-label="Slide 6" class=""></button>
                        <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="6" aria-label="Slide 7" class=""></button>
                    </div>
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img class="bd-placeholder-img" width="100%" height="800px" src={img2} aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false" /><rect width="100%" height="100%" fill="var(--bs-secondary-color)" />
                        </div>
                        <div class="carousel-item">
                            <img class="bd-placeholder-img" width="100%" height="800px" src={img3} aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false" /><rect width="100%" height="100%" fill="var(--bs-secondary-color)" />
                        </div>
                        <div class="carousel-item">
                            <img class="bd-placeholder-img" width="100%" height="800px" src={img4} aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false" /><rect width="100%" height="100%" fill="var(--bs-secondary-color)" />
                        </div>
                        <div class="carousel-item">
                            <img class="bd-placeholder-img" width="100%" height="800px" src={img5} aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false" /><rect width="100%" height="100%" fill="var(--bs-secondary-color)" />
                        </div>
                        <div class="carousel-item">
                            <img class="bd-placeholder-img" width="100%" height="800px" src={img6} aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false" /><rect width="100%" height="100%" fill="var(--bs-secondary-color)" />
                        </div>
                        <div class="carousel-item">
                            <img class="bd-placeholder-img" width="100%" height="800px" src={img7} aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false" /><rect width="100%" height="100%" fill="var(--bs-secondary-color)" />
                        </div>
                        <div class="carousel-item">
                            <img class="bd-placeholder-img" width="100%" height="800px" src={img8} aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false" /><rect width="100%" height="100%" fill="var(--bs-secondary-color)" />
                        </div>


                        <div class="carousel-caption transparent-class">
                            <h1 class="transparent-class">We strive to bring revolution in Charging Ev's</h1>
                            <p class="transparent-class">Some representative placeholder content for the second slide of the carousel.</p>
                            <p class="transparent-class"><a class="btn btn-lg btn-primary" href="#">Learn more</a></p>
                        </div>



                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>
            </section>



            <script src="/docs/5.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>

            <script async="" src="https://cdn.jsdelivr.net/npm/masonry-layout@4.2.2/dist/masonry.pkgd.min.js" integrity="sha384-GNFwBvfVxBkLMJpYMOABq3c+d3KnQxudP/mGPkzpZSTYykLBNsZEnG2D9G/X/+7D" crossorigin="anonymous"></script>








            


            
        </div>
    )
}

export default AboutUs
