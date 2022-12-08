import "./index.css";
import "bulma/css/bulma.min.css";
import About from "./components/About";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Contact from "./components/Contact";

function App() {
  return (
    <div>
      <Nav />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
