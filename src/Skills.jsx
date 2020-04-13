import React, { useContext } from 'react';
import { contextForm } from './Form';



const Skills = (props) => {

    const ctx = useContext(contextForm);

    const add_likes = (value, list) => {
        ctx.setLikes([value].concat(ctx.likes))
    }

    const removeList = (value, list) => {
        ctx.setLikes(ctx.likes.filter(v => v !== value))
    }

    return (
        <div>
            <label>
                <input
                    type="checkbox"
                    name="likes[]"
                    onChange={(e) => e.target.checked ? add_likes("Rubby") : removeList("Rubby")}
                />
                Ruby
            </label>
            <label>
                <input
                    type="checkbox"
                    name="likes[]"
                    onChange={(e) => e.target.checked ? add_likes("Javascript") : removeList("Javascript")}
                />
                Javascript
            </label>
        </div>
    )
}

export default Skills;