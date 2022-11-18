import React from "react";
import "./header.css";



const Header = () => {
     return (
          <div className="max-width header">
               <img
                    src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png"
                    alt='zomoto-logo'
                    className="header-logo"
               />

               <div className="header-right">
                    <div className="header-location-container">
                         <div className="loaction-wrapper">
                              <div className="location-icon-name">
                                   <i class="fa-solid fa-location-dot absolute-center location-icons"></i>
                                   <div>Hyderabad</div>
                              </div>
                              <i className="fa-solid fa-caret-down absolute-center location-icon"></i>                              
                         </div>
                         <div className="location-search-separator"></div>

                         <div className="header-searchbar">
                         <i class="fa-solid fa-magnifying-glass absolute-center location-icon"></i>
                         <input 
                         placeholder="search for resturant, cuidine or a dish " 
                         className="search-input"
                         />
                         </div>
                    </div>
                    <div className="profile-wrapper">
                      <img 
                      src="https://b.zmtcdn.com/data/user_profile_pictures/5afit=around%7C100%3A100&crop=100%3A100%3B%2A%2C%2A"
                      
                      alt="profil"
                      className="header-profile-image"
                      />
                     

                      <span className="header-username">trinath</span>

                      <i className="fa-sharp fa-solid fa-angle-down absolute-center profile-options-icon"></i>

                    </div>
               </div>

          </div>
     );
};

export default Header;