import React from "react";
import './App.css';
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Note from "./components/Note.jsx";

function App() {
  return (
    <div>
      <Header/>
      <Note/>
      <Footer/>
    </div>
  );
}

export default App;
