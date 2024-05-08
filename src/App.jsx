import { useState, useEffect } from "react";
import Splash from "./components/screen/Splash";
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import Home from "./components/homepage/Home";
import Main from "./pages/Main";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";


export default function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Home />}>
        <Route path="/" element={<Main />} />
        <Route path="/projects" element={<Projects/>} />
        <Route path="/contact" element={<Contact />} />
      </Route>
    )
  )

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2800);
  }, []);

  return (
    <>
      {loading ? <Splash /> : (<RouterProvider router={router}/>)}
    </>
  );
};