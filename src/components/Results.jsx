import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import './Repo';

const Results = () => {
  //在這邊得到username後 抓出repos = repos.data
  let { username } = useParams()
  const [repos, setRepos] = useState([]);
  
  let page = 1;

  useEffect(()=>{
    getRepos();
    window.addEventListener('scroll', handleScroll);
  },[]);

  const getRepos = async () => {
    console.log('a');
  
    try {
      //await -> 確保這個執行完下面才繼續執行  
      const result = await axios.get(`https://api.github.com/users/${username}/repos?page=${page}&per_page=10`);
      const tenMoreRepos = [];
      result.data.forEach((data) => tenMoreRepos.push(data))
      setRepos((repos) => [...repos, ...tenMoreRepos]);
      //console.log('results: ' ,result);
      //console.log('item (repos): ' ,repos);
      page += 1;
      window.addEventListener('scroll', handleScroll);
    }catch(err){
        console.log(err);
    }
  }

  // infinite scrolling
  const handleScroll = (e) => {
    //當scroll到bottom，loading並發送api
    //如何判斷到bottom -> scrollTop + innerHeight >= scrollHeight
    if(e.target.documentElement.scrollTop + window.innerHeight + 1 >= e.target.documentElement.scrollHeight){
      setTimeout(getRepos, 1000);
      window.removeEventListener('scroll', handleScroll);  //為什麼要remove -> 如果只有單純監聽，scroll到bottom時會不斷觸發條件，多次發送api請求導致一次load 20、30個repo
    }
  }

  const n = useNavigate()

  let i = 0;

  const listRepos = 
      repos.length !==0 ? ( 
      repos.map((item, index) => 
          <div
              key= {index + item.id}  //只有item.id會發生兩個div擁有相同id的情況，解決辦法為加上index(這是好方法嘛)
              className="result-list">
                <div>
                第 {index+1+i} 個 <br />
                Name: {item.name}  <br/>
                Star: {item.stargazers_count}  <br/>
                </div>
                <button>
                  <Link to={`/user/${item.owner.login}/repos/${item.name}`}>detail</Link>
                </button>
          </div>  
        )
      ) : ( 
        <li>Loading...</li> 
      );

  return <ul>
    作者: {username} <br />
    <button onClick={() => {n('/')}} >back to SearchBar</button> <br />
    {listRepos}
  </ul>
};


export default Results;