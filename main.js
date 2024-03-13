let nextDow = document.getElementById('next');
let prevDow = document.getElementById('prev');
let carrouselDom = document.querySelector('.slider-tabaiba');
let listItemDom = document.querySelector('.slider-tabaiba .list');
let thumbnailDom = document.querySelector('.slider-tabaiba .thumbnail');

nextDow.onclick = function(){
    showSlider('next');    
}

prevDow.onclick = function(){
    showSlider('prev');    
}

let timeRunning = 3000;
let timeAutoNext = 7000;
let runTimeOut;
let runAutoRun = setTimeout(()=>{
    nextDow.click();
}, timeAutoNext);

function showSlider(type) {
    let itemSlider = document.querySelectorAll('.slider-tabaiba .list .item');
    let itemThumbnail = document.querySelectorAll('.slider-tabaiba .thumbnail .item')

    if (type === 'next') {
        listItemDom.appendChild(itemSlider[0]);
        thumbnailDom.appendChild(itemThumbnail[0]);
        carrouselDom.classList.add('next');
    } else {
        let positionLastItem = itemSlider.length -1;
        listItemDom.prepend(itemSlider[positionLastItem]);
        thumbnailDom.prepend(itemThumbnail[positionLastItem]);
        carrouselDom.classList.add('prev');
    }

    clearTimeout(runTimeOut);
    runTimeOut = setTimeout(()=>{
        carrouselDom.classList.remove('next');
        carrouselDom.classList.remove('prev')
    }, timeRunning);

    clearTimeout(runAutoRun);
    runTimeOut = setTimeout(()=>{
        nextDow.click();
    }, timeAutoNext);
}