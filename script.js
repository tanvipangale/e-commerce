// STEP NAVIGATION
function showStep(stepNumber) {
    document.querySelectorAll('.step').forEach(step => {
        step.classList.remove('active');
    });

    if (stepNumber === "signIn") {
        document.getElementById('stepSignIn').classList.add('active');
    } else {
        document.getElementById(`step${stepNumber}`).classList.add('active');
    }
}

function nextStep(stepNumber) {
    showStep(stepNumber);
}

function prevStep(stepNumber) {
    showStep(stepNumber);
}

function goToSignIn() {
    showStep("signIn");
}


// CARD SELECT
function selectCard(card) {
    document.querySelectorAll('.card').forEach(c => c.classList.remove('selected'));
    card.classList.add('selected');
}


// ERROR HANDLING
function showError(input, message) {
    input.style.borderColor = "red";

    let error = input.nextElementSibling;
    if (!error || !error.classList.contains("error-msg")) {
        error = document.createElement("div");
        error.className = "error-msg";
        error.style.color = "red";
        error.style.fontSize = "12px";
        error.style.marginTop = "5px";
        input.after(error);
    }

    error.innerText = message;
}

function clearError(input) {
    input.style.borderColor = "#ddd";

    let error = input.nextElementSibling;
    if (error && error.classList.contains("error-msg")) {
        error.remove();
    }
}


// VALIDATION FUNCTIONS
function validateStep2() {
    let isValid = true;

    const name = document.getElementById("fullName");
    const email = document.getElementById("email");

    clearError(name);
    clearError(email);

    // Name
    if (name.value.trim() === "") {
        showError(name, "Name is required");
        isValid = false;
    } else if (name.value.trim().length < 3) {
        showError(name, "Minimum 3 characters");
        isValid = false;
    }

    // Email
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    if (email.value.trim() === "") {
        showError(email, "Email is required");
        isValid = false;
    } else if (!email.value.match(emailPattern)) {
        showError(email, "Invalid email format");
        isValid = false;
    }

    return isValid;
}


function validateStep3() {
    let isValid = true;

    const bvn = document.getElementById("bvnNumber");

    clearError(bvn);

    if (bvn.value.trim() === "") {
        showError(bvn, "BVN is required");
        isValid = false;
    } else if (!/^[0-9]{11}$/.test(bvn.value)) {
        showError(bvn, "BVN must be 11 digits");
        isValid = false;
    }

    return isValid;
}


// LOGIN VALIDATION
function handleLogin() {
    const email = document.getElementById("loginEmail");
    const password = document.getElementById("loginPassword");

    clearError(email);
    clearError(password);

    let isValid = true;

    if (!email.value.includes("@")) {
        showError(email, "Enter valid email");
        isValid = false;
    }

    if (password.value.length < 6) {
        showError(password, "Password must be at least 6 characters");
        isValid = false;
    }

    if (!isValid) {
        alert("Please fill all details properly");
        return;
    }

    alert("Login successful");
}


// FINAL SUBMIT
function submitData() {
    alert("Form submitted successfully");
}


// REAL-TIME VALIDATION + BUTTON CONTROL
document.addEventListener("DOMContentLoaded", () => {

    const name = document.getElementById("fullName");
    const email = document.getElementById("email");
    const bvn = document.getElementById("bvnNumber");
    const loginEmail = document.getElementById("loginEmail");
    const password = document.getElementById("loginPassword");

    // Name
    name.addEventListener("input", () => {
        if (name.value.trim().length < 3) {
            showError(name, "Minimum 3 characters");
        } else {
            clearError(name);
        }
    });

    // Email
    email.addEventListener("input", () => {
        const pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

        if (!email.value.match(pattern)) {
            showError(email, "Invalid email format");
        } else {
            clearError(email);
        }
    });

    // BVN
    bvn.addEventListener("input", () => {
        if (!/^[0-9]{11}$/.test(bvn.value)) {
            showError(bvn, "Must be 11 digits");
        } else {
            clearError(bvn);
        }
    });

    // Login email
    loginEmail.addEventListener("input", () => {
        if (!loginEmail.value.includes("@")) {
            showError(loginEmail, "Invalid email");
        } else {
            clearError(loginEmail);
        }
    });

    // Password
    password.addEventListener("input", () => {
        if (password.value.length < 6) {
            showError(password, "Min 6 characters");
        } else {
            clearError(password);
        }
    });


    // STEP 2 BUTTON
    document.getElementById("step2Btn").addEventListener("click", (e) => {
        e.preventDefault();

        if (validateStep2()) {
            nextStep(3);
        } else {
            alert("Please fill all details properly");
        }
    });


    // STEP 3 BUTTON
    document.getElementById("step3Btn").addEventListener("click", (e) => {
        e.preventDefault();

        if (validateStep3()) {
            submitData();
        } else {
            alert("Please fill all details properly");
        }
    });

});
