import React from 'react';
import '../Css/OurVision.css';
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
      <section className="namepad">
        <div className="flex-marquee">
          <img className="flying-car" src={img1} alt="Flying car icon" />
          <span className="name-car">ParkNCharge</span>
        </div>
      </section>

      <div className="px-4 py-5 mb-5 text-center">
        <h1 className="display-5 fw-bold text-body-emphasis name">
          Park<span className="green-text">N</span>Charge
        </h1>
        <div className="col-lg-6 mx-auto">
          <p className="lead mb-4">Stop, Charge, and Go—Easier Than You Know!</p>
        </div>
      </div>

      <section className="carpad py-5">
        <div id="myCarousel" className="carousel slide mb-6 py-5" data-bs-ride="carousel">
          <div className="carousel-indicators">
            {[...Array(7)].map((_, i) => (
              <button
                key={i}
                type="button"
                data-bs-target="#myCarousel"
                data-bs-slide-to={i}
                className={i === 0 ? 'active' : ''}
                aria-label={`Slide ${i + 1}`}
                aria-current={i === 0 ? 'true' : undefined}
              ></button>
            ))}
          </div>

          <div className="carousel-inner">
            {[img2, img3, img4, img5, img6, img7, img8].map((img, idx) => (
              <div
                className={`carousel-item ${idx === 0 ? 'active' : ''}`}
                key={idx}
              >
                <img
                  className=" d-block w-100 carousel-img "
                  src={img}
                  alt={`Slide ${idx + 1}`}
                />
                {idx === 0 && (
                  <div className="carousel-caption">
                    <h1>We strive to bring revolution in Charging EVs</h1>
                    <p>Join us in building India’s largest smart EV charging network.</p>
                    <p>
                      <a className="btn btn-lg btn-primary" href="#">
                        Learn more
                      </a>
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>

          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#myCarousel"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#myCarousel"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
