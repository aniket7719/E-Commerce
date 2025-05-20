import React from "react";

const LoginForm = () => {
  return (
    <form>
      <h4 className="mb-3 text-center">Login</h4>

      <div className="mb-3">
        <label htmlFor="loginEmail" className="form-label">Email address</label>
        <input type="email" className="form-control" id="loginEmail" placeholder="Enter email" />
      </div>

      <div className="mb-3">
        <label htmlFor="loginPassword" className="form-label">Password</label>
        <input type="password" className="form-control" id="loginPassword" placeholder="Password" />
      </div>

      <button type="submit" className="btn btn-dark w-100">Login</button>
    </form>
  );
};

export default LoginForm;
