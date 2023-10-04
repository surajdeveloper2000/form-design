// Function to handle form submission
document.getElementById("myForm").addEventListener("submit", function (event) {
    event.preventDefault();
    const firstname = document.getElementById("firstname").value.trim();
    const lastname = document.getElementById("lastname").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const exampleTextarea = document.getElementById("exampleTextarea").value.trim();
    const formData = {
        firstname,
        lastname,
        email,
        phone,
        exampleTextarea
    };
    const errors = {};
    if (!firstname) {
        errors.firstname = "First Name is required.";
    }
    if (!lastname) {
        errors.lastname = "Last Name is required.";
    }
    if (!email) {
        errors.email = "Email is required.";
    } else if (!isValidEmail(email)) {
        errors.email = "Invalid email format.";
    }
    if (!phone) {
        errors.phone = "Phone is required.";
    } else if (!isValidPhone(phone)) {
        errors.phone = "Invalid phone number format.";
    }
    if (Object.keys(errors).length === 0) {
        console.log("Form data:", formData);
    } else {
        console.log("Validation errors:", errors);
    }
});
function isValidEmail(email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}
function isValidPhone(phone) {
    const phonePattern = /^\d{10}$/;
    return phonePattern.test(phone);
}

// popup container
const myForm = document.getElementById("myForm");
const popupContainer = document.getElementById("popupContainer");
const closePopupButton = document.getElementById("closePopupButton");

function showPopup() {
    popupContainer.style.display = "block";
    document.getElementById('page-wrapper').style.backgroundColor = "rgba(217,217,217,0.50)"; 
    document.getElementById('page-wrapper').style.opacity = "0.5";
}
function closePopup() {
    popupContainer.style.display = "none";
    document.getElementById('page-wrapper').style.backgroundColor = ""; 
    document.getElementById('page-wrapper').style.opacity = "1";

}
myForm.addEventListener("submit", function (event) {
    event.preventDefault();
    showPopup();
    myForm.reset();
});
closePopupButton.addEventListener("click", closePopup);
popupContainer.addEventListener("click", function (event) {
    if (event.target === popupContainer) {
        closePopup();
    }
});