let slides = document.getElementsByClassName("slide");
let slideval = 0;
motion(slideval);
function next() {
    slideval++;
    motion(slideval)
}
function prev() {
    slideval--;
    motion(slideval)
}

function motion(slv) {
    if (slv < 0) {
        slideval = 2;
    } else if (slv > 2) {
        slideval = 0;
    }
    else {
        
        for (const x in slides) {
            slides[x].style.display = "none";
            slides[slv].style.display = "flex";
        }
    }
}
document.write("script online☺")