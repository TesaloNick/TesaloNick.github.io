import $ from './utilits.js'
import {getCookie} from '../cookie.js'
import {setCookie} from '../cookie.js'

class Main {
    constructor() {
        this.amountProduct = []
        this.buyProducts = localStorage.getItem('buyProduct') ? JSON.parse(localStorage.getItem('buyProduct')) : []
        this.fullPrice = localStorage.getItem('buyProduct') ? getCookie('fullPrice') : 0
    }
    createProductPage() {
        const main = document.createElement('div')
        main.classList.add('products-div')
        $('.products-head').insertAdjacentElement('afterend', main)
        $('.products-head').innerHTML = '<p>Products</p>'
        this.getProducts()
    }
    createProductCard(product){
        $('.products-div').insertAdjacentHTML('beforeend', `
        <div class ='product'>
            <div class ='product-image'>
                <img src='${product.image}'>
            </div>
            <div class ='product-information'>
                <h2>${product.title}</h2>
                <div class ='product-cart'>
                    <p class='price'>$${product.price}</p>
                    <img class='buy-button' src='images/cart.png'>
                </div>
            </div>
        </div>
        `)
    }
    
    getAmountBuyProduct(){
        const products = document.querySelectorAll('.product'); // массив всех продуктов
        const buttonForBuy = document.querySelectorAll('.buy-button'); // массив всех кнопок покупки
        const productsImage = document.querySelectorAll('.product-image'); // массив всех картинок
        const productsTitle = document.querySelectorAll('.product-information > h2'); // массив всех картинок
        this.amountProduct = new Array(20);
        this.amountProduct.fill(1)
        for (let i = 0; i < products.length; i++) {
            products[i].addEventListener("mouseenter", () => {
                products[i].querySelector('.price').innerHTML = `
                <div class='main-minus'>-</div>
                <input type="number" class='amount${i}' value='${this.amountProduct[i]}'>
                <div class='main-plus'>+</div>
                `
                $('.main-minus').addEventListener('click', () => {
                    if ($('.price input').value > 0) $('.price input').value--
                })
                $('.main-plus').addEventListener('click', () => {
                    $('.price input').value++
                })
            }); 
            products[i].addEventListener("mouseleave", () => {
                this.amountProduct[i] = +$(`.amount${i}`).value
                products[i].querySelector('.price').innerHTML = '$' + JSON.parse(localStorage.getItem('products'))[i].price
            });
            productsTitle[i].addEventListener('click', () => window.location.hash = `product/${i+1}`)
            productsImage[i].addEventListener('click', () => window.location.hash = `product/${i+1}`)
            buttonForBuy[i].addEventListener('click', () => { // событие по нажатию на кнопку покупки
                let buyObj = JSON.parse(localStorage.getItem('products'))[i]
                buyObj.amount = +$(`.amount${i}`).value // добавляем свойство в метод с количеством купленных товаров

                if (this.buyProducts.find(item => item.title === buyObj.title)) { // проверка на повтор уже довабленного продукта
                    let repeat = this.buyProducts.find(item => item.title === buyObj.title)
                    repeat.amount = +repeat.amount + +buyObj.amount
                } else {
                    this.buyProducts.push(buyObj) 
                }

                $('.amount-products-cart').innerHTML = this.buyProducts.length                
                this.fullPrice += buyObj.amount * buyObj.price // расчет общей стоимости
                localStorage.setItem('buyProduct', JSON.stringify(this.buyProducts)) 
                setCookie('fullPrice', this.fullPrice)   // добавляем в куки общую стоимость
                $('.full-price-cart').innerHTML = '$' + Math.round(this.fullPrice*100)/100
                $(`.amount${i}`).value = 1 // сброс цифры покупки
                buttonForBuy[i].style.backgroundColor = 'grey'
                setTimeout(()=> {buttonForBuy[i].style.backgroundColor = 'bisque'}, 1000)
            })
        }
    }
    getProducts(){ // достает информацию о товарах с постороннего ресурса
        if (!localStorage.getItem('products')) {
            fetch('https://fakestoreapi.com/products')
            .then(response => response.json())
            .then(products => {
                localStorage.setItem('products', JSON.stringify(products))
                products.map(product => this.createProductCard(product))
                this.getAmountBuyProduct()
            })
        } else {
            JSON.parse(localStorage.getItem('products')).map(product => this.createProductCard(product))
            this.getAmountBuyProduct()
        }
    }
    sumHeadFullPrice() { // изменяет общую сумму товаров вверху страницы
        let sum = 0
        if (localStorage.getItem('buyProduct')) {
            JSON.parse(localStorage.getItem('buyProduct')).map(item => {
                sum += item.amount * item.price
            })
            setCookie('fullPrice', sum)
            $('.cart-link').innerHTML = `<img class='img-cart' src='images/cart.png'>
            <span class='amount-products-cart'>${JSON.parse(localStorage.getItem('buyProduct')).length}</span>
            <span class='full-price-cart'>$${+Math.round(sum*100)/100}</span>`
        } else {
            $('.cart-link').innerHTML = `<img class='img-cart' src='images/cart.png'>
            <span class='amount-products-cart'>0</span>
            <span class='full-price-cart'>$0</span>`
        }
    }
    modalWindow(taskId) {
        const closeMethod = () => {
            modalContainer.classList.remove('show')
            setTimeout(() => {
                modalContainer.remove() //удаляем модульное окно через половину секунды
            }, 500)
            window.location.hash = 'home'
        }
        const modalContainer = document.createElement('div')
        modalContainer.classList.add('modal-container')
        let main = JSON.parse(localStorage.getItem('products'))[taskId];
        console.log(main);
        modalContainer.innerHTML = `
            <div class="modal-block"> 
                <div class='close'></div>
                <div class ='modal-product'>
                    <div class ='modal-product-image'>
                        <img src='${main.image}'>
                    </div>
                    <div class ='product-information'>
                        <h2 class='modal-title'>${main.title}</h2>
                        <p class='description'>${main.description}</p>
                    </div>
                </div>
            </div>
        `;
        
        document.body.appendChild(modalContainer) //добавляем модальное окно в тело документа
        $('.close').addEventListener('click', closeMethod)
        document.addEventListener('keydown', (event) => {
            if (event.key === 'Escape') closeMethod()
        })
        setTimeout(() => {
            modalContainer.classList.add('show') //делаем задержку чтобы браузер понял что мы добавили класс show не срау с элементом
        }, 100)
        
    }
    changeCartPage() { // меняем значения в корзине
        let buyProductsPlus = document.querySelectorAll('.plus')
        let buyProductsMinus = document.querySelectorAll('.minus')
        let buyProductsFullPrice = document.querySelectorAll('.full-price')
        let buyProductsAmount = document.querySelectorAll('.change-amount-buy-products input')
        let deleteProducts = document.querySelectorAll('.delete-button')
        for (let i = 0; i < JSON.parse(localStorage.getItem('buyProduct')).length; i++) {
            buyProductsMinus[i].addEventListener('click', () => { // уменьшение кол-ва при нажатии на минус
                if (buyProductsAmount[i].value > 0) buyProductsAmount[i].value--
                buyProductsFullPrice[i].innerHTML = `$${+Math.round(buyProductsAmount[i].value * JSON.parse(localStorage.getItem('buyProduct'))[i].price * 100)/100}`
            })
            buyProductsPlus[i].addEventListener('click', () => { // увеличение кол-ва при нажатии на плюс
                buyProductsAmount[i].value++
                buyProductsFullPrice[i].innerHTML = `$${+Math.round(buyProductsAmount[i].value * JSON.parse(localStorage.getItem('buyProduct'))[i].price * 100)/100}`
            })
            deleteProducts[i].addEventListener('click', () => { // удаление из корзины
                this.buyProducts.splice(i, 1)
                localStorage.setItem('buyProduct', JSON.stringify(this.buyProducts)) 
                $('.cart-div').remove()
                console.log(this.buyProducts);
                this.createCartPage()
                this.sumHeadFullPrice()
            })
        }
        $('.cart-div button').addEventListener('click', () => { // обновить значение общей суммы в корзине
            for (let i = 0; i < JSON.parse(localStorage.getItem('buyProduct')).length; i++) {
                if (+buyProductsAmount[i].value === 0) this.buyProducts[i].amount = buyProductsAmount[i].value
            }
            this.buyProducts = this.buyProducts.filter(item => +item.amount !== 0)
            localStorage.setItem('buyProduct', JSON.stringify(this.buyProducts)) 
            $('.cart-div').remove()
            this.createCartPage()
            this.sumHeadFullPrice()
        })

    }
    createCartPage() {
        const main = document.createElement('div')
        main.classList.add('cart-div')
        $('.products-head').insertAdjacentElement('afterend', main)
        $('.products-head').innerHTML = '<p>Cart</p>'
        main.innerHTML = `
            <div class='head-cart'>
                <p></p>
                <p>Product</p>
                <p></p>
                <p>Price</p>
                <p>Quantity</p>
                <p>Subtotal</p>
            </div>
        `
        this.buyProducts.map(item => $('.cart-div').insertAdjacentHTML('beforeend', `
            <div class='cart'>
                <div class='delete-button'></div>
                <img src='${item.image}'>
                <p class='cart-title'>${item.title}</p>
                <p>$${item.price}</p>
                <div class='change-amount-buy-products'>
                    <div class='minus'>-</div>
                    <input value='${item.amount}'>
                    <div class='plus'>+</div>
                </div>
                <p class='full-price'>$${+Math.round(item.amount * item.price * 100)/100}</p>
            </div>
        `))
        $('.cart-div').insertAdjacentHTML('beforeend', `
            <button>Update cart</button>
        `)
        this.changeCartPage()
    }
    createContactsPage() {
        const main = document.createElement('div')
        main.classList.add('contacts-div')
        $('.products-head').insertAdjacentElement('afterend', main)
        $('.products-head').innerHTML = '<p>Contacts</p>'
        main.innerHTML = `
            <div>
                <h1>About us</h1>
                <h2>About METRO</h2>
                <p>METRO is a leading international specialist in wholesale and food retail which operates in 34 countries and employs more than 97,000 people worldwide. In financial year 2019/20, METRO generated sales of €25.6 billion. METRO is the wholesale division of METRO. The company provides custom solutions to meet the regional and international needs of its wholesale and retail customers.</p>
                <h2>The Concept</h2>
                <p>Cash and Carry wholesale is primarily defined by its customer base and the unique business model. This means, registered business customers visit a outlet, select their own purchases and carry these back themselves instead of placing orders with multiple vendors. Every day at METRO outlets across the world, more than our employees serve business customers with a wide assortment of up to 50,000 food and non-food products, available under one roof at wholesale prices.</p>
            </div>
            <div>
                <h1>Phones</h1>
                <a href='tel:+1234567890'>Tel: +1234567890</a>
                <a href='mailto:wecare@metro.co.in'>Email: wecare@metro.co.in</a>
                <a>Адрес: Memphis, USA</a>
            </div>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d21189.939460147387!2d35.03044501204864!3d48.40388928868605!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40dbfb68113631ef%3A0xce20d61a5ed45382!2sMETRO%20Cash%26Carry!5e0!3m2!1sru!2sby!4v1618232434300!5m2!1sru!2sby" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
        `
    }
    init() {
        $('.pageHome').addEventListener('click', () => {
            window.location.hash = 'home'
        })
        $('.logo').addEventListener('click', () => {
            window.location.hash = 'home'
        })
        $('.pageContact').addEventListener('click', () => {
            window.location.hash = 'contacts'
        })
        $('.pageCart').addEventListener('click', () => {
            window.location.hash = 'cart'
        })
        $('.cart-link').addEventListener('click', () => {
            window.location.hash = 'cart'
        })
        this.createProductPage()
    }
}
const main = new Main()
main.init()
const router = () => { // переход по страницам в зависимости от хэша
    const hash = window.location.hash

    if (hash.includes('contacts')) {
        main.createContactsPage()
    }
    if (hash.includes('home')) {
        main.createProductPage()
    }
    if (hash.includes('cart')) {
        main.createCartPage()
    }
    if (hash.includes('product')) {
        const id = hash.replace('#', '').replace('product/', '');
        main.modalWindow(+id-1)  
    }
}
window.addEventListener('hashchange', () => { // когда меняется хэш
    if (!(window.location.hash.includes('product'))) $('.products-head').nextElementSibling.remove() // если вызывается не модальное окно
    router()
})
window.onload = () => { // при перезагрузке страницы, оставаться на последней
    let hash = window.location.hash
    if (hash) {
        $('.products-head').nextElementSibling.remove()
        router()
    } else {
        hash = 'home'
    }
}
export {main};