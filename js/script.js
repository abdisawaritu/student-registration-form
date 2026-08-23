// =====================================================
// STUDENT REGISTRATION FORM
// FORM VALIDATION
// =====================================================

// =====================================================
// 1. SELECT FORM ELEMENTS
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

const passwordToggle = document.getElementById("passwordToggle");

// =====================================================
// 2. HELPER FUNCTIONS
// =====================================================

// Show error message

function showError(input, message) {
  input.classList.add("is-invalid");
  input.classList.remove("is-valid");

  const feedback = input.parentElement.querySelector(".invalid-feedback");

  if (feedback) {
    feedback.textContent = message;
  }
}

// Show valid state

function showValid(input) {
  input.classList.remove("is-invalid");
  input.classList.add("is-valid");
}

// Remove validation state

function clearValidation(input) {
  input.classList.remove("is-invalid", "is-valid");
}

// =====================================================
// 3. NAME VALIDATION
// =====================================================

function validateName(input, fieldName) {
  const value = input.value.trim();

  if (value === "") {
    showError(input, `${fieldName} is required.`);

    return false;
  }

  // Only letters and spaces

  const namePattern = /^[A-Za-zÀ-ÖØ-öø-ÿ\s]+$/;

  if (!namePattern.test(value)) {
    showError(input, `${fieldName} can contain letters and spaces only.`);

    return false;
  }

  if (value.length < 2) {
    showError(input, `${fieldName} must contain at least 2 characters.`);

    return false;
  }

  showValid(input);

  return true;
}

// =====================================================
// 4. EMAIL VALIDATION
// =====================================================

function validateEmail() {
  const value = email.value.trim();

  if (value === "") {
    showError(email, "Email is required.");

    return false;
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailPattern.test(value)) {
    showError(email, "Please enter a valid email address.");

    return false;
  }

  showValid(email);

  return true;
}

// =====================================================
// 5. PHONE VALIDATION
// =====================================================

function validatePhone() {
  const value = phone.value.trim();

  if (value === "") {
    showError(phone, "Phone number is required.");

    return false;
  }

  const phonePattern = /^\+?[0-9\s-]{9,15}$/;

  if (!phonePattern.test(value)) {
    showError(phone, "Please enter a valid phone number.");

    return false;
  }

  showValid(phone);

  return true;
}

// =====================================================
// 6. SELECT VALIDATION
// =====================================================

function validateSelect(input, fieldName) {
  if (input.value === "") {
    showError(input, `Please select ${fieldName}.`);

    return false;
  }

  showValid(input);

  return true;
}

// =====================================================
// 7. USERNAME VALIDATION
// =====================================================

function validateUsername() {
  const value = username.value.trim();

  if (value === "") {
    showError(username, "Username is required.");

    return false;
  }

  if (value.length < 4) {
    showError(username, "Username must contain at least 4 characters.");

    return false;
  }

  const usernamePattern = /^[A-Za-z0-9_]+$/;

  if (!usernamePattern.test(value)) {
    showError(
      username,
      "Username can contain letters, numbers, and underscore only.",
    );

    return false;
  }

  showValid(username);

  return true;
}

// =====================================================
// 8. PASSWORD VALIDATION
// =====================================================

function validatePassword() {
  const value = password.value;

  if (value === "") {
    showError(password, "Password is required.");

    return false;
  }

  if (value.length < 8) {
    showError(password, "Password must contain at least 8 characters.");

    return false;
  }

  const upperCase = /[A-Z]/;

  const lowerCase = /[a-z]/;

  const number = /[0-9]/;

  if (!upperCase.test(value) || !lowerCase.test(value) || !number.test(value)) {
    showError(
      password,
      "Password must contain uppercase, lowercase, and a number.",
    );

    return false;
  }

  showValid(password);

  return true;
}

// =====================================================
// 9. CONFIRM PASSWORD VALIDATION
// =====================================================

function validateConfirmPassword() {
  const value = confirmPassword.value;

  if (value === "") {
    showError(confirmPassword, "Please confirm your password.");

    return false;
  }

  if (value !== password.value) {
    showError(confirmPassword, "Passwords do not match.");

    return false;
  }

  showValid(confirmPassword);

  return true;
}

// =====================================================
// 10. DATE VALIDATION
// =====================================================

function validateDate() {
  if (dateOfBirth.value === "") {
    showError(dateOfBirth, "Date of birth is required.");

    return false;
  }

  const selectedDate = new Date(dateOfBirth.value);

  const today = new Date();

  if (selectedDate > today) {
    showError(dateOfBirth, "Date of birth cannot be in the future.");

    return false;
  }

  showValid(dateOfBirth);

  return true;
}

// =====================================================
// 11. ADDRESS VALIDATION
// =====================================================

function validateAddress() {
  const value = address.value.trim();

  if (value === "") {
    showError(address, "Address is required.");

    return false;
  }

  if (value.length < 5) {
    showError(address, "Address must contain at least 5 characters.");

    return false;
  }

  showValid(address);

  return true;
}

// =====================================================
// 12. PHOTO VALIDATION
// =====================================================

function validatePhoto() {
  if (studentPhoto.files.length === 0) {
    showError(studentPhoto, "Please select a student photo.");

    return false;
  }

  const file = studentPhoto.files[0];

  const allowedTypes = ["image/jpeg", "image/png", "image/webp"];

  if (!allowedTypes.includes(file.type)) {
    showError(studentPhoto, "Only JPG, PNG, and WebP images are allowed.");

    return false;
  }

  // Maximum size = 2 MB

  const maxSize = 2 * 1024 * 1024;

  if (file.size > maxSize) {
    showError(studentPhoto, "Image size must be less than 2 MB.");

    return false;
  }

  showValid(studentPhoto);

  return true;
}

// =====================================================
// 13. TERMS VALIDATION
// =====================================================

function validateTerms() {
  if (!terms.checked) {
    showError(terms, "You must accept the terms and conditions.");

    return false;
  }

  showValid(terms);

  return true;
}

// =====================================================
// 14. REAL-TIME VALIDATION
// =====================================================

firstName.addEventListener("blur", function () {
  validateName(firstName, "First name");
});

middleName.addEventListener("blur", function () {
  if (middleName.value.trim() !== "") {
    validateName(middleName, "Middle name");
  }
});

lastName.addEventListener("blur", function () {
  validateName(lastName, "Last name");
});

email.addEventListener("blur", validateEmail);

phone.addEventListener("blur", validatePhone);

username.addEventListener("blur", validateUsername);

password.addEventListener("blur", validatePassword);

confirmPassword.addEventListener("blur", validateConfirmPassword);

dateOfBirth.addEventListener("change", validateDate);

country.addEventListener("change", function () {
  validateSelect(country, "your country");
});

department.addEventListener("change", function () {
  validateSelect(department, "your department");
});

academicYear.addEventListener("change", function () {
  validateSelect(academicYear, "your academic year");
});

semester.addEventListener("change", function () {
  validateSelect(semester, "your semester");
});

address.addEventListener("blur", validateAddress);

studentPhoto.addEventListener("change", validatePhoto);

terms.addEventListener("change", validateTerms);

// =====================================================
// 15. FORM SUBMISSION VALIDATION
// =====================================================

registrationForm.addEventListener("submit", function (event) {
  // Stop normal browser submission

  event.preventDefault();

  // Validate every field

  const firstNameValid = validateName(firstName, "First name");

  const middleNameValid =
    middleName.value.trim() === "" || validateName(middleName, "Middle name");

  const lastNameValid = validateName(lastName, "Last name");

  const emailValid = validateEmail();

  const phoneValid = validatePhone();

  const dateValid = validateDate();

  const countryValid = validateSelect(country, "your country");

  const departmentValid = validateSelect(department, "your department");

  const academicYearValid = validateSelect(academicYear, "your academic year");

  const semesterValid = validateSelect(semester, "your semester");

  const usernameValid = validateUsername();

  const passwordValid = validatePassword();

  const confirmPasswordValid = validateConfirmPassword();

  const addressValid = validateAddress();

  const photoValid = validatePhoto();

  const termsValid = validateTerms();

  // Check all results

  const formIsValid =
    firstNameValid &&
    middleNameValid &&
    lastNameValid &&
    emailValid &&
    phoneValid &&
    dateValid &&
    countryValid &&
    departmentValid &&
    academicYearValid &&
    semesterValid &&
    usernameValid &&
    passwordValid &&
    confirmPasswordValid &&
    addressValid &&
    photoValid &&
    termsValid;

  // =================================================
  // IF INVALID
  // =================================================

  if (!formIsValid) {
    formMessage.classList.remove("d-none");

    formMessage.classList.remove("text-success");

    formMessage.classList.add("text-danger");

    formMessage.textContent = "Please correct the errors in the form.";

    return;
  }

  // =================================================
  // IF VALID
  // =================================================

  formMessage.classList.remove("d-none");

  formMessage.classList.remove("text-danger");

  formMessage.classList.add("text-success");

  formMessage.textContent = "Student registration completed successfully!";

  submitButton.textContent = "Registration Successful";

  submitButton.disabled = true;
});

// =====================================================
// 16. RESET FORM
// =====================================================

registrationForm.addEventListener("reset", function () {
  setTimeout(function () {
    const inputs = registrationForm.querySelectorAll("input, select, textarea");

    inputs.forEach(function (input) {
      input.classList.remove("is-valid", "is-invalid");
    });

    formMessage.textContent = "";

    formMessage.classList.add("d-none");

    submitButton.disabled = false;

    submitButton.textContent = "Submit Registration";
  }, 0);
});

// =====================================================
// 17. PASSWORD VISIBILITY
// =====================================================

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

// I have finished   next  move the next stage  to improce the validation into professional validiton ui    update the code and give the full code and  expalink the pace i have to update the code  steps by steps 
