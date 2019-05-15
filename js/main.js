function clearContent() {
    $("#content").innerHTML = "";
}

function loader(resource){
    if ($("#content") == null){
        var cont = document.createElement("div");
        cont.id = "content";
        cont.classList.add("grid-container");
        $("body").appendChild(cont);
    } else {
        $("#content").classList.add("grid-container");
    }
    clearContent();
    loadJSON("assets/data.json", (data) => {
        if (resource === "imgs"){
            console.log(data);
            for (let i = 0; i < data.shows_imgs.length; i++) {
                let gridElement = document.createElement("div");
                gridElement.classList.add("grid-item");
                let a = document.createElement("a");
                a.href = "item.html?title=".concat(data.shows_imgs[i].split("/").pop().split(".")[0]).concat("&").concat("src=").concat(data.shows_videos[i]);
                a.id = data.shows_imgs[i].split("/").pop().split(".")[0];
                let img = document.createElement("img");
                img.src = data.shows_imgs[i];
                a.appendChild(img);
                gridElement.appendChild(a);

                $('.grid-container').appendChild(gridElement);
            }
        } else if (resource === "videos") {
            for (let i = 0; i < data.movies_imgs.length; i++) {
                let gridElement = document.createElement("div");
                gridElement.classList.add("grid-item");
                let a = document.createElement("a");
                a.href = "item.html?title=".concat(data.movies_imgs[i].split("/").pop().split(".")[0]).concat("&").concat("src=").concat(data.movies_videos[i]);
                a.id = data.movies_imgs[i].split("/").pop().split(".")[0];
                let img = document.createElement("img");
                img.src = data.movies_imgs[i];
                a.appendChild(img);
                gridElement.appendChild(a);

                $(".grid-container").appendChild(gridElement);
            }
        }
        
    });
    
}

$("#content").innerHTML = routes["init"];

document.querySelectorAll("#sidebar ul li a").forEach(element => {
    switch (element.textContent){
        case "Series":
            element.addEventListener("click", () =>{
                loader("imgs")
            });
            break;
        case "Peliculas":
            element.addEventListener("click", () =>{
                loader("videos")
            })
            break;

        case "Categorias":
            element.addEventListener("mouseover", () =>{
                console.log("aaaa");
            })
            break;
    }
});

document.querySelectorAll(".grid-container a").forEach(element => {
    element.addEventListener("click", function (){

    })
});

$(".home").addEventListener("click", () => {
    location.reload();    
});


