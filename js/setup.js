'use strict';

(function () {
  var showHiddenBlock = function (hiddenBlock) {
    var setupDialog = document.querySelector(hiddenBlock);
    setupDialog.classList.remove('hidden');
  };

  var generateRandomWizard = function (names, surnames, coatColors, eyesColors) {
    return {
      name: names[window.utils.generateRandomIntegerNumber(names)] + ' ' + surnames[window.utils.generateRandomIntegerNumber(surnames)],
      coatColor: coatColors[window.utils.generateRandomIntegerNumber(coatColors)],
      eyesColor: eyesColors[window.utils.generateRandomIntegerNumber(eyesColors)]
    };
  };

  var generateWizardsFragment = function (wizards, wizardTemplate) {
    var wizardElement = wizardTemplate.cloneNode(true);
    wizardElement.querySelector('.setup-similar-label').textContent = wizards.name;
    wizardElement.querySelector('.wizard-coat').style.fill = wizards.coatColor;
    wizardElement.querySelector('.wizard-eyes').style.fill = wizards.eyesColor;
    return wizardElement;
  };


  window.fireballSize = 20;
  window.getFireballSpeed = function (left) {
    return left ? 5 : 2;
  };
  window.wizardSpeed = 3;
  window.wizardWidth = 70;
  window.getWizardHeight = function () {
    return 1.337 * window.wizardWidth;
  };
  window.getWizardX = function (width) {
    return width / 2 - window.wizardWidth / 2;
  };
  window.getWizardY = function (height) {
    return height * 2 / 3 - window.getWizardHeight();
  };

  var similarListElement = document.querySelector('.setup-similar-list');
  var similarWizardTemplate = document.querySelector('#similar-wizard-template')
    .content
    .querySelector('.setup-similar-item');
  var fragment = document.createDocumentFragment();

  for (var i = 0; i < window.constants.WIZARDS_COUNT; i++) {
    window.constants.RANDOM_WIZARDS[i] = generateRandomWizard(window.constants.NAMES, window.constants.SURNAMES, window.constants.COAT_COLORS, window.constants.EYES_COLORS);
  }
  for (var j = 0; j < window.constants.RANDOM_WIZARDS.length; j++) {
    fragment.appendChild(generateWizardsFragment(window.constants.RANDOM_WIZARDS[j], similarWizardTemplate));
  }
  similarListElement.appendChild(fragment);
  showHiddenBlock('.setup-similar');

})();


