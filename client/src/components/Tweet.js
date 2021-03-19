 import React from 'react'
 import Bird from "../assets/logo.png"
 
 const Tweet = ({children}) => {
     return (
        <div className="Tweet media border rounded">
        <img src={Bird} alt="Brid" className="mr-3"/>
        {children}
        </div>
     ); 
    };

export default Tweet
 