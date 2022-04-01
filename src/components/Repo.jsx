import React, { useState, useEffect } from "react";
import axios from "axios";
import { C, useNavigate,useParams } from "react-router-dom";


const Repo = () => {
  let { username } = useParams();
  let { repo } = useParams();

  const [item, setItem] = useState(
    {
      data: {
        name: 'Not found',
        description: 'Not found',
        network_count: 'Not found',
  }})

  console.log(username);
  console.log(repo);

  //useEfect 頁面載入時就去請求資料
  //const result = await axios(`https://api.github.com/users/${username}/repos/${repo}`);

  useEffect(()=>{
    console.log('execute function in useEffect');
    getSingleRepo();
},[]);

  const getSingleRepo = async () => {
    console.log('a');

    try {  
        const result = await axios(`https://api.github.com/repos/${username}/${repo}`);
        //item = result;
        setItem(result);
        console.log(result);
        console.log(item);
    }catch(err){
        console.log(err);
    }
}
  const n = useNavigate()

    return <div>
        <p>歡迎來到單一repo頁面</p>
        <button onClick={() => {n('/')}} >back to SearchBar</button> <br />
        Repo name: { item.data.name } <br />
        Repo description: { item.data.description } <br />
        Repo network_count: { item.data.network_count } <br />
    </div>
};

//export 'useEffect' (imported as 'useEffect') was not found in 'react-router-dom'   
export default Repo;
