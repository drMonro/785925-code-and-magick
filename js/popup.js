'use strict';

(function () {

  var openPopup = function () {
    window.constants.setup.classList.remove('hidden');
    document.addEventListener('keydown', onPopupEscPress);
  };

  var closePopup = function () {
    window.constants.setup.classList.add('hidden');
    document.removeEventListener('keydown', onPopupEscPress);
    window.constants.setup.style.top = '';
    window.constants.setup.style.left = '';
  };

  var onPopupEscPress = function (evt) {
    if (evt.keyCode === window.constants.ESC_KEY_CODE && !window.constants.inputFocusFlag) {
      closePopup();
    }
  };


  var setupOpen = document.querySelector('.setup-open');
  setupOpen.addEventListener('click', function () {
    openPopup();
  });

  setupOpen.addEventListener('keydown', function (evt) {
    if (evt.keyCode === window.constants.ENTER_KEY_CODE) {
      openPopup();
    }
  });

  var setupClose = window.constants.setup.querySelector('.setup-close');
  setupClose.addEventListener('click', function () {
    closePopup();
  });

  setupClose.addEventListener('keydown', function (evt) {
    if (evt.keyCode === window.constants.ENTER_KEY_CODE) {
      closePopup();
    }
  });

  window.constants.setup.querySelector('.setup-user-name').addEventListener('focus', function () {
    window.constants.inputFocusFlag = true;
  });

  window.constants.setup.querySelector('.setup-user-name').addEventListener('blur', function () {
    window.constants.inputFocusFlag = false;
  });

  window.constants.setup.querySelector('.setup-wizard .wizard-coat').addEventListener('click', function (evt) {
    var newColor = window.constants.COAT_COLORS[window.utils.generateRandomIntegerNumber(window.constants.COAT_COLORS)];
    evt.currentTarget.style.fill = newColor;
    document.querySelector('input[name="coat-color"]').value = newColor;
  });

  window.constants.setup.querySelector('.setup-wizard .wizard-eyes').addEventListener('click', function (evt) {
    var newColor = window.constants.EYES_COLORS[window.utils.generateRandomIntegerNumber(window.constants.EYES_COLORS)];
    evt.currentTarget.style.fill = newColor;
    document.querySelector('input[name="eyes-color"]').value = newColor;
  });


  window.constants.setup.querySelector('.setup-fireball-wrap').addEventListener('click', function (evt) {
    var newColor = window.constants.FIREBALL_COLORS[window.utils.generateRandomIntegerNumber(window.constants.FIREBALL_COLORS)];
    evt.currentTarget.style.backgroundColor = newColor;
    document.querySelector('input[name="fireball-color"]').value = newColor;
  });

})();
