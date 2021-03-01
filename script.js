const tools = document.querySelector('.tools')
const dataInput = document.querySelector('.data-input')
const site = document.querySelector('.site')
const buttonAddText = document.getElementById('buttonAddText')
const buttonAddLink = document.getElementById('buttonAddLink')
const buttonAddImg = document.getElementById('buttonAddImg')
const buttonAddBackground = document.getElementById('buttonAddBackground')
const buttonClearSite = document.getElementById('buttonClearSite')
//________________________________________________________________________________________________________________
let textColor, textSize;
let addtextInputField = (classInput) => {                     // создать поле для ввода текста
    dataInput.innerHTML = ''                                    // обнуление поля
    const textIndication = document.createElement('p')
    textIndication.innerHTML = 'Введите текст для добавления на сайт:'
    dataInput.appendChild(textIndication)

    const textInputField = document.createElement('input')
    dataInput.appendChild(textInputField)
    textInputField.setAttribute('type', 'text')
    textInputField.classList.add(`${classInput}`)

    const colorIndication = document.createElement('p')
    colorIndication.innerHTML = 'Выберите цвет текста:'
    dataInput.appendChild(colorIndication)

    textColor = document.createElement('input')
    dataInput.appendChild(textColor)
    textColor.setAttribute('type', 'color')

    const sizeIndication = document.createElement('p')
    sizeIndication.innerHTML = 'Выберите размер текста:'
    dataInput.appendChild(sizeIndication)

    textSize = document.createElement('input')
    dataInput.appendChild(textSize)
    textSize.setAttribute('type', 'range')
    textSize.setAttribute('max', '100')
    textSize.setAttribute('min', '10')
    textSize.setAttribute('step', '9')
}

let addtextButton = () => {                         // создание кнопки добавления текста
    const sendText = document.createElement('button')
    sendText.innerHTML = 'Текст на сайт'
    dataInput.appendChild(sendText)
    sendText.classList.add('text-on-site')
}

buttonAddText.addEventListener('click', () => {     // событие по созданию поля ввода текста
    addtextInputField('input-text')
    addtextButton()
})
//________________________________________________________________________________________________________________
buttonAddLink.addEventListener('click', () => {         // создать поля для ввода ссылки
    addtextInputField('input-linktext')

    const linkIndication = document.createElement('p')
    linkIndication.innerHTML = 'Введите сслыку для добавления на сайт:'
    dataInput.appendChild(linkIndication)

    const linkInputField = document.createElement('input')
    dataInput.appendChild(linkInputField)
    linkInputField.setAttribute('type', 'text')
    linkInputField.setAttribute('value', 'https://cs8.pikabu.ru/post_img/2017/11/25/7/1511607908184136835.jpg')
    linkInputField.classList.add('input-link')

    const sendLink = document.createElement('button')
    sendLink.innerHTML = 'Ссылку на сайт'
    dataInput.appendChild(sendLink)
    sendLink.classList.add('link-on-site')
})
//________________________________________________________________________________________________________________
let linkImage, sendImage, sizeImage, formSizeImage, inputPercentSizeImage, inputPixelSizeImage, inputScreenSizeImage;
let addImageField = buttonAddImg.addEventListener('click', () => {  // добавить поле ввода картинки
    dataInput.innerHTML = ''                                    // обнуление поля
    const imageIndication = document.createElement('p')
    imageIndication.innerHTML = 'Введите ссылку на картинку:'
    dataInput.appendChild(imageIndication)

    linkImage = document.createElement('input')
    dataInput.appendChild(linkImage)
    linkImage.setAttribute('type', 'text')
    linkImage.setAttribute('value', 'http://s4.fotokto.ru/photo/full/561/5616963.jpg')

    const imageSizeIndication = document.createElement('p')
    imageSizeIndication.innerHTML = 'Введите ширину картинки:'
    dataInput.appendChild(imageSizeIndication)

    sizeImage = document.createElement('input')
    dataInput.appendChild(sizeImage)
    sizeImage.setAttribute('type', 'text')
    sizeImage.setAttribute('value', '50')

    const imageSizeTypeIndication = document.createElement('p')
    imageSizeTypeIndication.innerHTML = 'Выберите единицу измерения ширины картинки:'
    dataInput.appendChild(imageSizeTypeIndication)
//   <form action="handler.php">
/*<p><input name="dzen" type="radio" value="nedzen"> Не дзен</p>
<p><input name="dzen" type="radio" value="dzen"> Дзен</p>
<p><input name="dzen" type="radio" value="pdzen" checked> Полный дзен</p>
<p><input type="submit" value="Выбрать"></p>
</form>  */
    formSizeImage = document.createElement('form')
    dataInput.appendChild(formSizeImage)

    const percentSizeImage = document.createElement('p')
    percentSizeImage.innerHTML = '%'
    formSizeImage.appendChild(percentSizeImage)
    inputPercentSizeImage = document.createElement('input')
    percentSizeImage.appendChild(inputPercentSizeImage)
    inputPercentSizeImage.setAttribute('type', 'radio')
    inputPercentSizeImage.setAttribute('name', 'size-image')

    const pixelSizeImage = document.createElement('p')
    pixelSizeImage.innerHTML = 'px'
    formSizeImage.appendChild(pixelSizeImage)
    inputPixelSizeImage = document.createElement('input')
    pixelSizeImage.appendChild(inputPixelSizeImage)
    inputPixelSizeImage.setAttribute('type', 'radio')
    inputPixelSizeImage.setAttribute('name', 'size-image')

    const screenSizeImage = document.createElement('p')
    screenSizeImage.innerHTML = 'vw'
    formSizeImage.appendChild(screenSizeImage)
    inputScreenSizeImage = document.createElement('input')
    screenSizeImage.appendChild(inputScreenSizeImage)
    inputScreenSizeImage.setAttribute('type', 'radio')
    inputScreenSizeImage.setAttribute('name', 'size-image')

    sendImage = document.createElement('button')
    sendImage.innerHTML = 'Картинку на сайт'
    dataInput.appendChild(sendImage)
    sendImage.classList.add('image-on-site')
})
//________________________________________________________________________________________________________________
let backgroundColor, sendBackground;
let addBackgoundColorField = buttonAddBackground.addEventListener('click', () => {          // создать поле для ввода текста
    dataInput.innerHTML = ''                                    // обнуление поля
    const backIndication = document.createElement('p')
    backIndication.innerHTML = 'Выберите цвет фона сайта:'
    dataInput.appendChild(backIndication)

    backgroundColor = document.createElement('input')
    dataInput.appendChild(backgroundColor)
    backgroundColor.setAttribute('type', 'color')

    sendBackground = document.createElement('button')
    sendBackground.innerHTML = 'Изменить цвет фона'
    dataInput.appendChild(sendBackground)
    sendBackground.classList.add('background-on-site')
}) 
//________________________________________________________________________________________________________________
let text;               //  переменная под поле ввода текста
let addText = () => {                               // событие по созданию добавляемого текста на сайт
    const textSite = document.createElement('p')
    text = dataInput.querySelector('.input-text')
    textSite.innerHTML = `${text.value}`
    textSite.style.color = `${textColor.value}`
    textSite.style.fontSize = `${textSize.value}px`
    site.appendChild(textSite)
    text.value = ''
}
let linkText, link;               //  переменная под поле ввода ссылки
let addLink = () => {                               // событие по созданию добавляемой ссылки на сайт
    const linkSite = document.createElement('a')
    linkText = dataInput.querySelector('.input-linktext')
    linkSite.innerHTML = `${linkText.value}`
    linkSite.style.color = `${textColor.value}`
    link = dataInput.querySelector('.input-link')
    linkSite.setAttribute('href', `${link.value}`)
    linkSite.style.fontSize = `${textSize.value}px`
    site.appendChild(linkSite)
    linkText.value = ''
    link.value = 'https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwj4g9CPoY3vAhXFy6QKHU-6CjsQFjAAegQIAhAD&url=https%3A%2F%2Fwww.google.by%2F&usg=AOvVaw2hX-q0vIgw0b6XJKd0ZgEo'
}
let addImage = () => {
    const image = document.createElement('img')
    image.setAttribute('src', `${linkImage.value}`)
    let arrayInputRadio = document.getElementsByName('size-image')
    for (let i=0; i < arrayInputRadio.length; i++) {
        if (arrayInputRadio[i].checked) {
            switch (i) {
                case 0:
                    image.style.width = `${sizeImage.value}%`
                    break;
                case 1:
                    image.style.width = `${sizeImage.value}px`
                    break;
                case 2:
                    image.style.width = `${sizeImage.value}vw`
                    break;
            }
        }
    }
    site.appendChild(image)
    linkImage.value = ''
    sizeImage.value = '50'
}
let addBackground = () => {                               // событие по созданию добавляемой ссылки на сайт
    site.style.backgroundColor = `${backgroundColor.value}`
}
//________________________________________________________________________________________________________________
dataInput.addEventListener('click', () => {         // добавление текста или ссылки по нажатию на кнопку
    const button = dataInput.querySelector('button')
    if (button.classList.contains('text-on-site')) {
        button.addEventListener('click', addText)
        text = dataInput.querySelector('.input-text')
        text.addEventListener('keydown', (event) => {     // добавление текста по нажатию на клавиатуре 'Enter'
            if (event.key === 'Enter') addText()
        })
    } else if (button.classList.contains('link-on-site')) {
        button.addEventListener('click', addLink)
        link = dataInput.querySelector('.input-link')
        link.addEventListener('keydown', (event) => {     // добавление текста по нажатию на клавиатуре 'Enter'
            if (event.key === 'Enter') addLink()
        })
    } else if (button.classList.contains('image-on-site')) {
        button.addEventListener('click', addImage)
        linkImage.addEventListener('keydown', (event) => {     // добавление текста по нажатию на клавиатуре 'Enter'
            if (event.key === 'Enter') addImage()
        })
    } else if (button.classList.contains('background-on-site')) {
        sendBackground.addEventListener('click', addBackground)
        // linkImage.addEventListener('keydown', (event) => {     // добавление текста по нажатию на клавиатуре 'Enter'
        //     if (event.key === 'Enter') addBackground()
        // })
    } 
})
//________________________________________________________________________________________________________________
buttonClearSite.addEventListener('click', () => {       // очистка сайта
    site.innerHTML = ''
    site.style.backgroundColor = 'wheat'
})
