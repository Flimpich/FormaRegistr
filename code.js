class Test {
    constructor(func) {
        this.login = document.querySelector('.polyLogin');
        this.pass = document.querySelector('.polyPas1');
        this.passRepit = document.querySelector('.polyRepit');
        this.email = document.querySelector('.polyMail');
        this.button = document.querySelector('.submit1');
        this.addDataValues = () => {
            this.obj1 = {
            };
            this.obj1.login = this.login.value;
            this.obj1.pass = this.pass.value;
            this.obj1.email = this.email.value;
        }
        }
    validPass() {
        this.passRepit.value !== this.pass.value ? (this.passRepit.style.cssText = `background-color: 
        red`, this.passRepit.placeholder = 'Пароль не совподает') : (this.passRepit.style.cssText = '',
        this.passRepit.placeholder = 'Повторите пароль');
    }
    handler() {
        this.passRepit.addEventListener('change', this.validPass.bind(this));
        this.pass.addEventListener('change', this.validPass.bind(this));
        this.button.addEventListener('click', this.fetches.bind(this));
        }
    fetches(e) {
        e.preventDefault();
        this.addDataValues();
        if(!this.email.value.match(/(\w+[\.-]?\w+)+@(\w+[\.-]?\w+)+\.{1}[a-z]{2,4}/)) {
            this.email.placeholder = 'Некорректный email';
            this.email.style.cssText = 'background-color: red';
            this.email.value = '';
            setTimeout(() => this.email.placeholder = 'Введите email', 1000);
            setTimeout(() => this.email.style.cssText = '', 1000);
            return;
        } else if (this.email.value.match(/(\w+[\.-]?\w+)+@(\w+[\.-]?\w+)+\.{1}[a-z]{2,4}/) && this.pass.value === 
        this.passRepit.value) {
        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: "POST",
            'Content-type': 'application/json; charset=UTF-8',
            body: JSON.stringify(this.obj1)
        }).then((response) => response.json())
        .then((data) => console.log(data));
        }
    }
}
const obj = new Test();
obj.handler();

