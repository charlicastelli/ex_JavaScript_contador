function contar(){
    var txtInicio = document.querySelector('input#inicio')
    var txtFim = document.querySelector('input#fim')
    var txtPasso = document.querySelector('input#passo')
    var result = document.querySelector('div#result')

    var inicio = Number(txtInicio.value)
    var fim = Number(txtFim.value)
    var passo = Number(txtPasso.value)

    if (txtInicio.value.length == 0 || txtFim.value.length == 0 || txtPasso.value.length == 0) {
        result.innerHTML = 'Impossível contar!'
    }else {
        if (passo <= 0) {
            alert('Passo inválido! Definindo PASSO com valor 1')
            passo = 1
        }
        if (inicio < fim) {
            while (inicio <= fim) {
                result.innerHTML += `${inicio} \u{1F603} `
                inicio = inicio + passo
            }
            result.innerHTML += `\u{1F3C1}`
        }else {
            while (inicio >= fim) {
                result.innerHTML += `${inicio} \u{1F603} `
                inicio = inicio - passo
            }
            result.innerHTML += `\u{1F3C1}`
        }
    }

    
}