const loginBtn = document.getElementById("loginSubmit");

if (loginBtn) {
    loginBtn.addEventListener("click", () => {
        const email = document.getElementById("loginEmail").value;
        const password = document.getElementById("loginPassword").value;

        // Note: URL path is /wordpress/ as per your .htaccess
        fetch("http://localhost/wordpress/wp-json/jwt-auth/v1/token", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                username: email,
                password: password
            })
        })
        .then(async response => {
            const data = await response.json();
            if (!response.ok) throw new Error(data.message || "Invalid Credentials");
            return data;
        })
        .then(data => {
            if (data.token) {
                localStorage.setItem("jwt_token", data.token);
                localStorage.setItem("loggedInUser", data.user_display_name);
                alert("Welcome back!");
                window.location.href = "index.html";
            }
        })
        .catch(err => {
            console.error("Auth Error:", err);
            alert(err.message);
        });
    });
}