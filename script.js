let button1=document.querySelector(".btn1")
let button2=document.querySelector(".btn2")
let content=document.querySelector(".contentbox")
let rgb1= `#123654`;
let rgb2= `#859674`;


const changecolor=((a,b)=>{
    content.innerHTML=(`linear-gradient(to right, #${a}, #${b})`)
})



const hexadecimals="0123456789abcdef"
const newHexcode=(()=>{
    let newcolor="#"
    for(i=0;i<6;i++){
        a=parseInt(Math.random()*16);
        newcolor+=(hexadecimals[a])
    }
    return newcolor;
})

button1.addEventListener('click',()=>{
    rgb1=newHexcode()
    // console.log(rgb1);
    button1.innerHTML=`${rgb1}`;
    document.body.style.backgroundImage=`linear-gradient(to right, ${rgb1}, ${rgb2})`;
    content.innerHTML=`background-image: linear-gradient(to right, ${rgb1}, ${rgb2})`
})
console.log(rgb1);
button2.addEventListener('click',()=>{
    rgb2=newHexcode()
    button2.innerHTML=`${rgb2}`;
    document.body.style.backgroundImage=`linear-gradient(to right,${rgb1} , ${rgb2})`;
    content.innerHTML=`background-image: linear-gradient(to right,${rgb1}, ${rgb2})`
})
