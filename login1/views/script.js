document.getElementById("form").addEventListener("submit", auth);

function auth(event) {
    event.preventDefault();

    var username = document.getElementById("login-id").value;
    var password = document.getElementById("password").value;
    if (username === "kunalgaurav0986@gmail.com" && password === "8434568010") {
        alert("aap hain to hm h ")
    }

    if (username === "" && password === "") {
        alert("Please enter information");
    }
    else {
        alert("Please enter valid information");
        return;
    }
}