// initialize the count 
let count = 0 

// grab the count from HTML in order to modify
let countEl = document.getElementById("count-el")

//grab the save entries paragraph from HTML to modify
let saveEl = document.getElementById("save-el")

//grab the reset button from HTML to modify
const reset = document.getElementById("reset")

// create a function increment that increase the number when clicking on the button
function increment(){
    // increase the count
    count += 1
    // change the HTML count to display the new count 
    countEl.innerText = count

}
// increment()

// create a save function that save the count when clicking
function save(){
    // create a variable that contains both the count and the dash separator, ie. "12-"
    let saveCount = count + " - "
    //Render the variable in the saveEl using innerText
    saveEl.textContent += saveCount 
    // Reset the count to zero 
    countEl.textContent= 0
    
}

// listent to the click to reset the count
reset.addEventListener("click", function(){
        saveEl.textContent = "People Entries: "
})





 