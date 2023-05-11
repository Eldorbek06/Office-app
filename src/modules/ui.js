import { delData, getData, patchData } from "./http"
import { headerBtnsActivate } from "./main"

export function reload(arr, place) {
    document.querySelector('#total-prizers').innerHTML = arr.length
    place.innerHTML = ''
    if (arr.length != 0) {
        for (let item of arr) {
            let main__item = document.createElement('div')
            let name = document.createElement('p')
            let inp = document.createElement('input')
            let actions = document.createElement('div')
            let cookie = document.createElement('img')
            let bin = document.createElement('img')
            let star = document.createElement('img')

            main__item.classList.add('main__item')
            name.classList.add('main__name')
            inp.classList.add('main__inp')
            actions.classList.add('main__actions')
            cookie.classList.add('main__icon')
            bin.classList.add('main__icon')
            star.classList.add('main__icon')
            star.classList.add('main__icon-star')
            item.increase ? main__item.classList.add('main__item_prizer') : main__item.classList.remove('main__item_prizer')
            item.rise ? star.classList.add('main__icon_active') : star.classList.remove('main__icon_active')

            name.id = "employee-name"
            cookie.id = "cookie"
            bin.id = "bin"
            star.id = "star"
            cookie.src = "/icons/cookie.png"
            bin.src = "/icons/bin.png"
            star.src = "/icons/star.png"
            cookie.alt = "icon"
            bin.alt = "icon"
            star.alt = "icon"
            inp.type = "number"

            name.innerHTML = item.name
            inp.value = item.salary

            main__item.append(name, inp, actions)
            actions.append(cookie, bin, star)
            place.append(main__item)

            cookie.onclick = () => {
                document.querySelector('#total-prizers').innerHTML = arr.length
                patchData("/data", item.id, item.increase ? { increase: false } : { increase: true })
                    .then(() => {
                        getData("/data")
                            .then(({ data }) => {
                                reload(data, document.querySelector('.main__inner'))
                                headerBtnsActivate(document.querySelectorAll('.header__btn'), place, data)
                            })
                    })
            }

            bin.onclick = () => {
                document.querySelector('#total-prizers').innerHTML = arr.length
                delData("/data", item.id)
                    .then(() => {
                        getData("/data")
                            .then(({ data }) => {
                                reload(data, document.querySelector('.main__inner'))
                                headerBtnsActivate(document.querySelectorAll('.header__btn'), place, data)
                            })
                    })
            }

            name.onclick = () => {
                document.querySelector('#total-prizers').innerHTML = arr.length
                patchData("/data", item.id, item.rise ? { rise: false } : { rise: true })
                    .then(() => {
                        getData("/data")
                            .then(({ data }) => {
                                if (document.querySelector('#all-employees').classList.contains('header__btn_active')) {
                                    reload(data, document.querySelector('.main__inner'))
                                } else if (document.querySelector('#for-promotion').classList.contains('header__btn_active')) {
                                    reload(data.filter(el => el.rise), document.querySelector('.main__inner'))
                                } else {
                                    reload(data.filter(el => el.increase), document.querySelector('.main__inner'))
                                }
                                headerBtnsActivate(document.querySelectorAll('.header__btn'), place, data)
                            })
                    })
            }
        }
    } else {
        place.innerHTML += `
            <div class="main__item">
                <p class="main__name" id="employee-name">Не найдено</p>
            </div>
        `
    }
}