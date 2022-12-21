
import './App.css';

import React, {useState} from 'react'
import Navbar from './Components/Navbar';
import LoadingBar from 'react-top-loading-bar'
import News from './Components/News';

import {
  BrowserRouter as Router,
  HashRouter,
  Routes,
  Route,
} from "react-router-dom";


const App =()=> {
   const pageSize =9;
   const apiKey =process.env.REACT_APP_NEWS_API;

   const [progress, setprogress] = useState(0)
  //  setprogress=(progress)=>{
  //   setptate({progress:progress})
  //  }
    return (
      <div>
        <LoadingBar
        height={3}
        color='#f11946'
        progress={progress}
      />
        <HashRouter>
        <Navbar/>
        <Routes >
        <Route exact path="/my-news" element = {<News setprogress={setprogress} apiKey={apiKey} key="general" pageSize = {pageSize} category = "general"/>}/>
        <Route path="/Entertainment" element = {<News setprogress={setprogress} apiKey={apiKey} key="Entertainment" pageSize = {pageSize} category = "Entertainment"/>}/>
        <Route path="/Business" element = {<News setprogress={setprogress} apiKey={apiKey} key="Business" pageSize = {pageSize} category = "Business"/>}/>
        <Route path="/technology" element = {<News setprogress={setprogress} apiKey={apiKey} key="technology" pageSize = {pageSize} category = "technology"/>}/>
        <Route path="/Science" element = {<News setprogress={setprogress} apiKey={apiKey} key="Science" pageSize = {pageSize} category = "Science"/>}/>
        <Route path="/Sports" element = {<News setprogress={setprogress} apiKey={apiKey} key="Sports" pageSize = {pageSize} category = "Sports"/>}/>
        <Route path="/Health" element = {<News setprogress={setprogress} apiKey={apiKey} key="Health" pageSize = {pageSize} category = "Health"/>}/>
        </Routes>
        </HashRouter>
      </div>
      
    )
  }
  export default App
