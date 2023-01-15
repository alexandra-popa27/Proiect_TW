import React, {useState} from "react";


const BugCard = ({bug, onEdit, onDelete, onAssign}) => {
    const {id_bug, id_utilizator, id_proiect, severitate, prioritate, descriere, status} = bug;

    return (
        <div className="bug-card">
            
                <>
                    <div className="title-container">
                        <h1>{id_bug}</h1>
                    </div>
                    <h3>id Utilizator:</h3>
                    <p>{`${id_utilizator}`}</p>
                    <h3>id Proiect:</h3>
                    <p>{`${id_proiect}`}</p>
                    <h3>Severitate:</h3>
                    <p>{severitate}</p>
                    <h3>Prioritate:</h3>
                    <p>{prioritate}</p><h3>Descriere:</h3>
                    <p>{descriere}</p><h3>Status:</h3>
                    <p>{status}</p>
                    <button className="bug-card-del-btn" onClick={() => onDelete(bug)}>Delete</button>
                    <button className="bug-card-del-btn" onClick={() => onAssign(bug)}>Assign</button>

                </>
            
        </div>
    );
};

export {BugCard};