window.addEventListener("load", function () {
  var count = 1;
  const colordef = document.getElementById("first-btn");
  colordef.classList.add("colordef");
  this.setInterval(function () {
    const colorde = document.getElementById("btn" + count);
    document.getElementById("radio" + count).checked = true;
    count++;
    colordef.classList.remove("colordef");
    if (count > 5) {
      count = 1;
    }
  }, 2500);
});

window.addEventListener("load", function () {
  const eye = document.querySelector(".eye");
  const eye1 = document.querySelector(".eye1");
  eye.addEventListener("click", function () {
    eye.children[0].classList.toggle("fa-eye-slash");
    const input = document.getElementsByTagName("input")[1];
    console.log(input.attributes.type.value);
    if (input.attributes.type.value == "text") {
      input.setAttribute("type", "password");
    } else {
      input.setAttribute("type", "text");
    }
  });
  eye1.addEventListener("click", function () {
    eye1.children[0].classList.toggle("fa-eye-slash");
    const input = document.getElementsByTagName("input")[2];
    console.log(input.attributes.type.value);
    if (input.attributes.type.value == "text") {
      input.setAttribute("type", "password");
    } else {
      input.setAttribute("type", "text");
    }
  });
});

window.addEventListener("load", function () {
  const submit = document.querySelector(".form-submit");
  submit.addEventListener("click", function () {
    alert("Bạn đã đăng nhập thành công");
  });
});
