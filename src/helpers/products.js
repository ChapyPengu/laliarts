export function formatProductName(productName) {
    return productName.replaceAll(' ', '-').toLocaleLowerCase()
}

export function formatProductPrice(productPrice) {
    
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