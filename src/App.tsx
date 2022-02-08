import React from 'react';
import logo from './logo.svg';
import './App.css';
import {CompType, updateCompaniesUsers} from "./10_immutability/10_01";

function App() {

  const names = ["Dimich", "Anna", "Mark", "Oleg", "Helga",]
  const liElements = names.map( n => <li>{n}</li> )
  const users = [{name: "Dimich"}, {name: "Anna"}, {name: "Mark"}, {name: "Oleg"}, {name: "Helga"}]
  const liElementsInObj = users.map( (u, index) => <li key={index}>{index} - {u.name}</li>)

  return (
    <div className="App">

    </div>
  );
}

export default App;
