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
    <div className='search' style={{ padding: '20px' }}>
        <input type="text" placeholder="Enter the user name" value={username} onChange={handleChange} />
        <button>        
          <Link to={{
            pathname:`/user/${username}/repos`, 
        }} style={{ textDecoration: 'none', color: '#fff'}}>search<i className="bi bi-search ps-2 "></i></Link>
        </button>
    </div>
    <Home />
    </>
    );
};

export default SearchBar;