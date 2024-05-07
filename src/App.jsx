import { useState, useEffect } from "react";
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import Home from "./components/homepage/Home";
import Main from "./pages/Main";


export default function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Home />}>
        <Route path="/" element={<Main />} />
        
      
      </Route>
    )
  )

  return (
    <>
    </>
  );
}