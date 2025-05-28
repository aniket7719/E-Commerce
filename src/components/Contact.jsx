import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Contact = () => {
  return (
    <section className="py-5" style={{ backgroundColor: "var(--hero-white)" }} id="contact">
      <div className="container">
        <h2
          className="text-center fw-bold mb-3"
          style={{ color: "var(--hero-gray)" }}
        >
          Contact Us
        </h2>
        <p
          className="text-center mb-5"
          style={{ color: "var(--hero-gray)", maxWidth: "600px", margin: "0 auto" }}
        >
          Have questions or feedback? We’d love to hear from you. Our team is always ready to assist.
        </p>

        <div className="row g-4">
          {/* Contact Form */}
          <div className="col-md-6">
            <div
              className="card border-0 p-4 h-100"
              style={{
                boxShadow: "0 4px 10px var(--hero-lavender)",
                borderRadius: "12px",
              }}
            >
              <h5 className="mb-4" style={{ color: "var(--hero-lavender)" }}>
                Send a Message
              </h5>
              <form>
                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Your Name"
                    required
                    style={{
                      borderColor: "var(--hero-gray)",
                      borderRadius: "8px",
                    }}
                    onFocus={(e) =>
                      (e.target.style.borderColor = "var(--hero-pink)")
                    }
                    onBlur={(e) =>
                      (e.target.style.borderColor = "var(--hero-gray)")
                    }
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Your Email"
                    required
                    style={{
                      borderColor: "var(--hero-gray)",
                      borderRadius: "8px",
                    }}
                    onFocus={(e) =>
                      (e.target.style.borderColor = "var(--hero-pink)")
                    }
                    onBlur={(e) =>
                      (e.target.style.borderColor = "var(--hero-gray)")
                    }
                  />
                </div>
                <div className="mb-3">
                  <textarea
                    className="form-control"
                    rows="4"
                    placeholder="Your Message"
                    required
                    style={{
                      borderColor: "var(--hero-gray)",
                      borderRadius: "8px",
                    }}
                    onFocus={(e) =>
                      (e.target.style.borderColor = "var(--hero-pink)")
                    }
                    onBlur={(e) =>
                      (e.target.style.borderColor = "var(--hero-gray)")
                    }
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="btn w-100 fw-semibold"
                  style={{
                    backgroundColor: "var(--hero-pink)",
                    border: "none",
                    color: "var(--hero-white)",
                    borderRadius: "8px",
                    transition: "background-color 0.3s ease",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.backgroundColor = "var(--hero-lavender)")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.backgroundColor = "var(--hero-pink)")
                  }
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>

          {/* Map */}
          <div className="col-md-6">
            <div
              className="card border-0 h-100"
              style={{
                boxShadow: "0 4px 10px var(--hero-lavender)",
                borderRadius: "12px",
              }}
            >
              <iframe
                className="rounded"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3773.0192152215776!2d74.576782!3d18.150663!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c4f9b8e0b4b7%3A0x2e2c5d88a3b5699c!2sBaramati%2C%20Maharashtra%2C%20India!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus"
                width="100%"
                height="100%"
                allowFullScreen=""
                loading="lazy"
                style={{ minHeight: "300px", border: "none", borderRadius: "12px" }}
                title="Google Map"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
