import React, { useState } from "react";
import axios from "axios";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import Results from "./Results";
import Home from "./Home";

const SearchBar = () => {
    const [username, setUserName] = useState('');
    const [repos, setRepos] = useState([]);

    const handleChange = (e) => {
        setUserName(e.target.value);
    }

    const handleClick = async () => {
        console.log(username);

        try {  
            const result = await axios(`https://api.github.com/users/${username}/repos`);   //userName -> 輸入的用戶名稱

            setRepos(result);
        }catch(err){
            console.log(err);
        }
    }

    // console.log(repos);
    return (
   <>
    <div style={{ padding: "20px" }}>
        <input type="text" placeholder="Enter user name" value={username} onChange={handleChange} />
        <button onClick={handleClick}>Search</button>

        <button>        
          <Link to={{
            pathname:`/user/${username}/repos`, 
        }}>Search</Link>
        </button>

    </div>
    {/* <Results repos={repos} username={username}/> */}
    <Home />
    </>
    );
};

export default SearchBar;