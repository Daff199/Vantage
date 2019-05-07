function clearContent() {
    $("#content").innerHTML = "";
}

function loader(){
    if ($("#content") == null){
        var cont = document.createElement("div");
        cont.id = "content";
        cont.classList.add("grid-container");
        $("body").appendChild(cont);
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


document.querySelectorAll("#sidebar ul li a").forEach(element => {
    switch (element.textContent){
        case "Series":
            element.addEventListener("click", function (){
                loader()
            });
            break;
        case "Peliculas":
            element.addEventListener("click", function (){
                loader()
            })
            break;

        case "Categorias":
            element.addEventListener("mouseover", function (){
                console.log("aaaa");
            })
            break;
    }
});
