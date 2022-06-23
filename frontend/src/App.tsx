import React, { useState, useEffect } from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import MainPage from "./MainPage";
import RepoGallery from "./gitBookService/RepoGallery";



function App() {


  return(
      <BrowserRouter>
          <Routes>
              <Route path = "/" element={<MainPage/>}/>
              {/*<Route path ="/:username" element={<RepoGallery   userRepo={}/>}/>*/}
          </Routes>

      </BrowserRouter>

  )}

export default App;
