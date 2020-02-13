import htmlStuff from "./factories.js"

const addToDOM = {
    clearBlog () {
        htmlStuff.myBlog.innerHTML = ""
    },
    
    renderBlog (blogPosts) {
        addToDOM.clearBlog()
        blogPosts.forEach(blogPost => {
            const post = htmlStuff.blogInterest(blogPost)
            htmlStuff.myBlog.innerHTML += post 
        });
    }
}

export default addToDOM;