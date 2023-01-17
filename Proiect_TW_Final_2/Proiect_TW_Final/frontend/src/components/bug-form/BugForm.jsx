import React, {useState} from "react";

import './BugForm.css';

// used for adding a recipe
const BugForm = (props) => {
    const [id_utilizator, setIdUtilizator] = useState('');
    const [id_proiect, setIdProiect] = useState('');
    const [severitate, setSeveritate] = useState('');
    const [prioritate, setPrioritate] = useState('');
    const [descriere, setDescriere] = useState('');
    const [status, setStatus] = useState('');


    const {onAdd} = props;

    const options = [
        {
            label: 'grav',
            value: 'grav'
        }, 
        {
            label: 'mediu',
            value: 'mediu'
        },
        {
            label: 'usor',
            value: 'usor'
        }
    ];

    const addBug = () => {
        // onAdd is an async function -> we can use then
        onAdd({
            id_utilizator, 
            id_proiect, 
            severitate,
            prioritate,
            descriere,
            status
        }).then(() =>  {
            // reset form fields
            setIdUtilizator('');
            setIdProiect('');
            setSeveritate('');
            setPrioritate('');
            setDescriere('');
            setStatus('');

        });
    }


    return (
        <div className="bug-form">
            <h2>Add a new bug</h2>
            <div className="bug-form-fields">
                <input type="text" placeholder="idUtilizator" onChange={(event) => setIdUtilizator(event.target.value)} value={id_utilizator}/>
                <input type="text" placeholder="idProiect" onChange={(event) => setIdProiect(event.target.value)} value={id_proiect} />
                <select onChange={(event )=> setSeveritate(event.target.value)} value={severitate}>
                    {options.map((severitateOption, index) => (
                        <option key={index} value={severitateOption.value} label={severitateOption.label} />
                    ))}
                </select>
                <input type="text" placeholder="prioritate" onChange={(event) => setPrioritate(event.target.value)} value={prioritate} />
                <input type="text" placeholder="descriere" onChange={(event) => setDescriere(event.target.value)} value={descriere} />
                <input type="text" placeholder="status" onChange={(event) => setStatus(event.target.value)} value={status} />

                <button className="add-bug-btn" onClick={addBug}>Add Bug</button>
            </div>
        </div>
    )
};

export {BugForm};