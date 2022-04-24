import Header from "./components/header";
import Homepage from "./components/homepage";
import About from "./components/about";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/footer";
import Explore from "./components/explorepage";
import Tattoos from "./components/tattoos";
import Art from "./components/art";
import Craft from "./components/craft";
import Workshop from "./components/workshop";
import Training from "./components/training";
import Books from "./components/books";
import Contact from "./components/contact";
import Community from "./components/community";
import Mindfulness from "./components/mindfulness";
import Categories from "./components/categories";
import ScrollToTop from "./components/ScrollToTop";
import { useState } from "react";
function App() {
  const [toggleDark, settoggleDark] = useState(false);
  const handleModeChange = () => {
    settoggleDark(!toggleDark);

    //toggleDark == false  or true
    //first condition passes !true => false
    //second condition passes !false => true
    // console.log(toggleDark,'toggle')
  };
  return (
    <div className={toggleDark ? "dark " : ""}>
      <Router>
        <ScrollToTop />
        <Header toggleDark={toggleDark} handleModeChange={handleModeChange} />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/Dimensionless" element={<Homepage />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/tattoos" element={<Tattoos />} />
          <Route path="/art" element={<Art />} />
          <Route path="/craft" element={<Craft />} />
          <Route path="/workshop" element={<Workshop />} />
          <Route path="/training" element={<Training />} />
          <Route path="/books" element={<Books />} />
          <Route path="/contact-us" element={<Contact />} />
          <Route path="/community" element={<Community />} />
          <Route path="/mindfulness" element={<Mindfulness />} />
          <Route path="/categories" element={<Categories />} />
        </Routes>
        <Footer toggleDark={toggleDark} handleModeChange={handleModeChange} />
      </Router>
    </div>
  );
}

export default App;

//Page list/
//https://dimensionless.vercel.app/
//https://dimensionless.vercel.app/about-us
//https://dimensionless.vercel.app/explore
//https://dimensionless.vercel.app/tattoos
//https://dimensionless.vercel.app/art
//https://dimensionless.vercel.app/craft
///https://dimensionless.vercel.app/workshop
//https://dimensionless.vercel.app/training
//https://dimensionless.vercel.app/books
//https://dimensionless.vercel.app/contact-us
//https://dimensionless.vercel.app/community
//https://dimensionless.vercel.app/mindfulness
//https://dimensionless.vercel.app/categories
