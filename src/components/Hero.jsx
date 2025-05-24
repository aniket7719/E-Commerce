import React, { useState } from "react";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";
import { LogIn, UserPlus } from "lucide-react";

const Hero = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <section
      className="text-white"
      style={{
        backgroundImage: `url("/assets/hero.jpg")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "90vh",
        position: "relative",
      }}
    >
      {/* Dark overlay */}
      <div
        className="position-absolute top-0 start-0 w-100 h-100"
        style={{ backgroundColor: "rgba(0,0,0,0.6)", zIndex: 1 }}
      ></div>

      {/* Content */}
      <div className="container h-100 position-relative" style={{ zIndex: 2 }}>
        <div className="row h-100 align-items-center">
          {/* Left: Hero content */}
          <div className="col-lg-6 mb-5 mb-lg-0 d-flex flex-column justify-content-between text-lg-start text-center h-100 py-5">
            {/* Top-left heading */}
            <div>
              <h1 className="display-2 fw-bold mb-3">
                Fall – Winter 2025 Collection
              </h1>
            </div>

            {/* Bottom-left paragraph and button */}
            <div>
              <p className="lead mb-4">
                Redefine your style. Step into fashion made for the modern man.
              </p>
              <button className="btn btn-danger btn-lg px-4 fw-bold">
                Explore Collection
              </button>
            </div>
          </div>

          {/* Right: Form card */}
          <div className="col-lg-5 offset-lg-1">
            <div
              className="p-4 p-md-5 rounded-4 shadow-lg text-white"
              style={{
                backgroundColor: "rgba(0, 0, 0, 0.6)",
                backdropFilter: "blur(8px)",
              }}
            >
              {/* Toggle buttons */}
              <div className="d-flex justify-content-center gap-3 mb-4">
                <button
                  className={`btn d-flex align-items-center gap-2 ${
                    isLogin ? "btn-light" : "btn-outline-light"
                  }`}
                  onClick={() => setIsLogin(true)}
                >
                  <LogIn size={18} /> Login
                </button>
                <button
                  className={`btn d-flex align-items-center gap-2 ${
                    !isLogin ? "btn-light" : "btn-outline-light"
                  }`}
                  onClick={() => setIsLogin(false)}
                >
                  <UserPlus size={18} /> Register
                </button>
              </div>

              {/* Conditional Form */}
              {isLogin ?   <RegisterForm /> : <LoginForm />}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
