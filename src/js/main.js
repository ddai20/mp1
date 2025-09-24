/* Your JS here. */

let classes = [0,0,0];
let slide_count = 3;

let header_font_size = 40;
let header_height = 70;

let assignments = 3;


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

    body_obj = document.getElementsByTagName("body")[0];
    let multiplier = Math.max(((2000 + body_obj.getBoundingClientRect().top) / 2000), .7);

    header = document.getElementsByTagName("header")[0];
    header_text = document.getElementsByClassName("h_text")[0];

    header.style.height = header_height * multiplier + "px";
    header_text.style.fontSize = header_font_size * multiplier + "px";
    header_text.style.marginTop = multiplier * (header_height - header_font_size) / 2 +  "px";

    nav_button_container = document.getElementsByClassName("nav_button_container")[0];
    nav_button_container.style.marginTop = multiplier * (header_height - header_font_size) / 4 +  "px";

    nav_buttons = document.getElementsByClassName("nav_button");
    for (let i = 0; i < nav_buttons.length; i++){
        nav_buttons[i].style.fontSize = header_font_size * (1/2) * multiplier + "px";
    }

    video = document.getElementsByClassName("uiuc_video")[0];

    if (video.getBoundingClientRect().top > 0 && video.getBoundingClientRect().bottom < window.innerHeight) {
        video.style.animation = "video_fade 2s";
        video.style.opacity = 1;
    } else if (video.getBoundingClientRect().top > window.innerHeight) {
        video.style.opacity = 0;
        video.style.animation = "";
    }
});

function open_modal(c,idx) {
    curr_modal = document.getElementsByClassName("modal")[(c * assignments) + idx];
    curr_modal.showModal();
}

function close_modal(c,idx) {
    curr_modal = document.getElementsByClassName("modal")[(c * assignments) + idx];
    curr_modal.close();
}
