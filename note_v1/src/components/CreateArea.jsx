import React, {useState} from "react";

function CreateArea(props) {

//- Crée une constante qui garde une trace du titre et du contenu.
const [note, setNote] = useState ({
title: "",
content: ""

});

function handleChange(event){
const {name,value} = event.target;

setNote(prevNote =>{
  return {
    // spread operator
    ...prevNote,
    [name]: value
  }
})
}


//function envoie note lors du click + evite le reload a chaque click
function submitNote(event){
  props.onAdd(note);

setNote({
title: "",
content: ""
});

event.preventDefault();
}

  return (
    <div>
      <form>
        <input 
        name="title" 
        onChange={handleChange} 
        value={note.title} 
        placeholder="Title" />

        <textarea 
        name="content" onChange={handleChange} 
         value={note.content} 
         placeholder="Take a note..." 
         rows="3" />

{/* Trigger submit note */}
        <button onClick={submitNote}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;