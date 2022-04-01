import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { useLocation, useParams, Link, useNavigate } from "react-router-dom";
import './Repo';
import Repo from "./Repo";

const Results = (props) => {

  //在這邊得到username後 抓出repos = repos.data
  let { username } = useParams()

  console.log('aaa: ',username);

  // const { repos } = props;
  // const { userName } = props;

  // console.log('Repos is:  ', repos.data);
  // console.log('userName is:  ', userName);
  

  const [repos, setRepos] = useState([]);


  useEffect(()=>{
    console.log('execute function in useEffect');
    getRepos();
},[]);

  const getRepos = async () => {
    console.log('a');

    try {  
        const result = await axios(`https://api.github.com/users/${username}/repos`);
        //item = result;
        setRepos(result);
        console.log('results: ' ,result);
        console.log('item (repos): ' ,repos);
        //listRepos(repos);
    }catch(err){
        console.log(err);
    }
}

  const n = useNavigate()

  const listRepos = 
      repos.length !==0 ? ( 
      //onClick切換頁面，在新頁面getSingleRepo     () => getSingleRepo(item)
      repos.data.map((item) => 
          <div
              key={item.id}
              className="result-list">
                <div>
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






  // const listRepos = 
  //   repos.length !==0 ? ( 
  //     //onClick切換頁面，在新頁面getSingleRepo     () => getSingleRepo(item)
  //     repos.data.map((item) => 
  //         <div
  //             key={item.id}
  //             className="result-list">
  //               <div>
  //               Name: {item.name}  <br/>
  //               Star: {item.stargazers_count}  <br/>
  //               </div>
  //               {/* <button onClick={repoDetail}>detail</button> */}
  //               <button>
  //                 <Link to={`/user/${item.owner.login}/repos/${item.name}`}>detail</Link>
  //               </button>
  //               {/* <Repo repos={repos} /> */}
  //         </div>  
  //       )  //repos.data.slice(0, 10) 只顯示10個
  //     ) : ( 
  //       <li>No repos found</li> 
  //     );

    return <ul>
      <button onClick={() => {n('/')}} >back to SearchBar</button> <br />
      {listRepos}
    </ul>
};


export default Results;