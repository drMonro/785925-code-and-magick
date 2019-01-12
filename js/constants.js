'use strict';

(function () {
  var FIREBALL_COLORS = [
    '#ee4830',
    '#30a8ee',
    '#5ce6c0',
    '#e848d5',
    '#e6e848'
  ];

  var EYES_COLORS = [
    'black',
    'red',
    'blue',
    'yellow',
    'green'
  ];

  var COAT_COLORS = [
    'rgb(101, 137, 164)',
    'rgb(241, 43, 107)',
    'rgb(146, 100, 161)',
    'rgb(56, 159, 117)',
    'rgb(215, 210, 55)',
    'rgb(0, 0, 0)'
  ];

  var NAMES = [
    'Иван',
    'Хуан Себастьян',
    'Мария',
    'Кристоф',
    'Виктор',
    'Юлия',
    'Люпита',
    'Вашингтон'
  ];
  var SURNAMES = [
    'да Марья',
    'Верон',
    'Мирабелла',
    'Вальц',
    'Онопко',
    'Топольницкая',
    'Нионго',
    'Ирвинг'
  ];

  var ESC_KEY_CODE = 27;
  var ENTER_KEY_CODE = 13;
  var RANDOM_WIZARDS = [];
  var WIZARDS_COUNT = 4;

  var setup = document.querySelector('.setup');
  var inputFocusFlag = false;


  window.constants = {
    FIREBALL_COLORS: FIREBALL_COLORS,
    COAT_COLORS: COAT_COLORS,
    EYES_COLORS: EYES_COLORS,
    NAMES: NAMES,
    SURNAMES: SURNAMES,
    RANDOM_WIZARDS: RANDOM_WIZARDS,
    WIZARDS_COUNT: WIZARDS_COUNT,
    ESC_KEY_CODE: ESC_KEY_CODE,
    ENTER_KEY_CODE: ENTER_KEY_CODE,
    setup: setup,
    inputFocusFlag: inputFocusFlag
  };
})();
