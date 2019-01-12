'use strict';

(function () {
  var generateRandomIntegerNumber = function (features) {
    return Math.floor(Math.random() * features.length);
  };

  window.utils = {
    generateRandomIntegerNumber: generateRandomIntegerNumber
  };
})();
