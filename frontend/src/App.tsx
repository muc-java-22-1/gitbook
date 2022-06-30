import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import RepoSearchpage from "./Components/RepoSearchpage";
import MainPage from "./Components/MainPage";
import OwnRepos from "./Components/OwnRepos";
import RegisterPage from "./Components/RegisterPage";



function App() {


  return(
      <div>
      <div>
          <h1>GitBook</h1>
      </div>
      <BrowserRouter>
          <Routes>
              <Route path = "/register" element={<RegisterPage/>}/>
              <Route path = "/" element={<MainPage/>}/>
              <Route path = "/search" element={<RepoSearchpage/>}/>
              <Route path = "/myrepos/:savedname" element={<OwnRepos/>}/>
          </Routes>

      </BrowserRouter>
      </div>
  )}

export default App;
