const feedbackButton = document.querySelector(".contact-info-button");
const feedbackPopup = document.querySelector(".feedback");
const feedbackClose = feedbackPopup.querySelector(".feedback-close");
const page = document.querySelector(".page-body");
const feedbackName = feedbackPopup.querySelector(".feedback-input-name");
const feedbackEmail = feedbackPopup.querySelector(".feedback-input-email");
const feedbackMessage = feedbackPopup.querySelector(".feedback-message");
const feedbackForm = feedbackPopup.querySelector(".feedback-form");

let isStorageSupport = true;
const nameStorage = "";
const emailStorage = "";

try {
  nameStorage = localStorage.getItem("name");
} catch (err) {
  isStorageSupport = false;
}

try {
  emailStorage = localStorage.getItem("email");
} catch (err) {
  isStorageSupport = false;
}

feedbackButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  feedbackPopup.classList.add("modal-show");
  page.classList.add("page-body-overlay");

  if (nameStorage && emailStorage) {
    feedbackName.value = nameStorage;
    feedbackEmail.value = emailStorage;
    feedbackMessage.focus();
  } else {
    feedbackName.focus();
  }
});

feedbackClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  feedbackPopup.classList.remove("modal-show");
  feedbackPopup.classList.remove("modal-error");
  page.classList.remove("page-body-overlay");
});

feedbackForm.addEventListener("submit", function (evt) {
  if (!feedbackName.value || !feedbackEmail.value || !feedbackMessage.value) {
    evt.preventDefault();
    feedbackPopup.classList.remove("modal-error");
    feedbackPopup.offsetWidth = feedbackPopup.offsetWidth;
    feedbackPopup.classList.add("modal-error");
  } else {
    if (isStorageSupport) {
      localStorage.setItem("name", feedbackName.value);
      localStorage.setItem("email", feedbackEmail.value);
    }
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (feedbackPopup.classList.contains("modal-show")) {
      evt.preventDefault();
      feedbackPopup.classList.remove("modal-show");
      feedbackPopup.classList.remove("modal-error");
      page.classList.remove("page-body-overlay");
    }
  }
});

const sliderItems = document.querySelectorAll(".slider-item");
const sliderButtons = document.querySelectorAll(".slider-button");

sliderButtons[0].addEventListener("click", function (evt) {
  evt.preventDefault();
  page.classList.remove("page-body-grey");
  page.classList.remove("page-body-brown");
  page.classList.add("page-body-green");
  sliderItems[0].classList.add("slider-item-current");
  sliderItems[1].classList.remove("slider-item-current");
  sliderItems[2].classList.remove("slider-item-current");
  sliderButtons[0].classList.add("slider-button-current");
  sliderButtons[1].classList.remove("slider-button-current");
  sliderButtons[2].classList.remove("slider-button-current");

});

sliderButtons[1].addEventListener("click", function (evt) {
  evt.preventDefault();
  page.classList.remove("page-body-green");
  page.classList.remove("page-body-brown");
  page.classList.add("page-body-grey");
  sliderItems[1].classList.add("slider-item-current");
  sliderItems[0].classList.remove("slider-item-current");
  sliderItems[2].classList.remove("slider-item-current");
  sliderButtons[1].classList.add("slider-button-current");
  sliderButtons[0].classList.remove("slider-button-current");
  sliderButtons[2].classList.remove("slider-button-current");
});

sliderButtons[2].addEventListener("click", function (evt) {
  evt.preventDefault();
  page.classList.remove("page-body-green");
  page.classList.remove("page-body-grey");
  page.classList.add("page-body-brown");
  sliderItems[2].classList.add("slider-item-current");
  sliderItems[0].classList.remove("slider-item-current");
  sliderItems[1].classList.remove("slider-item-current");
  sliderButtons[2].classList.add("slider-button-current");
  sliderButtons[0].classList.remove("slider-button-current");
  sliderButtons[1].classList.remove("slider-button-current");
});


ymaps.ready(init);
function init() {
  var myMap = new ymaps.Map(document.querySelector(".contact-info-map"), {
    center: [59.939342, 30.329353],
    zoom: 16
  });
  myPlacemark = new ymaps.Placemark([59.938635, 30.323118], {}, {
    iconLayout: 'default#image',
    iconImageHref: './img/map-pin.svg',
    iconImageSize: [80, 140],
    iconImageOffset: [-45, -145]
  });
  myMap.geoObjects.add(myPlacemark);
};