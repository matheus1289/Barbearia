AOS.init();

const botao = document.querySelector('#hambergeButton');
const menu = document.querySelector('.list');
const images = document.querySelectorAll('.carrosel img');
let currentIndex = 0;

// Função para mudar a imagem
function changeImage() {
  // Remove a classe 'active' da imagem atual
  images[currentIndex].classList.remove('active');
  
  // Atualiza o índice da imagem
  currentIndex = (currentIndex + 1) % images.length;
  
  // Adiciona a classe 'active' na nova imagem
  images[currentIndex].classList.add('active');
}

// Muda a imagem a cada 3 segundos (3000 ms)
setInterval(changeImage, 3000);

botao.addEventListener('click', function(){
    menu.classList.toggle('active');
});
menu.addEventListener('click', function(){
    menu.classList.remove('active');
    botao.classList.remove('ativar');
})
window.addEventListener("scroll", function(){
    let header = document.querySelector('.header-content')
    header.classList.toggle('header',window.scrollY > 1)
})
