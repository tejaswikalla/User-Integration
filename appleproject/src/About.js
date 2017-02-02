import React, { Component } from 'react';



  class About extends Component {

  render() {

  return(
  <div>

              <a name="about"></a>
              <div className="text-content container">
                  <div className="col-md-6">
                      <h1>About us</h1>
                      <div className="fa fa-cutlery fa-2x"></div>
                      <p className="desc-text">Restaurant is a place for simplicity. Good food, good beer, and good service. Simple is the name of the game, and we’re good at finding it in all the right places, even in your dining experience. We’re a small group from Denver, Colorado who make simple food possible. Come join us and see what simplicity tastes like.</p>
                  </div>
                  <div className="col-md-6">
                      <div className="img-section">
                         <img src="images/kabob.jpg" width="250" height="220" />
                         <img src="images/limes.jpg" width="250" height="220" />
                         <div className="img-section-space"></div>
                         <img src="images/radish.jpg"  width="250" height="220" />
                         <img src="images/corn.jpg"  width="250" height="220" />
                     </div>
                  </div>
              </div>
 </div>


  );
 }
}

export default About;
