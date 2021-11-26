const firstName = document.querySelector("#first")
const lastName = document.querySelector("#last")
const email = document.querySelector("#email")
const phone = document.querySelector("#phone")
const branch = document.querySelector("#branch")
const prn = document.querySelector("#prn")

document.registrationForm.addEventListener("submit", (e) => {
    if (!document.registrationForm.checkValidity()) {
        console.log(document.registrationForm.checkValidity());
        e.preventDefault();
        e.stopPropagation();
        console.log("bad");
    } else {
        alert("Registration Successfull!")
    }
})

document.querySelectorAll("input").forEach((element) => {
    element.addEventListener("focus", (e) => {
        if (e.target.checkValidity()) {
            e.target.classList.remove("is-invalid")
            e.target.classList.add("is-valid")
            document.registrationForm.classList.add("border-success")
            document.registrationForm.classList.add("border-danger")
        } else {
            e.target.classList.add("is-invalid")
            e.target.classList.remove("is-valid")
            document.registrationForm.classList.add("border-danger")
            document.registrationForm.classList.remove("border-success")
        }
    })
})

document.querySelectorAll("input").forEach((element) => {
    element.addEventListener("blur", (e) => {
        if (e.target.checkValidity()) {
            e.target.classList.remove("is-invalid")
            e.target.classList.add("is-valid")
            document.registrationForm.classList.add("border-success")
            document.registrationForm.classList.remove("border-danger")
        } else {
            e.target.classList.add("is-invalid")
            e.target.classList.remove("is-valid")
            document.registrationForm.classList.add("border-danger")
            document.registrationForm.classList.remove("border-success")
        }
    })
})

document.querySelectorAll("input").forEach((element) => {
    element.addEventListener("keyup", (e) => {
        if (e.target.checkValidity()) {
            e.target.classList.remove("is-invalid")
            e.target.classList.add("is-valid")
            document.registrationForm.classList.add("border-success")
            document.registrationForm.classList.remove("border-danger")
        } else {
            e.target.classList.add("is-invalid")
            e.target.classList.remove("is-valid")
            document.registrationForm.classList.add("border-danger")
            document.registrationForm.classList.remove("border-success")
        }
    })
})
