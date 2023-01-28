import React from "react";
import DeleteIcon from '@mui/icons-material/Delete';

function Note(props) {

  function formDeleteEvent(event) {
    props.onDelete(props.index);
  }

  return (
    <div className="note">
      <h1>{props.note.title}</h1>
      <p>{props.note.content}</p>
      <button onClick={formDeleteEvent}>
        <DeleteIcon/>
      </button>
    </div>
  );
}

export default Note;
