import React, { Fragment, useState } from 'react';
import Navbar from './Navbar';
import './App.css'
import Note from './Note';
import Card from './Card';

const App = () => {

    const [allData, setAllData] = useState([]);

    const addNote = (text) => {
        setAllData([...allData, text]);
    }

    const deleteNote = (event) => {
        const choice = window.confirm("Do you want to delete this note?");
        if (choice) {
            setAllData(allData.filter((item, index) => index != event.target.id));
        } 
    }

    return (
        <Fragment>
            <Navbar />
            <Note getData={addNote} />
            <div className='cards'>
                {
                    allData.map((item, index) => {
                        return <Card key={index} id={index} title={item.title} content={item.content} delete={deleteNote} />
                    })
                }
            </div>
        </Fragment> 
    );
}

export default App;