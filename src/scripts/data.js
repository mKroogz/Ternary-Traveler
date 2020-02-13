//API Object
const API = {
    getBlogPosts() {
        return fetch("http://localhost:8088/interests?_expand=place")
            .then(response => response.json())
    },
    createInterest(newBlogPost) {
        return fetch("http://localhost:8088/interests", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newBlogPost)
        })
    },
    deleteInterest(id){
        return fetch(`http://localhost:8088/interests/${id}`, {
            method: "DELETE"
        })
    },
    editInterest(updatedObject, id){
        fetch(`http://localhost:8088/interests/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(updatedObject)
    })
    .then(res => res.json())
    .then(() => {
        document.querySelector("#entryId").value = ""
    })
    }
}

export default API