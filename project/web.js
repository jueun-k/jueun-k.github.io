const slide_parent = document.querySelector('.slide');
const slide_img = document.querySelectorAll('.slide img');


const prev_btn = document.querySelector('#prev_btn');
const next_btn = document.querySelector('#next_btn');


let counter =1;
const size = slide_img[0].clientWidth;

slide_parent.style.transform ='translateX(' +(-size * counter) +'px)';

next_btn.addEventListener('click',function() {
    slide_parent.style.transition ="transform 0.4s ease-in-out";
    counter++;
    slide_parent.style.transform ='translateX(' +(-size * counter) +'px)';
});

prev_btn.addEventListener('click',function() {
    slide_parent.style.transition ="transform 0.4s ease-in-out";
    counter--;
    slide_parent.style.transform ='translateX(' +(-size * counter) +'px)';
});

slide_parent.addEventListener('transitioned',() => {

    if(slide_img[counter].id === 'last'){
        slide_parent.style.transition = "none";
        counter = slide_img.length -2;
        slide_parent.style.transform ='translateX(' +(-size * counter) +'px)';
    }

    if(slide_img[counter].id==='first'){
        slide_parent.style.transition="none";
        counter=slide_img.length -counter;
        slide_parent.style.transform ='translateX(' +(-size * counter) +'px)';
    }

});