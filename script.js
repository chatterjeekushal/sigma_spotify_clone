
let songs = [
    { songname: "Tu hai kahan", songpath: "./song/song1.mp3", coverpath: "./image/card1.jpg", artish: "AUR" },
    { songname: "coffe shop", songpath: "./song/song2.mp3", coverpath: "./image/card2.jpg", artish: "Anuv Jain" },
    { songname: "Paint The Town Red", songpath: "./song/song3.mp3", coverpath: "./image/card1.jpg", artish: "Doja Cat" },
    { songname: "One SITE Love You", songpath: "./song/song4.mp3", coverpath: "./image/card.jpg", artish: "Shubh Roy" },
    { songname: "Mahiye jinna sohna", songpath: "./song/song5.mp3", coverpath: "./image/card2.jpg", artish: "Pritam" },

];

// Logging song paths to the console


for (let forindex = 0; forindex < songs.length; forindex++) {
    const element = songs[forindex];

    let div = document.createElement('div');

    div.setAttribute("class", "libary_song_name")


    div.innerHTML = `

    

        <div class="libary_song_image">

            <img src="${songs[forindex].coverpath}" alt="" srcset="">

        </div>

        <div class="libary_song_desc">

            <h3>${songs[forindex].songname}</h3>

            <P>${songs[forindex].artish}</P>


        </div>

        <span class="display_none gif">
        
        <img src="./image/spofify_gif.gif" alt="" srcset="">
        </span>


`

    let songholder = document.querySelector(".libary_song_list");

    songholder.appendChild(div);


}




let btn = document.querySelector(".libary_btn");

console.log(btn);


songindex = 0;

let audio = new Audio("./song/song1.mp3")
let isPlaying = false;

let gif = document.getElementsByClassName("gif");


let song_list = document.querySelectorAll(".libary_song_name");

function playsong(song_path) {

    audio.src = song_path
    isPlaying = true;

    audio.play()
}


function songpuse() {


    isPlaying = false;
    audio.pause()

}




Array.from(song_list).forEach((element, index) => {



    element.addEventListener('click', function () {

        const songPath = songs[index].songpath



        


        if (isPlaying == true && songindex == index) {
            songpuse(); // Pause if already playing the same song
            console.log(songindex);
            gif[index].classList.add("display_none");

            play_btn.classList.add("bi-play-circle-fill")
            play_btn.classList.remove("bi-pause-circle-fill")

        } else {
            songindex = index;
            playsong(songPath);
            console.log(songindex);
            gif[index].classList.remove("display_none");

            play_btn.classList.add("bi-pause-circle-fill")
            play_btn.classList.remove("bi-play-circle-fill")
        }

        songname(index - 1)



    })



});




let privies_btn = document.querySelector("#previes")


let next_btn = document.querySelector("#next")








function songname(songindex) {

    let currant_song = document.querySelector(".currant_song_name").innerHTML = songs[songindex].songname;
    let currant_song_artsat = document.querySelector(".currant_song_artast").innerHTML = songs[songindex].songname;
    let currant_song_image = document.querySelector(".currant_image").src = songs[songindex].coverpath;



    console.log(currant_song, currant_song_artsat, currant_song_image);

    console.log(songindex);



}

















let play_btn = document.querySelector("#play_btn");




function play_master_btn() {

    play_btn.addEventListener('click', function () {


        audio.src = songs[songindex].songpath

        console.log(songs[songindex].songpath);

        let songdata = songs[songindex].songpath

        if (isPlaying == true) {

            songpuse()

            play_btn.classList.add("bi-play-circle-fill")
            play_btn.classList.remove("bi-pause-circle-fill")
        }
        else {
            playsong(songdata)

            play_btn.classList.remove("bi-play-circle-fill")
            play_btn.classList.add("bi-pause-circle-fill")

        }

        volum()


    })


    next_btn.addEventListener('click', function () {

        audio.src = songs[songindex++].songpath

        if (songindex == songs.length) {
            songindex = 0;


        }

        songname(songindex)

        

        audio.play()

    })


    privies_btn.addEventListener('click', function () {

        audio.src = `./song/song${songindex--}.mp3`

        if (songindex == 0) {

            songindex = songs.length;

        }

        songname(songindex - 1)

        

        audio.play()

    })

    timeup()



}



play_master_btn()






let currentTime = 0


function timeup() {

    audio.addEventListener("timeupdate", function () {


        // console.log(audio.currentTime, audio.duration);

         let currang_tumimg =  convertSecondsToMinutesAndSeconds(audio.currentTime)

let song_duration=convertSecondsToMinutesAndSeconds(audio.duration);



        let vag = parseInt(audio.currentTime / 2.5)

        document.querySelector(".sik_bar_music").value = vag;

        

document.querySelector("#currang_song_timing").innerHTML=currang_tumimg;
document.querySelector("#absulute_song_timing").innerHTML=song_duration;

    })



}

function volum() {



    console.log("hello");

    let volume = document.querySelector("#volume_bar");
    volume.addEventListener("change", function (e) {


        audio.volume = e.currentTarget.value / 100;
    })

}










function convertSecondsToMinutesAndSeconds(seconds) {
    if (isNaN(seconds) || seconds < 0) {
        return song_duration;
    }

    var minutes = Math.floor(seconds / 60);
    var remainingSeconds = Math.floor(seconds % 60);

    if(remainingSeconds<10){

     remainingSeconds= "0"+remainingSeconds;


    }

    

    var result = `<span>${minutes} : ${remainingSeconds}</span>`;

    return result;
}

// Example usage:
// var totalSeconds = timeup();
// var result = convertSecondsToMinutesAndSeconds(totalSeconds);
// console.log(result);




