export function createArrayForInitialState(number, array) {
    let newArr = []
    let obj = {}
    for (let i = 0; i <= number; i++) {
        array.forEach(element => {
            let random = Math.floor(Math.random() * element.elements.length)
            obj[element.name] = element.elements[random]
        })
        newArr.push({ ...obj, id: i })
    }
    return newArr
}