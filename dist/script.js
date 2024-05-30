// * Dark Theme 
const sunIcon = document.querySelector(".sun");
const moonIcon = document.querySelector(".moon");

const userTheme = localStorage.getItem("theme");
const systemTheme = window.matchMedia("(prefers-color-scheme:dark)").matches;

const iconToggle = () => {
    moonIcon.classList.toggle("display-none");
    sunIcon.classList.toggle("display-none");
};

const themeCheck = () => {
    if (userTheme === "dark" || (!userTheme && systemTheme)) {
        document.documentElement.classList.add("dark");
        moonIcon.classList.add("display-none");
        return;
    }
    sunIcon.classList.add("display-none");
};

const themeSwitch = () => {
    if (document.documentElement.classList.contains("dark")) {
        document.documentElement.classList.remove("dark");
        localStorage.setItem("theme", "light");
        iconToggle();
        return;
    }
    document.documentElement.classList.add("dark");
    localStorage.setItem("theme", "dark");
    iconToggle();
};
sunIcon.addEventListener("click", () => {
    themeSwitch();
});
moonIcon.addEventListener("click", () => {
    themeSwitch();
});
themeCheck();


// * Typing Animation
function typeWriter(text, elementId, speed) {
    let i = 0;
    let isBackspacing = false;
    const element = document.getElementById(elementId);
    element.innerHTML = "";

    function type() {
        const visibleText = text.substring(0, i);
        const cursor = i === text.length && !isBackspacing ? "|" : "";

        element.innerHTML = visibleText + cursor;

        if (!isBackspacing) {
            i++;
            if (i > text.length) {
                isBackspacing = true;
                setTimeout(type, 500);
            } else {
                setTimeout(type, speed);
            }
        } else {
            i--;
            if (i >= 0) {
                setTimeout(type, speed);
            } else {
                isBackspacing = false;
                setTimeout(type, 500);
            }
        }
    }

    type();
}

function startTypingEffect() {
    const h1Text = "Learn to code by watching others";
    typeWriter(h1Text, "typed-h1", 40);
}

startTypingEffect();

// * Form vaildation
function validateForm() {
    const firstName = document.getElementById('first_name').value.trim();
    const lastName = document.getElementById('last_name').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();

    const firstNameError = document.getElementById('first_name_error');
    const lastNameError = document.getElementById('last_name_error');
    const emailError = document.getElementById('email_error');
    const passwordError = document.getElementById('password_error');

    // Hide all error messages
    firstNameError.classList.add('hidden');
    lastNameError.classList.add('hidden');
    emailError.classList.add('hidden');
    passwordError.classList.add('hidden');

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    let isValid = true;

    if (firstName === '') {
        firstNameError.textContent = 'First name cannot be empty';
        firstNameError.classList.remove('hidden');
        isValid = false;
    }

    if (lastName === '') {
        lastNameError.textContent = 'Last name cannot be empty';
        lastNameError.classList.remove('hidden');
        isValid = false;
    }

    if (email === '') {
        emailError.textContent = 'Email cannot be empty';
        emailError.classList.remove('hidden');
        isValid = false;
    } else if (!emailRegex.test(email)) {
        emailError.textContent = 'Invalid email format';
        emailError.classList.remove('hidden');
        isValid = false;
    }

    if (password === '') {
        passwordError.textContent = 'Password cannot be empty';
        passwordError.classList.remove('hidden');
        isValid = false;
    }

    if (isValid) {
        alert('Thank you! Form submitted successfully!');
    }
}