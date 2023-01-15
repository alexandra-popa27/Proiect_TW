import React, {useState} from "react";
import axios from "axios";



import './ProjectsForm.css';

const SERVER_ADDR = "http://localhost:5002";


// used for adding a recipe
const ProjectsForm = (props) => {
    const [id_echipa, setIdEchipa] = useState('');
    const [nume, setNume] = useState('');
    const [link_repo, setLinkRepo] = useState('');

    const {onAdd} = props;



    const addProiect = () => {
        // onAdd is an async function -> we can use then
        onAdd({
            id_echipa, 
            nume, 
            link_repo
        }).then(() =>  {
            // reset form fields
            setIdEchipa('');
            setNume('');
            setLinkRepo('');

        });
    }

   const Proiect=(id_echipa, nume, link_repo)=>{
         return {
        id_echipa:id_echipa,
        nume:nume,
        link_repo:link_repo
    }
   }

    const addProiectFct = async() => {
       const proiect=Proiect(id_echipa, nume, link_repo);
        await axios.post(`${SERVER_ADDR}/api/proiecte`, proiect);
    }

    return (
        <div className="project-form">
            <h2>Add a new project</h2>
            <div className="project-form-fields">
                <input type="text" placeholder="idEchipa" onChange={(event) => setIdEchipa(event.target.value)} value={id_echipa}/>
                <input type="text" placeholder="nume" onChange={(event) => setNume(event.target.value)} value={nume} />
                <input type="text" placeholder="linkRepository" onChange={(event) => setLinkRepo(event.target.value)} value={link_repo} />

                <button className="add-project-btn" onClick={addProiectFct}>Add Project</button>
            </div>
        </div>
    )
};

export {ProjectsForm};