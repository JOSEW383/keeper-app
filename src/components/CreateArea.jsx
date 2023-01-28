import React, { useState } from "react";

import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import Zoom from '@mui/material/Zoom';


function CreateArea(props) {

  const [note, setNote] = useState({
    key:0,
    title:"",
    content:""
  });
  const [createAreaVisible, setCreateAreaVisible] = useState(false);

  function handleClick() {
    props.onClick(note)
    setNote({
      key:0,
      title:"",
      content:""
    })
    setCreateAreaVisible(false);
  }

  function handleInput(event) {
    const {value, name} = event.target
    setNote(prevNote =>{
      return(
        {
          ...prevNote,
          [name]: value
        }
      )
    })
  }

  function formButtonEvent(event) {
    event.preventDefault();
  }

  function openNote() {
    setCreateAreaVisible(true);
  }

  return (
    <div>
      <form className="create-note" onSubmit={formButtonEvent}>
        <input 
          onFocus={openNote} 
          onChange={handleInput} 
          value={note.title} 
          name="title" 
          placeholder="Title" 
          type="text"
          required
          />
        {createAreaVisible && 
          <textarea 
            onChange={handleInput} 
            Value={note.content} 
            name="content" 
            placeholder="Take a note..." 
            rows="3"
          />}
        <Zoom in={createAreaVisible}>
          <Fab className="note-add-button" onClick={handleClick}>
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
