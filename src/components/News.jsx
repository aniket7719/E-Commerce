import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const newsArticles = [
  {
    title: "5 Essentials for the Modern Man",
    date: "18 May 2025",
    image: "/assets/news1.jpg",
  },
  {
    title: "How to Style Layered Outfits",
    date: "12 May 2025",
    image: "/assets/news2.jpg",
  },
  {
    title: "Mastering Minimalist Fashion",
    date: "05 May 2025",
    image: "/assets/news3.jpg",
  },
];

const News = () => {
  return (
    <section className="py-5" style={{ backgroundColor: "var(--hero-white)" }}>
      <div className="container">
        <h2 className="text-center fw-bold mb-5" style={{ color: "var(--hero-gray)" }}>
          Fashion New Trends
        </h2>
        <div className="row g-4">
          {newsArticles.map((item, i) => (
            <div key={i} className="col-sm-6 col-lg-4 d-flex">
              <div className="card news-card shadow-sm border-0 w-100">
                <div className="news-image-wrapper">
                  <img src={item.image} className="card-img-top" alt={item.title} />
                </div>
                <div className="card-body d-flex flex-column">
                  <p className="small mb-2" style={{ color: "var(--hero-gray)" }}>
                    {item.date}
                  </p>
                  <h5 className="card-title mb-3" style={{ color: "var(--hero-lavender)" }}>
                    {item.title}
                  </h5>
                  <a
                    href="#"
                    className="btn mt-auto w-100"
                    style={{
                      borderColor: "var(--hero-pink)",
                      color: "var(--hero-pink)",
                      backgroundColor: "transparent",
                      transition: "all 0.3s ease",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = "var(--hero-pink)";
                      e.currentTarget.style.color = "var(--hero-white)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = "transparent";
                      e.currentTarget.style.color = "var(--hero-pink)";
                    }}
                  >
                    Read More
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .news-card {
          border-radius: 12px;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .news-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 10px 20px var(--hero-lavender);
        }

        .news-image-wrapper {
          height: 200px;
          overflow: hidden;
          border-top-left-radius: 12px;
          border-top-right-radius: 12px;
        }

        .news-image-wrapper img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .card-title {
          font-size: 1.05rem;
          line-height: 1.4;
        }
      `}</style>
    </section>
  );
};

export default News;
