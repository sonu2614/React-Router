import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import Layout from './Layout';
import Home from './components/Home/Home';
import AboutUs from './components/AboutUs/AboutUs';
import ContactUs from './components/ContactUs/ContactUs';
import { Route } from 'react-router-dom';
import User from './components/User/User';
import Github, { githubInfoLoader } from './components/Github/Github';

// const router = createBrowserRouter([
//   {
//     path:'/',
//     element:<Layout/>,

//     children : [
//       {
//         path:"",
//         element:<Home />
//       },
//       {
//         path:"about",
//         element:<AboutUs />
//       },
//       {
//         path:"contact",
//         element:<ContactUs />
//       },
//     ]
//   }
// ])

const router =createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}> 
    <Route path='' element={<Home />}/>
    <Route path='about' element={<AboutUs />}/>
    <Route path='contact' element={<ContactUs />}/>
    <Route path='user/:userid' element={<User />}/>

    <Route 
    loader={githubInfoLoader}
    path='github' 
    element={<Github />}/>

    </Route>
  )
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
