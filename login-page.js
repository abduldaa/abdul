const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");
const passForget = document.getElementById("login-form-submit1");
const reset = document.getElementById("login-form-submit2");
var z;
loginButton.addEventListener("click", (e) => {
    e.preventDefault();
	    var username = loginForm.username.value;
    var password = loginForm.password.value;
    if (username == "user" && password == z) {
        alert("You have successfully logged in.");
        location.reload();
    } else {
        loginErrorMsg.style.opacity = 1;
    }
})


passForget.addEventListener("click", (e) => {
e.preventDefault();
	let a=prompt("Enter the new password",);
	z=a;
		alert(`Password word has been changed to '${a}' sucessfully`);
	
})

reset.addEventListener("click", (e) => {
e.preventDefault();
window.location.reload("Refresh")
	
})

var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById("myImg");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
  modal.style.display = "none";
}
        
		


