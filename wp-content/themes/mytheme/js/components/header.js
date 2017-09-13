import  React, {Component} from "react"
import {render} from "react-dom"


class Header extends Component {


    render(){


            return (


                  <div  id="main-header"><p>Search</p></div>
            )
    }
}



render(<Header />, document.querySelector("header"))
