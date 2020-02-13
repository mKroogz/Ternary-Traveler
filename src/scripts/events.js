import API from "./data.js"
import htmlStuff from "./factories.js"
import addToDOM from "./blogDOM.js"

const eventHandlers = {
  postToBlog() {
    const countryOfInterest = document.querySelector("#countrySelect");
    const POI = document.querySelector("#pointName");
    const description = document.querySelector("#description");
    const costToVisit = document.querySelector("#cost");
    const reviewText = document.querySelector("#review")
    const values = [
      countryOfInterest.value,
      POI.value,
      description.value,
      costToVisit.value,
      reviewText.value
    ];
    let inputChecker = 0;
    for (let i = 0; i < values.length; i++) {
      if (values[i] !== "") {
        inputChecker++;
      }
    }
    if (inputChecker === values.length) {
      const entryObj = htmlStuff.entryFactory(values);
      API.createInterest(entryObj).then(API.getBlogPosts).then(addToDOM.renderBlog)
    } else {
      alert("At least one of your input fields are empty");
    }
  },
  startDefaultButton() {
    const saveButton = document.querySelector(".blogButton")
    saveButton.addEventListener("click", this.postToBlog)    
  },
  entryEventListener () {
    const entryList = document.querySelector(".interestBlog")
    entryList.addEventListener("click", this.deleteOrEditBlogPost)
  },
  deleteOrEditBlogPost (event) {
    if (event.target.id.startsWith("deleteEntry--")) {
        const entryId = event.target.id.split("--")[1]
        API.deleteInterest(entryId)
            .then(() => {
                document.querySelector(".interestBlog").removeEventListener("click", this.deleteOrEditBlogPost)
                document.querySelector(".blogButton").removeEventListener("click", this.postToBlog)
            }).then(API.getBlogPosts).then(addToDOM.renderBlog)
    } else if (event.target.id.startsWith("editEntry--")) {
        const entryId = event.target.id.split("--")[1]
        const numberId = Number(entryId)
        document.querySelector(".interestBlog").removeEventListener("click", this.deleteOrEditBlogPost)
        document.querySelector(".blogButton").removeEventListener("click", this.postToBlog)
        editBlogPost(numberId)
    }
}
};

export default eventHandlers