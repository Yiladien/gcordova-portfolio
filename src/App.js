import "bulma/css/bulma.min.css";
import "./index.css";
import About from "./components/About";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import Portfolio from "./components/Portfolio";

function App() {
  return (
    <div>
      <Nav />
      <Portfolio />
      <Footer />
    </div>
  );
}

export default App;
