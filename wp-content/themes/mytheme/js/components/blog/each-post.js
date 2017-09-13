import React, {Component} from "react"



const EACH_POST = ({post, status})=>{
        var empty = status == "after-post" || "before-post"

        return (


                <li className={"each-post" + " " + status}>
                    <h4 dangerouslySetInnerHTML={{ __html: post.title.rendered}}></h4>
                    <content  dangerouslySetInnerHTML={{ __html: post.excerpt.rendered}}></content>
              </li>
        )
}



export default EACH_POST
