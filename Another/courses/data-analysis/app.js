window.onscroll = function() {navScroll()};

function navScroll(){
    var anchor = document.getElementsByClassName("nav-link");
    const mainLogo = document.getElementById("main-logo");
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80){
        document.getElementById("navbar").style.backgroundColor = "#fff";
        for (i = 0; i <= anchor.length; i++){
            anchor[i].style.color = "#111";
        }
    } else {
        document.getElementById("navbar").style.backgroundColor = "transparent";
        for (i = 0; i <= anchor.length; i++){
            anchor[i].style.color = "#fff";
        }
    }
}


