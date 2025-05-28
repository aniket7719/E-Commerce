import React, { useState } from "react";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";
import { LogIn, UserPlus } from "lucide-react";
import "./Hero.css";

const Hero = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <>
      {/* HERO SECTION */}
      <section className="text-white hero-section">
        {/* Dark overlay */}
        <div
          className="position-absolute top-0 start-0 w-100 h-100"
          style={{ backgroundColor: "rgba(0,0,0,0.6)", zIndex: 1 }}
        ></div>

        {/* Content */}
        <div className="container h-100 position-relative" style={{ zIndex: 2 }}>
          <div className="row h-100 align-items-start text-center text-lg-start">
            {/* Left: Hero content */}
            <div className="col-lg-6 d-flex flex-column justify-content-between h-100 py-5">
              <div>
                <h1 className="display-4 fw-bold mb-3 hero-title">
                  Fall – Winter 2025 Collection
                </h1>
              </div>
              <div className="mt-auto">
                <button className="btn btn-danger btn-lg px-4 fw-bold">
                  Explore Collection
                </button>
              </div>
            </div>

            {/* Right: Desktop only Form centered */}
            <div
              className="col-lg-5 offset-lg-1 d-none d-lg-flex align-items-center justify-content-center"
              style={{ minHeight: "600px" }}
            >
              <div
                className="p-4 p-md-5 rounded-4 shadow-lg text-white"
                style={{
                  backgroundColor: "rgba(0, 0, 0, 0.6)",
                  backdropFilter: "blur(8px)",
                  width: "100%",
                  maxWidth: "400px",
                }}
              >
                <div className="d-flex justify-content-center gap-3 mb-4 flex-wrap">
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
                {isLogin ? <LoginForm /> : <RegisterForm />}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MOBILE ONLY FORM SECTION */}
      <section className="bg-dark text-white d-block d-lg-none py-5">
        <div className="container">
          <div className="p-4 rounded-4 shadow text-white" style={{ backgroundColor: "#222" }}>
            <div className="d-flex justify-content-center gap-3 mb-4 flex-wrap">
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
            {isLogin ? <LoginForm /> : <RegisterForm />}
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
