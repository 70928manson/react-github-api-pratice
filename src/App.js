import React from "react";
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import Results from "./components/Results";
import Footer from "./components/Footer";
import './App.css';
import { useRoutes } from "react-router-dom";
import Repo from "./components/Repo";

//className動態綁定
//header searchBar result(repos) repo footer

function NoMatch() {
  return <p>NoMatch</p>
}

const routerConfig  = [
  {
    path: '/',
    element: <SearchBar />,
  },
  {
    path: '/user/:username/repos',
    element: <Results />,
  },
  {
    path: '/user/:username/repos/:repo',
    element: <Repo />,
  },
  { path: "*", element: <NoMatch /> }
]

//<router-link :to="`/product/${product.id}`">{{ product.title }}</router-link>
// route 必須要是 /users/{username}/repos/{repo}
// 串接 GET /repos/{owner}/{repo} 回傳的資料
// 頁面至少需顯示:repository.full_name、repository.description、repository.stargazers_count
// 有超連結可開新分頁至該 repository 在 GitHub 上的頁面

function App(){
  //useRoute達到js控管
  const element = useRoutes(routerConfig)
  return <div className="app">
    <Header />
      { element }
    <Footer />
  </div>;
}

export default App;
