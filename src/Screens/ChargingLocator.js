import React from 'react'
import '/home/ryuk/reactapp/sparkncharge/src/Css/ChargingLocator.css';
import { useNavigate } from 'react-router-dom';
import img1 from '../Components/Images/flying-car-color-icon-illustration-vector-removebg-preview.png';
const ChargingLocator = () => {

    const navigate = useNavigate();
  return (
    <div>
      <div class="conatiner length-width-row">
        <marquee
                direction="up"
                width=""
                height="120"
                behavior="alternate">
                <marquee behavior="alternate"><img class="flying-car-2"src={img1} alt=""/></marquee>
                </marquee>

                <marquee
                direction="up"
                width=""
                height="100"
                behavior="alternate">
                <marquee behavior="alternate"><img class="flying-car"src={img1} alt=""/></marquee>
                </marquee>
    </div>


    <div class="container container-info">
        <div class="info">
            <div class="locator">
              <h1 class="justify-text">Find your nearest<br />charging location</h1>
              <div class="container">
              <form class="length-width">
                <h1 class="h3 mb-3 fw-normal justify-text padding-all">Please sign in</h1>


                <p class="form-info justify-text padding-all">We are the market–leading technical platform to identify and deliver EV charging stations on the go.</p>
            
                
                <button class="btn btn-success w-30 py-2" type="submit" onClick={() => navigate('/Screen2')}>Find Now</button>
              </form>
            </div>
              
              
            </div>
            <div class="dealer">
                <h1 class="justify-text">Rent your space<br />for EV Charging</h1>

                <div class="container">
                    <form class="length-width">
                      <h1 class="h3 mb-3 fw-normal justify-text padding-all">Please sign in</h1>
      
      
                      <p class="form-info justify-text padding-all">We are the market–leading technical platform to identify and deliver EV charging stations on the go.</p>
                  
                      
                      <button class="btn btn-primary w-30 py-2 length-width" type="submit" onClick={() => navigate('/Screen1')}>Join Us</button>
                    </form>
                  </div>

            </div>
          </div>
        </div>
    </div>
  )
}

export default ChargingLocator
