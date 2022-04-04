import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate,useParams } from "react-router-dom";


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

  //useEffect 頁面「render完成後」做某某事

  useEffect(()=>{
    console.log('execute function in useEffect');
    getSingleRepo();
},[]);

  const getSingleRepo = async () => {
    console.log('a');

    try {  
        const result = await axios.get(`https://api.github.com/repos/${username}/${repo}`)
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
        <a href={item.data.html_url} target="_blank">Repo網址按這裡</a>
    </div>
};

//export 'useEffect' (imported as 'useEffect') was not found in 'react-router-dom'   
export default Repo;
