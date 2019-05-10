$("head title").innerHTML = findGetParameter("title")

function createVideoComponent(link){
    let videoElement = document.createElement("video");
    videoElement.autoplay = true;
    videoElement.controls = true;
    let videoSourceElement = document.createElement("source");

    videoSourceElement.src = link;

    videoElement.appendChild(videoSourceElement);
    $("body").appendChild(videoElement);
}

window.onload = () => {
    createVideoComponent(findGetParameter("src"));
    $(".back-btn").addEventListener("click", () => {
        window.history.back();
    })

}

