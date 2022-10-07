import React, { useEffect } from "react";
import { motion } from "framer-motion";
import "../styles/DemoForm.css";
import { useState } from "react";

function DemoForm(props) {
  const [submit, setSubmit] = useState(false);
  const [submitButton, setSubmitButton] = useState(false);
  const [demoData, setDemoData] = useState({
    fname: '',
    lname: '',
    company: '',
    email: '',
    pnumber: '',
    teams: ''
  });
  const [selectOpen, setSelectOpen] = useState(false);

  useEffect(() => {
    if (
      demoData.fname &&
      demoData.lname &&
      demoData.company &&
      demoData.email
    ) {
      setSubmitButton(true);
    } else {
      setSubmitButton(false);
    }
  }, [demoData]);

  function handleClick() {
    props.setDemo(false);
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setDemoData((pValue) => {
      return {
        ...pValue,
        [name]: value,
      };
    });
    console.log(demoData);
  }

  function handleSubmit(e) {
    e.preventDefault();
    setSubmit(true);
  }

  function selectOption(e) {
    setDemoData((pValue) => {
      return {
        ...pValue,
        teams: e.target.innerText
      };
    });
    setSelectOpen(false);
  }

  function openSelect() {
    setSelectOpen(true);
  }

  const windowAnim = {
    hidden: { opacity: 0 },
    visible: { opacity: 0.8, transition: { duration: 0.4 } },
  };

  const formAnim = {
    hidden: { position: "relative", bottom: "-60px", opacity: 0 },
    visible: {
      position: "relative",
      bottom: "0px",
      opacity: 1,
      transition: { duration: 0.6 },
    },
  };

  return (
    <>
      <motion.div
        variants={windowAnim}
        initial="hidden"
        animate="visible"
        className="demo-form-window"
      ></motion.div>
      <div className="demo-form-container">
        <motion.div
          variants={formAnim}
          initial="hidden"
          animate="visible"
          style={{ height: submit ? "457px" : "499px" }}
          className="demo-form"
        >
          <div onClick={handleClick} className="close-button">
            <img src={require("../images/close-button.png")} alt="" />
          </div>
          {submit ? (
            <div className="form-submitted">
              <img src={require("../images/form-submitted.png")} alt="" />
              <p>
                Your request has been successfully submitted. Our team will
                reach out to you.
              </p>
              <button onClick={handleClick}>Back to homepage</button>
            </div>
          ) : (
            <>
              <h2>See Sociometrik Live</h2>
              <form onSubmit={handleSubmit}>
                <div className="form-grid">
                  <div className="form-field">
                    <h3>First name *</h3>
                    <input
                      onChange={handleChange}
                      type="text"
                      name="fname"
                      placeholder="Enter your first name"
                      required
                    />
                  </div>
                  <div className="form-field">
                    <h3>Last name *</h3>
                    <input
                      onChange={handleChange}
                      type="text"
                      name="lname"
                      placeholder="Enter your last name"
                      required
                    />
                  </div>
                  <div className="form-field">
                    <h3>Company name *</h3>
                    <input
                      onChange={handleChange}
                      type="text"
                      name="company"
                      placeholder="Enter your company name"
                      required
                    />
                  </div>
                  <div className="form-field">
                    <h3>Email *</h3>
                    <input
                      onChange={handleChange}
                      type="email"
                      name="email"
                      placeholder="Enter your email address"
                      required
                    />
                  </div>
                  <div className="form-field">
                    <h3>Phone Number</h3>
                    <input
                      onChange={handleChange}
                      type="text"
                      name="pnumber"
                      placeholder="Enter your phone number"
                    />
                  </div>
                  <div className="form-field">
                    <h3>Team</h3>
                    <div className="select-menu">
                      <div className="input-icon">
                        <input
                          disabled
                          className="select-input"
                          placeholder="Select a team"
                          value={demoData.teams}
                          type="text"
                          name="teams"
                        />
                        <span onClick={openSelect} className="dropdown">
                          <img
                            src={require("../images/form-dropdown.png")}
                            alt=""
                          />
                        </span>
                      </div>
                      {selectOpen && (
                        <ul>
                          <li onClick={selectOption}>Sales</li>
                          <li onClick={selectOption}>Marketing</li>
                          <li onClick={selectOption}>Strategy</li>
                          <li onClick={selectOption}>Operations</li>
                          <li onClick={selectOption}>Data Science</li>
                          <li onClick={selectOption}>Others</li>
                        </ul>
                      )}
                    </div>
                  </div>
                </div>
                <button
                  className={
                    submitButton ? "enabled-button" : "disabled-button"
                  }
                  disabled={!submitButton}
                >
                  Submit and get a call back
                </button>
              </form>
            </>
          )}
        </motion.div>
      </div>
    </>
  );
}

export default DemoForm;
