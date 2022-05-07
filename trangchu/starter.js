window.addEventListener("load", function () {
  const slider = document.querySelector(".slider");
  const sliderMain = document.querySelector(".slider-main");
  const sliderItems = document.querySelectorAll(".slider-item");
  const nextBtn = document.querySelector(".slider-next");
  const prevBtn = document.querySelector(".slider-prev");
  const dotItems = document.querySelectorAll(".slider-dot-item");
  const sliderItemWidth = sliderItems[0].offsetWidth;
  const sliderLength = sliderItems.length;
  console.log("sliderItemWidth", sliderItemWidth);
  let positionX = 0;
  let index = 0;
  nextBtn.addEventListener("click", function () {
    handleChangeSlider(1);
  });
  prevBtn.addEventListener("click", function () {
    handleChangeSlider(-1);
  });

  [...dotItems].forEach((item) =>
    item.addEventListener("click", function (e) {
      [...dotItems].forEach((el) => el.classList.remove("active"));
      e.target.classList.add("active");
      const sliderIndex = parseInt(e.target.dataset.index);
      index = sliderIndex;
      positionX = -1 * index * sliderItemWidth;
      sliderMain.style = `transform: translateX(${positionX}px)`;
    })
  );

  function handleChangeSlider(direction) {
    if (direction == 1) {
      if (index >= sliderLength - 1) {
        index = sliderLength - 1;
        return;
      }
      positionX = positionX - sliderItemWidth;
      sliderMain.style = `transform: translateX(${positionX}px)`;
      index++;
    } else if (direction == -1) {
      if (index <= 0) {
        index = 0;
        return;
      }
      positionX = positionX + sliderItemWidth;
      sliderMain.style = `transform: translateX(${positionX}px)`;
      index--;
    }
    [...dotItems].forEach((el) => el.classList.remove("active"));
    dotItems[index].classList.add("active");
  }
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
