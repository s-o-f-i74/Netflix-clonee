import React from 'react'
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import "./footer.css"

function Footer() {
  return (
    <div className="footer_outre_container">
      <div className="footer_inner_container">
        <div className="footer_icons">
          <FacebookOutlinedIcon />
          <InstagramIcon />
          <YouTubeIcon />
        </div>
        <div className="footer_data">
          <div>
            <ul>
              <li>Audio Description</li>
              <li>Investor Relations</li>
              <li>Legal Notice</li>
            </ul>
          </div>
          <div>
            <ul>
              <li>Help Center</li>
              <li>Jobs</li>
              <li>cookie perferences</li>
            </ul>
          </div>
          <div>
            <ul>
              <li>Gift cards</li>
              <li>Terms of use</li>
              <li>corporate Information</li>
            </ul>
          </div>
          <div>
            <ul>
              <li>Media Center</li>
              <li>Privacy</li>
              <li>Contact us</li>
            </ul>
          </div>
        </div>
        <div className="service_code">
          <p>service Code</p>
        </div>
        <div className="copy_write">
          &copy; 1997-2024 Netflix, Inc.
    
        </div>
      </div>
    </div>
  );
}

export default Footer