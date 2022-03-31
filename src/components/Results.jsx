import React from "react";
import axios from "axios";
import { Routes, Route, Link, Outlet, useParams, useState, useNavigate, RouteObject, useRoutes } from "react-router-dom";
import './Repo';
import Repo from "./Repo";

const Results = (props) => {
    const { repos } = props;
    const { searchInput } = props;

    console.log('Repos is:  ', repos.data);
    console.log('SearchInput is:  ', searchInput);

  //   const n = useNavigate()

  //   const repoDetail = async () => {
  //     n('repo');
  // }


    const listRepos = 
      repos.length !==0 ? ( 
        //onClick切換頁面，在新頁面getSingleRepo     () => getSingleRepo(item)
        repos.data.map((item) => 
          <div  /*repos={repos} searchInput={searchInput}   route render*/
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
        <li>No repos found</li> 
      );

    return <ul>
        {listRepos}
    </ul>
};


export default Results;