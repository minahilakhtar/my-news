
import './App.css';

import React, {useState} from 'react'
import Navbar from './Components/Navbar';
import LoadingBar from 'react-top-loading-bar'
import News from './Components/News';

import {
  BrowserRouter as Router,
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
        <Router>
        <Navbar/>
        <Routes >
        <Route exact path="/" element = {<News setprogress={setprogress} apiKey={apiKey} key="general" pageSize = {pageSize} category = "general"/>}/>
        <Route exact path="/Entertainment" element = {<News setprogress={setprogress} apiKey={apiKey} key="Entertainment" pageSize = {pageSize} category = "Entertainment"/>}/>
        <Route exact path="/Business" element = {<News setprogress={setprogress} apiKey={apiKey} key="Business" pageSize = {pageSize} category = "Business"/>}/>
        <Route exact path="/technology" element = {<News setprogress={setprogress} apiKey={apiKey} key="technology" pageSize = {pageSize} category = "technology"/>}/>
        <Route exact path="/Science" element = {<News setprogress={setprogress} apiKey={apiKey} key="Science" pageSize = {pageSize} category = "Science"/>}/>
        <Route exact path="/Sports" element = {<News setprogress={setprogress} apiKey={apiKey} key="Sports" pageSize = {pageSize} category = "Sports"/>}/>
        <Route exact path="/Health" element = {<News setprogress={setprogress} apiKey={apiKey} key="Health" pageSize = {pageSize} category = "Health"/>}/>
        </Routes>
        </Router>
      </div>
      
    )
  }
  export default App
