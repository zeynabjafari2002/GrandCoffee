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
    if(index>=(slidesContainer.childElementCount)-1){
        slide1Func()
    }
    else if(index===0){
        slide2Func()
    }
    
})

nextBtn.addEventListener('click' , ()=>{
    if(index===0){
        slide2Func()
    }
    else if(index>=(slidesContainer.childElementCount)-1){
        slide1Func()
    }
})

function slide1Func() {
    slidesContainer.children[index].classList.remove('active')
    index=0
    slidesContainer.children[index].classList.add('active')
}

function slide2Func(){
    slidesContainer.children[index].classList.remove('active')
    index=(slidesContainer.childElementCount)-1
    slidesContainer.children[index].classList.add('active')
}





// gallery section
let iElem=null
let galleryImgs=$.querySelectorAll('.galleryImg')

let boxImg1=$.querySelector('.boxImg1')
let img1=$.querySelector('.img1')
img1.addEventListener('mouseover' , ()=>{
    iElem=$.createElement('i')
    iElem.classList.add('uil' , 'uil-search')
    boxImg1.appendChild(iElem)
})


let boxImg2=$.querySelector('.boxImg2')
let img2=$.querySelector('.img2')
img2.addEventListener('mouseover',()=>{
    iElem=$.createElement('i')
    iElem.classList.add('uil' , 'uil-search')
    boxImg2.append(iElem)
})


let boxImg3=$.querySelector('.boxImg3')
let img3=$.querySelector('.img3')
img3.addEventListener('mouseover',()=>{
    iElem=$.createElement('i')
    iElem.classList.add('uil' , 'uil-search')
    boxImg3.append(iElem)
})


let boxImg4=$.querySelector('.boxImg4')
let img4=$.querySelector('.img4')
img4.addEventListener('mouseover',()=>{
    iElem=$.createElement('i')
    iElem.classList.add('uil' , 'uil-search')
    boxImg4.append(iElem)
})


let boxImg5=$.querySelector('.boxImg5')
let img5=$.querySelector('.img5')
img5.addEventListener('mouseover',()=>{
    iElem=$.createElement('i')
    iElem.classList.add('uil' , 'uil-search')
    boxImg5.append(iElem)
})


let boxImg6=$.querySelector('.boxImg6')
let img6=$.querySelector('.img6')
img6.addEventListener('mouseover',()=>{
    iElem=$.createElement('i')
    iElem.classList.add('uil' , 'uil-search')
    boxImg6.append(iElem)
})


let boxImg7=$.querySelector('.boxImg7')
let img7=$.querySelector('.img7')
img7.addEventListener('mouseover',()=>{
    iElem=$.createElement('i')
    iElem.classList.add('uil' , 'uil-search')
    boxImg7.append(iElem)
})


let boxImg8=$.querySelector('.boxImg8')
let img8=$.querySelector('.img8')
img8.addEventListener('mouseover',()=>{
    iElem=$.createElement('i')
    iElem.classList.add('uil' , 'uil-search')
    boxImg8.append(iElem)
})


let boxImg9=$.querySelector('.boxImg9')
let img9=$.querySelector('.img9')
img9.addEventListener('mouseover',()=>{
    iElem=$.createElement('i')
    iElem.classList.add('uil' , 'uil-search')
    boxImg9.append(iElem)
})


galleryImgs.forEach(
    function (item){
        item.addEventListener('mouseout' , ()=>{
            iElem.remove()
        })
    }
)



// services section







