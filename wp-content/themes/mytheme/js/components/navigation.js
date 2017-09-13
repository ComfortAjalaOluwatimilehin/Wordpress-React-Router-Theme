import React, {Component} from "react"
import {NavLink} from "react-router-dom"



const pre_path = "/julycomfort"
const activeClassName = "active-link"

class Navigation extends Component{



      render(){


              return (


                      <nav>
                            <ul>
                              <NavLink to= {pre_path +"/"}  exact={true} activeClassName={activeClassName}>home</NavLink>
                              <NavLink to={pre_path + "/blog"} activeClassName={activeClassName}>blog</NavLink>
                                <NavLink to= {pre_path +"/about"} activeClassName={activeClassName}>about</NavLink>
                                <NavLink to={pre_path + "/contact"} activeClassName={activeClassName}>contact</NavLink>
                                <NavLink to={pre_path + "/more"} activeClassName={activeClassName}>more</NavLink>
                            </ul>

                      </nav>
              )
      }
}




export default Navigation
