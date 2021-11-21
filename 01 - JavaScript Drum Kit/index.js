const clap = document.querySelector("[data-key='65']");
const clapSound = new Audio('./sounds/clap.wav');
clap.addEventListener('click', () => { clapSound.play(); });

const hihat = document.querySelector("[data-key='83']");
const hihatSound = new Audio('./sounds/hihat.wav');
hihat.addEventListener('click', () => { hihatSound.play(); });

const kick = document.querySelector("[data-key='68']");
const kickSound = new Audio('./sounds/kick.wav');
kick.addEventListener('click', () => { kickSound.play(); });

const openHat = document.querySelector("[data-key='70']");
const openHatSound = new Audio('./sounds/openHat.wav');
openHat.addEventListener('click', () => { openHatSound.play(); });

const boom = document.querySelector("[data-key='71']");
const boomSound = new Audio('./sounds/boom.wav');
boom.addEventListener('click', () => { boomSound.play(); });

const ride = document.querySelector("[data-key='72']");
const rideSound = new Audio('./sounds/ride.wav');
ride.addEventListener('click', () => { rideSound.play(); });

const snare = document.querySelector("[data-key='74']");
const snareSound = new Audio('./sounds/snare.wav');
snare.addEventListener('click', () => { snareSound.play(); });

const tom = document.querySelector("[data-key='75']");
const tomSound = new Audio('./sounds/tom.wav');
tom.addEventListener('click', () => { tomSound.play(); });

const tink = document.querySelector("[data-key='76']");
const tinkSound = new Audio('./sounds/tink.wav');
tink.addEventListener('click', () => { tinkSound.play(); });