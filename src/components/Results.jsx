import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { useLocation, useParams, Link, useNavigate } from "react-router-dom";
import { useSelector,useDispatch } from 'react-redux';
import './Repo';
import Repo from "./Repo";

const Results = (props) => {

  //在這邊得到username後 抓出repos = repos.data
  let { username } = useParams()
  const [repos, setRepos] = useState([]);
  
  let page = 1;

  useEffect(()=>{
    console.log('execute function in useEffect');
    getRepos();
    window.addEventListener('scroll', handleScroll);
  },[]);

  const getRepos = async () => {
    console.log('a');
  
    try {
      //await -> 確保這個執行完下面才繼續執行  
      console.log('before api, the page: ' ,page);
      const result = await axios.get(`https://api.github.com/users/${username}/repos?page=${page}&per_page=10`);
      //item = result;
      const tenMoreRepos = [];
      result.data.forEach((data) => tenMoreRepos.push(data))
      setRepos((repos) => [...repos, ...tenMoreRepos]);
      //console.log('results: ' ,result);
      //console.log('item (repos): ' ,repos);
      page += 1;
      //listRepos(repos);
    }catch(err){
        console.log(err);
    }
  }

  // infinite scrolling
  const handleScroll = (e) => {
    //當scroll到bottom，loading並發送api
    //如何判斷到bottom -> scrollTop + innerHeight >= scrollHeight
    //console.log('Top: ' ,e.target.documentElement.scrollTop);
    //console.log('innerHeight : ' ,window.innerHeight);
    //console.log('Height: ' ,e.target.documentElement.scrollHeight);
    if(e.target.documentElement.scrollTop + window.innerHeight >= e.target.documentElement.scrollHeight){
      console.log('here is bottom of the page');
      getRepos();
    }
  }

  const n = useNavigate()

  let i = 0;

  const listRepos = 
      repos.length !==0 ? ( 
      //onClick切換頁面，在新頁面getSingleRepo     () => getSingleRepo(item)
      repos.map((item, index) => 
          <div
              key={item.id}
              className="result-list">
                <div>
                第 {index+1+i} 個 <br />
                Name: {item.name}  <br/>
                Star: {item.stargazers_count}  <br/>
                </div>
               {/* <button onClick={repoDetail}>detail</button> */}
                <button>
                  <Link to={`/user/${item.owner.login}/repos/${item.name}`}>detail</Link>
                </button>
                {/* <Repo repos={repos} /> */}
          </div>  
        )  //repos.data.slice(0, 10) 只顯示10個
      ) : ( 
        <li>Loading...</li> 
      );

  return <ul>
    <button onClick={() => {n('/')}} >back to SearchBar</button> <br />
    {listRepos}
  </ul>
};


export default Results;