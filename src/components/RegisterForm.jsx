import React from "react";

const RegisterForm = () => {
  return (
    <form>
      <h4 className="mb-3 text-center">Register</h4>

      <div className="mb-3">
        <label htmlFor="registerName" className="form-label">Full Name</label>
        <input type="text" className="form-control" id="registerName" placeholder="Enter full name" />
      </div>

      <div className="mb-3">
        <label htmlFor="registerEmail" className="form-label">Email address</label>
        <input type="email" className="form-control" id="registerEmail" placeholder="Enter email" />
      </div>

      <div className="mb-3">
        <label htmlFor="registerPassword" className="form-label">Password</label>
        <input type="password" className="form-control" id="registerPassword" placeholder="Password" />
      </div>

      <div className="mb-3">
        <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
        <input type="password" className="form-control" id="confirmPassword" placeholder="Confirm password" />
      </div>

      <button type="submit" className="btn btn-dark w-100">Register</button>
    </form>
  );
};

export default RegisterForm;
