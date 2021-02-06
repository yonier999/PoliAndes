var escuelasImg = document.querySelectorAll('.escuela_img');
console.log(escuelasImg)

function isMobile() {
    return (
        (navigator.userAgent.match(/Android/i)) ||
        (navigator.userAgent.match(/webOS/i)) ||
        (navigator.userAgent.match(/iPhone/i)) ||
        (navigator.userAgent.match(/iPod/i)) ||
        (navigator.userAgent.match(/iPad/i)) ||
        (navigator.userAgent.match(/BlackBerry/i))
    );
}

if (isMobile()) {
    // avento de scroll
    $(document).ready(function() {
        let img = document.getElementById('imagen_poliandes');
        let header = document.getElementById('header-nav');

        $(window).scroll(function() {
            if ($(this).scrollTop() > 0) {
                img.style.width = '11.4375rem';
                // img.style.width = '120px';
                // img.style.marginLeft = '47%';
                img.style.marginLeft = '-2%';

                header.style.background = 'white';
            } else {
                img.style.width = '11.4375rem';
                img.style.marginLeft = '-2%';
                header.style.background = 'none';

            }
        });

    });
    for (let escuela of escuelasImg) {
        escuela.width = 420;
    }


} else {
    // avento de scroll
    $(document).ready(function() {
        let img = document.getElementById('imagen_poliandes');
        let header = document.getElementById('header-nav');

        $(window).scroll(function() {
            if ($(this).scrollTop() > 0) {
                img.style.width = '120px';
                // img.style.width = '10.4375rem';
                img.style.marginLeft = '47%';
                header.style.background = 'white';
            } else {
                img.style.width = '22.4375rem';
                img.style.marginLeft = '-2%';
                header.style.background = 'none';

            }
        });

    });

}