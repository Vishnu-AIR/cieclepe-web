import React from "react";
import  "./index.css";
import arrow from "../../components/assets/Arrow.svg";
import littleStar from "../../components/assets/little-start.svg"
import line from "../../components/assets/hero-line.svg"
import AppBar from "../../components/appbar";
import { Sliding } from "../../components/hero-slider";

export default function Hero() {
  return (
    <>
      
      <div className="hero-bg">
      <AppBar></AppBar>
      
      
       <div  className="landing">
       <div className="hero-content">
          <div  className="inner-hero-head">
          <div
            style={{
              display: "flex",
              alignItems: "flex-start",
              justifyItems: "flex-start",
              flexDirection: "column",
              gap:"0px"
            }}
          >
            <h1  className="hero-heading">Reinventing Renting. <img style={{position:"absolute",right:"-40px",top:"-8px",height:"36px"}}  src={littleStar}/></h1>
            <h1  className="hero-heading"><img className="lineres" src={line}/><span style={{fontStyle:"italic",color:"#1987FB",fontWeight:"800"}}>ZER0</span> security deposits, unlocked</h1>
          </div>
          <div className="hero-para">
            Now move-in into your dream home with ease by just paying
            monthly rent & no security deposit with CirclePe
          </div>
          </div>
          <button className="hero-button">
            <div className="button-text">Get Started</div>
            <img src={arrow}  className="resh" />
          </button>
        
        </div>
        <Sliding/>
       </div>
      </div>
    </>
  );
}
