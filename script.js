const convertbutton = document.querySelector (".convert-button")
const currencySelectFrom = document.querySelector(".currency-select-from")
const currencySelectTo = document.querySelector(".currency-select-to")
const rates = {
    brl: 1,
    dol: 5.19,
    euro: 5.91,
    libra: 7.10,
    bitcoin: 550000
}
const currencies = {
    brl: {
        name: "Real",
        image: "./assets/real.png",
        locale: "pt-BR",
        currency: "BRL"
    },
    dol: {
        name: "American Dollar",
        image: "./assets/dollar.png",
        locale: "en-US",
        currency: "USD"
    },
    euro: {
        name: "Euro",
        image: "./assets/euro.png",
        locale: "de-DE",
        currency: "EUR"
    },
    libra: {
        name: "British Pound",
        image: "./assets/libra.png",
        locale: "en-GB",
        currency: "GBP"
    },
    bitcoin: {
        name: "Bitcoin",
        image: "./assets/bitcoin.png",
        locale: "en-US",
        currency: "BTC"
    }
}

function formatCurrency(value, currencyInfo) {
    if (currencyInfo.currency === "BTC") {
        return `₿ ${value.toFixed(8)}`
    }

    return new Intl.NumberFormat(currencyInfo.locale, {
        style: "currency",
        currency: currencyInfo.currency
    }).format(value)
}

function convertValues() {
    const inputCurrencyValue = Number(document.querySelector(".input-currency").value)

    const currencyValueToConvert = document.querySelector(".currency-value-to-convert")
    const currencyValueConverted = document.querySelector(".currency-value")

    const fromCurrency = currencySelectFrom.value
    const toCurrency = currencySelectTo.value

    const valueInBRL = inputCurrencyValue * rates[fromCurrency]
    const convertedValue = valueInBRL / rates[toCurrency]

    currencyValueToConvert.innerHTML = formatCurrency(inputCurrencyValue, currencies[fromCurrency])
    currencyValueConverted.innerHTML = formatCurrency(convertedValue, currencies[toCurrency])
}
function updateCurrencyInfo() {
    const fromCurrency = currencies[currencySelectFrom.value]
    const toCurrency = currencies[currencySelectTo.value]

    const currencyNameFrom = document.getElementById("currency-name-from")
    const currencyNameTo = document.getElementById("currency-name-to")

    const currencyImageFrom = document.querySelector(".currency-img-from")
    const currencyImageTo = document.querySelector(".currency-img-to")

    currencyNameFrom.innerHTML = fromCurrency.name
    currencyNameTo.innerHTML = toCurrency.name

    currencyImageFrom.src = fromCurrency.image
    currencyImageTo.src = toCurrency.image

    convertValues()
}

   

currencySelectFrom.addEventListener("change", updateCurrencyInfo)
currencySelectTo.addEventListener("change", updateCurrencyInfo)
convertbutton.addEventListener("click", convertValues)

updateCurrencyInfo()

