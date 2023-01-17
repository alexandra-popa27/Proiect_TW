import React, {useState, useEffect} from 'react';
import axios from "axios";

import {ProjectCard} from '../projects-card/ProjectCard';
import {ProjectsForm} from '../projects-form/ProjectsForm';

const SERVER_ADDR = "http://localhost:5002";

const ProjectList = () => {

    const [proiecte, setProiecte] = useState([]);

    const getProiecte = async() => {
        const allProiecte = await axios.get(`${SERVER_ADDR}/api/proiecte`).then(res => res.data);
        setProiecte(allProiecte);
    };

    const addProiect = async(proiect) => {
        await axios.post(`${SERVER_ADDR}/api/proiecte`, proiect);
        getProiecte();
    }

    const deleteProiect = async(proiect) => {
        await axios.delete(`${SERVER_ADDR}/api/proiecte/${proiect.id_proiect}`);
        getProiecte();
    }

    // when component is mounted, fetch recipes from backend server
    useEffect(() => {
        axios.get(`${SERVER_ADDR}/api/proiecte`).then(res => {
            console.log(res.data)
            setProiecte(res.data);
        });
    }, [])

    return (
        <React.Fragment>
            <div id="id_div" className='project-list'>
                {proiecte.map((proiect, index) => <ProjectCard key={index} proiect={proiect} onDelete={deleteProiect}/>)}
            </div>
            <ProjectsForm onAdd={addProiect}/>
        </React.Fragment>
    )
};

export {ProjectList};





