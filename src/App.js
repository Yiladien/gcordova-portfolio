import React, { useState } from "react";
import "bulma/css/bulma.min.css";
import "./index.css";
import About from "./components/About";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import Portfolio from "./components/Portfolio";
import Resume from "./components/Resume";

function App() {
  const [currentPage, setCurrentPage] = useState("about");

  console.log(currentPage);

  return (
    <div>
      <Nav currentPage={currentPage} setCurrentPage={setCurrentPage}></Nav>
      <main>
        {currentPage === "about" && <About></About>}
        {currentPage === "portfolio" && <Portfolio></Portfolio>}
        {currentPage === "resume" && <Resume></Resume>}
        {currentPage === "contact" && <Contact></Contact>}
      </main>
      <Footer />
    </div>
  );
}

export default App;
