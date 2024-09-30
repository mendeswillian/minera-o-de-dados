const url = "https://raw.githubusercontent.com/guilhermeonrails/api/main/dados-globais.json"

async function visualizarInformacoesGlobais(){

  const res = await fetch(url)
  const dados =  await res.json()
  console.log(dados);

const paragrafo = document.createElement('p')
paragrafo.classList.add('graficos-container_texto')

paragrafo.innerHTML = `Cristiano Ronaldo 
${dados.total_pessoas_conectadas}`

const container = document.getElementById("graficos-container")
container.appendChild(paragrafo)


}

visualizarInformacoesGlobais();