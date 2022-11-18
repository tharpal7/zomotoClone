import React from "react"
import ExploreCard from "./exploreCard";
import "./exploreSection.css";



const ExploreSection = ({ list, collectionName }) => {
    
    return (

        
        <div className="max-width explore-section">
            <div className="collection-titel">{collectionName}</div>
            <div className="exlpore-grid">
                {list.map((restaurant) => {
                    return <ExploreCard restaurant={restaurant} />
                })}
            </div>
        </div>
    );
};

export default ExploreSection;