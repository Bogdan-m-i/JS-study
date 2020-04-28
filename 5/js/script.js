let menu = document.querySelector('.menu'),
    menuItem = document.querySelectorAll('.menu-item'),
    body = document.body,
    title = document.querySelector('#title'),
    adv = document.querySelector('.adv');
    promptDiv = document.querySelector('#prompt');

menu.insertBefore(menuItem[2], menuItem[1]);

newMenuItem = menuItem[0].cloneNode();
newMenuItem.textContent = 'Пятый пункт';
menu.appendChild(newMenuItem);

body.style.background = 'url(img/apple_true.jpg) center no-repeat';
body.style.backgroundSize = 'cover';

title.textContent = 'Мы продаем только подлинную технику Apple';

adv.remove();

let answer = prompt('Как вам техника Apple?','');
promptDiv.textContent = answer;

