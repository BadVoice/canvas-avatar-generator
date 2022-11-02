const startPath = './assets'
const countBg = 3;
      countTop = 8
      countMouthes = 6
      countEyes = 5
      countGlasses = 3
      countEyebrows = 6
      countBody = 6
      countPets = 4;

const generateButton = document.getElementById('generate-button')
const downloadButton = document.getElementById('download-button')

const avatar = document.getElementById('avatar')
const avatarTop = document.getElementById('avatar-top')
const avatarMouth = document.getElementById('avatar-mouth')
const avatarEyes= document.getElementById('avatar-eyes')
const avatarGlasses = document.getElementById('avatar-glasses')
const avatarEyebrows = document.getElementById('avatar-eyebrows')
const avatarBody = document.getElementById('avatar-body')
const avatarPets = document.getElementById('avatar-pets')

// fnc

const random = (count) => {
    return Math.floor(Math.random() * count) + 1
}

const setElementSrc = ( nameFolder, count) => {
    return `${startPath}/${nameFolder}/${random(count)}.svg`
}

const generateAvatar = () => {
    avatar.style.backgroundImage = `url(${startPath}/bg/${random(countBg)}.jpg)`;
    avatarTop.src = setElementSrc('top', countTop);
    avatarMouth.src = setElementSrc('mouthes', countMouthes);
    avatarEyes.src = setElementSrc('eyes', countEyes);
    avatarGlasses.src = setElementSrc('glasses', countGlasses);
    avatarEyebrows.src = setElementSrc('eyebrows', countEyebrows);
    avatarBody.src = setElementSrc('body', countBody);
    avatarPets.src = setElementSrc('pets', countPets);
}

addEventListener('load', () => generateAvatar())

generateButton.addEventListener('click', () => generateAvatar())