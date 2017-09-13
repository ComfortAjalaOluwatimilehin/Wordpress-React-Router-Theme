import React,{Component } from "react"
import EACH_POST from "./each-post"
import PAGINATION from "./pagination"
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
  require("../../../sass/blog/blog")
class POSTLIST extends Component{

  constructor(props) {
          super(props);
          var  currentView = this.props.posts[0], afterView
          if(this.props.posts.length > 1){afterView = this.props.posts[1]  }
          else afterView = null
          this.state = {currentView, afterView, beforeView:null};
  }
  isCurrentView(post){return post == this.state.currentView}
  isBeforePost(post){return post == this.state.beforeView}
  isAfterPost(post){return post == this.state.afterView}
  nextButton(){
    var nextPost = this.state.afterView,current =this.state.currentView, before = this.state.beforeView
    if(nextPost){
      var temp = this.state.currentView,
      after = this.getTargetPost(this,nextPost, "next")
      current = nextPost
      before = temp
      this.setState({currentView:current, afterView:after, beforeView:before})
    }
  }
  beforeButton(){
      var nextPost = this.state.afterView,current =this.state.currentView, beforePost = this.state.beforeView
      if(beforePost){
            var temp = this.state.currentView,
            before =this.getTargetPost(this,beforePost, "before")
            current = beforePost
            nextPost = temp
            this.setState({currentView:current, afterView:nextPost, beforeView:before})
      }
  }
getIndex(posts, nextpost){
    var found = false
  posts.forEach((post,index)=> {if(post == nextpost){found = index}  })
  return found
}
  getTargetPost(that,nextpost, cond){
    var index = that.getIndex(that.props.posts, nextpost)
    if(cond == "next" &&  index){
        var n = index + 1 + ""
        var target = n in that.props.posts ? that.props.posts[n]: null
        return target
    }
    else if(cond == "before" && index){
      var n = index - 1 + ""
      var target = n in that.props.posts ? that.props.posts[n]: null
      return target
    }
    return null;
  }
      render(){
        var that = this;
        return(


          <div>
          <ul className="post-list">

                {this.props.posts.map((post, key)=>{
                  var status = null
                    if( this.isBeforePost(post))
                      status ="before-post"
                    else if(this.isAfterPost(post))
                      status = "after-post"
                    else if(this.isCurrentView(post))
                      status = "current-view-post"
                    return   status == null ? status :<EACH_POST key={key} post={post} status={status}/>
                })}
          </ul>
            <PAGINATION  next={this.nextButton.bind(this)} before={this.beforeButton.bind(this)}/>
          </div>
        )


      }
}

export default POSTLIST;
