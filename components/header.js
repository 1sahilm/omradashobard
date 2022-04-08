import React,  { useRef } from 'react';
import Head from 'next/head'
import Image from 'next/image'
import style from "../styles/header/header.module.scss"
import { useDetectOutsideClick } from "./useDetectOutsideClick";
import Link from 'next/link'
// import { useState , useRef } from 'react/cjs/react.production.min';



function Sidebar() {
    const dropdownRef = useRef(null);
  const [isActive, setIsActive] = useDetectOutsideClick(dropdownRef, false);
  const onClick = () => setIsActive(!isActive);
  return (
      
    <div classNameName=" " style={{background:"#31353d"}}>
    <Head>
      <title>Omra Solution</title>
      <meta name="description" content="Generated by create next app" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <div className="row" style={{width:"100%"}}>
        <div className="col-4" > </div>
        <div className="col-4" >      <h1 style={{textAlign:"center",
                                          color:"#fff",
                                          fontSize:"22px",
                                          padding:"15px 0px 1px"
                                            }}>Omra Solution Process</h1></div>
        <div className="col-4" style={{textAlign:"right"}}><div className="menu-container">
        <button onClick={onClick} className="menu-trigger">
          <span>User</span>
          <Image
            src="/image/Avatar.png" 
            width={50}
            height={50}
            alt="User avatar"
          />
        </button>
        <nav
          ref={dropdownRef}
          className={`menu ${isActive ? "active" : "inactive"}`}
        >
          <ul>
            <li>
              <a href="#">My Profile</a>
            </li>
            <li>
              <a href="#">Seeting</a>
            </li>
            <li>
              <Link href="/auth/login">Logout</Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
    </div>
        {/* <div className={style.heading} style={{background:"#31353d"}}>
            <h1>Omra Solution</h1>
        </div> */}

     
    
  </div>
  )
}

export default Sidebar