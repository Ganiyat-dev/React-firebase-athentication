/* eslint-disable no-undef */
import React from "react";

const Alert = () => {
  const isEmpty = (string) => {
    if (string.trim() === "") return true;
    else return false;
  };

  exports.validateLoginData = (data) => {
    let errors = {};
    if (isEmpty(data.email)) errors.email = "Must not be empty";
    if (isEmpty(data.password)) errors.password = "Must not be  empty";
    return {
      errors,
      valid: Object.keys(errors).length === 0 ? true : false,
    };
  };

  const isEmail = (email) => {
    // eslint-disable-next-line no-useless-escape
    const emailRegEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (email.match(emailRegEx)) return true;
    else return false;
  };

  exports.validateSignUpData = (data) => {
    let errors = {};

    if (isEmpty(data.email)) {
      errors.email = "Must not be empty";
    } else if (!isEmail(data.email)) {
      errors.email = "Must be valid email address";
    }

    if (isEmpty(data.FirstName)) errors.FirstName = "Must not be empty";
    if (isEmpty(data.LastName)) errors.LastName = "Must not be empty";

    if (isEmpty(data.password)) errors.password = "Must not be empty";
    if (data.password !== data.confirmPassword)
      errors.confirmPassword = "Passowrds must be the same";

    return {
      errors,
      valid: Object.keys(errors).length === 0 ? true : false,
    };
  };

  return (
    <div className="alert alert-danger alert-dismissible mb-2" role="alert">
      <button
        type="button"
        className="close"
        data-dismiss="alert"
        aria-label="Close"
      >
        <span aria-hidden="true">&times;</span>
      </button>
      <div className="d-flex align-items-center">
        <i className="bx bx-error"></i>
        <span>You must Sign up to proceed</span>
      </div>
    </div>
  );
};

export default Alert;
