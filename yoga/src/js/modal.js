function modal() {
    let more = document.querySelector('.more'),
        overlay = document.querySelector('.overlay'),
        close = document.querySelector('.popup-close');

    document.body.addEventListener('click', function (e) {
        if (e.target.classList.contains('more') || e.target.classList.contains('description-btn')) {
            overlay.style.display = 'block';
            e.target.classList.add('more-splash');
            document.body.style.overflow = 'hidden';
        }
    });


    close.addEventListener('click', function () {
        overlay.style.display = 'none';
        more.classList.remove('more-splash');
        document.body.style.overflow = '';

    });
}

module.exports = modal;