
// array holds values from the input forms which are appended to certain indices 
// onclick
// [name, email, phone, reason, addInfo, newcustomer?]

// check that all the required information has been entered
// if yes, print out 'thank you, we'll contact you shortly!'

var contactInfo = new Array(0);
var bestContactDays = new Array(0);


/** 
 * when user submits, adds a given value from the form to the array at the provided index
 */
function addInfo(newValue) {
    contactInfo.push(newValue);
}

function getInfo(id) {
    console.log(document.getElementById(id).value);
    return document.getElementById(id).value;
}

function addContactDays() {
    var day;
    var contactDays = document.getElementsByName("contactDay");
    for (let i = 0; i < contactDays.length; i++) {
        if (contactDays[i].checked == true) {
            day = contactDays[i].value;
            bestContactDays.push(day);
        }
    }
}

function addIsNewCustomer() {
    var options = document.getElementsByName("contactDay");
    for (let i = 0; i < 2; i++) {
        if (options[i].checked == true) {
            contactInfo.push(options[i].value);
        }
    }
}

/**
 *  onsubmit the values in the array will be checked to be valid or invalid
 *  returns false if any required values are incomplete
 */
function checkValues() {
    // check that the required fields are completed
    for (let i = 0; i < 4; i++) {
        if (contactInfo[i] == "") {
            return false;
        }
    }
}


function submitContactForm() {
    addInfo(getInfo("nameInputId"));
    addInfo(getInfo("emailInputId"));
    addInfo(getInfo("phoneInputId"));
    addInfo(getInfo("reasonInputId"));
    addInfo(getInfo("addInfoInputId"));
    addIsNewCustomer();
    addContactDays();

    if (checkValues() == false) {
        alert("Please check that all required forms are complete.");
    }
    else {
        alert("Thank you. We'll be in touch with you shortly.")
    }
    for (let p = 0; p < contactInfo.length - 1; p++) {
        console.log(contactInfo[p]);
    }

    for (let i = 0; i < bestContactDays.length; i++) {
        console.log(bestContactDays[i]);
    }
}
