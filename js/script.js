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