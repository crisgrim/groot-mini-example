import { images, Groot } from './data.js'

const container = document.querySelector('.container')

images.forEach(element => {
    const img = document.createElement('img')
    img.setAttribute('src', element.image)
    container.appendChild(img)

    const p = document.createElement('p')
    p.textContent = element.caption
    container.appendChild(p)
});

const groot = new Groot('I am groot');
document.querySelector('.salutation').innerHTML = groot.salutation();
