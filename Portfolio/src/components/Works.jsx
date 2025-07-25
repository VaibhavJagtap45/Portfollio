import { useState } from "react";
import "./Works.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser as farUser } from "@fortawesome/free-regular-svg-icons";
import { faArrowUpRightFromSquare, faFileAlt, faCode } from "@fortawesome/free-solid-svg-icons";

const cardData = [
  {
    id: 1,
    title: "E_commerce",
    icon:"E_Commerce.png",
    clicon: "#DE3163",
    bg: "#6ec1fdff",
    project: "Website",
    client: "BCS",
    langauge: "HTML, CSS, Javascript, MERN, MongoDB",
    imageheight: "150px",
    preview: "https://cloths.kuchbhiorder.com/",
    content:
      "Utilized React.js to build and refine responsive web pages, ensuring seamless user experiences. Collaborated effectively within a team of 20 members, contributing to the success of various projects. Contributed to the development of the BARDEINFRA website using HTML, CSS, and JavaScript. The site is live and fully dynamic with backend connectivity and CMS functionality.",
  },
  {
    id: 2,
    title: "Portfolio",
    icon: "/Aditya_Mahale.png",
    clicon: "#DE3163",
    bg: "#fee762ff",
    project: "Personal Portfolio",
    client: "",
    langauge: "HTML, CSS, Javascript, MERN, MongoDB",
    imageheight: "150px",
    preview: "https://bestowalsystems.com/",
    content:
      "Utilized React.js to build and refine responsive web pages, ensuring seamless user experiences. Collaborated effectively within a team of 20 members, contributing to the success of various projects. Contributed to the development of the BARDEINFRA website using HTML, CSS, and JavaScript. The site is live and fully dynamic with backend connectivity and CMS functionality.",
  },

  {
    id: 3,
    title: "TC_APP",
    icon: "/TC_APP.png",
    clicon: "#DE3163",
    bg: "#aefe6cff",
    project: "Website",
    client: "BCS",
    langauge: "HTML, CSS, Javascript, MERN, MongoDB",
    imageheight: "150px",
    preview: "https://maikyakaru.com/",
    content:
      "Utilized React.js to build and refine responsive web pages, ensuring seamless user experiences. Collaborated effectively within a team of 20 members, contributing to the success of various projects. Contributed to the development of the BARDEINFRA website using HTML, CSS, and JavaScript. The site is live and fully dynamic with backend connectivity and CMS functionality.",
  },

  {
    id: 4,
    title: "Chalo_Khelene",
    icon: "/Chalo_Khelene.png",
    clicon: "#DE3163",
    bg: "#db7efaff",
    project: "Website",
    client: "BCS",
    langauge: "HTML, CSS, Javascript, MERN, MongoDB",
    imageheight: "150px",
    preview: "https://maikyakaru.com/",
    content:
      "Utilized React.js to build and refine responsive web pages, ensuring seamless user experiences. Collaborated effectively within a team of 20 members, contributing to the success of various projects. Contributed to the development of the BARDEINFRA website using HTML, CSS, and JavaScript. The site is live and fully dynamic with backend connectivity and CMS functionality.",
  },
  {
    id:5,
    title: "Chalo Khelene Landing Page",
    icon: "/Chalo_Khelane.png",
    clicon: "#DE3163",
    bg: "#6ef3ffff",
    project: "Website",
    client: "BCS",
    langauge: "HTML, CSS, Javascript, MERN, MongoDB",
    imageheight: "150px",
    preview: "https://chalokhelne.com/",
    content:
      "Utilized React.js to build and refine responsive web pages, ensuring seamless user experiences. Collaborated effectively within a team of 20 members, contributing to the success of various projects. Contributed to the development of the BARDEINFRA website using HTML, CSS, and JavaScript. The site is live and fully dynamic with backend connectivity and CMS functionality.",
  },
  {
    id: 6,
    title: "Kuch Bhi Order",
    icon: "Kuch_Bhi_Order.png",
    clicon: "#DE3163",
    bg: "#c24afeff",
    project: "Website",
    client: "BCS",
    langauge: "HTML, CSS, Javascript, MERN, MongoDB",
    imageheight: "150px",
    preview: "https://kuchbhiorder.com/",
    content:
      "Utilized React.js to build and refine responsive web pages, ensuring seamless user experiences. Collaborated effectively within a team of 20 members, contributing to the success of various projects. Contributed to the development of the BARDEINFRA website using HTML, CSS, and JavaScript. The site is live and fully dynamic with backend connectivity and CMS functionality.",
  },
];

const Works = ({ theme }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const cardsPerPage = 4;

  const totalPages = Math.ceil(cardData.length / cardsPerPage);

  const currentCards = cardData.slice((currentPage - 1) * cardsPerPage, currentPage * cardsPerPage);

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <main className="col-12 aboutpage">
      <header>
        <h2 className="pagetitle">Works</h2>
      </header>

      <section className="section-wrapper pl-60 pr-60 whatido">
        <div className="bostami-what-do-wrap mb-30" style={{ cursor: 'pointer' }}>
          <div className="container">
            {currentCards.map((card) => (
              <article
                className="col-xxl-6 col-xl-6 col-lg-6 blogs1"
                key={card.id}
                style={{ float: card.float }}
                onClick={() => window.open(card.preview, '_blank')}  // Open in a new tab
              >
                <div className="bostami-what-do-item abtbox" style={{ backgroundColor: card.bg, borderRadius: "25px" }}>
                  <div className="icon1" style={{ margin: "0px auto" }}>
                    <img
                      src={card.icon}
                      className="product-img"
                      style={{
                        objectFit: "fill",
                        color: card.clicon,
                        fontSize: "20px",
                        height: card.imageheight,
                        width: "100%",
                        borderRadius: "20px",
                      }}
                      alt={card.title}
                    />
                  </div>
                  <div className="text">
                    <h4 className="title" style={{ paddingTop: "10px" }}>
                      {card.title}
                    </h4>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <div className="pagination-controls" style={{ textAlign: "center", marginTop: "20px" }}>
        <button
          className="Button1"
          style={{ fontSize: "15px", lineHeight: "21px", padding: "6px 18px", cursor: 'pointer' }}
          onClick={handlePrevPage}
          disabled={currentPage === 1}
        >
          {'<'}
        </button>
        <span style={{ margin: "0 10px", fontSize: "17px", fontWeight: "500" }}>
          Page {currentPage} of {totalPages}
        </span>
        <button
          className="Button1"
          style={{ fontSize: "15px", lineHeight: "21px", padding: "6px 18px", width: "93.46px", cursor: 'pointer' }}
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
        >
          {'>'}
        </button>
      </div>

      <footer className="footer-copyright text-center pt-25 pb-25">
        <span className="text-fs">© 2024 All Rights Reserved by Vaibhav Jagtap</span>
      </footer>
    </main>
  );
};

export default Works;
