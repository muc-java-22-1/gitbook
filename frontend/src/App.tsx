import React, { useState, useEffect } from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import RepoSearchpage from "./Components/RepoSearchpage";
import RepoGallery from "./Components/RepoGallery";
import MainPage from "./Components/MainPage";



function App() {


  return(
      <div>
      <div>
          <h1>GitBook</h1>
      </div>
      <BrowserRouter>
          <Routes>
              <Route path = "/" element={<MainPage/>}/>
              <Route path = "/search" element={<RepoSearchpage/>}/>
              {/*<Route path ="/:username" element={<RepoGallery   userRepo={}/>}/>*/}
          </Routes>

      </BrowserRouter>
      </div>
  )}

export default App;
