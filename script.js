let busca_btn = document.querySelector("#busca")

busca_btn.addEventListener("click", ()=>{
    console.log("button pressed")
    paiNasa()
})

async function paiNasa(){
    let chavinha = "8kLTRQ65abdOpgmvugfbH3pcOcD597ZhEiDlbjcp"
    let resposta = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${chavinha}`);
    console.log(resposta)
    let data = await resposta.json()
    console.log(data)
    diaApi(data)
}

function diaApi(data){
    document.querySelector("#conteudo").innerHTML += data.explanation
    document.querySelector("#conteudo").innerHTML += `<img src="${data.url}">`
}
