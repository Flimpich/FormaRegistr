class Proverka {
    constructor() {
        this.login = document.querySelector('.polyLogin');
        this.pass = document.querySelector('.polyPas1');
        this.passRepit = document.querySelector('.polyRepit');
        this.email = document.querySelector('.polyMail');
    }
    validPass() {
        obj.passRepit.value !== obj.pass.value ? obj.passRepit.style.cssText = `background: 
        red` : obj.passRepit.style.cssText = '';
    }
    validMail() {
        if(!obj.email.value.includes('@')) {
            obj.email.value = 'Некорректный email';
            obj.email.style.cssText = 'background: red';
            setTimeout(() => obj.email.value = '', 1000);
            setTimeout(() => obj.email.style.cssText = '', 1000);
        }
    }
}
const obj = new Proverka();
obj.email.addEventListener('change', obj.validMail);
obj.passRepit.addEventListener('change', obj.validPass);
obj.pass.addEventListener('change', obj.validPass);
