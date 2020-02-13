import htmlStuff from "./factories.js"
import eventHandlers from "./events.js"
import API from "./data.js"

const addToDOM = {
    clearBlog () {
        htmlStuff.myBlog.innerHTML = ""
    },
    renderBlog (blogPosts) {
        addToDOM.renderDefaultForm()
        addToDOM.clearBlog()
        blogPosts.forEach(blogPost => {
            const post = htmlStuff.blogInterest(blogPost)
            htmlStuff.myBlog.innerHTML += post 
        });
        eventHandlers.entryEventListener()
    },
    renderDefaultForm () {
        htmlStuff.myForm.innerHTML = htmlStuff.defaultForm()
        htmlStuff.dynamicButtons.innerHTML = htmlStuff.defaultButton()
        eventHandlers.startDefaultButton()
    },
    renderEditPage (editId) {
        const editValues = ["","","","",""]
        addToDOM.clearBlog()
        htmlStuff.myForm.innerHTML = htmlStuff.editPageForm(editId)
        htmlStuff.dynamicButtons.innerHTML = htmlStuff.editButtons()
        API.getBlogPosts().then(posts => {
            posts.forEach(post => {
                if (post.id === editId) {
                    editValues[0] = post.placeId
                    editValues[1] = post.name
                    editValues[2] = post.description
                    editValues[3] = post.cost
                    editValues[4] = post.review
                    document.querySelector("#editHead").innerHTML += post.name
                }
            })
        })
    }
}

export default addToDOM;