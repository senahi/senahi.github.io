function changeSide(pageName) {
    var i, tabcont, tablink
    
    tabcont = document.getElementsByClassName("tabcont");
    for (i = 0; i < tabcont.length; i++) {
        tabcont[i].style.display = "none"; 
    } // i dont know why it needs tabcont.length to change style and why just getelementsbyclass doesnt work
    
    document.getElementById(pageName).style.display = "block";
}
    document.getElementById("defaultSide").click(); // opens on the tab you want the site to start on