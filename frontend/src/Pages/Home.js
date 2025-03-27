import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Components/Navbar";
import UsernameCard from "./Components/UsernameCard";
import Posts from "./Components/Posts";
import Sponsored from "./Components/Sponsored";
import SuggestionList from "./Components/SuggestionList";
import Requests from "./Components/Requests";

const Home = () => {
    const [connectedUser, setConnectedUser] = useState({});
    const navigate = useNavigate();

    const getConnectedUserData = () => {
        const userData = JSON.parse(localStorage.getItem("user_data"));

        if (!userData) {
            // User not connected, redirect to login page
            navigate('/login');  // ✅ Correct way
            return;
        }

        setConnectedUser(userData);
    };

    useEffect(() => {
        getConnectedUserData();
    }, []);

    return (
        <>
            <Navbar />
            <div className="layout-app" >
                {/*  Left Box */ }
                <div style={{ width: "25%"}} >
                <UsernameCard  user={connectedUser}  />
                
                </div>
                {/*  Middle  Box */ }
                <div  style={{ width: "50%"}}  >
                    
                    < Posts />

                </div>
                {/* Right Box  */ }
                <div style={{ width: "25%"}} >
                    <Sponsored/>
                    <Requests/>
                    <SuggestionList/>
                </div>
            </div>
            
                    {/*<h1> Hello {connectedUser.lastname + " " + connectedUser.firstname}</h1> */} 
        </>
    );
};

export default Home;
