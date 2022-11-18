import React from "react";
import Slider from "react-slick";

import NextArrow from "../../common/carousel/nextArrow";
import PrevArrow from "../../common/carousel/prevArrow";
import "./topBrands.css";


const topbrandList = [
    {
        id: 1,
        brandName: "Pista House",
        time: "28 min",
        cover: "https://b.zmtcdn.com/data/brand_creatives/logos/0f13b4a115d1420b049835a5b2037a46_1649660664.png"
    },
    {
        id: 2,
        brandName: "Meghana Foods",
        time: "27 min",
        cover: "https://b.zmtcdn.com/data/brand_creatives/logos/ec72c289aa01d947fe15a009ce8e559f_1616052816.png"
    },

    {
        id: 3,
        brandName: "McDonals's",
        time: "29 min",
        cover: "https://b.zmtcdn.com/data/brand_creatives/logos/3d80cb89fca9e212f7dab2c1914ebd8f_1643983621.png"
    },

    {
        id: 4,
        brandName: "Domino's Pizza",
        time: "30 min",
        cover: "https://b.zmtcdn.com/data/brand_creatives/logos/1a985408ca7ad8fd097f2c47db9c5cb6_1611252598.png"
    },

    {
        id: 5,
        brandName: "Truffles",
        time: "41 min",
        cover: "https://b.zmtcdn.com/data/brand_creatives/logos/239f872f52291fe253a37cc8dd16188f_1663838300.png"
    },

    {
        id: 6,
        brandName: "Empire Restaurant",
        time: "33 min",
        cover: "https://b.zmtcdn.com/data/brand_creatives/logos/7a7904eff687a7456599074a4e7d2335_1617875100.png"
    },

    {
        id: 7,
        brandName: "KFC",
        time: "37 min",
        cover: "https://b.zmtcdn.com/data/brand_creatives/logos/80c09d718acddee05a655eb378bb442f_1617875125.png"
    },

    {
        id: 8,
        brandName: "Burger King",
        time: "33 min",
        cover: "https://b.zmtcdn.com/data/brand_creatives/logos/6a11fd0f30c9fd9ceaff2f5b21f61d23_1617187721.png"
    },

    {
        id: 9,
        brandName: "A2B - Adyar",
        time: "30 min",
        cover: "https://b.zmtcdn.com/data/brand_creatives/logos/5ef673b417cd25b5a04176ce341d425a_1630505477.png"
    },

    {
        id: 10,
        brandName: "La Pino'z Pizza",
        time: "33 min",
        cover: "https://b.zmtcdn.com/data/brand_creatives/logos/144bce4c7101359f0c0b54b8fc761a6f_1648017843.png"
    },


]

const settings = {    
    infinite: false,
    slidesToShow:6,
    slidesToScroll:1,
    nextArrow: <NextArrow/>,
    prevArrow: <PrevArrow/>,
  };

const TopBrands = () => {
    return (
        <div className="top-brands max-width">
            
                <div className="collection-titel">Top brands for you</div>
                <Slider {...settings}>
                    {topbrandList.map((brand)=>{
                        return <div>
                            <div className="top-brands-cover">
                                <img 
                                src={brand.cover}
                                className ="top-brands-image"
                                alt={brand.brandName}/>
                            </div>
                            <div className="brand-name">{brand.brandName}</div>
                            <div className="brand-time">{brand.time}</div>
                        </div>
                    })}
                </Slider>
            
        </div>
    )
};

export default TopBrands;