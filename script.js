
var nav = document.querySelector("nav");
nav.addEventListener("mouseenter",()=>{
    gsap.from("span h5",{
        y:"25",
        rotate:8,
        stagger:{
            amount:0.7
        },
        opacity:0,
        ease:"easeInOut"
    })
})

var elements = document.querySelectorAll(".class1");
elements.forEach(element => {
    var image = element.querySelector("img");
    element.addEventListener('mouseenter',()=>{
        gsap.to(image, {
            display: "block",
            opacity: 1,
            duration: 0.8, 
            ease: "easeInOut",
        });
    })
    element.addEventListener('mousemove',(e)=>{
        const imgdet = element.getBoundingClientRect();
        gsap.to(image,{
            x: e.clientX - imgdet.left - image.clientWidth/2,
            y: e.clientY - imgdet.top - image.clientHeight /2,
            duration: 0.8,
        })
    })
    element.addEventListener('mouseleave',()=>{
        gsap.to(image, {
            display: "none",
            opacity: 0,
            duration: 0.8, 
            ease: "easeInOut",
        });
    })
});

var playbutton = document.querySelector(".page3center");
var video = document.querySelector(".page3 video");
playbutton.addEventListener("click",function(){
    video.currentTime = 0;
    video.play();
    gsap.to(video,{
        transform : "scaleX(1) scaleY(1)",
        opacity:1,
        borderRadius:0,
        zIndex:999
    })
})
video.addEventListener("click",function(){
    gsap.to(video,{
        transform : "scaleX(0.1) scaleY(0.1)",
        opacity:0,
        borderRadius:0,
        zIndex:0
    })
})


var imagehover = document.querySelectorAll(".page6right");

imagehover.forEach(element1 => {
    var videohover = element1.querySelector("video");
    element1.addEventListener('mouseover',()=>{
        videohover.currentTime = 0;
        videohover.play();
    })
});

var imagehover2 = document.querySelectorAll(".page6right");
imagehover2.forEach(element2 => {
    var videocursor = element2.querySelector(".videocursor");
    element2.addEventListener('mouseenter', () => {
        videocursor.style.display = "block"; 
    });

    element2.addEventListener('mousemove', (e) => {
        var containerRect = element2.getBoundingClientRect();
        var cursorRect = videocursor.getBoundingClientRect(); 
        gsap.to(videocursor, {
            x: e.clientX - containerRect.left - cursorRect.width / 12,
            y:  e.clientY - containerRect.top - cursorRect.height / 12,
            duration: 0.4
        });
    });
    element2.addEventListener('mouseleave', () => {
        videocursor.style.display = "none";
    });
});


var imagehover3 = document.querySelector(".bottomleft");
var videohover3 = imagehover3.querySelector("video");
 imagehover3.addEventListener('mouseover',()=>{
    videohover3.currentTime = 0;
     videohover3.play();
})



var imagehover4 = document.querySelector(".bottomright");
var videohover4 = imagehover4.querySelector("video");
imagehover4.addEventListener('mouseover',()=>{
    videohover4.currentTime = 0;
    videohover4.play();
})



gsap.from(".page9part1 h4", {
  x: 0,
    duration: 1,
  scrollTrigger: {
    trigger: ".page9part1",
    scroller: "body",
    start: "top 80%",
    end: "top 20%",
     scrub: true,
    }
});
  
gsap.from(".page9part2 h4", {
  x: 0,
  duration: 1,
  scrollTrigger: {
  trigger: ".page9part2",
    scroller: "body",
    start: "top 80%",
    end: "top 20%",
    scrub: true,
    }
});
  
gsap.from(".page9part3 h4", {
  x: 0,
  duration: 1,
  scrollTrigger: {
    trigger: ".page9part3",
    scroller: "body",
    start: "top 80%",
    end: "top 20%",
    scrub: true,
  }
});


var tl = gsap.timeline();
tl.from(".page1", {
      opacity: 0,
      duration: 0.5,
      delay: 0.5
});
tl.from(".page1", {
      transform: "scale(0.1)",
      duration: 1,
      border: "1000px solid white",
      ease: "easeOut"
});
tl.from("nav", {
      opacity: 0,
      y: -20,
      duration: 0.5,
      stagger: 0.1,
      ease: "back.out(1.7)"
});
tl.from(".page1 h1", {
      opacity: 0,
      duration: 1,
      clipPath: "inset(0 100% 0 0)",
      ease: "power4.inOut"
});
tl.from(".page1 p", {
      duration: 2,
      ease: "none"
});
tl.from(".page1 div", {
      opacity: 0,
      y: 50,
      duration: 0.2,
      stagger: 0.2,
      ease: "power.out"
});
