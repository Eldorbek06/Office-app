import { getData, postData } from "./http";
import { reload } from "./ui";

let total_employees = document.querySelector('#total-employees')
let total_prizers = document.querySelector('#total-prizers')
let empsCont = document.querySelector('.main__inner')
let header__btns = document.querySelectorAll('.header__btn')
let over_num = 1000
let over = document.querySelector('#over-count')
let searchInp = document.querySelector('.header__inp')
let form = document.forms.emp_form

over.innerHTML = over_num

getData("/data")
    .then(({ data }) => {
        total_employees.innerHTML = data.length
        total_prizers.innerHTML = data.filter(el => el.increase).length

        reload(data, empsCont)

        headerBtnsActivate(header__btns, empsCont, data)

        searchInp.onkeyup = () => {
            let key = searchInp.value.trim().toLowerCase()
            reload(data.filter(el => el.name.toLowerCase().includes(key)), empsCont)
        }

    })

form.onsubmit = (e) => {
    e.preventDefault()

    let obj = { increase: false, rise: false }
    let fm = new FormData(form)

    fm.forEach((value, key) => {
        obj[key] = value.trim()
    })

    if (obj.salary == '' || obj.name == '') {
        alert('Заполните все поля')
    } else {
        postData("/data", obj)
            .then(() => {
                getData("/data")
                    .then(({ data }) => {
                        reload(data, empsCont)
                        form.reset()
                    })
            })
    }
}

export function headerBtnsActivate(place, cont, arr) {
    place.forEach(el => {place
        el.onclick = () => {
            place.forEach(el => el.classList.remove('header__btn_active'))
            if (el.id == "all-employees") {
                el.classList.add('header__btn_active')
                reload(arr, cont)
            } else if (el.id == "for-promotion") {
                el.classList.add('header__btn_active')
                reload(arr.filter(el => el.rise), cont)
            } else {
                el.classList.add('header__btn_active')
                reload(arr.filter(el => el.salary >= over_num), cont)
            }
        }
    })
}