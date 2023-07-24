const maps = document.querySelectorAll('.map__map')
const buttons = document.querySelectorAll('.map__button')
buttons.forEach((el)=>{
    el.addEventListener('click', (elem)=>{
        buttons.forEach((element)=>{
            element.classList.remove('map__button_active')
        })
        elem.currentTarget.classList.add('map__button_active')
        // maps.forEach((el)=>{
        //     el.classList.remove('map__map_active')
        // })
        // maps[elem.target.dataset.number].classList.add('map__map_active')
    })
})
