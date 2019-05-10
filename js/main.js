function clearContent() {
    $("#content").innerHTML = "";
}

function loader(){
    
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
        for (let i = 0; i<data.imgs.length; i++){
            let gridElement = document.createElement("div");
            gridElement.classList.add("grid-item");
            let a = document.createElement("a");
            a.href = "../item.html?title=".concat(data.imgs[i].split("/").pop().split(".")[0]).concat("&").concat("src=").concat(data.videos[i]);
            a.id = data.imgs[i].split("/").pop().split(".")[0];
            let img = document.createElement("img");
            img.src = data.imgs[i];
            a.appendChild(img);
            gridElement.appendChild(a);
    
            $(".grid-container").appendChild(gridElement);
        }
    });
    
}

$("#content").innerHTML = routes["init"];

document.querySelectorAll("#sidebar ul li a").forEach(element => {
    switch (element.textContent){
        case "Series":
            element.addEventListener("click", () =>{
                loader()
            });
            break;
        case "Peliculas":
            element.addEventListener("click", () =>{
                loader()
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


document.querySelectorAll(".grid-container .grid-item a").forEach(element => {
    switch (element.id){
        case "agents_of_shield":
            element.addEventListener("click", () =>{
                console.log("aaaa");
            })

            break;
        case "the_grand_tour":
            element.addEventListener("click", () =>{
                console.log("aaaa");
            })
            break;

        case "narcos":
            element.addEventListener("click", () =>{
                console.log("aaaa");
            })
            break;
        case "arrow":
            element.addEventListener("click", () =>{
                console.log("aaaa");
            })
            break;
        case "supergirl":
            element.addEventListener("click", () =>{
                console.log("aaaa");
            })
            break;
        case "mr_robot":
            element.addEventListener("click", () =>{
                console.log("aaaa");
            })
            break;
    }
});