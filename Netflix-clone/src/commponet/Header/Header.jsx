import React from "react";
import "./header.css";
// import netflixLog from "./src/assets/img/netflix.svg";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

function Header() {
  return (
    <div className="header_outer_container">
      <div className="header_containe">
        <div className="hrader_left">
          <ul>
            {/* <li>
              <img src={netflixLog} alt="netflix.svg" width="100" />
            </li> */}
            <li>Netflix</li>
            <li>Home</li>
            <li>TVshow</li>
            <li>Movies</li>
            <li>Latest</li>
            <li>MyList</li>
            <li>Browse by Languages</li>
          </ul>
        </div>
        <div className="header_right">
          <ul>
            <li>
              <SearchIcon />
            </li>
            <li>
              <NotificationsNoneIcon />
            </li>
            <li>
              <AccountBoxIcon />
            </li>
            <li><ArrowDropDownIcon/></li> 
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Header;
