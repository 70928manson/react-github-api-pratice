import React from "react";
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import Footer from "./components/Footer";

//className動態綁定
//header searchBat result footer

function App(){
  return <div>
    <Header />
    <SearchBar />
    <Footer />
  </div>;
}

export default App;
