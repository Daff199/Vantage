loadJSON("assets/data.json", (data) => {
    var sourc = document.createElement("source");
    sourc.src = data.audios.songs[Math.floor(Math.random() * data.audios.n)];
    $("audio").appendChild(sourc);
    $("audio").play();  
})