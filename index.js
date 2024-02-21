let todoList = [];
let todoDisplay = document.querySelector("#to-do")
let todoBox = document.querySelector("#to-do-box");
let addButton = document.querySelector("#add");
let clearButton = document.querySelector("#clear");

//linked to button for deleting individual items
function deleteParent(self) {
    self.parentElement.remove();
}


addButton.addEventListener('click', function () {
    todoList.push(todoBox.value);
    console.log(todoList);
    //create HTML element
    let addItem = document.createElement("li");
    //add button to delete each item
    addItem.innerHTML = "<button class='delete' onclick='deleteParent(this)'>✔️</button> " + todoList[todoList.length - 1];
    //append child to section
    todoDisplay.appendChild(addItem);
    todoBox.value = ""; //reset input box value to blank
    return todoList;
}, false);

todoBox.addEventListener("keypress", function (event) {
    // If the user presses the "Enter" key on the keyboard
    if (event.key === "Enter") {
        // Cancel the default action, if needed
        event.preventDefault();
        // Trigger the button element with a click
        addButton.click();
    }
});


clearButton.addEventListener('click', function () {
    todoList.length = 0;
    todoDisplay.innerHTML = "";
}, false);

//make them draggable/reorder-able?
//make some kind of beautiful animated pop-up happen when you check something
//make it over the top reassuring 'you big handsome man you' etc
