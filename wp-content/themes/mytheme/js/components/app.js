import React, {Component} from "react"
import {Route, BrowserRouter } from "react-router-dom"
import {render} from "react-dom"
import Navigation from "./navigation"
import About from "./about/index"
import Contact from "./contact/index"
import More from "./more/index"
import Blog from "./blog/index"
import Home from "./home"
const pre_path = "/julycomfort"
const APP = ()=>{


        return (

          <BrowserRouter>
                <content>
                      <section>
                            <Route path={pre_path + "/"} exact={true} component={Home}/>
                            <Route path={pre_path + "/blog"} exact={true} component={Blog} />
                            <Route path={pre_path + "/about" }exact={true} component={About} />
                            <Route path={pre_path + "/contact"} exact={true} component={Contact}/>
                            <Route path={pre_path + "/more"} exact={true} component={More} />
                      </section>
                      <Navigation />
                </content>
          </BrowserRouter>
        )
}


render(<APP/>, document.getElementById("container"))
