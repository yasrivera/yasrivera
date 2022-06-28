var btn_back_projeto = document.querySelector('#btn-back-projeto')
var btn_next_projeto = document.querySelector('#btn-next-projeto')

var pagina_projeto = document.querySelector('.card').children
var qtd_projeto = document.querySelectorAll('.projeto').length;
var cont_projeto = 0

if (qtd_projeto >3){
    var totpag_projeto = qtd_projeto - 3
    }else{var totpag_projeto = 1}

btn_next_projeto.addEventListener('click', function () {
  if (cont_projeto >= totpag_projeto){
    cont_projeto=1
  }
  if (cont_projeto==0){
    btn_back_projeto.style.display='flex'
    }

  console.log(cont_projeto,qtd_projeto)
  if (cont_projeto === totpag_projeto-1) {
    pagina_projeto.item(cont_projeto).style.display = 'none'
    pagina_projeto.item(3+cont_projeto).style.display = 'flex'
    btn_next_projeto.style.display='none'

  } else {
    pagina_projeto.item(cont_projeto).style.display = 'none'
    pagina_projeto.item(3+cont_projeto).style.display = 'flex'
  } 

  cont_projeto +=1  ;
})

btn_back_projeto.addEventListener('click', function () {
  if (cont_projeto <= 0){
    cont_projeto=totpag_projeto
  }
  
  if (cont_projeto >= qtd_projeto){
    cont_projeto=1
  }

  if (cont_projeto == totpag_projeto){
    btn_back_projeto.style.display='flex'
  }

    if (cont_projeto === 1) {

        for (i=0; i<3; i++){
                pagina_projeto.item(1+i).style.display = 'none'
            }
        for (i=0; i<3; i++){
                pagina_projeto.item(i).style.display = 'flex'
            }
                btn_back_projeto.style.display='none'

        } else if (cont_projeto === 5){
            for (i=0; i<3; i++){
                pagina_projeto.item(cont_projeto+i).style.display = 'none'
        }
            for (i=0; i<3; i++){
                pagina_projeto.item(cont_projeto+i-1).style.display = 'flex'
        }
                btn_next_projeto.style.display='flex'

        }else {
            for (i=0; i<3; i++){
                pagina_projeto.item(cont_projeto+i).style.display = 'none'
        }
            for (i=0; i<3; i++){
                pagina_projeto.item(cont_projeto+i-1).style.display = 'flex'
        }
    } 

  cont_projeto -=1;
})

