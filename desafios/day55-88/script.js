//load window

window.onload = function(){
    //code
    document.getElementById("load").style.display = "none";
    
document.getElementById("home").style.display = "block";    
}

/*setTimeout(function(){
    document.getElementById("load").style.display = "none";
    
document.getElementById("home").style.display = "block";    
}, 5000);*/


window.onscroll = function() { 
var scroll = window.pageYOffset; 
if (scroll > 20) {
document.getElementById("header").style.display = "none"; } 
else { 
   document.getElementById("header").style.display = "initial"; 

    } 

}

var counter = 0; 

var images = [

"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTlxT3a0KvNjeyoYt5oWO3JxmBz1oXRg4qjA&usqp=CAU",

"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpcNm9-DIRPevr43a4SZvqy1S8KgpgwrzS_w&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyJ1mWn3WqmjoIqWDDSLRw30WQgGgAQAjYwg&usqp=CAU",

"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqgXi5bSr555HTEkPZwQtA5yWRdP0whEgRTB9aosfqtI3arlRT&s",

"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3uvafsa2yzzsBMbnClGQ-9rGtUA7xFCysqw&usqp=CAU",

"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6eLIlq8xmjBIY4sTPhgCbl2T346dGs3Nbdw&usqp=CAU"
]; 


//image slider
setInterval ( function changeImg () { 
    
     var img = document.querySelector("#img-slide");
     var img2 = document.querySelector("#img-slide2");
     var img3 = document.querySelector("#img-slide3");
     var img4 = document.querySelector("#img-slide4");
         
    img.src = images[counter];
    img2.src = images[counter];
    img3.src = images[counter];
    img4.src = images[counter];
    counter++;
    
    if(counter > images.length - 1){
        counter = 0;
    }
}, 2000);


//tabs
function tabs(tabc) {
    var i;
    var tabs = document.getElementsByClassName("tabsc");
    for (i = 0; i < tabs.length; i++) {
       tabs[i].style.display = "none";  
    }
    document.getElementById(tabc).style.display = "block";  
}