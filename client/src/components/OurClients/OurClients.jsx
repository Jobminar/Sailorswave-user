import React from "react";
import "./OurClients.css";
import GrassLeft from "../../assets/Grass-Left.png";
import GrassRight from "../../assets/Grass-Right.png";
import Photo1 from "../../assets/Photo-1.png";
import Photo2 from "../../assets/Photo-2.png";
import Photo3 from "../../assets/Photo-3.png";
import Photo4 from "../../assets/Photo-4.png";
import Photo5 from "../../assets/Photo-5.png";
import Photo6 from "../../assets/Photo-6.png";
import Photo7 from "../../assets/Photo-7.png";
import Photo8 from "../../assets/Photo-8.png";
import Photo9 from "../../assets/Photo-9.png";
import Photo10 from "../../assets/Photo-10.png";
import Photo11 from "../../assets/Photo-11.png";
import Photo12 from "../../assets/Photo-12.png";
import Photo13 from "../../assets/Photo-13.png";
import Photo14 from "../../assets/Photo-14.png";
import Photo15 from "../../assets/Photo-15.png";
import Photo16 from "../../assets/Photo-16.png";
import Frame from "../../assets/Frame-1.png";
import Star from "../../assets/Star-1.png";

const OurClients = () => {
  return (
    <>
      <br />
      <div className="div-background">
        <br />
        <div className="jumbotron text-center  text-white">
          <br />
          <br />
          <h5 className="display-4 title-text">
            What Our Clients Say About Us
          </h5>
          <br />

          <div class="container">
            <div class="row">
              <div class="col-sm">
                <img src={GrassLeft} className="feather1" />
              </div>
              <div class="col-sm">
                <p id="rating">5.0 User Rating </p>
                <img src={Star} />
                <img src={Star} />
                <img src={Star} />
                <img src={Star} />
                <img src={Star} />
              </div>
              <div class="col-sm">
                <img src={GrassRight} className="feather2" />
              </div>
            </div>
            <br />
            <p className="helping">
              Helping 4,000 Peoples take beautiful screenshots everyday
            </p>
            <div className="row">
              <img src={Frame} alt="..." className="pics-row" />
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col">
            <div className="card card-body1">
              <div className="row">
                <div className="card-image">
                  <img src={Photo16} />
                </div>
                <div className="row card-name">
                  <h5 className="card-title">Leo</h5>
                  <h6 className="card-subtitle mb-2 text-muted">
                    Lead Designer
                  </h6>
                </div>
                <div className="col stars">
                  <img src={Star} />
                  <img src={Star} />
                  <img src={Star} />
                  <img src={Star} />
                  <img src={Star} />
                </div>
              </div>
              <p className="card-text text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh mauris, nec turpis orci lectus maecenas. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu. Faucibus venenatis felis id augue sit cursus pellentesque enim arcu. Elementum felis magna pretium in tincidunt. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu.
              </p>
            </div>
          </div>
          <div className="col">
          <div className="card card-body2">
                <div className="row">
              <div className="card-image">
                <img src={Photo16} />
              </div>
              <div className="row card-name">
                <h5 className="card-title">Leo</h5>
                <h6 className="card-subtitle mb-2 text-muted">Lead Designer</h6>
              </div>
              <div className="col stars">
                <img src={Star} />
                <img src={Star} />
                <img src={Star} />
                <img src={Star} />
                <img src={Star} />
              </div>
              </div>
              <p className="card-text text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh mauris, nec turpis orci lectus maecenas. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu. Faucibus venenatis felis id augue sit cursus pellentesque enim arcu. Elementum felis magna pretium in tincidunt. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu.
              </p>
            </div>
          </div>
          <div className="col">
            <div className="card card-body3">
              <div className="row">
                <div className="card-image">
                  <img src={Photo16} />
                </div>
                <div className="row card-name">
                  <h5 className="card-title">Leo</h5>
                  <h6 className="card-subtitle mb-2 text-muted">
                    Lead Designer
                  </h6>
                </div>
                <div className="col stars">
                  <img src={Star} />
                  <img src={Star} />
                  <img src={Star} />
                  <img src={Star} />
                  <img src={Star} />
                </div>
              </div>
              <p className="card-text text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh mauris, nec turpis orci lectus maecenas. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu. Faucibus venenatis felis id augue sit cursus pellentesque enim arcu. Elementum felis magna pretium in tincidunt. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurClients;
