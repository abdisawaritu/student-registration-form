// =====================================================
// STUDENT REGISTRATION FORM
// DOM READING: VALUES AND PROPERTIES
// =====================================================

// =====================================================
// 1. SELECT IMPORTANT FORM ELEMENTS
// =====================================================

const registrationForm = document.getElementById("registrationForm");

const firstName = document.getElementById("firstName");

const middleName = document.getElementById("middleName");

const lastName = document.getElementById("lastName");

const dateOfBirth = document.getElementById("dateOfBirth");

const email = document.getElementById("email");

const phone = document.getElementById("phone");

const address = document.getElementById("address");

const country = document.getElementById("country");

const studentId = document.getElementById("studentId");

const department = document.getElementById("department");

const academicYear = document.getElementById("academicYear");

const semester = document.getElementById("semester");

const username = document.getElementById("username");

const password = document.getElementById("password");

const confirmPassword = document.getElementById("confirmPassword");

const studentPhoto = document.getElementById("studentPhoto");

const comments = document.getElementById("comments");

const preferredContact = document.getElementById("preferredContact");

const terms = document.getElementById("terms");

const formMessage = document.getElementById("formMessage");

const submitButton = document.getElementById("submitButton");

const resetButton = document.getElementById("resetButton");

const previewButton = document.getElementById("previewButton");

// =====================================================
// 2. READING TEXT INPUT VALUES
// =====================================================

// .value reads what the user entered.

console.log("First Name:", firstName.value);

console.log("Middle Name:", middleName.value);

console.log("Last Name:", lastName.value);

console.log("Student ID:", studentId.value);

console.log("Username:", username.value);

// =====================================================
// 3. READING EMAIL VALUE
// =====================================================

console.log("Email:", email.value);

// =====================================================
// 4. READING PHONE VALUE
// =====================================================

console.log("Phone:", phone.value);

// =====================================================
// 5. READING TEXTAREA VALUE
// =====================================================

console.log("Address:", address.value);

console.log("Comments:", comments.value);

// =====================================================
// 6. READING DATE INPUT VALUE
// =====================================================

console.log("Date of Birth:", dateOfBirth.value);

// =====================================================
// 7. READING SELECT VALUE
// =====================================================

// .value returns the value of the
// currently selected option.

console.log("Country:", country.value);

console.log("Department:", department.value);

console.log("Academic Year:", academicYear.value);

console.log("Semester:", semester.value);

console.log("Preferred Contact:", preferredContact.value);

// =====================================================
// 8. READING RADIO BUTTONS
// =====================================================

const genderInputs = document.getElementsByName("gender");

console.log("Gender inputs:", genderInputs);

// Check which gender radio button is selected.

for (let i = 0; i < genderInputs.length; i++) {
  if (genderInputs[i].checked) {
    console.log("Selected Gender:", genderInputs[i].value);
  }
}

// =====================================================
// 9. READING ENROLLMENT TYPE
// =====================================================

const enrollmentInputs = document.getElementsByName("enrollmentType");

for (let i = 0; i < enrollmentInputs.length; i++) {
  if (enrollmentInputs[i].checked) {
    console.log("Enrollment Type:", enrollmentInputs[i].value);
  }
}

// =====================================================
// 10. READING CHECKBOXES
// =====================================================

const interestCheckboxes = document.querySelectorAll('input[name="interest"]');

// Check every interest

for (let i = 0; i < interestCheckboxes.length; i++) {
  if (interestCheckboxes[i].checked) {
    console.log("Selected Interest:", interestCheckboxes[i].value);
  }
}

// =====================================================
// 11. READING TERMS CHECKBOX
// =====================================================

console.log("Terms accepted:", terms.checked);

// Result:
// true  → checked
// false → not checked

// =====================================================
// 12. READING PASSWORD VALUE
// =====================================================

console.log("Password:", password.value);

console.log("Confirm Password:", confirmPassword.value);

// =====================================================
// 13. READING FILE INPUT
// =====================================================

console.log("Selected files:", studentPhoto.files);

// Check whether a file was selected.

if (studentPhoto.files.length > 0) {
  console.log("Selected file:", studentPhoto.files[0]);

  console.log("File name:", studentPhoto.files[0].name);

  console.log("File size:", studentPhoto.files[0].size);

  console.log("File type:", studentPhoto.files[0].type);
}

// =====================================================
// 14. READING TEXT CONTENT
// =====================================================

console.log("Form message text:", formMessage.textContent);

// =====================================================
// 15. READING INNER HTML
// =====================================================

console.log("Form message HTML:", formMessage.innerHTML);

// =====================================================
// 16. READING ID
// =====================================================

console.log("First name ID:", firstName.id);

console.log("Email ID:", email.id);

// =====================================================
// 17. READING NAME
// =====================================================

console.log("First name name:", firstName.name);

console.log("Email name:", email.name);

// =====================================================
// 18. READING INPUT TYPE
// =====================================================

console.log("First name type:", firstName.type);

console.log("Email type:", email.type);

console.log("Password type:", password.type);

// =====================================================
// 19. READING REQUIRED PROPERTY
// =====================================================

console.log("First name required:", firstName.required);

console.log("Email required:", email.required);

console.log("Password required:", password.required);

// =====================================================
// 20. READING DISABLED PROPERTY
// =====================================================

console.log("Submit button disabled:", submitButton.disabled);

// =====================================================
// 21. READING READONLY PROPERTY
// =====================================================

console.log("First name readonly:", firstName.readOnly);

// =====================================================
// 22. READING CLASS NAME
// =====================================================

console.log("First name classes:", firstName.className);

// =====================================================
// 23. READING CLASS LIST
// =====================================================

console.log("First name class list:", firstName.classList);

// Check whether a specific class exists.

console.log("Has form-control:", firstName.classList.contains("form-control"));

// =====================================================
// 24. READING SELECTED INDEX
// =====================================================

console.log("Country selected index:", country.selectedIndex);

console.log("Department selected index:", department.selectedIndex);

// =====================================================
// 25. READING SELECTED OPTION
// =====================================================

const selectedCountry = country.options[country.selectedIndex];

if (selectedCountry) {
  console.log("Selected country text:", selectedCountry.text);

  console.log("Selected country value:", selectedCountry.value);
}

// =====================================================
// 26. READING FORM ELEMENTS
// =====================================================

console.log("Number of form elements:", registrationForm.elements.length);

// =====================================================
// 27. ACCESS FORM ELEMENT BY NAME
// =====================================================

console.log("First name through form:", registrationForm.elements["firstName"]);

console.log("Email through form:", registrationForm.elements["email"]);

// =====================================================
// 28. FORM ELEMENT INFORMATION
// =====================================================

console.log("Form action:", registrationForm.action);

console.log("Form method:", registrationForm.method);

console.log("Form autocomplete:", registrationForm.autocomplete);
