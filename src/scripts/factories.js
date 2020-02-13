const htmlStuff = {
    element (comp, text, classes) { return `<${comp} class="${classes}">${text}</${comp}>`},
    
    blogInterest (interest) {
        return `
        <section class="jEntry">
        ${this.element("div", `Point of Interest:  ${interest.name}`, "POI")}
        ${this.element("div", `Country of Interest:  ${interest.place.name}`, "countryOfPlace")}
        ${this.element("div", `Description:  ${interest.description}`, "descriptionOfPOI")}
        ${this.element("div", `Cost:  ${interest.cost}`, "costOfPOI")}
        ${this.element("div", `Review:  ${interest.review}`, "myReview")}
        <button type="button" class="deleteButton" id="deleteEntry--${interest.id}">Delete</button>
        <button type="button" class="editButton" id="editEntry--${interest.id}">Edit</button>
        </section>`
    },

    myBlog: document.querySelector(".interestBlog")

}

export default htmlStuff