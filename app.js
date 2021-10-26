function MostrarCampoPesquisar(){
    let campo = document.querySelector("#campo")
    if(campo.style.display == "inline"){
        campo.style.display = "none"
    }else{
        campo.style.display = "inline"
    }
}

projetos1 = {
    titulo: 'Mentalista',
    descricao: 'Projeo desenvolvido utilizando javascript, html e css de um jogo para advinhar o número..',
    foto: 'mentalista1.jpg'
}

projetos2 = {
    titulo: 'Conversor',
    descricao: 'Projeto desenvolvido utilizando javascript, hmtl e css para converter Dolar em Real',
    foto: 'conversor.jpg'
}

let projetos = [projetos1 , projetos2]

let projetoAtual = 0

function ProximoProjeto(){
    if(projetoAtual < 1){
        projetoAtual++
    }else{
        projetoAtual = 0
    }    

    titulo = document.querySelector(".titulo-projeto")
    titulo.innerHTML = projetos[projetoAtual].titulo

    descriçao = document.querySelector(".texto-corpo")
    descriçao.innerHTML = projetos[projetoAtual].descricao

    imagem = document.querySelector(".foto-perfil")
    imagem.src= "images/" + projetos[projetoAtual].foto
}    