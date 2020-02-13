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
    entryFactory (entry) {
        return {
            "placeId": Number(entry[0]),
            "name": entry[1],
            "description": entry[2],
            "cost": Number(entry[3]),
            "review": entry[4]
        }
    },
    defaultForm () {
        return `
        <fieldset>
        <label for="countrySelect">Country of Interest</label>
        <select name="countrySelect" id="countrySelect">
          <option value="1">Italy</option>
          <option value="2">Switzerland</option>
          <option value="3">France</option>
        </select>
      </fieldset>

      <fieldset>
        <label for="pointName">Point of Interest</label>
        <input
          type="text"
          name="pointName"
          id="pointName"
          placeholder="Where would you like to go?"
        />
      </fieldset>

      <fieldset>
        <label for="description">Description</label>
        <textarea
          name="description"
          id="description"
          placeholder="Describe your interest."
          cols="50"
          rows="3"
        ></textarea>
      </fieldset>

      <fieldset>
        <label for="cost">Cost</label>
        <input
          type="text"
          name="cost"
          id="cost"
          placeholder="How much does it cost?"
        />
      </fieldset>

      <input type="hidden" id="review" value="Not visited yet" />
        `
    },
    defaultButton () {
        return `
        <button type="button" class="blogButton">Blog your point of interest</button>`
    },
    editPageForm (editId) {
        return `
        <h1 id=editHead>You are editing the post for </h1>
        
        <fieldset>
        <label for="cost">Cost</label>
        <input
          type="text"
          name="cost"
          id="cost"
          value=""
        />
        </fieldset>
        
        <fieldset>
        <label for="Review">Review</label>
        <textarea
          name="Review"
          id="Review"
          value=""
          cols="50"
          rows="3"
        ></textarea>
        </fieldset>
        
        <input type="hidden" id="entryId" value="${editId}" />`    
    },
    editButtons () {
        return `
        <button type="button" class="goBackButton">Go Back</button>
        <button type="button" class="updateButton">Update Post</button>`
    },

    myBlog: document.querySelector(".interestBlog"),
    dynamicButtons: document.querySelector("#buttonArea"),
    myDefaultForm: document.querySelector("#pointForm")

}

export default htmlStuff