import React from "react";
import axios from "axios";
import { Routes, Route, Link, Outlet, useParams, useEffect, useNavigate, RouteObject, useRoutes } from "react-router-dom";

const Repo = () => {
  let { username } = useParams();
  let { repo } = useParams();

  console.log(username);
  console.log(repo);

  //useEfect
  //const result = await axios(`https://api.github.com/users/${username}/repos/${repo}`);

  const n = useNavigate()

    return <ul>
        <button onClick={() => {n('/')}} >back to SearchBar</button>
    </ul>
};


export default Repo;
