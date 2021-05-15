const grid_btn = document.querySelector("#grid-btn")
const list_btn = document.querySelector("#list-btn")

const seperators = document.querySelectorAll('.seperator') 

let products_wrapper = document.querySelector('.product-list')

grid_btn.addEventListener('click', () => {
    products_wrapper.classList.remove('list')
    seperators.forEach(element =>{
        element.classList.remove('hide-sep')
    })
})

list_btn.addEventListener('click', () => {
    products_wrapper.classList.add('list')
    seperators.forEach(element =>{
        element.classList.add('hide-sep')
    })
})