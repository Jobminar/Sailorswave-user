import React from "react";
import "../ApplicationPage/ApplicationPage.css";
import emailIcon from "../../assets/Email-icon.png";
import phoneIcon from "../../assets/Phone-icon.png";
import logo from "../../assets/Sailors-Logo.png";

const ApplicationPage = () => {
  return (
    <>
      <div className="float-contains">
        <div className="logo">
          <img src={logo} alt="Sailors Wave Logo" />
        </div>

        <div className="contact-info">
          <div className="contact-item">
            <img src={emailIcon} alt="Email Icon" />
            <span1>sailorswaveshipmanagement@gmail.com</span1>
          </div>
          <div className="contact-item">
            <img src={phoneIcon} alt="Phone Icon" />
            <span1>+91 9876543210</span1>
          </div>
        </div>
      </div>

      <div className="form-div">
        <div className="text-center">
          <h2>APPLICATION FORM FOR MERCHANT NAVY</h2>
          <h2>APPLICATION FOR ADMISSION IN MARINE TRAINING</h2>
        </div>
        <br />
        <form className="form-total-1">
          <br />
          <p className="side-header">&nbsp;&nbsp;PERSONAL DETAILS</p>
          
          <div className="apply-section">
        <label htmlFor="post-select">Apply for post</label>
        <select id="post-select">
          <option value="" disabled selected>Select for post</option>
        </select>
        </div><br />
        <div className="thin-line"></div>
        <br />
          <div className="row container text-start">
            <div className="col">
              <div>
                <label className="candidate-label">Candidate Name<span>*</span></label>
                <br />
                <input
                  type="text"
                  className="input-width"
                  placeholder="Input Text"
                />
              </div>
              <div>
                <label className="candidate-label">Date of birth<span>*</span></label>
                <br />
                <input
                  type="date"
                  className="input-width"
                  placeholder="DD-MM-YY"
                />
              </div>
              <div>
                <label className="candidate-label">Mobile number</label>
                <br />
                <input
                  type="number"
                  className="input-width"
                  placeholder="+91 9848226644"
                />
              </div>
            </div>
            <div className="col">
              <div>
                <label className="candidate-label">Father name<span>*</span></label>
                <br />
                <input
                  type="text"
                  className="input-width"
                  placeholder="Input Text"
                />
              </div>
              <div>
                <label className="candidate-label">Gender</label>
                <br />
                <select className="input-width">
                  <option placeholder="Male">Male</option>
                  <option placeholder="Female">Female</option>
                </select>
              </div>
              <div>
                <label className="candidate-label">Email Id</label>
                <br />
                <input
                  type="email"
                  className="input-width"
                  placeholder="Example@gmail.com"
                />
              </div>
            </div>
          </div>
          <br />

          {/* akshaya _________________________________________ */}

          <p className="side-header">ADDRESS OF CANDIDATES</p>
          <div className="row container">
            <div className="col">
              <div className="form-group">
                <label>House number</label>
                <br />
                <input
                  type="text"
                  className="input-width"
                  placeholder="Input Text"
                />
              </div>
              <div className="form-group">
                <label>Police station<span>*</span></label>
                <br />
                <input
                  type="text"
                  className="input-width"
                  placeholder="Input Text"
                />
              </div>
              <div className="form-group">
                <label>Select city</label>
                <br />
                <select className="input-width">
                  <option>Select city</option>
                </select>
              </div>
              <div className="form-group">
                <label>Pincode</label>
                <input
                  type="text"
                  className="input-width"
                  placeholder="Input field"
                />
              </div>
            </div>
            <div className="col ">
              <div className="form-group-1">
                <label>Post office<span>*</span></label>
                <br />
                <input
                  type="text"
                  className="input-width"
                  placeholder="Input Text"
                />
              </div>

              <div className="form-group-1">
                <label>District<span>*</span></label>
                <br />
                <input
                  type="text"
                  className="input-width"
                  placeholder="Input Text"
                />
              </div>

              <div className="form-group-1">
                <label>Select state</label>
                <br />
                <select className="input-width">
                  <option>Select city</option>
                </select>
              </div>
            </div>
          </div>
          <br />
          <p className="side-header">EDUCATIONAL QUALIFICATION</p>
          <div className="row container">
            <div className="col">
              <p><strong>Exam passed</strong></p>
              <p className="input-width-2">10th</p>
              <p className="input-width-2">12th</p>
              <p className="input-width-2">ITI/Diploma</p>
            </div>
            <div className="col">
              <p><strong>School/college</strong></p>
              <input type="text" className="input-width-2" />
              <input type="text" className="input-width-2" />
              <input type="text" className="input-width-2" />
            </div>
            <div className="col">
              <p><strong>Year of passing</strong></p>
              <input type="text" className="input-width-2" />
              <input type="text" className="input-width-2" />
              <input type="text" className="input-width-2" />
            </div>
            <div className="col">
              <p><strong>Percentage%</strong></p>
              <input type="text" className="input-width-2" />
              <input type="text" className="input-width-2" />
              <input type="text" className="input-width-2" />
            </div>
          </div>
          {/* shivani _________________________________________ */}
        </form>
      </div>
    </>
  );
};

export default ApplicationPage;
