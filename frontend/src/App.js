import React from 'react';
import { BrowserRouter,Router, Route, Switch, Routes } from 'react-router-dom';
import Signup from './components/SignUp';
import Login from './components/Login';
import Search from './components/Search';

function App() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element = {<Login />}></Route>
            <Route path='/signup' element = {<Signup />}></Route>
            <Route path='/search' element = {<Search />}></Route>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
