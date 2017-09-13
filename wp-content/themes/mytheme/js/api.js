import axios from "axios"
import CONFIG from "./config"
var API = {}



API.GET_POSTS = ()=>{

      return axios.get(CONFIG.webspace + "/wp-json/wp/v2/posts")
}

export default API
