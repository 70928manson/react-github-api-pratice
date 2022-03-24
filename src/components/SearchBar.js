import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";

const SearchBar = () => {
    const [searchInput, setSearchInput] = useState('');
    const [repos, setRepos] = useState([]);

    //test style
    const handleChange = (e) => {
        setSearchInput(e.target.value);
    }

    const handleClick = async () => {
        console.log(searchInput);

        try {
            // 3/23:測試axios.get(`~`).then以外的寫法
            const result = await axios(`https://api.github.com/users/${searchInput}/repos`);   //searchInput -> 輸入的用戶名稱

            setRepos(result);
        }catch(err){
            console.log(err);
        }
    }

    // console.log(repos);
    return (
   <>
    <div style={{ padding: "20px" }}>
        <input type="text" placeholder="Enter user name" value={searchInput} onChange={handleChange} />
        <button onClick={handleClick}>Search</button>
    </div>
    <Results repos={repos} />
    </>
    );
};

export default SearchBar;