import API from "./data.js"
import addToDOM from "./blogDOM.js"

API.getBlogPosts().then(addToDOM.renderBlog)