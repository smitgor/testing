 import React from 'react';
 import Card from "./Card";
 import Bird from "../assets/logo.png"; 
 const Tweet = ({ name , children }) => {
     return (
        <div className="Tweet media border rounded">
        <img src={Bird} alt="Brid" className="mr-3"/>
        <div className="TweetContents">
        <p><strong>{name}</strong></p>
        <Card>
            {children}
        </Card>
        </div>
</div>
     ); 
    };

export default Tweet
 