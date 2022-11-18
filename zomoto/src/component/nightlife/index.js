import React from "react";
import { nightLife } from "../../data/nightLife";
import ExploreSection from "../common/exploresection";
import Filter from "../common/filter";
import DeliveryCollections from "../delivery/deliveryCollection";
import "./nightlife.css"

const deliveryFilter = [
    {
        id: 1,
        titel: "Filters",
        icon: <i className="fa-solid fa-filter absolute-center"></i>,
       
    },

    {
        id: 2,        
        titel: "Distance"
    },

    {
        id: 3,        
        titel: "Rating: 4.0+"
    },

   
    {
        id: 4,        
        titel: "Pub & Bars"
    },

    
]



const nightList = nightLife;

const NightLife = () => {
return (<div>
     <div className="max-width">
            <Filter filterList={deliveryFilter}/>
           
            <ExploreSection list={nightList} collectionName ="Nightlife Restaurants in Hyderabad City"/>

        </div>
       
</div>
    
       

)


}

export default NightLife;
