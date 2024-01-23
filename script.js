const buttons=document.querySelectorAll('.button')
const body=document.querySelector('body')
console.log(buttons)
buttonsArray=Array.from(buttons)
console.log(buttonsArray)
buttonsArray.forEach((btn) => {
    btn.addEventListener('click',function(e){
        console.log(e.target.id)
        if(e.target.id==='violet'){
            body.style.backgroundColor=e.target.id
        }else if(e.target.id==='grey'){
            body.style.backgroundColor=e.target.id
        }else if(e.target.id==='pink'){
            body.style.backgroundColor=e.target.id
        }else if(e.target.id==='blue'){
            body.style.backgroundColor=e.target.id
        }
    })
});