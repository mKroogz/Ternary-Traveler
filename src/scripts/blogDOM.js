import htmlStuff from "./factories.js"
import eventHandlers from "./events.js"

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
        addToDOM.clearBlog()
        htmlStuff.myForm.innerHTML = htmlStuff.editPageForm(editId)
        htmlStuff.dynamicButtons.innerHTML = htmlStuff.editButtons()
    }
}

export default addToDOM;