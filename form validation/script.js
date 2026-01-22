document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");

  const firstName = document.getElementById("f-name");
  const lastName = document.getElementById("l-name");
  const email = document.getElementById("email");
  const phone = document.getElementById("phone");

  const nameRegex = /^[A-Za-z]{2,}$/;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phoneRegex = /^[6-9]\d{9}$/;
  //regex is stored inside a variable using backslash

  // REAL-TIME VALIDATION
  firstName.addEventListener("input", () =>
    //event listener using here is input 
    validateField(
      firstName,
      nameRegex,
      "First name must have at least 2 letters",
      "f-name-error",
    ),
  );

  lastName.addEventListener("input", () =>
    validateField(
      lastName,
      nameRegex,
      "Last name must have at least 2 letters",
      "l-name-error",
    ),
  );

  email.addEventListener("input", () =>
    validateField(
      email,
      emailRegex,
      "Enter a valid email address",
      "email-error",
    ),
  );

  phone.addEventListener("input", () =>
    validateField(
      phone,
      phoneRegex,
      "Enter a valid 10-digit phone number",
      "phone-error",
    ),
  );

  // SUBMIT VALIDATION
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    //here const isFirstNameValid either store true or false when submit validation
    const isFirstNameValid = validateField(
      firstName,
      nameRegex,
      "First name must have at least 2 letters",
      "f-name-error",
    );
    const isLastNameValid = validateField(
      lastName,
      nameRegex,
      "Last name must have at least 2 letters",
      "l-name-error",
    );
    const isEmailValid = validateField(
      email,
      emailRegex,
      "Enter a valid email address",
      "email-error",
    );
    const isPhoneValid = validateField(
      phone,
      phoneRegex,
      "Enter a valid 10-digit phone number",
      "phone-error",
    );


    //condition checks for all validation is true using && operator and if all true form submit and reset the form
    if (isFirstNameValid && isLastNameValid && isEmailValid && isPhoneValid) {
      alert("Form submitted successfully!");
      form.reset();
    }
  });

  function validateField(input, regex, message, errorId) {
    const error = document.getElementById(errorId);

    if (!regex.test(input.value.trim())) {
      error.textContent = message;
      return false; //by the end validatefiled get true if validation is pass and false if validation didnt pass
    }

    error.textContent = "";
    return true;
    //all condition passes then return true 
  }
});
