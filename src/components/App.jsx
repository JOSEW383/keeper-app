import React, { useState } from "react";

import notes from "../notes";

import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";


function App(){

    const [list, setList] = useState(notes);
    
    function addNote(note) {
        setList(prevlist => {
            note.key = prevlist[prevlist.length-1].key+1;
            return(
                [...prevlist,
                note]
            )
        })
    }

    function deleteNote(noteIndex) {
        setList(prevlist => {
            return(
                prevlist.filter((value, index) =>{
                    return noteIndex !== index;
                  }
                )
            )
        })
    }

    return <div>
        <Header/>
        <div class="content-container">
            <CreateArea onClick={addNote}/>
            {list.map((note, index) =>{
                return(
                    <Note key={index} note={note} index={index} onDelete={deleteNote}/>
                );
            })}
        </div>
        <Footer/>
    </div>;
}


export default App;