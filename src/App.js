import Home from "./pages/home/Home.jsx";
import About from "./pages/about/About";
import Portfolio from "./pages/portfolio/Portfolio.jsx";
import ContactMe from "./pages/contactme/ContactMe";
import Footer from "./pages/footer/Footer";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Home></Home>
      <About></About>
      <Portfolio></Portfolio>
      <ContactMe></ContactMe>
      <Footer></Footer>
    </div>
  );
}

export default App;
