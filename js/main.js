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
    for (let i = 0; i<data.imgs.length; i++){
        let gridElement = document.createElement("div");
        gridElement.classList.add("grid-item");
        let a = document.createElement("a");
        a.href = "#";
        let img = document.createElement("img");
        //    img.src = data.root.concat(data.imgs[i]);
        img.src = data.imgs[i];
        a.appendChild(img);
        gridElement.appendChild(a);

        $(".grid-container").appendChild(gridElement);
    }
}


/*$(".home").addEventListener("click", () => {
    $("#content").innerHTML = routes["home"];    
})*/
$("#content").innerHTML = routes["home"];

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

