function validateForm() {
    var name = document.forms["contactForm"]["name"].value;
    var email = document.forms["contactForm"]["email"].value;
    var comment = document.forms["contactForm"]["comment"].value;
    var errorMessage = "";

    if (name == "") {
        errorMessage += "Name is required.\n";
    }

    if (email == "") {
        errorMessage += "Email is required.\n";
    } else {
        var emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        if (!emailRegex.test(email)) {
        errorMessage += "Invalid email address.\n";
    }
    }

    if (comment == "") {
        errorMessage += "Comment is required.\n";
    }

    if (errorMessage != "") {
        alert(errorMessage);
        return false;
    }

    return true;
}



{/* <form name="contactForm" onsubmit="return validateForm()">
    <label for="name">Name:</label>
    <input type="text" name="name" id="name">
    <br>
    <label for="email">Email:</label>
    <input type="text" name="email" id="email">
    <br>
    <label for="comment">Comment:</label>
    <textarea name="comment" id="comment"></textarea>
    <br>
    <input type="submit" value="Submit">
</form> */}