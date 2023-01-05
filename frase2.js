$('#botao--mudar').click(mudaFrase);

function mudaFrase(){

    $.get("http://localhost:3000/frase2", mudaFraseAleatoria)
    .fail(function() {

        alert('Erro no servidor!!')

    });



}

function mudaFraseAleatoria(data){

    console.log(data)

}