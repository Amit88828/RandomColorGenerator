
var getcolor = () => {
    //hex code
    const randomNumber=Math.floor(Math.random()*16777152);
    const colorcode="#"+randomNumber.toString(16);
    document.body.style.backgroundColor=colorcode;
    document.getElementById("color-code").innerText=colorcode;
}

// document.getElementById("btn").addEventListener(
//     "click",getcolor
        
//         )

function xyz(){
    
    getcolor();
    
}
getcolor();

