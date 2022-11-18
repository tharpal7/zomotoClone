import React from "react";
import ExploreSection from "../common/exploresection";
import Filter from "../common/filter";
import "./delivery.css"
import DeliveryCollections from "./deliveryCollection";
import TopBrands from "./topBrands";
import { restaurants } from "../../data/resturant";

const deliveryFilter = [
    {
        id: 1,
        titel: "Filters",
        icon: <i className="fa-solid fa-filter absolute-center"></i>,
       
    },

    {
        id: 2,        
        titel: "Rating: 4.0+"
    },

    {
        id: 3,        
        titel: "Safe and Hygenic"
    },

   
    {
        id: 4,        
        titel: "Pure Veg"
    },

    {
        id: 5,
        titel: "Delivery Time",
        icon: <i className="fa-thin fa-arrow-up-arrow-down absolute-center"></i>,
        
    },

    {
        id: 6,        
        titel: "Great Offer",
    },
]

 const restauranList = restaurants;
const Delivery = () => {
    return (
        <div>
            <div className="max-width">
                <Filter filterList={deliveryFilter}/>
            </div>
            <DeliveryCollections />
            <TopBrands/>
            <ExploreSection list ={restauranList} collectionName="Delivery Restarunt in Hyderabad"/>
        </div>
    )
}

export default Delivery;