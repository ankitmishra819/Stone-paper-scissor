let userScore=0;
let compScore=0;
const choice=document.querySelectorAll('.img');
const youscore=document.querySelector('.youScore');
const computerScore=document.querySelector('.compScore');
let useerWinMsg=document.querySelector('#userWinScore');
const compWinMsg=document.querySelector('#compWinScore');
const setMsg=document.querySelector('#setmsg');

const compChooice=(userChoice)=>{
    //random value 
let arr=["rock","paper","scissors"];
let compvalue=Math.floor(Math.random()*3);
console.log(compvalue)
   
    if(userChoice==arr[compvalue]){
       console.log("user win")
       userScore++;
       useerWinMsg.innerText = userScore;
       setMsg.innerText=`You win you choice ${userChoice}& computer choice ${arr[compvalue]}`;

    }
    
    else if(userChoice!=arr[compvalue]){
        console.log('computer win');
        compScore++;
        compWinMsg.innerText = compScore;
        setMsg.innerText=`Computer win your choice ${userChoice}& computer choice ${arr[compvalue]}`;
    }

}





choice.forEach((img)=>{
img.addEventListener('click',()=>{
    let userChoice=img.getAttribute("value");
    
    compChooice(userChoice);
})
})