import React, { useState } from 'react';
import MainInfo from './MainInfo';
import Skills from './Skills';

export const contextForm = React.createContext();

const Form = (props) => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [likes, setLikes] = useState([]);


    return (
        <form>
            <contextForm.Provider value={{ email, password, likes, setEmail, setPassword, setLikes }}>
                <MainInfo />
                <Skills />
            </contextForm.Provider>
            <div>
                <p>Email:{email}</p>
                <p>Contraseña:{password}</p>
                <p>Lenguajes:{likes} </p>
            </div>
        </form >
    );
}

export default Form;