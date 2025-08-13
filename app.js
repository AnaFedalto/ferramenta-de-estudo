function criaCartao(categoria, pergunta, resposta) {
 let container= document.getElementById ('container')
  let cartao = document.createElement('artcle')
  cartao..className = 'cartao'

  cartao.innerHTML= `
   <div class="cartao__conteudo">
                    <h3>Karate</h3>
                    <div class="cartao__conteudo__pergunta">
                        <p> Onde surgiu o karatê? </p>
                    </div>
                    <div class="cartao__conteudo__resposta">
                        <p>O karatê surgiu na ilha de Okinawa, no Japão</p>
                    </div>
                </div>
                `
}
