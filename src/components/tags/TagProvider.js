import React, { useState } from "react";

/*
    The context is imported and used by individual components
    that need data
*/
export const TagContext = React.createContext();

/*
 This component establishes what data can be used.
 */
export const TagProvider = props => {
    const [tags, setTags] = useState([]);

    const getTags = () => {
        return fetch("http://localhost:8088/tags")
            .then(res => res.json())
            .then(setTags);
    };
    return (
        <TagContext.Provider
            value={{
                tags,
                getTags
            }}
        >
            {props.children}
        </TagContext.Provider>
    );
};