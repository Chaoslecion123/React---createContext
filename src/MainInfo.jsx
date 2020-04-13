import React, { useState, useContext } from 'react';
import { contextForm } from './Form';

const MainInfo = (props) => {
    const ctx = useContext(contextForm)
    return (
        <div>
            <input value={ctx.email} onChange={(e) => ctx.setEmail(e.target.value)} type="email" />
            <input value={ctx.password} onChange={(e) => ctx.setPassword(e.target.value)} type="password" />
        </div>
    );
}

export default MainInfo;