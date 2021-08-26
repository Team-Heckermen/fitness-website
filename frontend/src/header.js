import React from 'react';
import logo from './assets/images/logo.svg';
import userimg from './assets/images/default_user_img.svg';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
  } from "react-router-dom";
export default function Header(props) {
    const is_logged_in = false;
    if(is_logged_in == true)
    {
        var sign_in_button
        var sign_up_button = <li className="absolute right-0"><Link to="/" className=" rounded-md my-2 hover:bg-gray-700 inline-block no-underline bg-gray-800 p-1 text-gray-400 hover:text-white font-medium text-lg py-2 px-4 lg:-ml-2 mx-6">Profile</Link></li>
    }
    else
    {
        var sign_in_button = <li className="absolute right-24"><Link to="/" className=" rounded-md my-2 hover:bg-gray-700 inline-block no-underline hover:text-white bg-gray-800 p-1 text-gray-400 font-medium text-lg py-2 px-4 lg:-ml-2 mx-6">Sign in</Link></li>
        var sign_up_button = <li className="absolute right-0"><Link to="/" className=" rounded-md my-2 hover:bg-gray-700 inline-block no-underline bg-gray-800 p-1 text-gray-400 hover:text-white font-medium text-lg py-2 px-4 lg:-ml-2 mx-6">Sign up</Link></li>
    }
    return(
        <header className="hidden md:flex md:items-center md:w-auto w-full order-3 md:order-1">
            <nav className="bg-gray-800 h-auto w-screen content-start">
                <ul className="flow-root md:flex items-center text-base text-blue-600 pt-4 md:pt-0 w-screen">
                    <img src={logo} className="inline-block mr-4" height="5%" width="5%"/>
                    <li><Link to="/" className=" rounded-md my-2 hover:bg-gray-700 inline-block no-underline hover:text-white bg-gray-800 p-1 text-gray-400 font-medium text-lg py-2 px-4 mr-6">Home</Link></li>
                    <li><Link to="/" className=" rounded-md my-2 inline-block hover:bg-gray-700 no-underline bg-gray-800 p-1 text-gray-400 hover:text-white font-medium text-lg py-2 px-4 lg:-ml-2 mx-6">Discussions</Link></li>
                    <li><Link to="/" className=" rounded-md my-2 inline-block hover:bg-gray-700 no-underline bg-gray-800 p-1 text-gray-400 hover:text-white font-medium text-lg py-2 px-4 lg:-ml-2 mx-6">Settings</Link></li>
                    {sign_in_button}
                    {/* <img src={userimg} className="inline-block mr-4 absolute right-0" height="4%" width="4%"/> */}
                    {sign_up_button}
                </ul>
            </nav>
            
        </header> 
    )
}