"use strict"


// // узнать номер клавиши____________________________
// function keyPress(e) {
//     let keyNum;
//     if (window.event) {
//         keyNum = window.event.keyCode;
//     }
//     else if (e) {
//         keyNum = e.which;
//     }
//     console.log(keyNum);
// }
// document.onkeydown = keyPress;
// // ________________________________

// // добавить функцию на клавишу_______________
// document.onkeydown = function(e){
//     switch (e.keyCode) {
//         case 49: //номер клавиши
//             console.log('Нажата единица');//функция
//             break;//остановка
//         case 50:
//             console.log('Нажата двойка');

//         default:
//             console.log(e.keyCode);
//     }
// };
// // __________________



// document.body.onload = function(){
// document.getElementById('button1').onclick = function(){
//     console.log('button 1 click');
// }
//     document.getElementById('button2').onclick = function(){
//         console.log('button 2 click');
//         //функция для кнопки
//     }
//     document.getElementById('button3').onclick = function(){
//         console.log('button 3 click');
//         //функция для кнопки
//     }
//     document.getElementById('button4').onclick = function(){
//         console.log('button 4 click');
//         //функция для кнопки
//     }
//     document.getElementById('button5').onclick = function(){
//         console.log('button 5 click');
//         //функция для кнопки
//     }
//     document.getElementById('button6').onclick = function(){
//         console.log('button 6 click');
//         //функция для кнопки
//     }
//     document.getElementById('button7').onclick = function(){
//         console.log('button 7 click');
//         //функция для кнопки
//     }
//     document.getElementById('button8').onclick = function(){
//         console.log('button 8 click');
//         //функция для кнопки
//     }
//     document.getElementById('button9').onclick = function(){
//         console.log('button 9 click');
//         //функция для кнопки
//     }
// }












let  modal = document.querySelector('.modal');
let themeChanger = document.querySelector('.theme__changer')
let blue = document.querySelector('.blue');
let  green = document.querySelector('.green');
let  gray = document.querySelector('.gray');
let  red = document.querySelector('.red');
let wrapper = document.querySelector('.wrapper')
let  body = document.querySelector('body')
let inp = document.querySelector('input')
let otherLaunchPad = document.querySelector('#other')
let drumsLaunchPad = document.querySelector('#drums')
let guitarsLaunchPad = document.querySelector('#guitar')

let modalFunc = function() {
wrapper.style.display = 'block'
};
let closeModalFunc = function() {
 event.target.classList.contains( 'wrapper') ? wrapper.style.display = 'none' : '';
};

themeChanger.addEventListener('click', modalFunc);
body.addEventListener('click', closeModalFunc);

let themeChoose = function() {
    event.target.nodeName == 'BUTTON' ? body.style.backgroundColor = event.target.getAttribute('color') : ''
};
modal.addEventListener('click', themeChoose);


// ______________________________________AUDIO______________________________________




let audio1 = new Audio('Other/quack-sound-effect.mp3');
let audio2 = new Audio('Other/ding-sound-effect.mp3');
let audio3 = new Audio('Other/big-explosion-sound-effect.mp3');
let audio4 = new Audio('Other/cartoon-slip-gaming-sound-effect-hd.mp3');
let audio5 = new Audio('Other/slide-up-sound-effect.mp3');
let audio6 = new Audio('Other/swoosh-3-sound-effect-download.mp3');
let audio7 = new Audio('Other/metal-gear-alert-sound-effect.mp3');
let audio8 = new Audio('Other/cartoon-chomp-sound-effect.mp3');
let audio9 = new Audio('Other/sound-effect-dj-stop.mp3');
let audio10 = new Audio('Drums/drum-beat-joke.mp3');
let audio11 = new Audio('Drums/free-bass-drum-hit-sound-effect.mp3');
let audio12 = new Audio('Drums/free-drum-crash-2-sound-effect.mp3');
let audio13 = new Audio('Drums/free-echo-dull-swish-sound-effect.mp3');
let audio14 = new Audio('Drums/free-hard-drum-hit-sound-effect.mp3');
let audio15 = new Audio('Drums/free-short-hits-1-sound-effect.mp3');
let audio16 = new Audio('Drums/free-short-hits-2-sound-effect.mp3');
let audio17 = new Audio('Drums/free-short-hits-3-sound-effect.mp3');
let audio18 = new Audio('Drums/free-short-hits-4-sound-effect.mp3');
let audio19 = new Audio('Guitars/acoustic-guitar-notifiers-sound-effects (mp3cut.net) (4).mp3');
let audio20 = new Audio('Guitars/acoustic-guitar-notifiers-sound-effects (mp3cut.net) (1).mp3');
let audio21 = new Audio('Guitars/acoustic-guitar-notifiers-sound-effects (mp3cut.net) (2).mp3');
let audio22 = new Audio('Guitars/acoustic-guitar-notifiers-sound-effects (mp3cut.net) (3).mp3');
let audio23 = new Audio('Guitars/rock-guitar-sound-effects-sound-effects (mp3cut.net).mp3');
let audio24 = new Audio('Guitars/rock-guitar-sound-effects-sound-effects (mp3cut.net) (1).mp3');
let audio25 = new Audio('Guitars/rock-guitar-sound-effects-sound-effects (mp3cut.net) (2).mp3');
let audio26 = new Audio('Guitars/rock-guitar-sound-effects-sound-effects (mp3cut.net) (3).mp3');
let audio27 = new Audio('Guitars/rock-guitar-sound-effects-sound-effects (mp3cut.net).mp3');



// ______________________________________AUDIO______________________________________























function clickFunc (e) {
e.target.classList.contains('button1') ? audio1.play() : 
e.target.classList.contains('button2') ? audio2.play() : 
e.target.classList.contains('button3') ? audio3.play() : 
e.target.classList.contains('button4') ? audio4.play() : 
e.target.classList.contains('button5') ? audio5.play() : 
e.target.classList.contains('button6') ? audio6.play() : 
e.target.classList.contains('button7') ? audio7.play() : 
e.target.classList.contains('button8') ? audio8.play() : 
e.target.classList.contains('button9') ? audio9.play() : 
e.target.classList.contains('button10') ? audio10.play() : 
e.target.classList.contains('button11') ? audio11.play() : 
e.target.classList.contains('button12') ? audio12.play() : 
e.target.classList.contains('button13') ? audio13.play() : 
e.target.classList.contains('button14') ? audio14.play() : 
e.target.classList.contains('button15') ? audio15.play() : 
e.target.classList.contains('button16') ? audio16.play() : 
e.target.classList.contains('button17') ? audio17.play() : 
e.target.classList.contains('button18') ? audio18.play() : 
e.target.classList.contains('button19') ? audio19.play() : 
e.target.classList.contains('button20') ? audio20.play() : 
e.target.classList.contains('button21') ? audio21.play() : 
e.target.classList.contains('button22') ? audio22.play() : 
e.target.classList.contains('button23') ? audio23.play() : 
e.target.classList.contains('button24') ? audio24.play() : 
e.target.classList.contains('button25') ? audio25.play() : 
e.target.classList.contains('button26') ? audio26.play() : 
e.target.classList.contains('button27') ? audio27.play() : ''
}



function tapFunc (e) {
   
    e.key.toLowerCase() === 'z' || e.key.toLowerCase() === 'я' ? audio1.play() : ''
    e.key.toLowerCase() === 'x' || e.key.toLowerCase() === 'ч' ? audio2.play() : ''
    e.key.toLowerCase() === 'c' || e.key.toLowerCase() === 'с' ? audio3.play() : ''
    e.key.toLowerCase() === 'v' || e.key.toLowerCase() === 'м' ? audio4.play() : ''
    e.key.toLowerCase() === 'b' || e.key.toLowerCase() === 'и' ? audio5.play() : ''
    e.key.toLowerCase() === 'n' || e.key.toLowerCase() === 'т' ? audio6.play() : ''
    e.key.toLowerCase() === 'm' || e.key.toLowerCase() === 'ь' ? audio7.play() : ''
    e.key.toLowerCase() === 'a' || e.key.toLowerCase() === 'б' ? audio8.play() : ''
    e.key.toLowerCase() === 's' || e.key.toLowerCase() === 'ю' ? audio9.play() : ''

    e.key.toLowerCase() === 'd' || e.key.toLowerCase() === 'в' ? audio10.play() : ''
    e.key.toLowerCase() === 'f' || e.key.toLowerCase() === 'а' ? audio11.play() : ''
    e.key.toLowerCase() === 'g' || e.key.toLowerCase() === 'п' ? audio12.play() : ''
    e.key.toLowerCase() === 'h' || e.key.toLowerCase() === 'р' ? audio13.play() : ''
    e.key.toLowerCase() === 'j' || e.key.toLowerCase() === 'о' ? audio14.play() : ''
    e.key.toLowerCase() === 'k' || e.key.toLowerCase() === 'л' ? audio15.play() : ''
    e.key.toLowerCase() === 'l' || e.key.toLowerCase() === 'д' ? audio16.play() : ''
    e.key.toLowerCase() === 'q' || e.key.toLowerCase() === 'й' ? audio17.play() : ''
    e.key.toLowerCase() === 'w' || e.key.toLowerCase() === 'ц' ? audio18.play() : ''
    
    e.key.toLowerCase() === 'e' || e.key.toLowerCase() === 'у' ? audio19.play() : ''
    e.key.toLowerCase() === 'r' || e.key.toLowerCase() === 'к' ? audio20.play() : ''
    e.key.toLowerCase() === 't' || e.key.toLowerCase() === 'е' ? audio21.play() : ''
    e.key.toLowerCase() === 'y' || e.key.toLowerCase() === 'н' ? audio22.play() : ''
    e.key.toLowerCase() === 'u' || e.key.toLowerCase() === 'г' ? audio23.play() : ''
    e.key.toLowerCase() === 'i' || e.key.toLowerCase() === 'ш' ? audio24.play() : ''
    e.key.toLowerCase() === 'o' || e.key.toLowerCase() === 'щ' ? audio25.play() : ''
    e.key.toLowerCase() === 'p' || e.key.toLowerCase() === 'з' ? audio26.play() : ''
    e.key.toLowerCase() === '0' || e.key.toLowerCase() === '0' ? audio27.play() : ''

};

window.addEventListener('click', clickFunc);
window.addEventListener('keydown', tapFunc);




let inpFunc = function() {
    audio1.volume = inp.value / 100
    audio2.volume = inp.value / 100
    audio3.volume = inp.value / 100
    audio4.volume = inp.value / 100
    audio5.volume = inp.value / 100
    audio6.volume = inp.value / 100
    audio7.volume = inp.value / 100
    audio8.volume = inp.value / 100
    audio9.volume = inp.value / 100
    audio10.volume = inp.value / 100
    audio11.volume = inp.value / 100
    audio12.volume = inp.value / 100
    audio13.volume = inp.value / 100
    audio14.volume = inp.value / 100
    audio15.volume = inp.value / 100
    audio16.volume = inp.value / 100
    audio17.volume = inp.value / 100
    audio18.volume = inp.value / 100
    audio19.volume = inp.value / 100
    audio20.volume = inp.value / 100
    audio21.volume = inp.value / 100
    audio22.volume = inp.value / 100
    audio23.volume = inp.value / 100
    audio24.volume = inp.value / 100
    audio25.volume = inp.value / 100
    audio26.volume = inp.value / 100
    audio27.volume = inp.value / 100
   
}




inp.addEventListener('change', inpFunc)




