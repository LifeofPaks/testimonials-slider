const tanya = document.querySelector('.tanya'),
      john = document.querySelector('.john'),
      prev = document.querySelectorAll('.prev'),
      next = document.querySelectorAll('.next')


      function slider(){
        if(john.classList.contains('hide')){
            tanya.classList.add('hide')
            john.classList.remove('hide')
        }
        else if(tanya.classList.contains('hide')){
            john.classList.add('hide')
            tanya.classList.remove('hide')
        }
        else{
            john.classList.add('hide')
        }
      }

prev.forEach(item =>{
    item.addEventListener('click', slider)
})
next.forEach(item =>{
    item.addEventListener('click', slider)
})

