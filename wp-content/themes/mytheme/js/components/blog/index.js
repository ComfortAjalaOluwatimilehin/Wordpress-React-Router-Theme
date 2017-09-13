import React, {Component} from "react"
import API from "../../api"
import POST_LISTS from "./post-list"

class Blog extends Component{

  constructor(props) {
          super(props);
          this.state = {
            posts:[]
          };
}

componentWillMount(){
  var that = this
    API.GET_POSTS()
    .then(res=>{
          that.setState({posts: res.data})
    })
    .catch(error=>{ console.error(error)})
}

      render(){
          const postexists = this.state.posts.length > 0
            return (

              <div className="blog">
                    {postexists? <POST_LISTS posts={this.state.posts} />:null}
              </div>
            )
      }
}


export default Blog
