const convertButton = document.querySelector(".convert-button")
const currencySelect = document.querySelector(".currency-select")
const currencySelectMain = document.querySelector(".currency-select-main")

function convertValues() {
    const inputCurrencyValue = Number(document.querySelector(".input-currency").value) // Pegando so o valor do input
    const currencyValueConvert = document.querySelector(".currency-value") // Pegando o elemento Real
    const currencyValueToConverted = document.querySelector(".currency-value-moeda") // Pegando outras moedas

    // Taxas de conversão
   const rates = {
        real: 1,
        dolar: 5.2,
        euro: 6.2,
        libra: 7.71,
        bitcoin: 596.18
    }

    // Formatos para exibição
    const formatos = {
        real: { locale: 'pt-BR', currency: 'BRL' },
        dolar: { locale: 'en-US', currency: 'USD' },
        euro: { locale: 'de-DE', currency: 'EUR' },
        libra: { locale: 'en-GB', currency: 'GBP' },
        bitcoin: { locale: 'en-US', currency: 'BTC' }
    }

     // Pegando as moedas selecionadas exatamente como estão nos selects
    const moedaOrigem = currencySelectMain.value
    const moedaDestino = currencySelect.value

     // Converter para real e depois para a moeda de destino
    const valorEmReal = inputCurrencyValue * rates[moedaOrigem]
    const valorConvertido = valorEmReal / rates[moedaDestino]

      // Exibir valor convertido na moeda de destino
    currencyValueToConverted.innerHTML = new Intl.NumberFormat(
        formatos[moedaDestino].locale, {
            style: 'currency',
            currency: formatos[moedaDestino].currency
        }
    ).format(valorConvertido)

    // Exibir valor de entrada formatado na moeda de origem (moeda principal)
    currencyValueConvert.innerHTML = new Intl.NumberFormat(
        formatos[moedaOrigem].locale, {
            style: 'currency',
            currency: formatos[moedaOrigem].currency
        }
    ).format(inputCurrencyValue)
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

    if (currencySelect.value == 'libra') {
        currencyName.innerHTML = 'Libra Esterlina'
        currencyImg.src = "./assets/libra.png"
    }

    if (currencySelect.value == 'bitcoin') {
        currencyName.innerHTML = 'Bitcoin'
        currencyImg.src = "./assets/bitcoin.png"
    }

    if (currencySelect.value == 'real') {
        currencyName.innerHTML = 'Real Brasileiro'
        currencyImg.src = "assets/real.png"
    }

    convertValues() // Chamando a função para converter os valores quando mudar a moeda

}

function changeCurrencyMain() {
    const maincurrencyName = document.getElementById('main-currency-name')
    const maincurrencyImg = document.querySelector(".brasil")
    const inputCurrency = document.querySelector(".input-currency")

    if (currencySelectMain.value == 'dolar') {
        maincurrencyName.innerHTML = 'Dólar Americano'
        maincurrencyImg.src = "./assets/dolar.png"
        inputCurrency.placeholder = "US$ 10,000.00"

    } else if (currencySelectMain.value == 'euro') {
        maincurrencyName.innerHTML = 'Euro'
        maincurrencyImg.src = "./assets/euro.png"
        inputCurrency.placeholder = "€ 10.000,00"

    } else if (currencySelectMain.value == 'libra') {
        maincurrencyName.innerHTML = 'Libra Esterlina'
        maincurrencyImg.src = "./assets/libra.png"
        inputCurrency.placeholder = "£ 10,000.00"

    } else if (currencySelectMain.value == 'bitcoin') {
        maincurrencyName.innerHTML = 'Bitcoin'
        maincurrencyImg.src = "./assets/bitcoin.png"
        inputCurrency.placeholder = "₿ 0.00100000"

    } else if (currencySelectMain.value == 'Real') {
        maincurrencyName.innerHTML = 'Real'
        maincurrencyImg.src = "./assets/real.png"
        inputCurrency.placeholder = "R$ 10.000,00"
    }

    convertValues() // Chamando a função para converter os valores quando mudar a moeda principal
}

currencySelect.addEventListener("change", changeCurrency) //Ouvinte quando trocar o valor da moeda selecionada 

convertButton.addEventListener("click", convertValues) //Ouvinte quando o botao é clicado 

currencySelectMain.addEventListener("change", changeCurrencyMain) //Ouvinte quando trocar o valor da moeda principal
