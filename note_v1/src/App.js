import React, { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Note from "./components/Note";
import CreateArea from "./components/CreateArea";

function App() {
  return (
    <div>
      <Header />
      <CreateArea />
      <Note key={1} title="Note title" content="Note content" />
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