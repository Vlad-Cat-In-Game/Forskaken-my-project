let change = document.querySelector('.changer')

change.addEventListener('click', function(){
    let navs = document.querySelectorAll('nav')
    let p = document.querySelectorAll('p')
    let body = document.querySelector('body')
    let header = document.querySelector('header')
    if(navs.style.color == 'white'
        p.style.color == 'white'
        header.style.backgroundImage == 'linear-gradient( #010101, #9D0EC0)'
        body.style.backgroundImage == 'linear-gradient(90deg, #010101, #7F0B9C)'
    ){
        navs.style.color = 'black'
        p.style.color = 'black'
        header.style.backgroundImage == 'linear-gradient( #ffffffff, #d56defff)'
        body.style.backgroundImage == 'linear-gradient(90deg, #ffffffff, #cc00ffff)'
    }
    else {
        navs.style.color = 'white'
        p.style.color = 'white'
        header.style.backgroundImage = 'linear-gradient( #010101, #9D0EC0)'
        body.style.backgroundImage = 'linear-gradient(90deg, #010101, #7F0B9C)'
    }
})