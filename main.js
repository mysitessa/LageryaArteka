const btns = document.querySelectorAll('.btn')


btns.forEach(btn => {
    btn.addEventListener('click', function(e){
        e.preventDefault()  
        // if(btn.nextElementSibling.classList.contains('visible')){
        //     btn.nextElementSibling.classList.remove('visible')
        // }
        btn.nextElementSibling.classList.toggle('visible')

      
})

})