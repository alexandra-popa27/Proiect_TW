import React, {useState} from 'react';
import axios from "axios";

import './SignInForm.css';
import { BugForm } from '../bug-form/BugForm';
import { BugList } from '../bug-list/BugList';

const SERVER_ADDR = "http://localhost:5002";


// used for adding a recipe
const SignInForm = (props) => {
    const [utilizator, setUtilizator] = useState([]);
    const [email, setEmail] = useState('');
    const [parola, setParola] = useState('');

    const {onSignIn} = props;

    const signIn = () => {
        // onAdd is an async function -> we can use then
        onSignIn({
            email, 
            parola
        }).then(() =>  {
            // reset form fields
            setEmail('');
            setParola('');

        });
    }

     const getUtilizatorByEMail = async() => {
        const utilizatorCurent = await axios.get(`${SERVER_ADDR}/api/utilizatori`, {
            params: {
                email: email
            }
        }).then(res=>res.data[0]);
        if(utilizatorCurent.parola === parola){
            console.log("ok");
             window.location="http://localhost:3000/bugs";
        }
        else console.log("incorect");
    };



    return (
        <div className="sing-in-form">
            <h2>Sign In</h2>
            <div className="sign-in-form-fields">
                <input type="text" placeholder="email" onChange={(event) => setEmail(event.target.value)} value={email}/>
                <input type="text" placeholder="parola" onChange={(event) => setParola(event.target.value)} value={parola} />
                <button className="sign-in-btn" onClick={getUtilizatorByEMail}>Sign In</button>
            </div>
        </div>
    )
};

export {SignInForm};
