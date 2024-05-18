//const 声明一个只读的常量，一旦声明，常量的值就不能改变
const main = document.querySelector('.main');

const loginLink = document.querySelector('.login-link');

const registerLink = document.querySelector('.register-link');

const loginPopup = document.querySelector('.login-popup');

const loginClose = document.querySelector('.icon-close');

//通过 active 控制两个版块的连接与切换
registerLink.addEventListener('click', () => {
    main.classList.add('active');
});

loginLink.addEventListener('click', () => {
    main.classList.remove('active');
});

//通过 active-popup 控制登陆界面的打开与关闭
loginPopup.addEventListener('click', () => {
    main.classList.add('active-popup');
});

loginClose.addEventListener('click', () => {
    main.classList.remove('active-popup');
});
