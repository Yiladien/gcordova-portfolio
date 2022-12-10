import "bulma/css/bulma.min.css";
import "./index.css";
import About from "./components/About";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import Portfolio from "./components/Portfolio";
import Resume from "./components/Resume";

function App() {
  return (
    <div>
      <Nav />
      <Resume />
      <Footer />
    </div>
  );
}

export default App;
