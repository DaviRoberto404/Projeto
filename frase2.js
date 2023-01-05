$('#botao--mudar').click(mudaFrase);

var frases = ['Ola bom dia.',
                'O ser humano tem 70 mil pensamentos por dia.',
                    'Tartaruga come pombo.',
                        'Djoga lança album sempre dia 13',
                            'Ladrão roubou pra comprar cervejinha confia bro',
                                'Seja selvagem e livre meu jovem!',
                                    'Sucesso após ver o progresso']

function mudaFrase(){

    var frase = $('.frase');
    var numAleatorio = Math.floor(Math.random() * frases.length)

    frase.text(frases[numAleatorio]);

    atualizaPalavras();

}