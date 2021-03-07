function formatarMoeda(numero) {
    return numero.toFixed(2).replace(".", ".")
}

function calcular() {
    distanciaKm = inputDistancia.value
    tempoMin = inputTempo.value
    valorCorrida = 2 + distanciaKm * 1.4 + tempoMin * 0.26
    botaoCalcular.innerHTML = ('Total: R$ ' + formatarMoeda(valorCorrida) + ' Taokeys')
}