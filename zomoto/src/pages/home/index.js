import React, { useState } from "react";

import Header from "../../component/common/header";
import TabOptions from "../../component/common/tabOptions";
import Delivery from "../../component/delivery";
import DiningOut from "../../component/diningOut";
import NightLife from "../../component/nightlife";

const HomePages = () => {

    const [activeTab, setActiveTab] = useState("Deliverys")
    return(
    <div>
        <Header/>
        <TabOptions activeTab={activeTab} setActiveTabs={setActiveTab}/>
       {getCorrectScreen(activeTab)}
       
    </div>
 );
};

const getCorrectScreen=(tab)=>{
    switch(tab){
        case "Delivery":
            return <Delivery/>
            case "Dining Out":
                return <DiningOut/>
                case "Nightlife":
                    return <NightLife/>
                    default:
                        return  <Delivery/>
            
    }

   
}

export default HomePages;  