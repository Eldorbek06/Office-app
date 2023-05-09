import { reload } from './ui'
import { getData } from './http'

let employeesCont = document.querySelector('.main__inner') as HTMLElement

getData("/data")
    .then(res => reload(res.data, employeesCont))