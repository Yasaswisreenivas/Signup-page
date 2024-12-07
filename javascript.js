function fun() {
    const fullname = document.getElementById("Fullname").value;
    const username = document.getElementById("Username").value;
    const email = document.getElementById("Email").value;
    const password = document.getElementById("Password").value;

    if (!fullname || !username || !email || !password) {
        alert("Please fill out all fields.");
        return;
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert("Please enter a valid email address.");
        return;
    }

    alert(`Registration successful!\nName: ${fullname}\nUsername: ${username}\nEmail: ${email}`);
}
