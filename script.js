var index = 0;

mostrarImagem(index);

function mostrarImagem(i){
    index += i;

    var imagens = document.getElementsByClassName("imagem");

    var pontos = document.getElementsByClassName("ponto");

    for(i = 0; i < imagens.length;i++)
        imagens[i].style.display = "none";

    for(i = 0; i < pontos.length;i++)
        pontos[i].className = pontos[i].className.replace(" active", "");

    if(index > imagens.length - 1)
        index = 0;

    if(index < 0)
        index = imagens.length - 1;

    imagens[index].style.display = "block";
    pontos[index].className += " active";
}