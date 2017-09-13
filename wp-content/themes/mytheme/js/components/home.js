import React, {Component} from "react"
import {render} from "react-dom"
import CONFIG from "../config"

const Home = ()=>{

    return <div>
            <img src={CONFIG.pre_url + "/img/namecurve.png"}/>
            <img src={CONFIG.pre_url + "/img/profile-pic.png"}  id="profile-pic"/>
    </div>
}



export default Home
