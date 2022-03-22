import React, { Component } from "react";
import Header from './components/Header'
import './components/Header';

// className動態綁定
//header searchBat result footer

function App(){
  return <div>
    <Header />
    <SearchBat />
    <Results />
  </div>;
}

export default App;
