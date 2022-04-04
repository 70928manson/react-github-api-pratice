import React, { useState } from "react";
import { Link } from "react-router-dom";
import Home from "./Home";

const SearchBar = () => {
    const [username, setUserName] = useState('');

    const handleChange = (e) => {
        setUserName(e.target.value);
    }

    // console.log(repos);
    return (
   <>
    <div style={{ padding: "20px" }}>
        <input type="text" placeholder="Enter the user name" value={username} onChange={handleChange} />
        <button>        
          <Link to={{
            pathname:`/user/${username}/repos`, 
        }}>Search</Link>
        </button>

    </div>
    <Home />
    </>
    );
};

export default SearchBar;