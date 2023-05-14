import "./App.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Nav from "./components/Nav";

import Home from "./pages/Home";
import Character from "./pages/Character";

function App() {
  return (
    <Router>
      <Header />
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/character/:characterId" element={<Character />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
