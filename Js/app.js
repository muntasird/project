function myFunction(){
    let element = document.body;
    element.classList.toggle(`dark-mode`)
}

var navbar = document.querySelector(`nav`)
var menu = document.querySelector(`.menu`)
function navToggler(){
    if(window.pageYOffset >= 500){
        navbar.classList.add('sticky')
    }   else{
        navbar.classList.remove('sticky')
    }
}






window.addEventListener(`scroll`,navToggler)






function mouseToggler(event){
    
}








window.addEventListener('mousemove',mouseToggler)