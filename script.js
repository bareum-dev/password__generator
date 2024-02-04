const password = document.querySelector('.password');
const passwordLength = document.querySelector('#password-length');
const specialCharacters = document.querySelector('#special-characters');
const numbers = document.querySelector('#numbers');

const generateBtn = document.querySelector('.generate-btn');
const copyBtn = document.querySelector('.copy-btn');

const specialCharactersArray = ['!', '#', '$', '%', '-', '.', '@', '_'];
const numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
const lettersArray = ['A', 'a', 'B', 'b', 'C', 'c', 'D', 'd', 'E', 'e', 'F', 'f', 'G', 'g', 'H', 'h', 'I', 'i', 'J', 'j', 'K', 'k', 'L', 'l', 'M', 'm', 'N', 'n', 'O', 'o', 'P', 'p', 'Q', 'q', 'R', 'r', 'S', 's', 'T', 't', 'U', 'u', 'V', 'v', 'W', 'w', 'X', 'x', 'Y', 'y', 'Z', 'z'];

generateBtn.addEventListener('click', () => {
  password.value = '';

  let length = +passwordLength.value || 12;
  let array = [].concat(lettersArray);

  if (specialCharacters.checked && numbers.checked) {
    array = [...specialCharactersArray, ...numbersArray, ...array, ...specialCharactersArray, ...numbersArray,];
  }
  if (specialCharacters.checked && !numbers.checked) {
    array = [...specialCharactersArray, ...array, ...specialCharactersArray];
  }
  if (!specialCharacters.checked && numbers.checked) {
    array = [...numbersArray, ...array, ...numbersArray,];
  }

  let generatedPassword = '';
  for (let i = 0; i < length; i += 1) {
    let index = getRandomNumber(0, array.length);
    generatedPassword = generatedPassword + array[index];
  }

  password.value = generatedPassword;
})

function getRandomNumber(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}

copyBtn.addEventListener('click', () => {
  navigator.clipboard.writeText(password.value);
})