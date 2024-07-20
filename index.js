
function color_page(){
    let flipper=document.body.style.backgroundColor='black'
    document.getElementById('h1_text').innerHTML=flipper;

}

function main_function(){
    let flipper1=document.body.style.backgroundColor='White'
    document.getElementById('h1_text').innerHTML=flipper1;

}

const changeColor = document.getElementById('simple_click'),colors=['red','blue','green'];
let index=0;
changeColor.addEventListener('click',()=>{
    document.body.style.backgroundColor=colors[index];
    document.getElementById('h1_text').innerHTML=colors[index];
    index=(index+1)%colors.length;
    
});
// const changeColorHex = document.getElementById('hex_click'),hexColors=	#008080;
// let indexHex=#008080;
// changeColor.addEventListener('click',()=>{
//     document.body.style.backgroundColor=colors[indexHex];
//     indexHex=(indexHex+1);
// });


// let x=parseInt(Math.random()*100000);
// let y='#'+x;
// function hex_page(){
//     document.body.style.backgroundColor=y;
// }

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function hex_page() {
    const elements = document.querySelectorAll('#container');

    elements.forEach(element => {
        const randomColor = getRandomColor();
        document.body.style.backgroundColor = randomColor; // Change the text color
        // element.style.backgroundColor = randomColor; // Uncomment to change background color
        document.getElementById('h1_text').innerHTML=randomColor;
    });
    

}

