function read() {
  let name = prompt("What is your name?");
  let email = prompt("What is your email address?");

  alert(
    "Thank you " +
      name +
      "! We'll keep in touch through email, meanwhile Just Do It!"
  );
}
let readButton = document.querySelector(".read-button");
readButton.addEventListener("click", read);
