function clickbutton(target) {
let top = document.getElementById("top");
let target_value = target.innerHTML;

if (target_value == "AC") {
    top.innerHTML = "0";
} else if (target_value == "=") {
    top.innerHTML = eval(top.innerHTML);
} else if (top.innerHTML == "0") {
        top.innerHTML = target_value;
} else if (top.innerHTML == "00") {
        top.innerHTML = target_value;
} else if (top.innerHTML == "+") {
        top.innerHTML = target_value;
} else if (top.innerHTML == "*") {
        top.innerHTML = target_value;
} else if (top.innerHTML == "/") {
        top.innerHTML = target_value;
} else if (top.innerHTML == ".") {
        top.innerHTML = target_value;
}else if (target_value == "+" && top.innerHTML.slice(-1) == "+"){
    return;
}else if (target_value == "+" && top.innerHTML.slice(-1) == "-"){
    return;
}else if (target_value == "+" && top.innerHTML.slice(-1) == "*"){
    return;
}else if (target_value == "+" && top.innerHTML.slice(-1) == "/"){
    return;
}else if (target_value == "+" && top.innerHTML.slice(-1) == "."){
    return;
}else if (target_value == "-" && top.innerHTML.slice(-1) == "+"){
    return;
}else if (target_value == "-" && top.innerHTML.slice(-1) == "-"){
    return;
}else if (target_value == "-" && top.innerHTML.slice(-1) == "*"){
    return;
}else if (target_value == "-" && top.innerHTML.slice(-1) == "/"){
    return;
}else if (target_value == "-" && top.innerHTML.slice(-1) == "."){
    return;
}else if (target_value == "*" && top.innerHTML.slice(-1) == "+"){
    return;
}else if (target_value == "*" && top.innerHTML.slice(-1) == "-"){
    return;
}else if (target_value == "*" && top.innerHTML.slice(-1) == "*"){
    return;
}else if (target_value == "*" && top.innerHTML.slice(-1) == "/"){
    return;
}else if (target_value == "*" && top.innerHTML.slice(-1) == "."){
    return;
}else if (target_value == "/" && top.innerHTML.slice(-1) == "+"){
    return;
}else if (target_value == "/" && top.innerHTML.slice(-1) == "-"){
    return;
}else if (target_value == "/" && top.innerHTML.slice(-1) == "*"){
    return;
}else if (target_value == "/" && top.innerHTML.slice(-1) == "/"){
    return;
}else if (target_value == "/" && top.innerHTML.slice(-1) == "."){
    return;
}else if (target_value == "." && top.innerHTML.slice(-1) == "+"){
    return;
}else if (target_value == "." && top.innerHTML.slice(-1) == "-"){
    return;
}else if (target_value == "." && top.innerHTML.slice(-1) == "*"){
    return;
}else if (target_value == "." && top.innerHTML.slice(-1) == "/"){
    return;
}else if (target_value == "." && top.innerHTML.slice(-1) == "."){
    return;
}else {top.innerHTML += target_value;
}
}

button1.addEventListener("click" , function(){
  point.disabled = false;
});

button2.addEventListener("click" , function(){
  point.disabled = false;
});

button3.addEventListener("click" , function(){
  point.disabled = false;
});

button4.addEventListener("click" , function(){
  point.disabled = false;
});

button5.addEventListener("click" , function(){
  point.disabled = false;
});

button6.addEventListener("click" , function(){
  point.disabled = false;
});

point.addEventListener("click" , function(){
  point.disabled = true;
});
