export function reload(arr: Array<object>, place: HTMLElement) {
    place.innerHTML = ''
    for (let item of arr) {
        let main__item: HTMLElement = document.createElement('div')
        let name: HTMLElement = document.createElement('p')
        let inp: HTMLInputElement = document.createElement('input')
        let actions: HTMLElement = document.createElement('div')
        let iconOne: HTMLImageElement = document.createElement('img')
        let iconTwo: HTMLImageElement = document.createElement('img')
        let iconThree: HTMLImageElement = document.createElement('img')

        main__item.classList.add('main__item')
        name.classList.add('main__name')
        inp.classList.add('main__inp')
        actions.classList.add('main__actions')
        iconOne.classList.add('main__icon')
        iconTwo.classList.add('main__icon')
        iconThree.classList.add('main__icon-star')
        if (item.increase) {
            main__item.classList.add('main__item_prizer')
        }
        if (item.rise) {
            iconThree.classList.add('main__icon-star_active')
        }

        name.id = "employee-name"
        iconOne.id = "cookie"
        iconTwo.id = "bin"
        iconThree.id = "star"
        iconOne.src = "/public/icons/cookie.png"
        iconTwo.src = "/public/icons/bin.png"
        iconThree.src = "/public/icons/star.png"
        iconOne.alt = "icon"
        iconTwo.alt = "icon"
        iconThree.alt = "icon"
        inp.type = "number"

        name.innerHTML = item.name
        inp.value = item.salary

        main__item.append(name, inp, actions)
        actions.append(iconOne, iconTwo, iconThree)
        place.append(main__item)

        iconOne.onclick = () => {
            if (item.increase) {
                item.increase = false
                main__item.classList.remove('main__item_prizer')
            } else {
                item.increase = true
                main__item.classList.add('main__item_prizer')
            }
        }

        name.onclick = () => {
            if (item.rise) {
                item.rise = false
                iconThree.classList.remove('main__icon-star_active')
            } else {
                item.rise = true
                iconThree.classList.add('main__icon-star_active')
            }
        }
    }
}