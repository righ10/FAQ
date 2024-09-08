var acc= document.getElementsByClassName("accordion");
var i;

for(i= 0 ; i< acc.length ; i++){
    acc[i].addEventListener("click", function(){
        this.classList.toggle("active");
        this.parentElement.classList.toggle("active");


        var pannel =this.nextElementSibling;

        if(pannel.style.display=== "block"){
            pannel.style.display = "none";
        }else{
            pannel.style.display = "block"; 
        }


    });

}
var svg = document.querySelectorAll('svg')
var btn = document.querySelector('btn')
btn.addEventListener('click', () => {
    svg.setAttribute('svg', 'minus')
        })

