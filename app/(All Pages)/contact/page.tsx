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
          className="form-control"
          id="exampleFormControlTextarea1"
        ></textarea>
      </div>
    </div>
  );
};

export default Contact;
