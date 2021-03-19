 import React from 'react'
 import Bird from "../assets/logo.png"
 
 const Tweet = ({childern}) => {
     return (<div className="Tweet media border rounded">
        <img src={Bird} alt="Brid" className="mi-3" />
        {childern}</div>
     )  
    };

export default Tweet
 