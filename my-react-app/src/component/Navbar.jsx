import React, { useEffect, useState } from "react";
import { Link, Navigate, useLocation, useNavigate, useParams } from "react-router-dom";
import { Dashboard } from "../pages/Dashboard";

export const Navbar = () => {

  // const isAuthenticated = localStorage.getItem("Authentication");
  const [isModalOpen , setIsModalOpen] = useState(false)
  const [isAuthenticated , setIsAuthenticated] = useState(false)
  const navigete = useNavigate()
  const Logout = ()=>{
    localStorage.clear();
    navigete("/login")
  }
  const {pathname} = useLocation()
  useEffect(()=>{
   const authValue= JSON.parse(localStorage.getItem("Authentication"))
   console.log("authValue:",authValue)
 if(authValue){
  setIsAuthenticated(true)
 }else{
  setIsAuthenticated(false)
 }
  },[pathname])

  
  return (
    <>
    <div className="flex justify-between items-center w-[90%] mx-auto py-3">
     <div className="flex  space-x-5 items-center">
        <h1 className="font-bold text-2xl text-red-400">Blogs</h1>
        
     </div>
      <ul className="text-slate-500 flex space-x-5">
        <li className="hover:text-black font-semibold cursor-pointer">
          <Link to="/">Blogs</Link>
        </li>
        {isAuthenticated ? (
         <> <li className="hover:text-black font-semibold cursor-pointer">
            <button  onClick={()=> {setIsModalOpen(true)}}>Profile</button>
          </li>
          <li className="hover:text-black font-semibold cursor-pointer">
            <button  onClick={Logout}>Logout</button>
          </li>
          
          </>
        ) : (
          <li className="hover:text-black font-semibold cursor-pointer">
            <Link to="/Login">Login</Link>
          </li>
        )}
      </ul>
    </div>
    <hr></hr>
    {
     isModalOpen && <Dashboard setIsModalOpen={setIsModalOpen}></Dashboard>
    }
    </>
  );
};
