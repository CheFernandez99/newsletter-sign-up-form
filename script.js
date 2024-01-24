const signUp = document.querySelector('.signUp');
const image = document.querySelector('.image');

const thanksMsg =document.querySelector('.thanks');
const SubscribeBtn =document.querySelector('.btn');
const dismisBtn =document.querySelector('.btn2');

thanksMsg.style.display='none';

SubscribeBtn.addEventListener('click',()=>{
    signUp.style.display='none';
    image.style.display='none';
    thanksMsg.style.display='block';
})
dismisBtn.addEventListener('click',()=>{
    signUp.style.display='block';
    image.style.display='block';
    thanksMsg.style.display='none';
})
