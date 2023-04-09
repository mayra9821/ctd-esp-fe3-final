import React, { useContext } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import { ContextProvider } from "./Components/utils/global.context";
import Container from "react-bootstrap/Container";

import Home from "./Routes/Home";
import Contact from "./Routes/Contact";
import Favs from "./Routes/Favs";
import Details from "./Routes/Detail";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <ContextProvider>
      <Router>
        <div className="app">
          <Navbar />
          <Container fluid className="m-0 p-0" style={{ height: "100%" }}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/favs" element={<Favs />} />
              <Route path="/details/:id" element={<Details />} />
            </Routes>
          </Container>
          <Footer />
        </div>
      </Router>
    </ContextProvider>
  );
}

export default App;
