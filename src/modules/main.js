import { getData } from "./http";
import { reload } from "./ui";

let total_employees = document.querySelector('#total-employees')
let total_prizers = document.querySelector('#total-prizers')
let empsCont = document.querySelector('.main__inner')
let header__btns = document.querySelectorAll('.header__btn')
let over_num = 1000
let over = document.querySelector('#over-count')

over.innerHTML = over_num

getData("/data")
    .then(({ data }) => {
        total_employees.innerHTML = data.length
        total_prizers.innerHTML = data.filter(el => el.increase).length

        reload(data, empsCont)

        header__btns.forEach(el => {
            el.onclick = () => {
                header__btns.forEach(el => el.classList.remove('header__btn_active'))
                if (el.id == "all-employees") {
                    el.classList.add('header__btn_active')
                    reload(data, empsCont)
                } else if (el.id == "for-promotion") {
                    el.classList.add('header__btn_active')
                    reload(data.filter(el => el.increase), empsCont)
                } else {
                    el.classList.add('header__btn_active')
                    reload(data.filter(el => el.salary >= over_num), empsCont)
                }
            }
        })
    })