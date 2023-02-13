
const saveButton = document.querySelector("#save-for-later-btn");
const alertBox = document.querySelector(".alert");



saveButton.onclick = event => {
    event.preventDefault();
    data = getFormData();
    localStorage.setItem(formIdentifier, JSON.stringify(data[formIdentifier]));
    const message = "Form draft has been saved!";
    displayAlert(message);
};

const displayAlert = message => {
    alertBox.innerText = message; // add the message into the alert box
    alertBox.style.display = "block"; // make the alert box visible
    setTimeout(function () {
        alertBox.style.display = "none"; // hide the alert box after 1 second
    }, 1000);
};

const populateForm = () => {
    if (localStorage.key(formIdentifier)) {
        const savedData = JSON.parse(localStorage.getItem(formIdentifier)); // get and parse the saved data from localStorage
        for (const element of formElements) {
            if (element.name in savedData) {
                element.value = savedData[element.name];
            }
        }
        const message = "Form has been refilled with saved data!";
        displayAlert(message);
    }
};

document.onload = populateForm(); // populate the form when the document is loaded
        // JavaScript to display items in the "Save for later" folder
        // for (let i = 0; i < localStorage.length; i++) {
        //     let itemName = localStorage.key(i);
        //     let itemValue = localStorage.getItem(itemName);
        //     //document.getElementById("saved-items").innerHTML += "<div>" + itemName + ": " + itemValue + "</div>";
        // }


