// avento de scroll
$(document).ready(function() {
    let img = document.getElementById('imagen_poliandes')
    let header = document.getElementById('header-nav')

    $(window).scroll(function() {
        if ($(this).scrollTop() > 0) {
            img.style.width = '120px'
            img.style.marginLeft = '47%'
            header.style.background = 'white'
        } else {
            img.style.width = '22.4375rem'
            img.style.marginLeft = '-2%'
            header.style.background = 'none'

        }
    });

});