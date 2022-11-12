
let signup = document.querySelector("#signup");
let container = document.querySelector("#container");
let formArr = [];

signup.addEventListener("click", function () {
  let form = document.createElement("form");
  let name = document.createElement("input");
  name.placeholder = "Enter Name";
  name.id = "name";

  let email = document.createElement("input");
  email.placeholder = "Enter Email";
  email.id = "email";

  let Submit = document.createElement("input");
  Submit.type = "submit";

  form.append(name, email, Submit);
  container.append(form);

  form.addEventListener("submit", function (event) {
    container.innerHTML = null;
    event.preventDefault();
    let formobj = {
      name: form.name.value,
      email: form.email.value,
    };

    if (name.value == "" || email.value == "") {
      alert("Fill all Fields");
    } else {
      formArr.push(formobj);
      console.log(formArr);
      localStorage.setItem("sign", JSON.stringify(formArr));
      alert("signup successful");
      window.location.href="login_as_admin.html"
    }
  });
});
