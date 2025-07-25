

import { useState } from "react";
import Modal from "react-modal";
import "./Works.css";
import "./Section1.css";

const cardData = [
  {
        id: 1,
        title: "HTML CheatSheet",
        icon: "html.png",
        clicon: "#DE3163",
        bg: "#fff4f4",
        subtitle: "Website",
        client: "BCS",
        langauge: "HTML, CSS, Javascript, MERN, MongoDB",
        imageheight: "160px",
        preview: "https://bardeinfra.com",
        file: "htmlcheatsheet.pdf",
        content:
          "Mastering HTML is essential for web development. This HTML cheat sheet provides a quick reference to the most commonly used HTML tags and their basic structures. Whether you're a beginner or need a refresher, this guide covers essential elements such as headings, paragraphs, links, images, lists, forms, tables, and media. Additionally, you'll find examples of semantic elements that improve the structure and accessibility of your web pages. Keep this cheat sheet handy as you build and enhance your web projects!",
      },
      {
        id: 2,
        title: "CSS Cheatsheet",
        icon: "css.png",
        bg: "#eef5fa",
        imageheight: "160px",
        subtitle: "Website",
        file: "csscheatsheet.pdf",
        content:
          "CSS (Cascading Style Sheets) is a cornerstone technology for designing and styling web pages. This CSS cheat sheet offers a handy reference to the most commonly used CSS properties and selectors, helping you to create visually appealing and responsive designs. Whether you're adjusting colors, tweaking layouts, or adding animations, this guide covers essential topics such as text formatting, box model, positioning, flexbox, grid, and responsive design techniques. Keep this cheat sheet accessible as you style and refine your web projects, ensuring they look great on any device!",
      },
      {
        id: 3,
        title: "JS Cheatsheet",
        icon: "js.png",
        bg: "#eef5fa",
        imageheight: "160px",
        subtitle: "Website",
        file: "jscheatsheet.pdf",
        content:
          " JavaScript is a powerful programming language that brings interactivity and dynamic functionality to web pages. This JavaScript cheat sheet provides a quick reference to essential syntax and features, making it easier for you to write and debug your scripts. Covering core concepts such as variables, data types, functions, loops, conditionals, and events, this guide also delves into modern JavaScript features like ES6 syntax, promises, and async/await. Whether you're building simple scripts or complex web applications, keep this cheat sheet handy to streamline your development process and enhance your coding efficiency.",
      },
      {
        id: 4,
        title: "REACT Cheatsheet",
        icon: "react.png",
        bg: "#fff4f4",
        imageheight: "160px",
        subtitle: "Website",
        file: "reactcheatsheet.pdf",
        content:
          "React is a popular JavaScript library for building user interfaces, particularly single-page applications where data changes frequently. This React cheat sheet provides a quick reference to the essential concepts and features of React, helping you to efficiently build and manage your components. Covering the basics such as JSX, props, and state, it also includes advanced topics like hooks, context API, and lifecycle methods. Whether you're a beginner or an experienced developer, this guide will aid you in creating dynamic and responsive web applications with React. Keep this cheat sheet nearby to streamline your development process and make the most out of React's powerful capabilities.",
      },
     
];

Modal.setAppElement("#root");

const Works = ({ theme }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const cardsPerPage = 6;

  const openModal = (card) => {
    setSelectedCard(card);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setSelectedCard(null);
  };

  // Calculate the index range for the current page
  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = cardData.slice(indexOfFirstCard, indexOfLastCard);

  // Calculate the total number of pages
  const totalPages = Math.ceil(cardData.length / cardsPerPage);

  const handlePrevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  return (
    <section className="col-12 aboutpage">
      <header>
        <div className="mb-15">
          <h1 className="pagetitle">Blogs</h1>
        </div>
      </header>

      <section className="section-wrapper pl-60 pr-60 whatido">
        <div className="bostami-what-do-wrap mb-30">
          <div className="container blogs">
            {currentCards.map((card) => (
              <article
                className="col-xxl-6 col-xl-6 col-lg-6 blogs1"
                key={card.id}
                onClick={() => openModal(card)}
                style={{ float: card.float }}
              >
                <div
                  className="bostami-what-do-item abtbox"
                  style={{ backgroundColor: card.bg, borderRadius: "25px" }}
                >
                  <div className="icon1" style={{ margin: "0px auto" }}>
                    <img
                      src={card.icon}
                      className="product-img"
                      alt={`${card.title} icon`}
                      style={{
                        objectFit: "fill",
                        color: card.clicon,
                        fontSize: "20px",
                        height: card.imageheight,
                        width: "100%",
                        borderRadius: "20px",
                      }}
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
        <button className="Button1" style={{fontSize:"15px",lineHeight:"21px",padding:"6px 18px"}} onClick={handlePrevPage} disabled={currentPage === 1}>
          {'<'}
        </button>
        <span  style={{ margin: "0 10px" ,fontSize:"17px", fontWeight:"500"}}>Page {currentPage} of {totalPages}</span>
        <button className="Button1" style={{fontSize:"15px",lineHeight:"21px",padding:"6px 18px", width:"93.46px"}} onClick={handleNextPage} disabled={currentPage === totalPages}>
          {'>'}
        </button>
      </div>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Card Modal"
        overlayClassName={
          theme === "light"
            ? "ReactModal__Overlay-light"
            : "ReactModal__Overlay-dark"
        }
        className={
          theme === "light" ? "modal-content-light" : "modal-content-dark"
        }
      >
        {selectedCard && (
          <div className="worksmodal">
            <div>
              <div style={{ display: "flex", justifyContent: "center" }}>
                <img
                  src={selectedCard.icon}
                  className="product-img"
                  alt={`${selectedCard.title} icon`}
                  style={{
                    fontSize: "20px",
                    borderRadius: "40px",
                    width: "60%",
                    objectFit: "cover",
                    paddingBottom: "10px",
                  }}
                />
              </div>
              <h2 style={{ textAlign: "center" }}>{selectedCard.title}</h2>
            </div>

            <p>{selectedCard.content}</p>

            <div
              className="worksbutton"
              style={{ justifyContent: "space-around" }}
            >
              <div>
                <a
                  href={selectedCard.file}
                  download={selectedCard.file}
                  style={{ textDecoration: "none" }}
                >
                  <button style={{ width: "100%" }} className="Button1">
                    Download file
                  </button>
                </a>
              </div>

              <div>
                <button
                  style={{ width: "100%" }}
                  className="Button1"
                  onClick={closeModal}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
      </Modal>

      <footer className="footer-copyright text-center pt-25 pb-25">
        <span>© 2024 All Rights Reserved by Aditya</span>
      </footer>
    </section>
  );
};

export default Works;
