import React from "react";

const Contact = () => {
  return (
    <div>
      <div className="mb-3 flex flex-col">
        <label htmlFor="exampleFormControlInput1" className="form-label">
          Email address
        </label>
        <input
          type="email"
          className="form-control"
          id="exampleFormControlInput1"
          placeholder="name@example.com"
        />
      </div>
      <div className="mb-3 flex flex-col">
        <label htmlFor="exampleFormControlTextarea1" className="form-label">
          Example textarea
        </label>
        <textarea
          /*This text area needs to be added further for better UI */
          className="form-control max-w-48"
          id="exampleFormControlTextarea1"
        ></textarea>
      </div>
    </div>
  );
};

export default Contact;
