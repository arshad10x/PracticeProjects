let plusElm = document.getElementById('plus');
let minusElm = document.getElementById('minus');
let digitElm=document.getElementById('digit');
let resetElm=document.getElementById('reset')
let count=0;

plusElm.addEventListener("click",()=>{
    count++;
    digit.innerText=count;

})

minusElm.addEventListener("click",()=>{
    if(count<=0){
        count=0;
    }else{
        count--
    }
    digit.innerText=count;

})

resetElm.addEventListener("click",()=>{
    count=0;
    digit.innerText=0

    // digit=0
})

