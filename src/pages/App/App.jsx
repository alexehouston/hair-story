import { useState } from 'react';
import Nav from "../../components/Nav/Nav";
import Services from "../Services/Services"
import About from "../About/About"
import Contact from "../Contact/Contact"
import Book from "../../components/Book/Book"
import Home from "../../components/Home/Home"
import Footer from "../../components/Footer/Footer";
import 'animate.css';
import "./App.css";

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');

  return (
    <div className="App">
      <Nav currentPage={currentPage} setCurrentPage={setCurrentPage} />

      {currentPage === 'services' ? ( <Services /> )
      : currentPage === 'about' ? ( <About /> )
      : currentPage === 'contact' ? ( <Contact /> )
      : currentPage === 'book' ? ( <Book /> )
      : ( <Home /> )}

      <Footer />
    </div>
  );
}
