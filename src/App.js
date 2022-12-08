import "./index.css";
import "bulma/css/bulma.min.css";
import About from "./components/About";
import Nav from "./components/Nav";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Nav />
      <About />
      <Footer />
    </div>
  );
}

export default App;
