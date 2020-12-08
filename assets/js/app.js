/*function showNav(){
    console.log("this is working");
    var menu = document.getElementById("responsive-nav");

    if(menu.className==="responsive-nav")
    {
        menu.className+= " unfold";
        menu.style.animation = "FadeIn 0.5s ease";
    }
    else{
        menu.className="responsive-nav";
    }
}*/
/*$(window).load(function(){
    $("#load").css('display','visible').fadeToggle(1000);
});*/

const showNav = () => {
    const burger= document.querySelector('.burger');
    const nav = document.querySelector('.responsive-nav');
    const body = document.querySelector('body');
    const navLinks=document.querySelectorAll('.responsive-nav li');
    const navLinks1=document.querySelector('.responsive-nav li:first-child');
    const navLinks2=document.querySelector('.responsive-nav li:nth-child(2)');
    const navLinks3=document.querySelector('.responsive-nav li:last-child');

    burger.addEventListener('click', ()=> {
        //Toogle nav
        nav.classList.toggle('nav-active');
        if(body.style.overflow){
            body.style.overflow='';
        }
        else{
            body.style.overflow="hidden";
        }
        //console.log("works");
        //Animate links
        navLinks.forEach((link,index)=>{
            if(link.style.animation)
            {
                link.style.animation='';
            }
            else{
            link.style.animation = `navLinkFade 0.5s ease-in forwards ${index/7 + 0.3}s`;
            }
        });
        //Burger animation, kapcsoló gomb, X
        burger.classList.toggle('toggle');
        if(burger.className=="toggle")
        {
            nav.style.animation='FadeOut 0.5s ease-out';
        }
        else{
            nav.style.animation='';
        }
    });

    navLinks1.addEventListener('click', ()=>{
            nav.classList.remove('nav-active');
            burger.classList.remove('toggle');
            body.style.overflow= '';
            navLinks.forEach((link)=>{
                
                    link.style.animation='';
               
                })    
    }
    );
    navLinks2.addEventListener('click', ()=>{
        nav.classList.remove('nav-active');
        burger.classList.remove('toggle');
        body.style.overflow= '';
        navLinks.forEach((link)=>{
            
                link.style.animation='';
           
            })    
}
);
    navLinks3.addEventListener('click', ()=>{
    nav.classList.remove('nav-active');
    burger.classList.remove('toggle');
    body.style.overflow= '';
    navLinks.forEach((link)=>{
        
            link.style.animation='';
       
        })    
}
);

}

showNav();

/*$('.talk-button').click(function(){
    $('.form-wrapper').css('display','flex');
});*/
const button = document.querySelector('.talk-button1');
const form = document.querySelector(".form-wrapper");
const contact = document.querySelector("a.modal-link");
const list = document.querySelector("dl");
const dl = document.getElementsByTagName("dl");
//const body = document.querySelector("body");

button.addEventListener("click", ()=>{
    document.getElementById("myModal").style.display = "flex";
    
    if(dl.length==0){  //csak akkor ha még a select nincs
    simpleSelect();
    console.log("egyszer fut le");
  }
  else {
    console.log("már van");
  }

});
contact.addEventListener("click", ()=>{
  //document.getElementById("myModal").style.display = "flex";
  
  if(dl.length==0){
    simpleSelect();
    console.log("egyszer fut le");
  
}
else {
  
  console.log("már van");
}
});



var textarea = document.querySelector('textarea');

textarea.addEventListener('keydown', autosize);
             
function autosize(){
  
  var el = this;
  var elh = $(this).outerHeight(); 
  
  setTimeout(function(){
    el.style.cssText = 'height:auto;';
    // for box-sizing other than "content-box" use:
   //el.style.cssText = '-moz-box-sizing:content-box';
    el.style.cssText = 'height:' + el.scrollHeight + 'px;' + 'min-height:' + elh + 'px;';
  },0);
}
/*
if($("body").hasClass("modal-open"))
{
  simpleSelect(); 
  console.log("body");
}
else{
  console.log("nem jó");
}*/


function simpleSelect() {
  //"use strict";
  var selectHolder,
    selectClass;
  //Setup
  $('select').each(function () {
    if (!$(this).attr('multiple')) {
      selectClass = $(this).attr('class');
      selectHolder = '<dl class="simpleSelect ' + selectClass + '">';
      selectHolder += '<dt>' + $('option', this).first().text() + '</dt><dd><ul>';
      $('option', this).each(function () {
        selectHolder += '<li data="' + $(this).val() + '">' + $(this).text() + '</li>';
      });
      selectHolder += '</ul></dd></dl>';
      $(this).after(selectHolder);
      $('.' + selectClass).wrapAll('<div class="selectContainer"></div>');
    } 
    else {
      $(this).show();
    }
  });
  $('.simpleSelect dd ul li').on("click", function () {
    $(this).parents().eq(3).find('select').val($(this).attr('data'));
  });

  $('.simpleSelect dt').on("click", function () {
    if ($(this).next('dd').hasClass("open")) {
      $(this).removeClass("open").next('dd').removeClass("open");
    }
    else {
      $(this).addClass("open").next('dd').addClass("open");
    }
  });

  $('.simpleSelect dd ul li').on("click", function () {
    $(this).parents().eq(1).removeClass("open");
    $(this).parents().eq(2).find('dt').removeClass("open");
    $(this).parents().eq(4).find('dt').text($(this).text());
  });
}
