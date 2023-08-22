import React from "react";
import "./FooterStyle.css";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import PinterestIcon from "@mui/icons-material/Pinterest";
import RoomIcon from '@mui/icons-material/Room';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import MailOutlineIcon from '@mui/icons-material/MailOutline';

const BottomFooter = () => {
  return (
    <>
      <footer class="footer_section">
        <div class="container">
          <div class="row">
            <div class="col-md-4 footer-col">
              <div class="footer_contact">
                <h4>Contact Us</h4>
                <div class="contact_link_box">
                  <a href="">
                    <RoomIcon/>
                    <span> Location </span>
                  </a>
                  <a href="">
                <LocalPhoneIcon/>
                    <span> Call +01 1234567890 </span>
                  </a>
                  <a href="">
                    <MailOutlineIcon/>
                    <span> demo@gmail.com </span>
                  </a>
                </div>
              </div>
            </div>
            <div class="col-md-4 footer-col">
              <div class="footer_detail">
                <a href="" class="footer-logo">
                  {" "}
                  Feane{" "}
                </a>
                <p>
                  Necessary, making this the first true generator on the
                  Internet. It uses a dictionary of over 200 Latin words,
                  combined with
                </p>
                <div class="footer_social">
                  <a className="ftr-icn">
                    <FacebookIcon />
                  </a>
                  <a className="ftr-icn">
                    <TwitterIcon />
                  </a>
                  <a className="ftr-icn">
                    <LinkedInIcon />
                  </a>
                  <a className="ftr-icn">
                    <InstagramIcon />
                  </a>
                  <a className="ftr-icn">
                    <PinterestIcon />
                  </a>
                </div>
              </div>
            </div>
            <div class="col-md-4 footer-col">
              <h4>Opening Hours</h4>
              <p>Everyday</p>
              <p>10.00 Am -10.00 Pm</p>
            </div>
          </div>
          <div class="footer-info">
            <p>
              &copy; <span id="displayYear"></span> All Rights Reserved By
              <a href="https://html.design/">Free Html Templates</a>
              <br />
              <br />
              &copy; <span id="displayYear"></span> Distributed By
              <a href="https://themewagon.com/" target="_blank">
                ThemeWagon
              </a>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default BottomFooter;
