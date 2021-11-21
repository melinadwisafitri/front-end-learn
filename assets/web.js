function menu(className,e){
    var a, content, link;
    var color= '#862906';
    content = document.getElementsByClassName("content")
    for(a=0; a<content.length; a++){
        content[a].style.display="none"
    }

    link = document.getElementsByClassName("menu-bar")
    for(a=0; a<link.length; a++){
        link[a].style.backgroundColor= ""
    }

    document.getElementById(className).style.display="flex"
    e.style.backgroundColor = color
}

document.getElementById("default1").click();