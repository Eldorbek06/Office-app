export function reload(arr: Array<object>, place: HTMLElement) {
    place.innerHTML = ''
    for (let item of arr) {
        place.innerHTML += `
        <div class="main__item">
            <p class="main__name" id="employee-name">${item.name}</p>
            <input class="main__inp" type="number" value="${item.salary}">
            <div class="main__actions">
                <img class="main__icon" src="/public/icons/cookie.png" alt="icon">
                <img class="main__icon" src="/public/icons/bin.png" alt="icon">
                <img class="main__icon" id="star" src="/public/icons/star.png" alt="icon">
            </div>
        </div>
        `
    }
}