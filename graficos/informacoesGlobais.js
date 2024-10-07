const url = "https://raw.githubusercontent.com/guilhermeonrails/api/main/dados-globais.json"

async function visualizarInformacoesGlobais(){

  const res = await fetch(url)
  const dados =  await res.json()
  console.log(dados);
  const pessoasNoMundo = (dados.total_pessoas_mundo / 1e9)
  const horas = parseInt (dados.tempo_medio)
  const minutos = Math.round((dados.tempo_medio - horas)*100)



const paragrafo = document.createElement('p')

paragrafo.classList.add('graficos-container_texto')

paragrafo.innerHTML = `Você sabia que o mundo
<span>  ${pessoasNoMundo} </span> de pessoas e aproxidamente
<span>  ${dados.total_pessoas_conectadas} </span> estão conectadas em alguma rede social e passam em média
<span>  ${horas} </span> : <span> ${minutos} </span> horas conectadas` 






const container = document.getElementById("graficos-container")
container.appendChild(paragrafo)


}

visualizarInformacoesGlobais();



