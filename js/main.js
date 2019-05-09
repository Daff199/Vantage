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



function loadJSON(path, success, error){
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function()
    {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status === 200) {
                if (success)
                    success(JSON.parse(xhr.responseText));
            } else {
                if (error)
                    error(xhr);
            }
        }
    };
    xhr.open("GET", path, true);
    xhr.send();
}