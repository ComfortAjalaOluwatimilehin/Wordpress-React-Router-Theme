import React, {Component} from "react"




const CIRCLEBUTTON = ({backColor, arrow, onClick})=>{return <div className="CIRCLEBUTTON" style={{backgroundColor:backColor}} onClick={onClick}><img src={arrow} /></div>}


export default CIRCLEBUTTON
