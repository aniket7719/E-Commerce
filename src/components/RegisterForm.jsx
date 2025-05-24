import React, { useState } from "react";
import axios from "axios";

const RegisterForm = () => {
  const [username,nameUpdate] = useState('');
  const [useremail,emailUpdate] = useState('');
  const [userpassword,passwordUpdate] = useState('');

  const handleSubmit = function(e){
    e.preventDefault();
    let formdata = new FormData();
    formdata.append("name",username);
    formdata.append("email",useremail);
    formdata.append("password",userpassword);

    axios({
      method:"POST",
      url: "http://localhost:8080/E-Commerce/register",
      data: formdata,
      headers:{
        "Content-Type":"multipart/form-data"
      }
    })
    .then(resp => alert("Data Submited Successfully"))
    .catch(error => alert("Failed To Insert Data"));

    nameUpdate("");
    emailUpdate("");
    passwordUpdate("");
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
      <h4 className="mb-3 text-center">Register</h4>

      <div className="mb-3">
        <label htmlFor="registerName" className="form-label">Full Name</label>
        <input type="text" className="form-control" onChange={(e)=>nameUpdate(e.target.value)} value={username} id="registerName" placeholder="Enter full name" />
      </div>

      <div className="mb-3">
        <label htmlFor="registerEmail" className="form-label">Email address</label>
        <input type="email" className="form-control" onChange={(e)=>emailUpdate(e.target.value)} value={useremail} id="registerEmail" placeholder="Enter email" />
      </div>

      <div className="mb-3">
        <label htmlFor="registerPassword" className="form-label">Password</label>
        <input type="password" className="form-control" onChange={(e)=>passwordUpdate(e.target.value)} value={userpassword} id="registerPassword" placeholder="Password" />
      </div>

      <button type="submit" className="btn btn-dark w-100">Register</button>
    </form>
    </>
  );
};

export default RegisterForm;
