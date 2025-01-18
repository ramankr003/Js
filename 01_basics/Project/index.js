const buttons=document.querySelectorAll(".button")
const Body=document.querySelector('body')

buttons.forEach(function(h){
    console.log(h);
    h.addEventListener('click', function(e){
        console.log(e);
        console.log(e.target);

        if(e.target.id==='grey'){
            Body.style.backgroundColor=e.target.id;

        }
        if(e.target.id==='white'){
            Body.style.backgroundColor=e.target.id;

        }
        if(e.target.id==='blue'){
            Body.style.backgroundColor=e.target.id;

        }
        if(e.target.id==='yellow'){
            Body.style.backgroundColor=e.target.id;

        }
        
        
    })

    
});
