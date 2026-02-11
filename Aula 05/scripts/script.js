function somar(){
    let numero1 = Number(document.getElementById('n1').value)
    let numero2 = Number(document.querySelector('#n2').value)

    let resposta = document.querySelector('#resposta')

    let soma = numero1 + numero2

    resposta.innerHTML = soma
}

function alterarImagem(){
    let imagem = document.getElementById('imagem')

    imagem.setAttribute('src', "https://i0.statig.com.br/bancodeimagens/2f/ym/i8/2fymi85z5vo5pcl5rsnsr3xgi.jpg")
}