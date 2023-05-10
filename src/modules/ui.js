export function reload(arr, place) {
    place.innerHTML = ''
    for (let item of arr) {
        if (item.increase) {
            if (item.rise) {
                place.innerHTML += `
                    <div class="main__item main__item_prizer">
                        <p class="main__name" id="employee-name">${item.name}</p>
                        <input class="main__inp" type="number" value="${item.salary}">
                        <div class="main__actions">
                            <img class="main__icon" src="/public/icons/cookie.png" alt="icon">
                            <img class="main__icon" src="/public/icons/bin.png" alt="icon">
                            <img class="main__icon main__icon-star main__icon_active" src="/public/icons/star.png" alt="icon">
                        </div>
                    </div>
                `
            } else{
                place.innerHTML += `
                    <div class="main__item main__item_prizer">
                        <p class="main__name" id="employee-name">${item.name}</p>
                        <input class="main__inp" type="number" value="${item.salary}">
                        <div class="main__actions">
                            <img class="main__icon" src="/public/icons/cookie.png" alt="icon">
                            <img class="main__icon" src="/public/icons/bin.png" alt="icon">
                            <img class="main__icon main__icon-star" src="/public/icons/star.png" alt="icon">
                        </div>
                    </div>
                `
            }
        } else {
            if (item.rise) {
                place.innerHTML += `
                    <div class="main__item">
                        <p class="main__name" id="employee-name">${item.name}</p>
                        <input class="main__inp" type="number" value="${item.salary}">
                        <div class="main__actions">
                            <img class="main__icon" src="/public/icons/cookie.png" alt="icon">
                            <img class="main__icon" src="/public/icons/bin.png" alt="icon">
                            <img class="main__icon main__icon-star main__icon_active" src="/public/icons/star.png" alt="icon">
                        </div>
                    </div>
                `
            } else {
                place.innerHTML += `
                    <div class="main__item">
                        <p class="main__name" id="employee-name">${item.name}</p>
                        <input class="main__inp" type="number" value="${item.salary}">
                        <div class="main__actions">
                            <img class="main__icon" src="/public/icons/cookie.png" alt="icon">
                            <img class="main__icon" src="/public/icons/bin.png" alt="icon">
                            <img class="main__icon main__icon-star" src="/public/icons/star.png" alt="icon">
                        </div>
                    </div>
                `
            }
        }
    }
}