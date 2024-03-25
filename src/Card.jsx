import React, { Fragment, useState } from 'react';
import './Card.css'

const Card = (props) => {

    const [checkedChanges, setcheckedChanges] = useState({css: {}, title: "Mark as complete"});

    const checked = (event) => {
        if (event.target.checked) {
            setcheckedChanges({css: {backgroundColor: "lightgray", color: "gray"}, title: "Mark as incomplete"});
        } else {
            setcheckedChanges({css: {}, title: "Mark as complete"});
        }       
    }

    return (
        <Fragment>
            <div className="card" id='card' style={checkedChanges.css}>
                <h2 title={props.title}>{props.title}</h2>
                <p>{props.content}</p>
                <div className='buttons-container'>
                    <input type="checkbox" className='checkbox' title={checkedChanges.title} onChange={checked} />
                    <div id={props.id} className='delete' title='Delete Note' onClick={props.delete}><i id={props.id} className="fa-solid fa-trash"></i></div>
                </div>
            </div>
        </Fragment>
    );
}

export default Card;