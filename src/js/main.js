/* Your JS here. */

let classes = [0,0,0];
let slide_count = 3;

function nav_button(c) {
    class_containers = document.getElementsByClassName("class_container");
    class_containers[c].scrollIntoView({behavior: "smooth", block: "center"});
}


function carousel(c, step){
    slides = document.getElementsByClassName("class_interface_container");
    next_idx = (classes[c] + step)

    if (next_idx < 0){
        next_idx = slide_count - 1;
    }

    if (next_idx >= slide_count){
        next_idx = 0;
    }

    curr_slide = slides[c * slide_count + classes[c]];
    next_slide = slides[c * slide_count + next_idx];
    classes[c] = next_idx;

    curr_slide.style.display = "none";
    next_slide.style.display = "block";
}

carousel(0,0);
carousel(1,0);
carousel(2,0);

document.addEventListener("scroll", function(){
    class_containers = document.getElementsByClassName("class_container");
    nav_buttons = document.getElementsByClassName("nav_button");

    for (let i = 0; i < nav_buttons.length; i++){
        if (class_containers[i].getBoundingClientRect().top > 0 && class_containers[i].getBoundingClientRect().bottom < window.innerHeight){
            nav_buttons[i].style.color = "orange";
        } else {
            nav_buttons[i].style.color = "white";
        }
    }

    
});
