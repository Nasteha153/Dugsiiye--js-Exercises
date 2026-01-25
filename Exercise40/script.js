const videoContainer = document.querySelector(".video-screen");

const videoElement = document.createElement("video");
videoElement.controls = false;
videoElement.width = 100;
videoContainer.appendChild(videoElement);

const playBtn = document.getElementById("play")
const preBtn = document.getElementById("prev")
const nextBtn = document.getElementById('next');
const title = document.getElementById('title');
const currentTimeEl = document.getElementById('current-time');
const durationEl = document.getElementById('duration');
const progress = document.querySelector('.progress');
const progressContainer = document.querySelector('.progress-bar');
const volumeSlider = document.getElementById('volume');
const speedSelect = document.getElementById('speed');


const videos = [
  {title: "Big Buck Bunny", src: "https://www.w3schools.com/html/mov_bbb.mp4"},
  {title: "Movie Sample", src: "https://www.w3schools.com/html/movie.mp4"},
  {title: "Elephants Dream", src: "https://archive.org/download/ElephantsDream/ed_1024_512kb.mp4"}
];

let videoIndex=0;
let isPlaying=false;
let  speed =1;

function loadVideos(video){
    title.textContent=video.title;
    videoElement.src = video.src;

}
loadVideos(videos[videoIndex])

// play videos
function playVideo(){
    playBtn.querySelector('i').classList.remove("fa-play")
    playBtn.querySelector('i').classList.add("fa-pause")
   videoElement.play();
    isPlaying = true;
}

// pause video
function pauseVideo() {
    playBtn.querySelector('i').classList.remove('fa-pause');
    playBtn.querySelector('i').classList.add('fa-play');
    videoElement.pause();
    isPlaying = false;
}


// next Videos play

function nextVideo(){
    pauseVideo()

    setTimeout(()=>{
        videoIndex++;
    if(videoIndex> videos.length -1){
        videoIndex = 0
    }

    loadVideos(videos[videoIndex])
    playVideo()

     },300)
}

// previous Video
function preVideo(){
    pauseVideo()

    setTimeout(()=>{
        videoIndex--;
    if(videoIndex < 0){
        videoIndex = videos.length -1
    }

    loadVideos(videos[videoIndex])
    playVideo()

     },300)

}


function progressUpdate(e){
const { duration ,currentTime} =e.srcElement

 if(isNaN(duration)) return 
 const progressPercent = (currentTime / duration ) *100;
    progress.style.width = ` ${progressPercent}% `

    const durationMinutes =Math.floor(duration / 60)
    let durationSecconds = Math.floor(duration % 60)
    if(durationSecconds<10){
        durationSecconds = `0${durationSecconds}`
    }
    currentTimeEl.textContent =`${durationMinutes}:${durationSecconds}`;
    // current time
    const currentMinutes =Math.floor(currentTime/60)
    let currentSeccond = Math.floor(currentTime%60)

    if(currentSeccond < 10){
        currentSeccond =   `0${currentSeccond}`
    }
    durationEl.textContent = `${currentMinutes}: ${currentSeccond}`
    videoElement.playbackRate =speed;
}

function setProgress(e){
    const width = this.clientWidth;
    const clickX =e.offsetX;
    const duration =videoElement.duration;
    if(isNaN(duration)) return 
    const  newTime =(clickX / width)*duration;
    videoElement.currentTime =newTime;

}

// Events

playBtn.addEventListener('click',()=>{
 if(isPlaying){
     pauseVideo();
 }else{
    playVideo();

 }
 nextBtn.addEventListener('click',()=>{
    nextVideo()
 })
 

})

preBtn.addEventListener("click", preVideo);

videoElement.addEventListener("timeupdate",progressUpdate);
progressContainer.addEventListener("click",setProgress);
volumeSlider.addEventListener('input',(e)=>{
    videoElement.volume =e.target.value;
});
speedSelect.addEventListener("change",(e)=>{
    speed = parseFloat(e.target.value);
    videoElement.playbackRate =speed;
});

// Load metadata
videoElement.addEventListener('loadedmetadata', updateProgress);