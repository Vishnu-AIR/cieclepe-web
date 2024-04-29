import React from "react";
import "./index.css";
import logo from "../assets/logo_cp.svg"
import { RxHamburgerMenu } from "react-icons/rx";


export default function AppBar() {
  return (
    <>
      <div className="header-desktop">
        <div className="inner">
          {/* <div>img</div> */}
          <img style={{height:"40px"}} src={logo}/>
          <div className="bf">
            <span className="ab">For LandLords</span>
            <span className="ab">For tenants</span>
            <span className="ab">About us</span>
            <div className="hb">
                <span className="hbt">Login / SignUp</span>
            </div>
          </div>
          <RxHamburgerMenu className="ham"/>
        </div>
      </div>
    </>
  );
}
