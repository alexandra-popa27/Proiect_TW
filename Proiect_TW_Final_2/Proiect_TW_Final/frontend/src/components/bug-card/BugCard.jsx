import React, {useState} from "react";


const BugCard = ({bug, onEdit, onDelete, onAssign}) => {
    const {id_bug, id_utilizator, id_proiect, severitate, prioritate, descriere, status} = bug;

    return (
        <div className="bug-card">
            
                <>
                    <div className="card-container">
                    <p>Id Bug: {id_bug} | Id Utilizator: {`${id_utilizator}`} | Id Proiect: {`${id_proiect}`} | Id Severitate: {severitate} | Id Prioritate: {prioritate} | Descriere: {descriere} | Status:{status}</p>
                    </div>
                    <button className="bug-card-del-btn" onClick={() => onDelete(bug)}>Delete</button>
                    <button className="bug-card-del-btn" onClick={() => onAssign(bug)}>Assign</button>

                </>
            
        </div>
    );
};

export {BugCard};