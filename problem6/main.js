function getRandomColor(){
    let colors = ["pink","blue","yellow","red","aqua"];
    for(let i=0; i<6; i++){
        return colors[Math.floor(Math.random()*colors.length)];
    }
    return colors;
}
document.addEventListener('click',()=>{
 document.body.style.backgroundColor = getRandomColor();
});

