function loader(){
    if ($("#content") == null){
        var cont = document.createElement("div");
        cont.id = "content";
        cont.classList.add("grid-container");
        $("body").appendChild(cont);
    }

    for (let i = 0; i<data.imgs.length; i++){
        let gridElement = document.createElement("div");
        gridElement.classList.add("grid-item");
        let img = document.createElement("img");
        //    img.src = data.root.concat(data.imgs[i]);
        img.src = data.imgs[i];
        gridElement.appendChild(img);

        $(".grid-container").appendChild(gridElement);
    }
}





document.querySelectorAll("#sidebar ul li a").forEach(element => {
    //console.log(element.textContent)
    switch (element.textContent){
        case "Series":
            element.addEventListener("click", function (){
                loader()
            })
    }
    
});
