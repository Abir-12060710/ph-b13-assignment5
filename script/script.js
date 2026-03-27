// collect info from input
let loginBtn = document.getElementById("login-btn").addEventListener("click", () => {
    let data1 = document.getElementById("email").value;
    let data2 = document.getElementById("pass").value.toLowerCase();
    if( data1 === "admin" & data2 === "admin123"){
        console.log("Login Successful");
        window.location.href = "dashboard.html";
    }
    else{
        alert("Wrong Credentials")
    }

})