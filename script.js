
function load(element){
    alert("Loading weather report...");
}

var msg = document.querySelector(".cookiemsg");
function remove(element){
    msg.remove(element);
}



var converth = document.getElementsByClassName("degreeh");
var convertl = document.getElementsByClassName("degreel");
function convert(element){
    if(element.value=="f"){
        for(var i =0;i<converth.length;i++){
            converth[i].innerText = Math.round((parseInt(converth[i].innerText)*9/5)+ 32);
            convertl[i].innerText = Math.round((parseInt(convertl[i].innerText)*9/5)+ 32);
            console.log(converth[i].innerText);
        }
        
    }
    if(element.value=="c"){
        for(var i =0;i<converth.length;i++){
            converth[i].innerText = Math.round((parseInt(converth[i].innerText)-32)*5/9);
            convertl[i].innerText = Math.round((parseInt(convertl[i].innerText)-32)*5/9);
            console.log(converth[i].innerText);
    }
}
}

