const convertBtn = document.querySelector("#convert-btn")
const meterFeetText = document.querySelector("#meter-feet-text")
const literGallonText = document.querySelector("#liter-gallon-text")
const kiloPoundText = document.querySelector("#kilo-pound-text")

function meterToFeet(value) {
    numValue = Number(value)
    let result = numValue * 3.281
    return result.toFixed(3)
}

function feetToMeter(value) {
    numValue = Number(value)
    let result = value * 0.305
    return result.toFixed(3)
}

function meterFeetTextTransfromer(value) {
    const meter = feetToMeter(value)
    const feet = meterToFeet(value)
    new_text = `${value} meters = ${feet} feet | ${value} feet = ${meter} meters`
    meterFeetText.textContent = new_text
}

function litersToGallon(value) {
    numValue = Number(value)
    let result = value * 0.264
    return result.toFixed(3)
}

function gallonToLiters(value) {
    numValue = Number(value)
    let result = value * 3.785
    return result.toFixed(3)
}

function literGallonTextTransformer(value) {
    const liters = gallonToLiters(value)
    const gallons = litersToGallon(value)
    new_text = `${value} liters = ${gallons} gallons | ${value} gallons = ${liters} liters`
    literGallonText.textContent = new_text
}

function kilosToPounds(value) {
    numValue = Number(value)
    let result = value * 2.205
    return result.toFixed(3)
}

function poundsToKilos(value) {
    numValue = Number(value)
    let result = value * 0.454
    return result.toFixed(3)
}

function kilosPoundsTextTransfromer(value) {
    const kilos = poundsToKilos(value)
    const pounds = kilosToPounds(value)
    new_text = `${value} kilos = ${pounds} pounds | ${value} pounds = ${kilos} kilos`
    kiloPoundText.textContent = new_text
}



convertBtn.addEventListener("click", function() {
    const input = document.querySelector("#input")
    let inputValue = input.value

    
    meterFeetTextTransfromer(inputValue)
    literGallonTextTransformer(inputValue)
    kilosPoundsTextTransfromer(inputValue)

    
})