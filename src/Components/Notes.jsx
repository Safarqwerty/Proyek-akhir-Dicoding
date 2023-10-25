// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react'
import CreateNote from './CreateNote'
import './notes.css'
import {v4 as uuid} from 'uuid'
import Note from './Note'


const Notes = () => {
    // eslint-disable-next-line no-unused-vars
    const [inputText, setInputText] = useState("")
    // eslint-disable-next-line no-unused-vars
    const [notes, setNotes] = useState([])
    const [editToggle, setEditToggle] = useState(null)

    const editHandler = (id,text) => {
        setEditToggle(id)
        setInputText(text)
    }
    const saveHandler = () => {
        // Cek apakah inputText kosong
        if (inputText.trim() === "") {
          return; // Jika inputText kosong, keluar dari fungsi tanpa melakukan penyimpanan
        }

        if (editToggle) {
          setNotes((prevNotes) =>
            prevNotes.map((note) =>
              note.id === editToggle ? { ...note, text: inputText } : note
            )
          );
        } else {
          setNotes((prevNotes) => [
            ...prevNotes,
            {
              id: uuid(),
              text: inputText,
            },
          ]);
        }
        setInputText("");
        setEditToggle(null);
      };
      

    const deleteHandler = (id) => {
        const newNotes = notes.filter(n => n.id !== id)
        setNotes(newNotes)
    }

    useEffect(() => {
        const data = JSON.parse(localStorage.getItem("Notes"))
        if(data) {
            setNotes(data)
        }
    }, [])
    useEffect(() => {
        window.localStorage.setItem("Notes", JSON.stringify(notes))
    }, [notes])
    return (
        <div className='notes'>
        <CreateNote 
            inputText={inputText}
            setInputText={setInputText}
            saveHandler={saveHandler}
        />
        {
            notes.map((note) => (
                editToggle === note.id ?
                <CreateNote 
                    key={note.id}
                    inputText={inputText}
                    setInputText={setInputText}
                    saveHandler={saveHandler}
                />
                :
                <Note
                    key={note.id}
                    id={note.id}
                    text={note.text}
                    editHandler={editHandler}
                    deleteHandler={deleteHandler}
                />
            ))
        }
    </div>    
    )
}

export default Notes