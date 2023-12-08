//----Declaring Varibles-----
var slides = document.querySelectorAll('.slide');
var radBtn = document.querySelectorAll('.rad-btn1');
var leftArrow = document.querySelector('.left');
var rightArrow = document.querySelector('.right');
//----To Store Ongoing Time
var slideInterval;
var intervalTime = 5000;

//-----Iterate all radio navigation buttons
radBtn.forEach(function(Item, Index){
    Item.addEventListener('click',function(){
        manButtonNav(Index);
    });

});

//-----Click Arrow Functions-----
// Right Arrow
rightArrow.addEventListener('click',function(e){
    e.preventDefault();
    nextSlide();
    clrInterval();
});

//Left Arrow
leftArrow.addEventListener('click',function(e){
    e.preventDefault();
    previouSlide();
    clrInterval();

});

//-----Function for radio navigation-----

function manButtonNav(){

    for (var i=0; i< slides.length; i++){
        //Set Slide and Radio Navigation Button
        if(i!== Index){
            slides[i].classList.remove('current');
            radBtn[i].classList.remove('active');

        }
        else{
            slides[Index].classList.add('current');
            radBtn[Index].classList.add('active');
        }
    }
    clrInterval();

}

//-----Function for the nextSlide-----
function nextSlide(){
var curr = document.querySelector('.current');
var active = document.querySelector('.active');

//-----removing the current slide and the label------

curr.classList.remove('current');
active.classList.remove('active');

//-----Set Next Slide and Radio Button
if(curr.nextElementSibling){
    curr.nextElementSibling.classList.add('current');
    active.nextElementSibling.classList.add('active');
}
else{
    slides[0].classList.add('current');
    radBtn[0].classList.add('active');

}
}


//-----Function for the previousSlide-----
function previouSlide(){
    var curr = document.querySelector('.current');
    var active = document.querySelector('.active');
    
    //-----removing the previous slide and the label------
    
    curr.classList.remove('current');
    active.classList.remove('active');
    
    //-----Set Previous Slide and Radio Button
    if(curr.previousElementSibling){
        curr.previousElementSibling.classList.add('current');
        active.previousElementSibling.classList.add('active');
    }
    else{
        slides[slides.length-1].classList.add('current');
        radBtn[radBtn.length-1].classList.add('active');
    
    }
    }


//-----Function for clear Interval-----
function clrInterval(){
    clearInterval(slideInterval);
    slideInterval = setInterval(nextSlide,intervalTime);

}

//-----Automatic Slide Navigation-----
slideInterval = setInterval(nextSlide,intervalTime);