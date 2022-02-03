let busca_btn = document.querySelector("#busca")

//adicione um ouvinte de evento ao botão que executa a função paiNasa quando é clicado
busca_btn.addEventListener("click", ()=>{
    console.log("button pressed")
    paiNasa()
})

//Uma função assíncrona para buscar dados da API.
async function paiNasa(){
    let chavinha = "y2gwcC29ClbjBI8V83DmJ8hEO9SMB1QvdsQsu3NZ"
    let resposta = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${chavinha}`)
    console.log(resposta)
    let data = await resposta.json()
    console.log(data)
    diaApi(data)
}

//função que faz algo com os dados recebidos da API. O nome da função deve ser personalizado para o que você está fazendo com os dados
function diaApi(data){
    document.querySelector("#conteudo").innerHTML += data.explanation
    document.querySelector("#conteudo").innerHTML += `<img src="${data.url}">`
}
