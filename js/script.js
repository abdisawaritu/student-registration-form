// =====================================================
// STUDENT REGISTRATION FORM
// DOM MANIPULATION
// =====================================================

// =====================================================
// 1. SELECT IMPORTANT ELEMENTS
// =====================================================

const registrationForm = document.getElementById("registrationForm");

const firstName = document.getElementById("firstName");

const middleName = document.getElementById("middleName");

const lastName = document.getElementById("lastName");

const email = document.getElementById("email");

const phone = document.getElementById("phone");

const dateOfBirth = document.getElementById("dateOfBirth");

const country = document.getElementById("country");

const department = document.getElementById("department");

const academicYear = document.getElementById("academicYear");

const semester = document.getElementById("semester");

const username = document.getElementById("username");

const password = document.getElementById("password");

const confirmPassword = document.getElementById("confirmPassword");

const studentPhoto = document.getElementById("studentPhoto");

const address = document.getElementById("address");

const comments = document.getElementById("comments");

const terms = document.getElementById("terms");

const submitButton = document.getElementById("submitButton");

const resetButton = document.getElementById("resetButton");

const formMessage = document.getElementById("formMessage");

// =====================================================
// 2. TEXT CONTENT MANIPULATION
// =====================================================

firstName.addEventListener("input", function () {
  if (firstName.value.length > 0) {
    formMessage.textContent = "You are entering your first name.";
  } else {
    formMessage.textContent = "";
  }
});

// =====================================================
// 3. CLASSLIST MANIPULATION
// =====================================================

firstName.addEventListener("input", function () {
  if (firstName.value.trim() === "") {
    firstName.classList.add("is-invalid");

    firstName.classList.remove("is-valid");
  } else {
    firstName.classList.remove("is-invalid");

    firstName.classList.add("is-valid");
  }
});

// =====================================================
// 4. EMAIL CLASS MANIPULATION
// =====================================================

email.addEventListener("input", function () {
  if (email.value.trim() === "") {
    email.classList.add("is-invalid");

    email.classList.remove("is-valid");
  } else {
    email.classList.remove("is-invalid");

    email.classList.add("is-valid");
  }
});

// =====================================================
// 5. SHOW / HIDE FORM MESSAGE
// =====================================================

formMessage.classList.add("d-none");

function showMessage(message, type) {
  formMessage.textContent = message;

  formMessage.classList.remove(
    "d-none",
    "text-success",
    "text-danger",
    "text-warning",
  );

  if (type === "success") {
    formMessage.classList.add("text-success");
  }

  if (type === "error") {
    formMessage.classList.add("text-danger");
  }

  if (type === "warning") {
    formMessage.classList.add("text-warning");
  }
}

// =====================================================
// 6. SHOW MESSAGE WHEN COUNTRY CHANGES
// =====================================================

country.addEventListener("change", function () {
  if (country.value !== "") {
    showMessage("Country selected: " + country.value, "success");
  }
});

// =====================================================
// 7. CHANGE INPUT ATTRIBUTE
// =====================================================

password.addEventListener("focus", function () {
  password.setAttribute("data-active", "true");

  console.log("Password data-active:", password.getAttribute("data-active"));
});

password.addEventListener("blur", function () {
  password.removeAttribute("data-active");
});

// =====================================================
// 8. DISABLE / ENABLE SUBMIT BUTTON
// =====================================================

terms.addEventListener("change", function () {
  if (terms.checked) {
    submitButton.disabled = false;

    showMessage("You accepted the terms. You can submit the form.", "success");
  } else {
    submitButton.disabled = true;

    showMessage("Please accept the terms before submitting.", "warning");
  }
});

// =====================================================
// 9. SUBMIT BUTTON INITIAL STATE
// =====================================================

submitButton.disabled = true;

// =====================================================
// 10. FORM SUBMISSION
// =====================================================

registrationForm.addEventListener("submit", function (event) {
  event.preventDefault();

  // ---------------------------------------------
  // READ VALUES
  // ---------------------------------------------

  const firstNameValue = firstName.value.trim();

  const lastNameValue = lastName.value.trim();

  const emailValue = email.value.trim();

  const departmentValue = department.value;

  // ---------------------------------------------
  // BASIC CHECK
  // ---------------------------------------------

  if (
    firstNameValue === "" ||
    lastNameValue === "" ||
    emailValue === "" ||
    departmentValue === ""
  ) {
    showMessage("Please complete the required fields.", "error");

    return;
  }

  // ---------------------------------------------
  // MANIPULATE THE DOM
  // ---------------------------------------------

  showMessage("Student registration submitted successfully!", "success");

  // Change button text

  submitButton.textContent = "Registration Submitted";

  // Disable button after submission

  submitButton.disabled = true;

  // Add Bootstrap styling

  submitButton.classList.add("btn-success");

  submitButton.classList.remove("btn-primary");
});

// =====================================================
// 11. RESET EVENT
// =====================================================

registrationForm.addEventListener("reset", function () {
  setTimeout(function () {
    // Remove validation classes

    firstName.classList.remove("is-valid", "is-invalid");

    email.classList.remove("is-valid", "is-invalid");

    // Hide message

    formMessage.classList.add("d-none");

    // Restore button

    submitButton.disabled = true;

    submitButton.textContent = "Submit Registration";

    submitButton.classList.remove("btn-success");

    submitButton.classList.add("btn-primary");
  }, 0);
});

// =====================================================
// 12. PASSWORD SHOW / HIDE
// =====================================================

const passwordToggle = document.getElementById("passwordToggle");

if (passwordToggle) {
  passwordToggle.addEventListener("click", function () {
    if (password.type === "password") {
      password.type = "text";

      passwordToggle.textContent = "Hide Password";
    } else {
      password.type = "password";

      passwordToggle.textContent = "Show Password";
    }
  });
}

// =====================================================
// 13. FILE NAME DISPLAY
// =====================================================

studentPhoto.addEventListener("change", function () {
  if (studentPhoto.files.length > 0) {
    const fileName = studentPhoto.files[0].name;

    showMessage("Selected photo: " + fileName, "success");
  }
});
