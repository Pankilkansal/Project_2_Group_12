import React from "react";
import "./style.css";

function SignUp() {
  return (
    <section className="section-4">
      <div className="section-4-text">
        <h2 className="section-4-heading">Sign Me Up</h2>
        <p className="section-4-paragraph">BE THE FIRST TO KNOW ABOUT NEW PRODUCTS</p>
      </div>
      <form className="signup-form">
        <input
          type="email"
          className="signup-form-input"
          placeholder="Enter Your Email"
        />
        <button type="submit" className="signup-form-btn">
          <i className="fas fa-arrow-right"></i>
        </button>
      </form>
    </section>
  );
}

export default SignUp;
