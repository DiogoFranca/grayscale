(function(){
    let menu = document.getElementById('menu')

    let logo = document.getElementById('logo')
    let about = document.getElementById('about')
    let projects = document.getElementById('projects')
    let contact = document.getElementById('contact')

    window.addEventListener('scroll', function (){
        if(window.scrollY > 0){
            menu.classList.add('menu_fix')
            logo.classList.add('scroll_logo')
            about.classList.add('scroll_about')
            projects.classList.add('scroll_projects')
            contact.classList.add('scroll_contact')
        } else {
            menu.classList.remove('menu_fix')
            logo.classList.remove('scroll_logo')
            about.classList.remove('scroll_about')
            projects.classList.remove('scroll_projects')
            contact.classList.remove('scroll_contact')
        }
    })
})()