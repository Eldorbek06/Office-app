import { reload } from './ui'
import { getData } from './http'

let employeesCont = document.querySelector('.main__inner') as HTMLElement
let header__btns: Array = document.querySelectorAll('.header__btn')
let searchInp = document.querySelector('.header__inp') as HTMLInputElement
let total_employees = document.querySelector('#total-employees') as HTMLElement
let for_promotion = document.querySelector('#total-prizers') as HTMLElement


getData("/data")
    .then(res => {
        reload(res.data, employeesCont)
        total_employees.innerHTML = res.data.length
        header__btns.forEach(el => {
            el.onclick = () => {
                header__btns.forEach(el => el.classList.remove('header__btn_active'))
                el.classList.add('header__btn_active')
                if (el.id === "all-employees") {
                    reload(res.data, employeesCont)
                } else if (el.id === "for-promotion") {
                    reload(res.data.filter(el => el.increase), employeesCont)
                } else if (el.id === "over") {
                    reload(res.data.filter(el => el.salary >= 1000), employeesCont)
                }
            }
        })
        searchInp.onkeyup = () => {
            let key: string = searchInp.value.toLowerCase().trim()
            let data: Array = res.data.filter(el => el.name.toLowerCase().includes(key))
            reload(data, employeesCont)
        }
    })