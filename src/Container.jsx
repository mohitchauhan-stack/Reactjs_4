import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import About from "./Pages/About";
import ContactUs from "./Pages/ContactUs";
import Home from "./Pages/Home";
import Links from "./Pages/Links";
import NotFound from "./Pages/NotFound";
import Projects from "./Pages/Projects";
import Skills from "./Pages/Skills";
import Winks from "./Pages/Winks";

const Container = () => {
  return (
    <div className="max-w-2xl h-screen mx-auto relative">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />}>
          <Route path="links" element={<Links />} />
          <Route path="winks" element={<Winks />} />
        </Route>
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<ContactUs />} />

        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />
    </div>
  );
};

export default Container;
