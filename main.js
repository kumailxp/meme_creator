console.log("Testing")

mouseX = 0
mouseY = 0
textbox_X = 0
textbox_Y = 0

var image_box = document.getElementById("img1");
image_box.addEventListener("dblclick", addTextarea, false);
image_box.addEventListener("mousemove", setImageBoxProps, false);
//image_box.addEventListener("click", convert_all_textbox_to_label, false);

textarea_is_selected = false;


function convert_all_textbox_to_label() {
    // for (let tb of document.body.getElementsByTagName("textarea")) {
    //     create_new_label(tb);
    // }
}

function addTextbox() {
    const textbox = document.createElement("input");
    textbox.setAttribute("type", "text");
    document.body.appendChild(textbox);
    textbox.style.position = "absolute";
    textbox.style.left = mouseX + "px";
    textbox.style.top = mouseY + "px";
    textbox.classList.add("resizable");
}

function set_is_selected(event) {
    if ( (textbox_X < (parseInt(event.target.style.left,10) + parseInt(event.target.style.width,10) - 10)) &&
         (textbox_Y < (parseInt(event.target.style.top,10) + parseInt(event.target.style.height,10) - 10)) && textarea_is_selected == false) {
        textarea_is_selected = true;
    }
    else {
        textarea_is_selected = false;
    }
}

function unset_is_selected(event) {
    textarea_is_selected = false;
}


function check_for_drag(event) {
    if (textarea_is_selected == true) {
        event.target.style.left = (textbox_X - 30) + "px";
        event.target.style.top  = (textbox_Y - 30) + "px";
    } 
}

function setImageBoxProps(event) {
    mouseX = event.pageX;
    mouseY = event.pageY;
    textarea_is_selected = false;
}

function getMousePosT(event) {
    textbox_X = event.pageX;
    textbox_Y = event.pageY;
}

function convert_to_label(event) {
    var key;
    var isShift;
    if (window.event) {
      key = window.event.keyCode;
      isShift = !!window.event.shiftKey; // typecast to boolean
    } else {
      key = ev.which;
      isShift = !!ev.shiftKey;
    }
    if ( isShift ) {
      switch (key) {
        case 16: // ignore shift key
          break;
        case 13:
            create_new_label(event.target);
          break;
      }
    }    
    // if (event.key == "Enter") {
    //     var label = document.createElement("Label");
    //     document.body.appendChild(label);
    //     label.style.position = "absolute";
    //     label.style.left = event.target.style.left;
    //     label.style.top = event.target.style.top;
    //     label.style.width = event.target.style.width;
    //     label.style.height = event.target.style.height;
    //     label.innerHTML= event.target.value;
    //     label.addEventListener("mousedown", convert_to_textbox, false);
    //     document.body.removeChild(event.target);
    //     textarea_is_selected = false;
    // }
}

function create_new_label(t) {
    var label = document.createElement("Label")
    document.body.appendChild(label)
    label.style.position = "absolute"
    label.style.left = t.style.left
    label.style.top = t.style.top
    label.style.width = t.style.width
    label.style.height = t.style.height
    label.style.color = "white";
    label.style.textShadow = "-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000";
    label.innerHTML = t.value
    label.addEventListener("mousedown", convert_to_textbox, false)
    document.body.removeChild(t)
    textarea_is_selected = false
}

function convert_to_textbox(event) {
    addTextarea2(event.target);
}

function addTextarea2(t) {

    if (t == "") {
        return
    }
    const textarea = document.createElement("textarea");
    textarea.setAttribute("type", "text");
    textarea.setAttribute("rows", 4);
    textarea.setAttribute("cols", 4); 
    document.body.appendChild(textarea);
    textarea.style.position = "absolute";
    textarea.style.left = t.style.left;
    textarea.style.top = t.style.top;
    textarea.style.width = parseInt(t.style.width,10) + "px";
    textarea.style.height = parseInt(t.style.height,10) + "px";
    textarea.style.color = t.style.color;
    textarea.style.textShadow = t.style.textShadow;

    textarea.innerHTML = t.innerHTML;
    textarea.addEventListener("mousedown", getMousePosT, false);
    textarea.addEventListener("mousedown", set_is_selected, false);
    textarea.addEventListener("mousemove", getMousePosT, false);
    textarea.addEventListener("mousemove", check_for_drag, false);
    textarea.addEventListener("mouseup", unset_is_selected, false);
    textarea.addEventListener("keydown", convert_to_label, false);
    document.body.removeChild(t);
    
    //textarea.classList.add("resizable");
}



function addTextarea() {
    for (let tb of document.body.getElementsByTagName("textarea")) {
        console.log(tb);
        document.body.removeChild(tb);
    }
    const textarea = document.createElement("textarea");
    textarea.setAttribute("type", "text");
    textarea.setAttribute("rows", 4);
    textarea.setAttribute("cols", 4);
    document.body.appendChild(textarea);
    textarea.style.position = "absolute";
    textarea.style.left = mouseX + "px";
    textarea.style.top = mouseY + "px";
    textarea.style.width = 30 + "px";
    textarea.style.height = 60 + "px";
    textarea.style.color = "white";
    textarea.style.textShadow = "-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000";
    textarea.addEventListener("mousedown", getMousePosT, false);
    textarea.addEventListener("mousedown", set_is_selected, false);
    textarea.addEventListener("mousemove", getMousePosT, false);
    textarea.addEventListener("mousemove", check_for_drag, false);
    textarea.addEventListener("mouseup", unset_is_selected, false);
    textarea.addEventListener("keydown", convert_to_label, false);
    
    //textarea.classList.add("resizable");
}

function showImage() {
    image_box.src="static/pic/meme1.jpg";
    document.getElementById("text_1").innerHTML="<input type='text' value=''>"
}

