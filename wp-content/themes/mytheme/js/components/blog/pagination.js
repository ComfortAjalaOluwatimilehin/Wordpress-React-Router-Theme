import React,{Component} from "react"
import CIRCLEBUTTON from "../resuse-circle-arrow"
import CONFIG from "../../config"


const PAGINATION = ({next, before})=>{
        return (
          <div className="pagination">
                  <CIRCLEBUTTON backColor="#0b1637" arrow={CONFIG.webspace + CONFIG.pre_url + "/img/prev.png"} onClick={before}/>
                  <CIRCLEBUTTON backColor="#0b1637" arrow={CONFIG.webspace + CONFIG.pre_url + "/img/next.png"} onClick={next}/>
          </div>
        )
}


export default PAGINATION
