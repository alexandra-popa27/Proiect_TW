import React, {useState, useEffect} from 'react';
import axios from "axios";

import {BugCard} from '../bug-card/BugCard';
import {BugForm} from '../bug-form/BugForm';

const SERVER_ADDR = "http://localhost:5002";

const BugList = () => {

    const [bugs, setBugs] = useState([]);

    const getBugs = async() => {
        const allBugs = await axios.get(`${SERVER_ADDR}/api/bugs`).then(res => res.data);
        setBugs(allBugs);
    };

    const addBug = async(bug) => {
        await axios.post(`${SERVER_ADDR}/api/bugs`, bug);
        getBugs();
    }

    const deleteBug = async(bug) => {
        await axios.delete(`${SERVER_ADDR}/api/bugs/${bug.id_bug}`);
        getBugs();
    }

    const assignBug = async(bug) => {
        await axios.put(`${SERVER_ADDR}/api/bugs/${bug.id_bug}`);
        getBugs();
    }

    // when component is mounted, fetch recipes from backend server
    useEffect(() => {
        axios.get(`${SERVER_ADDR}/api/bugs`).then(res => {
            console.log(res.data)
            setBugs(res.data);
        });
    }, [])

    return (
        <React.Fragment>
            <div id="id_div" className='bug-list'>
                {bugs.map((bug, index) => <BugCard key={index} bug={bug} onDelete={deleteBug} onAssign={assignBug}/>)}
            </div>
            <BugForm onAdd={addBug}/>
        </React.Fragment>
    )
};

export {BugList};