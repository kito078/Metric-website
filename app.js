
const toggleBtn = document.querySelector('.nav-toggle');
const btnPlay = document.querySelector('#btn-play');
const addModal = document.querySelector('#add-modal');
const backdrop = document.querySelector('#backdrop');
const addNow = document.querySelector('#addNow');
const loaderContainer = document.querySelector('.loader-container');
const counter = document.querySelector('#counter');
//const counter2 = document.querySelector('#counter2');
//const counter3 = document.querySelector('#counter3');
const formMs = document.querySelector('#form-ms');
const feedBack= document.querySelector('.feedback');
const feedbackText= document.querySelector('.feedback-text');


    //toggle
    const links = document.querySelector('.links');

    toggleBtn.addEventListener('click',()=>{
        links.classList.toggle('show-links');

    });


//backback full screen
const backdropModal = () =>{
    backdrop.classList.toggle('visible');
}



addNow.addEventListener('click', function(){
    backdropModal();
   addModal.style.display = 'none';
   loaderContainer.style.display = 'block';

    //we want to display video after 2 seconds
   setTimeout(videoModal, 2000)
});




backdrop.addEventListener('click',function(){
    backdropModal();
    
    loaderContainer.style.display = 'none';

      addModal.style.display = 'none';
    
    
});

// video modal 
function videoModal(){
    addModal.classList.toggle('visible');
    
    //come and dislay addModal to block here then loaderContainer to none

    //show the video modal
   addModal.style.display = 'block';

    //then hide the loader
   loaderContainer.style.display = 'none'

}




/*message*/
formMs.addEventListener('submit',sendMessage)
  
   


function sendMessage(e){
    e.preventDefault();
    const nameMs = document.querySelector('#name').value;
    const phone = document.querySelector('#phone').value;
    const message = document.querySelector('#message').value;
   
    if(nameMs==='' || phone===''|| message===''){
        alert('input the text')
    }else{
        feedbackText.textContent = 'successfully sent';
        feedbackText.classList.add('show-feedback-text');
        
        feedbackText.style.display = 'block';
        formMs.reset()
    }
   
    setTimeout(()=>{
       
        feedbackText.classList.remove('show-feedback-text');
    },2000)
    //let list= document.createElement('h4');
   // list.className ="my-message";
    //let node =document.createTextNode('message sent');
    //list.appendChild(node);
    //receive.appendChild(list);
   // list.innerHTML =`
     //  <h4>we will get back to u</h4>
    //`;

    //receive.appendChild(list);




const subForm = document.querySelector('#sub-form');



subForm.addEventListener('submit', e=>{
    e.preventDefault();
    const subEmail = document.querySelector('.sub-input').value;
    
    console.log(subEmail);
    const emailPatten =/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if(emailPatten.test(subEmail)){
        feedbackText.textContent = 'successfully sent';
        feedbackText.classList.add('show-feedback-text');
        subForm.reset();
    }else{
        feedBack.textContent = 'email not valid';
       
    }

    setTimeout(()=>{
        feedbackText.classList.remove('show-feedback-text');
    },2000);

})


  

}

/* SLIDER */
const projects = [
    {
        id: 1,
        img: 'img/slide1.jpg',
        img1: 'img/slide2.jpg',
        img2: 'img/slide3.png'
       
    },
    {
        id: 1,
        img: 'img/slidec.png',
        img1: 'img/slideaa.png',
        img2: 'img/slided.png',
     
      
    },
 
];



const slideImg = document.querySelector('#slide-img');
const slideImg1 = document.querySelector('#slide-img1');
const slideImg2 = document.querySelector('#slide-img2');
const slideText1 = document.querySelector('#slide-text1');
const slideText2 = document.querySelector('#slide-text2');
const btnPrev = document.querySelector('.prev');
const btnNext = document.querySelector('.next');

let currentProject = 0;

const cardShow =()=>{
    const eachItem = projects[currentProject];
    slideImg.src= eachItem.img;
    slideImg1.src= eachItem.img1;
    slideImg2.src= eachItem.img2;
 
    //slideText1.textContent = eachItem.header;
    //slideText2.textContent = eachItem.text;

}

//shownext project
btnNext.addEventListener('click',()=>{
    currentProject++;
    if(currentProject>projects.length-1){
        currentProject= 0

    }
    cardShow(currentProject);
});

setInterval(()=>{
    currentProject++;
    if(currentProject>projects.length-1){
        currentProject= 0

    }
    cardShow(currentProject);
},3000)




const navbar = document.querySelector('#nav');
const toplink = document.querySelector('.top-link');
const coTimer = this.document.querySelector('#co-timer')

//fixed navbar
window.addEventListener('scroll', function(){
    console.log(window.pageYOffset)
    const scrollHeight = window.pageYOffset;
    const navHeight = navbar.getBoundingClientRect().height;
    
    if(scrollHeight > navHeight){
        navbar.classList.add('fixed-nav');
    }else{
        navbar.classList.remove('fixed-nav');
    }

    if(scrollHeight> 500){
        toplink.classList.add('show-link');
    }else{
        toplink.classList.remove('show-link');
    }

    const coTimer = document.querySelector('#co-timer');

    const timeHeight = coTimer.getBoundingClientRect().height;
    
    if(scrollHeight > timeHeight){}

    
})







/*

function countUp(){
    let count =1700;

    const countingNum = ()=>{
        if(count<1880){
            count++;
            counter.textContent = count;
        }
      
    }
    setInterval(countingNum, 2)
    
}













/*
       
let count1 =200;
let count2 =400;
let count3 =500;

const updateCounter =()=>{
    count1++;
    count2++;
    count3++;
    if(count1<300){
        counter1.innerHTML=count1;

    }else if(count2<500){
        counter2.innerHTML=count2;

    }
    else if(count3<600){
        counter3.innerHTML=count3;
    }

 
    
}
setInterval(updateCounter, 1);
*/
