import React from "react";

const Contact = () => {
  return (
    <form className="form">
      <h1>contact</h1>
      <div className="form-container">
        <div className="form-row">
          <label className="form-label">name:</label>
          <input
            type="text"
            className="form-input"
            name="name"
            placeholder="please enter your name"
          />
        </div>
        <div className="form-row">
          <label className="form-label">email:</label>
          <input
            type="email"
            className="form-input"
            name="email"
            placeholder="please enter your email address"
          />
        </div>
        <div className="form-row">
          <label className="form-label">subject:</label>
          <input
            type="text"
            className="form-input"
            name="subject"
            placeholder="please enter the subject"
          />
        </div>
        <div className="form-row">
          <label className="form-label">message:</label>
          <input
            type="text"
            className="form-input"
            name="message"
            placeholder="please share any comments or ask any question with us..."
            style={{ height: "8rem" }}
          />
        </div>
      </div>
      <button className="btn btn-block">submit</button>
    </form>
  );
};

export default Contact;
