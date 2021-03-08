let counter = 0;
let arrayContacts = [];
const Contact = function(fullName, age, phone, email) {         // функция-конструктор КОНТАКТОВ
    this.fullName = fullName;
    this.age = age;
    this.phone = phone;
    this.email = email;
    this.addContact = function(){
        counter++
        arrayContacts.push(`<br>Контакт №${counter}.<br>${this.fullName()}<br>Вам ${this.age} лет.<br>Ваш номер телефона: ${this.phone}.<br>Ваш адрес электронной почты: ${this.email}.<br>`)
    }
    this.checkContact = function() {
        if (this.age < 18) {
            alert(`Вам нет 18 лет.<br>`)
        }
        if (!/(^\+375|^80)( |)(\(|)(33|44|29)(\)|)( |)(\d{7}|\d{3}(-\d{2}){2})/g.test(this.phone)){
            alert('Вы ввели номер телефона в неправильном формате')
        }
        if (!/^[a-zA-Z][a-zA-Z0-9]+\@[\w\.\-]+\.\w{2,11}/g.test(this.email)){
            alert('Вы ввели адрес электронной почты в неправильном формате')
        }
    }
    this.showContact = function() {
        return document.write(`<br>Контакт №${counter}.<br>${this.fullName()}<br>Вам ${this.age} лет.<br>Ваш номер телефона: ${this.phone}.<br>Ваш адрес электронной почты: ${this.email}.<br>`) 
    }
    this.showAllContact = function() {
        document.write(arrayContacts.join(''))
    }
}

const Player = function(fullName, age, phone, email, nickname) {        // функция-конструктор ИГРОКОВ
    Contact.apply(this, arguments)
    let parentFullName = this.fullName
    this.fullName = function() {
        // parentFullName.call(this)
        return `Вас зовут ${parentFullName}. Вас еще называют: ${nickname}.`
    }

}

// const jaMorant = new Player('Ja Morant', 21, '+375 (29) 555-44-22', 'jaMorant@gmail.com', 'Boss')
// jaMorant.addContact()
// jaMorant.showContact()
// const johnKonchar = new Player('John Konchar', 24, '+375 (29) 333-44-22', 'johnKonchar@gmail.com', 'Not a Boss')
// johnKonchar.addContact()
// johnKonchar.showContact()
let arrElement = []
const Element = function() {
    this.create = function (tagName) {
        let element = document.createElement(tagName)
        document.body.appendChild(element)
        arrElement.push(element)
        return element
    }
    this.attr = function(element, attrName, attrContent) {
        element.setAttribute(attrName, attrContent)
        return attrContent 
    }
    this.html = function(element, tagContent) {
        element.innerHTML = tagContent
        return tagContent
    }
    this.search = function(element, selector) {
        let searchContent = document.querySelector(selector)
        return searchContent
    }
    this.addClass = function(element, className) {
        return element.classList.add(className)
    }
    this.removeClass = function(element, className) {
        return element.classList.remove(className)
    }
    this.toggleClass = function(element, className) {
        return element.classList.toggle(className)
    }
    this.hasClass = function(element, className) {
        return element.classList.contains(className)
    }
    this.append = function(element, parentTag, beforeOrIn) {
        if (beforeOrIn === 'beforeElement') {
            return parentTag.before(element)
        } if (beforeOrIn === 'inElement' || beforeOrIn == null) {
            return parentTag.append(element)
        } else {
            return alert('вы ввели неправильный третий аргумент "beforeElement"')
        } 
    }
    this.on = function(element, eventName, className) { // проверка на клик по тегу с определенным классом
        for (let i=0; i< arrElement.length; i++) {
            if (element === arrElement[i]) {
                element.addEventListener(eventName, () => {
                    console.log(`вы совершили действие ${eventName} по элементу c классом ${className}: ${this.hasClass(arrElement[i], className)}`);
                })
            }
        }


    }
}
const div = new Element()
const divBig = div.create('div')
div.attr(divBig, 'style', 'padding: 20px; width: 300px; height: 300px; border: 2px solid black')
div.addClass(divBig, 'mega-div')

const div1 = new Element()
const divSmall = div1.create('div')
div1.attr(divSmall, 'style', 'padding: 20px; width: 100px; height: 100px; border: 2px solid black')
div1.addClass(divSmall, 'mega-div1')

const p = new Element()
const text = p.create('p')
p.attr(text, 'style', 'font-size: 40px; font-weight: 900')
p.html(text, 'Содержимое тэга')
p.addClass(text, 'mega-tag')
p.addClass(text, 'mega-tag1')
p.removeClass(text, 'mega-tag')
p.toggleClass(text, 'mega-tag')
console.log(p.hasClass(text, 'mega-tag'));
p.append(text, divBig, 'beforeElement') // добавили текст перед блоком
p.append(divSmall, divBig)      // добавили блок в блок
for (let i=0; i< arrElement.length; i++) {
    p.on(arrElement[i], 'click', 'mega-tag')

}
