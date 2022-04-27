import React from "react";
import './App.css';
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Note from "./components/Note.jsx";
import notes from "./components/notes.js";
import CreateArea from "./components/CreateArea.jsx";


function App() {
  return (
    <div>
      <Header/>
      <CreateArea />
      <Note key={1} title="Note title" content="Note content" />
      <Footer/>
    </div>
  );
}

export default App;
