const button =document.getElementById("button")
const colortext=document.getElementById("color")
const wrap=document.getElementById("wrap")
const container =document.getElementById("heading")
const hex=[0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"]

button.addEventListener("click",changeBackround)
function changeBackround(){
    let hexcolor="#"
    for (i=0;i<=5;i++){
        hexcolor+=randomhexaval()
        console.log(hexcolor);
        
    }
    wrap.style.backgroundColor=hexcolor
    colortext.innerHTML=hexcolor
    container.style.color=hexcolor
}

function randomhexaval(){
    let randomIndex=Math.floor(Math.random()*16)
    return hex[randomIndex]
}