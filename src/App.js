import './App.css';
import Navbar from "./component/Navbar/Navbar";
import Home from "./component/Home/Home";
import Services from "./component/Services/Services";
import Footer from "./component/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Services />
      <Footer />
    </div>
  );
}

export default App;
