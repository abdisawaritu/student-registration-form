// =====================================================
// STUDENT REGISTRATION FORM
// PROFESSIONAL FORM VALIDATION UI
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

const validationSummary = document.getElementById("validationSummary");

const validationErrorList = document.getElementById("validationErrorList");

const passwordToggle = document.getElementById("passwordToggle");

const passwordStrengthBar = document.getElementById("passwordStrengthBar");

const passwordStrengthText = document.getElementById("passwordStrengthText");

const commentsCounter = document.getElementById("commentsCounter");

const photoPreview = document.getElementById("photoPreview");

// =====================================================
// 2. SHOW ERROR
// =====================================================

function showError(input, message) {
  input.classList.add("is-invalid");

  input.classList.remove("is-valid");

  const feedback = input.parentElement.querySelector(".invalid-feedback");

  if (feedback) {
    feedback.textContent = message;
  }
}

// =====================================================
// 3. SHOW VALID
// =====================================================

function showValid(input) {
  input.classList.remove("is-invalid");

  input.classList.add("is-valid");
}

// =====================================================
// 4. CLEAR VALIDATION
// =====================================================

function clearValidation(input) {
  input.classList.remove("is-invalid", "is-valid");
}

// =====================================================
// 5. VALIDATE NAME
// =====================================================

function validateName(input, fieldName) {
  const value = input.value.trim();

  if (value === "") {
    showError(input, `${fieldName} is required.`);

    return false;
  }

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
// 6. EMAIL
// =====================================================

function validateEmail() {
  const value = email.value.trim();

  if (value === "") {
    showError(email, "Email address is required.");

    return false;
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailPattern.test(value)) {
    showError(email, "Enter a valid email address.");

    return false;
  }

  showValid(email);

  return true;
}

// =====================================================
// 7. PHONE
// =====================================================

function validatePhone() {
  const value = phone.value.trim();

  if (value === "") {
    showError(phone, "Phone number is required.");

    return false;
  }

  const phonePattern = /^\+?[0-9\s-]{9,15}$/;

  if (!phonePattern.test(value)) {
    showError(phone, "Enter a valid phone number.");

    return false;
  }

  showValid(phone);

  return true;
}

// =====================================================
// 8. SELECT
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
// 9. USERNAME
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

  const pattern = /^[A-Za-z0-9_]+$/;

  if (!pattern.test(value)) {
    showError(username, "Use letters, numbers, and underscore only.");

    return false;
  }

  showValid(username);

  return true;
}

// =====================================================
// 10. PASSWORD STRENGTH
// =====================================================

function updatePasswordStrength() {
  const value = password.value;

  let score = 0;

  if (value.length >= 8) {
    score++;
  }

  if (/[A-Z]/.test(value)) {
    score++;
  }

  if (/[a-z]/.test(value)) {
    score++;
  }

  if (/[0-9]/.test(value)) {
    score++;
  }

  if (/[^A-Za-z0-9]/.test(value)) {
    score++;
  }

  const percentages = ["0%", "20%", "40%", "60%", "80%", "100%"];

  passwordStrengthBar.style.width = percentages[score];

  if (score === 0) {
    passwordStrengthText.textContent = "Password strength: Not entered";
  } else if (score <= 2) {
    passwordStrengthText.textContent = "Password strength: Weak";
  } else if (score === 3) {
    passwordStrengthText.textContent = "Password strength: Medium";
  } else if (score === 4) {
    passwordStrengthText.textContent = "Password strength: Strong";
  } else {
    passwordStrengthText.textContent = "Password strength: Very strong";
  }

  return score;
}

// =====================================================
// 11. PASSWORD VALIDATION
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

  if (!/[A-Z]/.test(value)) {
    showError(password, "Password needs at least one uppercase letter.");

    return false;
  }

  if (!/[a-z]/.test(value)) {
    showError(password, "Password needs at least one lowercase letter.");

    return false;
  }

  if (!/[0-9]/.test(value)) {
    showError(password, "Password needs at least one number.");

    return false;
  }

  showValid(password);

  return true;
}

// =====================================================
// 12. CONFIRM PASSWORD
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
// 13. DATE
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
// 14. ADDRESS
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
// 15. PHOTO VALIDATION
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

  const maxSize = 2 * 1024 * 1024;

  if (file.size > maxSize) {
    showError(studentPhoto, "Image must be smaller than 2 MB.");

    return false;
  }

  showValid(studentPhoto);

  return true;
}

// =====================================================
// 16. TERMS
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
// 17. SHOW FORM MESSAGE
// =====================================================

function showFormMessage(message, type) {
  formMessage.classList.remove("d-none", "alert-success", "alert-danger");

  if (type === "success") {
    formMessage.classList.add("alert-success");
  } else {
    formMessage.classList.add("alert-danger");
  }

  formMessage.textContent = message;
}

// =====================================================
// 18. VALIDATION SUMMARY
// =====================================================

function showValidationSummary(errors) {
  validationErrorList.innerHTML = "";

  errors.forEach(function (error) {
    const li = document.createElement("li");

    li.textContent = error;

    validationErrorList.appendChild(li);
  });

  validationSummary.classList.remove("d-none");
}

function hideValidationSummary() {
  validationSummary.classList.add("d-none");
}

// =====================================================
// 19. REAL-TIME PASSWORD STRENGTH
// =====================================================

password.addEventListener("input", function () {
  updatePasswordStrength();
});

// =====================================================
// 20. REAL-TIME CONFIRM PASSWORD
// =====================================================

confirmPassword.addEventListener("input", function () {
  if (confirmPassword.value !== "") {
    validateConfirmPassword();
  }
});

// =====================================================
// 21. REAL-TIME COMMENTS COUNTER
// =====================================================

comments.addEventListener("input", function () {
  commentsCounter.textContent = `${comments.value.length} / 300`;
});

// =====================================================
// 22. PHOTO PREVIEW
// =====================================================

studentPhoto.addEventListener("change", function () {
  if (studentPhoto.files.length === 0) {
    photoPreview.classList.add("d-none");

    return;
  }

  const file = studentPhoto.files[0];

  if (file.type.startsWith("image/")) {
    const imageURL = URL.createObjectURL(file);

    photoPreview.src = imageURL;

    photoPreview.classList.remove("d-none");
  }
});

// =====================================================
// 23. BLUR VALIDATION
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

dateOfBirth.addEventListener("change", validateDate);

address.addEventListener("blur", validateAddress);

studentPhoto.addEventListener("change", validatePhoto);

terms.addEventListener("change", validateTerms);

// =====================================================
// 24. SELECT VALIDATION
// =====================================================

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

// =====================================================
// 25. FORM SUBMISSION
// =====================================================

registrationForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const errors = [];

  // ---------------------------------------------
  // VALIDATE NAME
  // ---------------------------------------------

  const firstNameValid = validateName(firstName, "First name");

  if (!firstNameValid) {
    errors.push("Check your first name.");
  }

  const middleNameValid =
    middleName.value.trim() === "" || validateName(middleName, "Middle name");

  const lastNameValid = validateName(lastName, "Last name");

  if (!lastNameValid) {
    errors.push("Check your last name.");
  }

  // ---------------------------------------------
  // EMAIL
  // ---------------------------------------------

  const emailValid = validateEmail();

  if (!emailValid) {
    errors.push("Check your email address.");
  }

  // ---------------------------------------------
  // PHONE
  // ---------------------------------------------

  const phoneValid = validatePhone();

  if (!phoneValid) {
    errors.push("Check your phone number.");
  }

  // ---------------------------------------------
  // DATE
  // ---------------------------------------------

  const dateValid = validateDate();

  if (!dateValid) {
    errors.push("Check your date of birth.");
  }

  // ---------------------------------------------
  // SELECTS
  // ---------------------------------------------

  const countryValid = validateSelect(country, "your country");

  const departmentValid = validateSelect(department, "your department");

  const academicYearValid = validateSelect(academicYear, "your academic year");

  const semesterValid = validateSelect(semester, "your semester");

  // ---------------------------------------------
  // ACCOUNT
  // ---------------------------------------------

  const usernameValid = validateUsername();

  if (!usernameValid) {
    errors.push("Check your username.");
  }

  const passwordValid = validatePassword();

  if (!passwordValid) {
    errors.push("Check your password.");
  }

  const confirmPasswordValid = validateConfirmPassword();

  if (!confirmPasswordValid) {
    errors.push("Passwords do not match.");
  }

  // ---------------------------------------------
  // ADDRESS
  // ---------------------------------------------

  const addressValid = validateAddress();

  if (!addressValid) {
    errors.push("Check your address.");
  }

  // ---------------------------------------------
  // PHOTO
  // ---------------------------------------------

  const photoValid = validatePhoto();

  if (!photoValid) {
    errors.push("Check your student photo.");
  }

  // ---------------------------------------------
  // TERMS
  // ---------------------------------------------

  const termsValid = validateTerms();

  if (!termsValid) {
    errors.push("Accept the terms and conditions.");
  }

  // ---------------------------------------------
  // CHECK EVERYTHING
  // ---------------------------------------------

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
  // INVALID FORM
  // =================================================

  if (!formIsValid) {
    showFormMessage("Please correct the highlighted errors.", "error");

    showValidationSummary(errors);

    // Find first invalid field

    const firstInvalid = registrationForm.querySelector(".is-invalid");

    if (firstInvalid) {
      firstInvalid.focus();

      firstInvalid.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }

    return;
  }

  // =================================================
  // VALID FORM
  // =================================================

  hideValidationSummary();

  showFormMessage("Student registration completed successfully!", "success");

  submitButton.textContent = "Registration Successful";

  submitButton.disabled = true;
});

// =====================================================
// 26. RESET
// =====================================================

registrationForm.addEventListener("reset", function () {
  setTimeout(function () {
    const elements = registrationForm.querySelectorAll(
      "input, select, textarea",
    );

    elements.forEach(function (element) {
      clearValidation(element);
    });

    formMessage.textContent = "";

    formMessage.classList.add("d-none");

    hideValidationSummary();

    passwordStrengthBar.style.width = "0%";

    passwordStrengthText.textContent = "Password strength: Not entered";

    commentsCounter.textContent = "0 / 300";

    photoPreview.src = "";

    photoPreview.classList.add("d-none");

    submitButton.disabled = false;

    submitButton.textContent = "Submit Registration";

    passwordToggle.textContent = "Show Password";

    password.type = "password";
  }, 0);
});

// =====================================================
// 27. PASSWORD VISIBILITY
// =====================================================

passwordToggle.addEventListener("click", function () {
  if (password.type === "password") {
    password.type = "text";

    passwordToggle.textContent = "Hide Password";
  } else {
    password.type = "password";

    passwordToggle.textContent = "Show Password";
  }
});

// =====================================================
// PREVIEW BUTTON
// =====================================================

const previewButton = document.querySelector("#previewButton");

const previewContainer = document.querySelector("#previewContainer");

const previewContent = document.querySelector("#previewContent");

// =====================================================
// PREVIEW BUTTON CLICK EVENT
// =====================================================

previewButton.addEventListener("click", function () {
  // Get values from the form

  const firstName = document.querySelector("#firstName").value;

  const middleName = document.querySelector("#middleName").value;

  const lastName = document.querySelector("#lastName").value;

  const email = document.querySelector("#email").value;

  const phone = document.querySelector("#phone").value;

  const department = document.querySelector("#department").value;

  const academicYear = document.querySelector("#academicYear").value;

  const semester = document.querySelector("#semester").value;

  // Create the preview content

  previewContent.innerHTML = `
    <p>
      <strong>Name:</strong>
      ${firstName} ${middleName} ${lastName}
    </p>

    <p>
      <strong>Email:</strong>
      ${email}
    </p>

    <p>
      <strong>Phone:</strong>
      ${phone}
    </p>

    <p>
      <strong>Department:</strong>
      ${department}
    </p>

    <p>
      <strong>Academic Year:</strong>
      ${academicYear}
    </p>

    <p>
      <strong>Semester:</strong>
      ${semester}
    </p>
  `;

  // Show the preview container

  previewContainer.classList.remove("d-none");
});
