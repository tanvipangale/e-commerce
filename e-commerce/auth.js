const registerBtn = document.getElementById("registerSubmit");
if(registerBtn){
  registerBtn.addEventListener("click", () => {
    const name = document.getElementById("registerName").value;
    const email = document.getElementById("registerEmail").value;
    const password = document.getElementById("registerPassword").value;
    if(!name || !email || !password) return alert("Please fill all fields");
    localStorage.setItem("user", JSON.stringify({name, email, password}));
    alert("Registration Successful");
    window.location.href = "login.html";
  });
}

const loginBtn = document.getElementById("loginSubmit");
if(loginBtn){
  loginBtn.addEventListener("click", () => {
    const email = document.getElementById("loginEmail").value;
    const password = document.getElementById("loginPassword").value;
    const savedUser = JSON.parse(localStorage.getItem("user"));
    if(!savedUser) return alert("No user found");
    if(email === savedUser.email && password === savedUser.password){
      localStorage.setItem("loggedInUser", savedUser.name);
      alert("Login Successful");
      window.location.href = "index.html";
    } else {
      alert("Invalid Email or Password");
    }
  });
document.getElementById("registerBtn").addEventListener("click", function () {

    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    fetch("http://localhost/e-commerce/wp-json/custom/v1/register", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            username: username,
            email: email,
            password: password
        })
    })
    .then(res => res.json())
    .then(data => {
        console.log(data);
        alert(data.message);
    })
    .catch(err => console.log(err));

});
}
