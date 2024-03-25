import React, { Fragment, useState } from 'react';
import './Note.css'

const Note = (props) => {

    const [text, setText] = useState({title: "", content: ""});

    const getText = (e) => {
        if (e.target.type == "text") {
            setText({title: e.target.value, content: text.content})
        } else {
            setText({title: text.title, content: e.target.value})
        }
    }

    const addNote = () => {
        if (text.title !== "" && text.content !== "") {
            const choice = window.confirm("Do you want to add this note?");
            if (choice) {
                props.getData(text);
                setText({title: "", content: ""});
            }
        } else if (text.title === "" && text.content === "") {
            alert("Please enter title and note");
        } else if (text.title === "" && text.content !== "") {
            alert("Please enter title");
        } else {
            alert("Please enter note");
        }
    }

    return (
        <Fragment>
            <div id='note-container'>
                <div id="note">
                    <input id='title-input' type="text" placeholder='Write Title Here' value={text.title} onChange={getText} />
                    <textarea id='content-input' placeholder='Write Note Here' value={text.content} onChange={getText}></textarea>
                    <div id='circle' title='Add Note' onClick={addNote}><span><i className="fa-solid fa-plus"></i></span></div>
                </div>
            </div>
        </Fragment>
    );
}

export default Note;
