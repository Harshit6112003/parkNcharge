import React from 'react'
import '../Css/Ourteam.css' ;
import img1 from '../Components/Images/pexels-harold-vasquez-853421-2653362.jpg';
import img2 from '../Components/Images/pexels-luis-gomes-166706-546819.jpg';
import img3 from '../Components/Images/pexels-markusspiske-2764993 (1).jpg';
import img4 from '../Components/Images/pexels-pixabay-256502.jpg';
const OurTeam = () => {
  return (
    <div>
      <div class="container con-bg">

        <div class="row featurette">
          <div class="col-md-7 margin-auto-class padding-class-40">
            <h2 class="featurette-heading fw-normal lh-1">Vinayak Rohila  <span class="text-body-secondary blue-text-diff">(225/UCF/117)</span></h2>
            <p class="lead blue-text">As the team lead, Vinayak played a pivotal role in developing the frontend of the website. Using technologies like React, HTML, CSS, and JavaScript, Vinayak focused on crafting an intuitive and visually appealing user interface, ensuring a seamless experience for users.</p>
          </div>
          <div class="col-md-5">
            <img class="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto border-class-left" width="500" height="500" src={img1} role="img" aria-label="Placeholder: 500x500" preserveAspectRatio="xMidYMid slice" focusable="false"/><title>Placeholder</title><rect width="100%" height="100%" fill="var(--bs-secondary-bg)"></rect><text x="50%" y="50%" fill="var(--bs-secondary-color)" dy=".3em"></text>
          </div>
        </div>


        <hr class="featurette-divider margin-class-here" />

        <div class="row featurette">
          <div class="col-md-7 order-md-2 margin-auto-class padding-class-40">
            <h2 class="featurette-heading fw-normal lh-1">Rajat Bansal <span class="text-body-secondary blue-text-diff">(225/UCF/091)</span></h2>
            <p class="lead blue-text">Rajat contributed by working on data management and integration. Leveraging React and JSON, he implemented functionality to fetch and store data efficiently, ensuring the backend communication was robust and reliable.</p>
          </div>
          <div class="col-md-5 order-md-1">
            <img class="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto border-class-right" width="500" height="500" src={img2} role="img" aria-label="Placeholder: 500x500" preserveAspectRatio="xMidYMid slice" focusable="false"/><title>Placeholder</title><rect width="100%" height="100%" fill="var(--bs-secondary-bg)"></rect><text x="50%" y="50%" fill="var(--bs-secondary-color)" dy=".3em"></text>
          </div>
        </div>


        <hr class="featurette-divider margin-class-here" />

        <div class="row featurette">
          <div class="col-md-7 margin-auto-class padding-class-40">
            <h2 class="featurette-heading fw-normal lh-1">Vaibhav Pandey<span class="text-body-secondary blue-text-diff">(225/UCF/114)</span></h2>
            <p class="lead blue-text">Vaibhav brought creativity to the project as the designer. He provided high-quality images, designed presentation materials, and brainstormed innovative UI ideas, helping shape the aesthetic and functional aspects of the platform.</p>
          </div>
          <div class="col-md-5">
            <img class="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto border-class-left" width="500" height="500" src={img3} role="img" aria-label="Placeholder: 500x500" preserveAspectRatio="xMidYMid slice" focusable="false"/><title>Placeholder</title><rect width="100%" height="100%" fill="var(--bs-secondary-bg)"></rect><text x="50%" y="50%" fill="var(--bs-secondary-color)" dy=".3em"></text>
          </div>
        </div>

        <hr class="featurette-divider margin-class-here" />


        <div class="row featurette">
          <div class="col-md-7 order-md-2 margin-auto-class padding-class-40">
            <h2 class="featurette-heading fw-normal lh-1">Harshit Sharma <span class="text-body-secondary blue-text-diff">(225/UCF/050)</span></h2>
            <p class="lead blue-text"> Harshit worked alongside Vinayak as a frontend engineer, supporting the development of interactive elements and ensuring responsive design, further enhancing the website’s user experience.</p>
          </div>
          <div class="col-md-5 order-md-1">
            <img class="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto border-class-right" width="500" height="500" src={img4} role="img" aria-label="Placeholder: 500x500" preserveAspectRatio="xMidYMid slice" focusable="false"/><title>Placeholder</title><rect width="100%" height="100%" fill="var(--bs-secondary-bg)"></rect><text x="50%" y="50%" fill="var(--bs-secondary-color)" dy=".3em"></text>
          </div>
        </div>


        <hr class="featurette-divider margin-class-here" />


      </div>
    </div>
  )
}

export default OurTeam
