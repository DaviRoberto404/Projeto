var frase = $('.frase');


$(document).ready(function(){

    atualizaPalavras();

})

function atualizaPalavras(){

    var texto = frase.text();
    var numPalavras = texto.split(' ').length;
    
    $('.texto--palavras').text(numPalavras);
    

}

$('#botao--upper').click(function (){

    frase.toggleClass('upper')


})

$('#botao--lower').click(function (){

    frase.toggleClass('lower')


})



