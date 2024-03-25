export function formatProductName(productName) {
    return productName.replaceAll(' ', '-').toLocaleLowerCase()
}

export function formatProductPrice(price) {
    return new Intl.NumberFormat('es-CL').format(price)
}

export function orderAsc(products) {
    const res = [...products]
    let aux
    for (const i in products) {
        for (const j in products) {
            if (res[i].price > res[j].price) {
                aux = res[i]
                res[i] = res[j]
                res[j] = aux
            }
        }
    }
    return res
}

export function orderDesc(products) {
    const res = [...products]
    let aux
    for (const i in products) {
        for (const j in products) {
            if (res[i].price < res[j].price) {
                aux = res[i]
                res[i] = res[j]
                res[j] = aux
            }
        }
    }
    return res
}

export function getMaxPrice(products) {
    let max = 0
    for (const p of products) {
        if (p.price >= max) {
            max = p.price
        }
    }
    return max
}

export function getMinPrice(products) {
    let min = getMaxPrice(products)
    for (const p of products) {
        if (p.price <= min) {
            min = p.price
        }
    }
    return min
}