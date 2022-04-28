import React, {useState} from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Note from "./components/Note";
import CreateArea from "./components/CreateArea";

function App() {

  //Ajouter une nouvelle note à un tableau.
  const [notes, setNotes] = useState ([]);


function addNote(newNote) {
//console.log(note);
setNotes(prevNotes =>{
 return [...prevNotes,newNote];
})
}

function deleteNote(id){
//console.log("Delete was trigger");
setNotes(prevNotes =>{
  //filter function 3 arguments
  return prevNotes.filter((noteItem, index) =>{
    //index match id was deleted
return index !== id;
  });
});

}



  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />
{notes.map((noteItem, index) => {
  return (
  <Note
  key={index}
  id={index}
  title={noteItem.title}
  content={noteItem.content}
  onDelete={deleteNote}
  
  />
  );
})}
      
      <Footer />
    </div>
  );
}

export default App;

// Note instruction step by step

//1. Implémentez la fonctionnalité d'ajout de note.
//- Crée une constante qui garde une trace du titre et du contenu.
//- Renvoyez la nouvelle note à l'application.
//- Ajouter une nouvelle note à un tableau.
//- Prendre un tableau et restituer des composants Note séparés pour chaque élément.

//2. Implémentez la fonctionnalité de suppression de note.
//- Rappel du composant Note pour déclencher une fonction de suppression.
//- Utilisez la fonction de filtre pour filtrer l'élément qui doit être supprimé.
//- Transmettez un identifiant au composant Note, retransmettez-le à l'application lors de la suppression.