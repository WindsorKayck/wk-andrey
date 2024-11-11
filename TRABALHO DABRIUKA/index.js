const videoFiles = [
  '/videos/O que é Cibersegurança e por que é importante.mp4', 
  '/videos/Cyber Segurança_ O que é Engenharia Social_.mp4' 
];
let currentVideoIndex = 0;


function trocarVideo() {

  currentVideoIndex = (currentVideoIndex + 1) % videoFiles.length;
  const novoVideoSrc = videoFiles[currentVideoIndex];


  const videoPlayer = document.getElementById('videoPlayer');
  videoPlayer.src = novoVideoSrc;
  videoPlayer.play(); 
}