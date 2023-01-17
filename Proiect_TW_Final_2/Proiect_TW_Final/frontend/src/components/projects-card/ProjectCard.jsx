import React, {useState} from "react";


const ProjectCard = ({proiect, onEdit, onDelete, onAssign}) => {
    const {id_proiect,id_echipa,nume,link_repo } = proiect;

    return (
        <div className="project-card">
            
                <>
                    <div className="card-container">
                    <p>Id Proiect: {id_proiect} | Id echipa: {`${id_echipa}`} | Nume: {nume} | Link repository: {link_repo} </p>
                    </div>
                    <button className="project-card-del-btn" onClick={() => onDelete(proiect)}>Delete</button>

                </>
            
        </div>
    );
};




export {ProjectCard};