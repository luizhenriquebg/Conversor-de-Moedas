const convertButton = document.querySelector(".convert-button")
const currencySelect = document.querySelector(".currency-select")

function convertValues() {
    const inputCurrencyValue = document.querySelector(".input-currency").value // Pegando so o valor do input
    const currencyValueConvert = document.querySelector(".currency-value") // Pegando o elemento Real
    const currencyValueToConverted = document.querySelector(".currency-value-moeda") // Pegando outras moedas

    const dolarToday = 5.2
    const euroToday = 6.2

    if (currencySelect.value == "dolar") {
        currencyValueToConverted.innerHTML = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD'
        }).format(inputCurrencyValue / dolarToday) // Formatando o valor convertido para Dolar
    }
    if (currencySelect.value == "euro") {
        currencyValueToConverted.innerHTML = new Intl.NumberFormat('de-DE', {
            style: 'currency',
            currency: 'EUR'
        }).format(inputCurrencyValue / euroToday) // Formatando o valor convertido para Euro
    }

    currencyValueConvert.innerHTML = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    }).format(inputCurrencyValue) // Formatando o valor do input para Real
}

function changeCurrency() {
    const currencyName = document.getElementById('currency-name') // Pegando o elemento que mostra o nome da moeda
    const currencyImg = document.querySelector(".currency-img") // Pegando o elemento que mostra a imagem da moeda

    if (currencySelect.value == 'dolar') {
        currencyName.innerHTML = 'Dólar Americano'
        currencyImg.src = "./assets/dolar.png"
    }
    if (currencySelect.value == 'euro') {
        currencyName.innerHTML = 'Euro'
        currencyImg.src = "./assets/euro.png"
    }

    convertValues() // Chamando a função para converter os valores quando mudar a moeda

}

currencySelect.addEventListener("change", changeCurrency) //Ouvinte quando trocar o valor da moeda selecionada 
convertButton.addEventListener("click", convertValues) //Ouvinte quando o botao é clicado 