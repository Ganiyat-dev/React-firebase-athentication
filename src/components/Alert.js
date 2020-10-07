import React from "react";

const Alert = () => {
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
        <span>Good Morning! Start your day with some alerts.</span>
      </div>
    </div>
  );
};

export default Alert;
