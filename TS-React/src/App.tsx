import "./App.css";
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainLayout from './MainLayout/mainlayout';
// import HomePage from './Pages/HomePage/homePage';
// import AllPages from './Pages/AllPages/allPages';



const App = () => {
  return (

      <BrowserRouter>
        <Routes>
          <Route
             path="/"
              element={<MainLayout />}>
              {/* <Route index element={<AllPages />} />
               <Route path="/allpages" element={<AllPages />} /> */}
          </Route>
        </Routes>
      </BrowserRouter>

  );
};

export default App;


