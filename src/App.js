import { BrowserRouter as Router ,Routes, Route} from "react-router-dom";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Footer from "./Components/Footer";
import Contact from "./Components/Contact";
import Services from "./Components/Services";



import './style/App.scss';
import './style/Header.scss';
import './style/Home.scss';
import './style/footer.scss';
import './style/contact.scss';
import './style/mediaquery.scss';
function App() {
  return(
  <Router>
    <Header/>
    <Routes>
      <Route path="/" element= {<Home/>}/>
      <Route path="/contact" element= {<Contact/>}/>
      <Route path="/services" element={<Services />} />
    </Routes>
    <Footer/>
  </Router>
  );
}

export default App;
