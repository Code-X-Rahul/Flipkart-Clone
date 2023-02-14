let myImage = document.getElementById("sliderImage1");

function changePreviousimage(){
    let mySrc = myImage.getAttribute('src');
    if(mySrc === "slider images/2.webp"){
        myImage.setAttribute('src', "slider images/6");
    }else if(mySrc === "slider images/6"){
        myImage.setAttribute('src', "slider images/5");
    }else if(mySrc === "slider images/5"){
        myImage.setAttribute('src', "slider images/2.webp");
    }else{
        myImage.setAttribute('src', "slider images/2.webp");
    }
    console.log("you are awesome");

}
console.log(changePreviousimage());
let moreClick = document.getElementsByClassName("hover");
let moreMore = document.getElementsByClassName("none");

moreClick.onclick = function(){
    
}


function changeNextimage(){
    let mySrc = myImage.getAttribute('src');
    if(mySrc === "slider images/2.webp"){
        myImage.setAttribute('src', "slider images/5");
    }else if(mySrc === "slider images/5"){
        myImage.setAttribute('src', "slider images/6");
    }else{
        myImage.setAttribute('src', "slider images/2.webp");
    }
}

