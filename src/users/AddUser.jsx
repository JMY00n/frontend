import React from "react";
import { Link } from "react-router-dom";

function AddUser() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Sign Up</h2>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <input
              type="text"
              id="name"
              className="form-control"
              placeholder="이름 입력"
              name="name"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="username" className="form-label">
              UserName
            </label>
            <input
              type="text"
              id="username"
              className="form-control"
              placeholder="이름 입력"
              name="username"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="text"
              id="email"
              className="form-control"
              placeholder="이름 입력"
              name="email"
            />
          </div>
          <div className="mb-3 text-center">
            <button type="submit" className="btn btn-outline-primary px-3 mx-2">
              Submit
            </button>
            <Link to="/" className="btn btn-outline-danger px-3 mx-2">
              Reset
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddUser;
