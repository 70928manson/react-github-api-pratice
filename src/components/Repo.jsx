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

  //console.log(username);
  //console.log(repo);

  useEffect(()=>{
    console.log('execute function in useEffect');
    getSingleRepo();
},[]);

  const getSingleRepo = async () => {
    //console.log('a');
    try {  
        const result = await axios.get(`https://api.github.com/repos/${username}/${repo}`)
        setItem(result);
        console.log(item);
    }catch(err){
        console.log(err);
    }
}
  const n = useNavigate()

    return <div>
        <button onClick={() => {n('/')}} style={{ margin: '20px 5px' }}>back to SearchBar</button> <br />
        <div className="repo">
          <p>歡迎來到單一repo頁面</p>
          <p>Repo name: { item.data.name }</p>
          <p>Repo description: { item.data.description }</p>
          <p>Repo stargazers_count: { item.data.stargazers_count }</p>
          <a href={item.data.html_url} target="_blank">Repo's github link</a>
        </div>
    </div>
};
   
export default Repo;
