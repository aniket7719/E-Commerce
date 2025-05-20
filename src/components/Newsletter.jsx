import React from "react";

const Newsletter = () => {
  return (
    <section style={styles.container}>
      <h2 style={styles.heading}>Subscribe to Our Newsletter</h2>
      <p style={styles.paragraph}>
        Be the first to know about new arrivals, lookbooks, sales & promos!
      </p>
      <div style={styles.form}>
        <input
          type="email"
          placeholder="Your Email"
          style={styles.input}
          onFocus={(e) => (e.target.style.borderColor = "var(--hero-pink)")}
          onBlur={(e) => (e.target.style.borderColor = "#ccc")}
        />
        <button
          style={styles.button}
          onMouseEnter={(e) =>
            (e.currentTarget.style.backgroundColor = "var(--hero-lavender)")
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.backgroundColor = "var(--hero-teal)")
          }
        >
          Subscribe
        </button>
      </div>
      <style>{`
        :root {
          --hero-pink: #d983a6;
          --hero-lavender: #b47db8;
          --hero-teal: #5fd2c6;
          --hero-gray: #6c7a89;
          --hero-white: #ffffff;
        }
      `}</style>
    </section>
  );
};

const styles = {
  container: {
    background: "var(--hero-gray)", // muted gray background for subtle look
    color: "var(--hero-white)", // white text
    textAlign: "center",
    padding: "3rem 1rem",
    borderRadius: "12px",
  },
  heading: {
    marginBottom: "0.5rem",
    fontWeight: "700",
  },
  paragraph: {
    marginBottom: "1rem",
    color: "var(--hero-white)",
    fontWeight: "400",
  },
  form: {
    marginTop: "1rem",
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    gap: "0.5rem",
  },
  input: {
    padding: "0.5rem 1rem",
    width: "250px",
    borderRadius: "5px",
    border: "1.5px solid #ccc",
    fontSize: "1rem",
    outline: "none",
  },
  button: {
    padding: "0.5rem 1.5rem",
    backgroundColor: "var(--hero-teal)",
    color: "var(--hero-white)",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontWeight: "600",
    transition: "background-color 0.3s ease",
  },
};

export default Newsletter;
