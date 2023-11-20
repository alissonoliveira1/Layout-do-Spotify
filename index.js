const play = document.getElementById('play')
const pause = document.getElementById('pause')
play.addEventListener( 'click', iniciar);
pause.addEventListener( 'click', pausar);

const repeat = document.getElementById('repeat0')
const repeat1 = document.getElementById('repeat1')
repeat.addEventListener( 'click', repeat2);
repeat1.addEventListener( 'click', repeat3);

const aleatorio = document.getElementById('aleatorio')
const barrinha = document.getElementById('barrinha')

document.addEventListener('DOMContentLoaded', function () {
  var audio = document.getElementById('audio');
  var progressBar = document.getElementById('progressBar');

  // Atualiza a barra de progresso com base no tempo atual da música
  audio.addEventListener('timeupdate', function () {
      var percentage = (audio.currentTime / audio.duration) * 100;
      progressBar.value = percentage;
  });

  // Atualiza o tempo da música com base na posição clicada na barra de progresso
  progressBar.addEventListener('click', function (e) {
      var clickX = e.clientX - progressBar.getBoundingClientRect().left;
      var percentage = (clickX / progressBar.clientWidth) * 100;
      audio.currentTime = (percentage / 100) * audio.duration;
  });
});
function iniciar(){
  document.getElementById('audio').play()
    pause.style.display ='block'
    play.style.display ='none'
}
function pausar(){
  document.getElementById('audio').pause()
    pause.style.display ='none'
    play.style.display ='block'
}
function repeat2(){
    repeat1.style.display ='block'
    repeat.style.display ='none'
}
function repeat3(){
    repeat.style.display ='block'
    repeat1.style.display ='none'
}




const plays = document.getElementById('play3').addEventListener('click', play4)
function play4(){
  
}

const pause2 = document.getElementById('pause')
pause2.addEventListener('click', play5)
function play5(){

}
