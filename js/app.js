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
// let searchImgs=$.querySelectorAll('.searchImg')
// searchImgs.forEach(
//     function (item){
//         item.addEventListener('mouseover',()=>{
//             let imgElem=$.createElement('img')
//             imgElem.setAttribute('src','../images/search-icon.png')
//             item.append(imgElem)
//         })
//     }
// )

// let imgBox1=$.querySelector('.imgBox1')
// function addSearchImg(){
//     let imgElem=$.createElement('img')
//     imgElem.setAttribute('src','../images/search-icon.png')
//     imgBox1.append(imgElem)
//     console.log('test');
// }





















