import React from "react";
import Slider from "react-slick/lib/slider";
import NextArrow from "../../common/carousel/nextArrow";
import PrevArrow from "../../common/carousel/prevArrow";
import "./deliveryCollection.css"
import DeliveryItem from "./deliveryItem";

const deliveryItems =[
    {
        id:1,
        title:"Biryani",
        cover:"https://b.zmtcdn.com/data/dish_images/d19a31d42d5913ff129cafd7cec772f81639737697.png",
        
    },

    {
        id:2,
        title:"Pizza",
        cover:'https://b.zmtcdn.com/data/o2_assets/d0bd7c9405ac87f6aa65e31fe55800941632716575.png',        
    },

    {
        id:3,
        title:"Paratha",
        cover:'	https://b.zmtcdn.com/data/o2_assets/2b5a5b533473aada22015966f668e30e1633434990.png',        
    },

    {
        id:4,
        title:"Chicken",
        cover:'https://b.zmtcdn.com/data/dish_images/197987b7ebcd1ee08f8c25ea4e77e20f1634731334.png',        
    },

    {
        id:5,
        title:"Rolls",
        cover:'https://b.zmtcdn.com/data/dish_images/c2f22c42f7ba90d81440a88449f4e5891634806087.png',        
    },

    {
        id:6,
        title:"Thali",
        cover:'https://b.zmtcdn.com/data/o2_assets/52eb9796bb9bcf0eba64c643349e97211634401116.png',        
    },

    {
        id:7,
        title:"Fries",
        cover:'	https://b.zmtcdn.com/data/o2_assets/13bdf0d4c96d44e6ddb21fedde0fe4081632716661.png',        
    },

    {
        id:8,
        title:"Chaat",
        cover:'https://b.zmtcdn.com/data/dish_images/1437bc204cb5c892cb22d78b4347f4651634827140.png',        
    },

    {
        id:9,
        title:"Dosa",
        cover:'https://b.zmtcdn.com/data/o2_assets/8dc39742916ddc369ebeb91928391b931632716660.png',        
    },



    
]


const settings = {    
    infinite: false,
    slidesToShow: 6,
    slidesToScroll: 1,
    nextArrow: <NextArrow/>,
    prevArrow: <PrevArrow/>,
  };

const DeliveryCollections = () => {
    return(
        <div className="delivery-collection">
            <div className="max-width">
                <div className="collection-titel">Eat what makes you happy</div>
                <Slider {...settings}>
                    {deliveryItems.map((item)=> {
                        return <DeliveryItem item={item}/>
                           
                            
                         
                    })}
                </Slider>

            </div>
        </div>
    )
}

export default DeliveryCollections ;