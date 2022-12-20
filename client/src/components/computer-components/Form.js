import React from "react";

const Form = () => {
  const submitForm = (e) => {
    e.preventDefault();
    console.log("Form submitted successfully");
  };
  return (
    <div>
      <form id="contact-form" onSubmit={submitForm} className="form">
        <div className="form__group">
          <label className="form__label">Name</label>
          <input type="text" className="form__input"></input>
        </div>
        <div className="form__group">
          <label className="form__label">Email</label>
          <input type="email" className="form__input"></input>
        </div>
        <div className="form__group">
          <label className="form__label">Message</label>
          <textarea
            type="textarea"
            className="form__input form__input--message"
          ></textarea>
        </div>
      </form>
    </div>
  );
};

export default Form;
