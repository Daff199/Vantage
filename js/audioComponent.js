loadJSON("assets/data.json", (data) => {
    var sourc = document.createElement("source");
    sourc.src = data.audios.songs[Math.floor(Math.random() * data.audios.n)];
    $("audio").appendChild(sourc);
    $("audio").controls = true;
    var promise = $("audio").play();
    if (promise !== undefined) {
        promise.then(_ => {
            // Autoplay started!
        }).catch(error => {
            console.log("Autoplay blocked")
        });
    }
    ;  
})