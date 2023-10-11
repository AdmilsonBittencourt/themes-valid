const button = document.querySelector('.button')
const body = document.querySelector('body')

button.addEventListener('click', () => {
    
    if(button.classList.contains('default')){
        console.log("deu certo o if")
        button.classList.add('animation-right')
        button.classList.remove('default')
        button.classList.remove('animation-left')
        body.classList.add('dark')

        
    } else {
        console.log("deu certo o else")
        button.classList.add('animation-left')
        button.classList.add('default')
        body.classList.remove('dark')

    }



})

// if(button.classList.contains('default')){
//     console.log("deu certo o if")
//     button.style.right = 0;
//     button.classList.remove('default')
    
// } else {
//     console.log("deu certo o else")
//     button.style.removeProperty('right')
//     button.classList.add('default')
// }

