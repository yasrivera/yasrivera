var back_button = document.querySelector('.back')

var btn_educacao = document.querySelector('#btn-educacao')
var btn_experiencia = document.querySelector('#btn-experiencia')
var btn_soft_skills = document.querySelector('#btn-soft-skills')
var btn_hard_skills = document.querySelector('#btn-hard-skills')

var conteudo_educacao = document.querySelector('.conteudo-educacao')
var conteudo_exeriencia = document.querySelector('.conteudo-experiencia')
var conteudo_soft_skills = document.querySelector('.conteudo-soft-skills')
var conteudo_hard_skills = document.querySelector('.conteudo-hard-skills')

btn_educacao.addEventListener('click', function () {
  if (conteudo_educacao.style.display === 'flex') {
    conteudo_educacao.style.display = 'none'
    back_button.style.display = 'block'
  } else {
    conteudo_educacao.style.display = 'flex'
    back_button.style.display = 'block'
  }
  conteudo_exeriencia.style.display = 'none'
  conteudo_soft_skills.style.display = 'none'
  conteudo_hard_skills.style.display = 'none'
})

btn_experiencia.addEventListener('click', function () {
  if (conteudo_exeriencia.style.display === 'flex') {
    conteudo_exeriencia.style.display = 'none'
    back_button.style.display = 'block'
  } else {
    conteudo_exeriencia.style.display = 'flex'
    back_button.style.display = 'block'
  }
  conteudo_educacao.style.display = 'none'
  conteudo_soft_skills.style.display = 'none'
  conteudo_hard_skills.style.display = 'none'
})

btn_soft_skills.addEventListener('click', function () {
  if (conteudo_soft_skills.style.display === 'grid') {
    conteudo_soft_skills.style.display = 'none'
    back_button.style.display = 'block'
  } else {
    conteudo_soft_skills.style.display = 'grid'
    back_button.style.display = 'none'
  }
  conteudo_educacao.style.display = 'none'
  conteudo_exeriencia.style.display = 'none'
  conteudo_hard_skills.style.display = 'none'
})

btn_hard_skills.addEventListener('click', function () {
  if (conteudo_hard_skills.style.display === 'grid') {
    conteudo_hard_skills.style.display = 'none'
    back_button.style.display = 'block'
  } else {
    conteudo_hard_skills.style.display = 'grid'
    back_button.style.display = 'none'
  }
  conteudo_educacao.style.display = 'none'
  conteudo_exeriencia.style.display = 'none'
  conteudo_soft_skills.style.display = 'none'
})


var btn_back_educacao = document.querySelector('#btn-back-educacao')
var btn_next_educacao = document.querySelector('#btn-next-educacao')

var pagina_education = document.querySelector('.texto-educacao').children
var qtd_resume = document.querySelectorAll('.pagina-educacao').length
var cont_resume = 0


btn_next_educacao.addEventListener('click', function () {
  if (cont_resume >= qtd_resume){
    cont_resume=0
  }
  if (cont_resume <= -1){
    cont_resume=qtd_resume-1
  }

  if (cont_resume === qtd_resume-1) {
    pagina_education.item(cont_resume).style.display = 'none'
    pagina_education.item(0).style.display = 'block'
  } else {
    pagina_education.item(cont_resume).style.display = 'none'
    pagina_education.item(cont_resume+1).style.display = 'block'
  } 

  cont_resume +=1;
})

btn_back_educacao.addEventListener('click', function () {
  if (cont_resume <= -1){
    cont_resume=qtd_resume-1
  }

  if (cont_resume >= qtd_resume){
    cont_resume=0
  }

  if (cont_resume === 0) {
    pagina_education.item(cont_resume).style.display = 'none'
    pagina_education.item(qtd_resume-1).style.display = 'block'
  } else {
    pagina_education.item(cont_resume).style.display = 'none'
    pagina_education.item(cont_resume-1).style.display = 'block'
  } 

  cont_resume -=1;
})

var btn_back_experiencia = document.querySelector('#btn-back-experiencia')
var btn_next_experiencia = document.querySelector('#btn-next-experiencia')

var pagina_experiencia = document.querySelector('.texto-experiencia').children
var qtd_experiencia = document.querySelectorAll('.pagina-experiencia').length
var cont_experiencia = 0


btn_next_experiencia.addEventListener('click', function () {
  if (cont_experiencia >= qtd_experiencia){
    cont_experiencia=0
  }
  if (cont_experiencia <= -1){
    cont_experiencia=qtd_experiencia-1
  }

  if (cont_experiencia === qtd_experiencia-1) {
    pagina_experiencia.item(cont_experiencia).style.display = 'none'
    pagina_experiencia.item(0).style.display = 'block'
  } else {
    pagina_experiencia.item(cont_experiencia).style.display = 'none'
    pagina_experiencia.item(cont_experiencia+1).style.display = 'block'
  } 

  cont_experiencia +=1;
})

btn_back_experiencia.addEventListener('click', function () {
  if (cont_experiencia <= -1){
    cont_experiencia=qtd_experiencia-1
  }
  
  if (cont_experiencia >= qtd_experiencia){
    cont_experiencia=0
  }

  if (cont_experiencia === 0) {
    pagina_experiencia.item(cont_experiencia).style.display = 'none'
    pagina_experiencia.item(qtd_experiencia-1).style.display = 'block'
  } else {
    pagina_experiencia.item(cont_experiencia).style.display = 'none'
    pagina_experiencia.item(cont_experiencia-1).style.display = 'block'
  } 

  cont_experiencia -=1;
})
