import React, { useState } from "react";

function SearchForm({searchFor}) {
    const [searchTerm, setSearchTerm] = useState("");

    //   const [formErrors, setFormErrors] = useState([]);
    
    const handleChange = evt => {
    setSearchTerm(evt.target.value);
    };
    
    function handleSubmit(evt) {
        evt.preventDefault();
        console.log(searchTerm)
        searchFor(searchTerm.trim() || undefined);
        console.log("after search");
        setSearchTerm("");
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    onChange={handleChange}
                    type="text" 
                    value={searchTerm}
                    placeholder="Enter search term.."
                />
                <button id="searchBtn">Submit</button>
            </form>
        </div>
    );
}

export default SearchForm;