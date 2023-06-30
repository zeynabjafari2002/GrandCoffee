"use strict"

let $=document

// slider
let slidesContainer=$.querySelector('.slidesContainer')
let headerContainer1=$.querySelector('.headerContainer1')
let headerContainer2=$.querySelector('.headerContainer2')
let prevBtn=$.querySelector('.prevBtn')
let nextBtn=$.querySelector('.nextBtn')
let index=0



prevBtn.addEventListener('click' , ()=>{
    // headerContainer2.removeAttribute('style')
    if(index>=(slidesContainer.childElementCount)-1){
        slidesContainer.children[index].classList.remove('active')
        index=0
        slidesContainer.children[index].classList.add('active')
    }
    else if(index===0){
        slidesContainer.children[index].classList.remove('active')
        index=(slidesContainer.childElementCount)-1
        slidesContainer.children[index].classList.add('active')
    }
    
})

nextBtn.addEventListener('click' , ()=>{
    if(index===0){
        slidesContainer.children[index].classList.remove('active')
        index++
        slidesContainer.children[index].classList.add('active')
    }
    else if(index>=(slidesContainer.childElementCount)-1){
        slidesContainer.children[index].classList.remove('active')
        index=0
        slidesContainer.children[index].classList.add('active')
    }
})




































