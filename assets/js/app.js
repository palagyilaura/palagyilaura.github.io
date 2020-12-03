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