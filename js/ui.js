function $(selector) {
    return document.querySelector(selector);
}

function toggleSidebar(){
    if ($("#sidebar").classList.contains("active-sidebar")){
        hideSidebar();
        $("header").style.width = "100vw";
        $("#content").style.width = "99vw";
        $("#content").style.left = "0";
    } else {
        showSidebar();
    }
}

function showSidebar() {
    $("#sidebar").classList.toggle("hide-sidebar");
    $("#sidebar").classList.add("active-sidebar");
    $("#sidebar").style.width = "15vw";
    
    $("header").style.width = "85vw";

    $("#content").style.left = "15vw";
}

function hideSidebar() {
    $("#sidebar").classList.toggle("active-sidebar");
    $("#sidebar").classList.add("hide-sidebar");
    $("#sidebar").style.width = "0";
    $("#sidebar").style.marginLeft = "0";
}


window.onload = function () {
    $("a.trigger").addEventListener("click", () => {
        toggleSidebar();
    })
}