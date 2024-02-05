gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector(".main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the ".smooth-scroll" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy(".main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
});

// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();







var boxer = document.querySelector(".boxer")
    var page = document.querySelector(".page3")
        page.addEventListener("mouseenter",function(){
            boxer.style.display="block";
        })
        page.addEventListener("mouseleave",function(){
            boxer.style.display="none";
        })

    var ele1=document.querySelector("#ele1")
    ele1.addEventListener("mouseenter",function(){
        var img1 = document.querySelector("#ele1").getAttribute("data-img")
        boxer.style.backgroundImage = `url(${img1})`
    })
    var ele2=document.querySelector("#ele2")
    ele2.addEventListener("mouseenter",function(){
        var img2 = document.querySelector("#ele2").getAttribute("data-img")
        boxer.style.backgroundImage = `url(${img2})`
        boxer.style.backgroundSize="cover";
        boxer.style.backgroundPosition="center";
    })
    var ele3=document.querySelector("#ele3")
    ele3.addEventListener("mouseenter",function(){
        var img3 = document.querySelector("#ele3").getAttribute("data-img")
        boxer.style.backgroundImage = `url(${img3})`
    })
    var ele4=document.querySelector("#ele4")
    ele4.addEventListener("mouseenter",function(){
        var img4 = document.querySelector("#ele4").getAttribute("data-img")
        boxer.style.backgroundImage = `url(${img4})`
        boxer.style.backgroundSize="cover";
        boxer.style.backgroundPosition="center";
    })
    var ele5=document.querySelector("#ele5")
    ele5.addEventListener("mouseenter",function(){
        var img5 = document.querySelector("#ele5").getAttribute("data-img")
        boxer.style.backgroundImage = `url(${img5})`
        boxer.style.backgroundSize="cover";
        boxer.style.backgroundPosition="center";
    })
    var ele6=document.querySelector("#ele6")
    ele6.addEventListener("mouseenter",function(){
        var img6 = document.querySelector("#ele6").getAttribute("data-img")
        boxer.style.backgroundImage = `url(${img6})`
    })
    var ele7=document.querySelector("#ele7")
    ele7.addEventListener("mouseenter",function(){
        var img7 = document.querySelector("#ele7").getAttribute("data-img")
        boxer.style.backgroundImage = `url(${img7})`
    })

var content1 = document.querySelector("#content1 h1")
var content2 = document.querySelector("#content2 h1")
var content3 = document.querySelector("#content3 h1")

var imgone = document.querySelector("#one")
var imgtwo = document.querySelector("#two")
var imgthree = document.querySelector("#three")

var write1 = document.querySelector("#write1")
var write2 = document.querySelector("#write2")
var write3 = document.querySelector("#write3")

content1.addEventListener("click",function(){
    content3.style.borderColor="#4D4741"
    content1.style.borderColor="#ff5c0b"
    content2.style.borderColor="#4D4741"
   content2.style.color="#4D4741"
   content2.style.paddingLeft="1vw"
   content3.style.color="#4D4741"
   content3.style.paddingLeft="1vw"
   content1.style.color="white"
   content1.style.padding="0.5vw"
   imgtwo.style.visibility="hidden"
   imgthree.style.visibility="hidden"
   imgone.style.visibility="visible"
   write2.style.visibility="hidden"
   write3.style.visibility="hidden"
   write1.style.visibility="visible"
})
content2.addEventListener("click",function(){
    content2.style.borderColor="#ff5c0b"
    content3.style.borderColor="#4D4741"
    content1.style.borderColor="#4D4741"
    content1.style.color="#4D4741"
    content1.style.paddingLeft="1vw"
    content3.style.color="#4D4741"
    content3.style.paddingLeft="1vw"
    content2.style.color="white"
    content2.style.padding="0.5vw"
    imgone.style.visibility="hidden"
    imgtwo.style.visibility="visible"
    imgthree.style.visibility="hidden"
    write2.style.visibility="visible"
    write3.style.visibility="hidden"
    write1.style.visibility="hidden"
 })
 content3.addEventListener("click",function(){
    content3.style.borderColor="#ff5c0b"
    content2.style.borderColor="#4D4741"
    content1.style.borderColor="#4D4741"
    content1.style.color="#4D4741"
    content1.style.paddingLeft="1vw"
    content2.style.color="#4D4741"
    content2.style.paddingLeft="1vw"
    content3.style.color="white"
    content3.style.padding="0.5vw"
    imgone.style.visibility="hidden"
    imgtwo.style.visibility="hidden"
    imgthree.style.visibility="visible"
    write2.style.visibility="hidden"
    write1.style.visibility="hidden"
    write3.style.visibility="visible"
 })
  var swiper = new Swiper('.mySwiper', {
    slidesPerView: 1.5, // Show only one slide on mobile
    spaceBetween: 10, // Adjust the space between slides as needed
    breakpoints: {
        // Responsive settings for larger screens
        700: {
            slidesPerView: 2, // Show two slides on screens wider than 768 pixels
        },
        1024: {
            slidesPerView: 4, // Show three slides on screens wider than 1024 pixels
        },
        // Add more breakpoints as needed
    },
});
var newnav = document.querySelector(".newnav")
var bar = document.querySelector(".bar h2")
bar.addEventListener("click",function(){
     newnav.style.top="0"
})
var navcancel = document.querySelector(".nav1 h1")
navcancel.addEventListener("click",function(){
    newnav.style.top="-200%"
})
var load = document.querySelector(".loader")
setInterval(function(){
     load.style.top="-200%"
},4300)


gsap.from(".part1,.part2",{
    y:100,
    opacity:0,
    delay:2,
})
gsap.from("#ele1 h2,#ele1 img",{
    y:100,
    opacity:0,
    scrollTrigger:{
        trigger:".page3",
        scroller:".main",
        start:"top 80%",
        end:"top 10%",
        stagger:0.5,
        scrub:2
    }
})
gsap.from("#ele2 h2,#ele2 img",{
        y:100,
        opacity:0,
        scrollTrigger:{
            trigger:"#ele2",
            scroller:".main",
            start:"top 90%",
            end:"top 30%",
            stagger:0.5,
            scrub:2
        }
})
gsap.from("#ele3 h2,#ele3 img",{
            y:100,
            opacity:0,
            scrollTrigger:{
                trigger:"#ele3",
                scroller:".main",
                start:"top 80%",
                end:"top 10%",
                stagger:0.5,
                scrub:2
            }
})
gsap.from("#ele4 h2,#ele4 img",{
    y:100,
    opacity:0,
    scrollTrigger:{
        trigger:"#ele4",
        scroller:".main",
        start:"top 80%",
        end:"top 10%",
        stagger:0.5,
        scrub:2
    }
})
gsap.from("#ele5 h2,#ele5 img",{
    y:100,
    opacity:0,
    scrollTrigger:{
        trigger:"#ele5",
        scroller:".main",
        start:"top 80%",
        end:"top 10%",
        stagger:0.5,
        scrub:2
    }
})
gsap.from("#ele6 h2,#ele6 img",{
    y:100,
    opacity:0,
    scrollTrigger:{
        trigger:"#ele6",
        scroller:".main",
        start:"top 80%",
        end:"top 10%",
        stagger:0.5,
        scrub:2
    }
})
gsap.from("#ele7 h2,#ele7 img",{
    y:100,
    opacity:0,
    scrollTrigger:{
        trigger:"#ele7",
        scroller:".main",
        start:"top 80%",
        end:"top 10%",
        stagger:0.5,
        scrub:2
    }
})
gsap.from(".left1 h1",{
    y:100,
    opacity:0,
    scrollTrigger:{
        trigger:".page2-btm",
        scroller:".main",
        start:"top 80%",
        end:"top 10%",
        stagger:0.5,
        scrub:2
    }
})
gsap.from(".foot2",{
    y:100,
    opacity:0,
    scrollTrigger:{
        trigger:".footer",
        scroller:".main",
        start:"top 80%",
        end:"top 30%",
        stagger:0.5,
        scrub:2
    }
})