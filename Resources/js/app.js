window.addEventListener('load', function (e) {

    // General selector section
    var TravelNowBtn = document.querySelector('.btn-full');
    var ShowMoreBtn = document.querySelector('.btn-ghost');
    var Explorelnk = document.querySelector('.explore');
    var Citieslnk = document.querySelector('.cities-nav');
    var Hotelslnk = document.querySelector('.hotels-nav');
    var Signuplnk = document.querySelector('.sign-up-nav');
    var Logoimg = document.querySelector('.logo');

    // General function to navigate through the site
    function smoothScroll(target, duration) {
        var target = document.querySelector(target);
        var targetPosition = target.getBoundingClientRect().top;
        var startPosition = window.pageXOffset;
        var distance = targetPosition - startPosition;
        var startTime = null;

        function animation(currentTime) {
            if (startTime == null)
                startTime = currentTime;
            var timeElapsed = currentTime - startTime;
            var run = ease(timeElapsed, startPosition, distance, duration);
            window.scroll(0, run);
            if (timeElapsed < duration)
                requestAnimationFrame(animation);
        }
        requestAnimationFrame(animation);

        function ease(t, b, c, d) {
            t /= d / 2;
            if (t < 1) return c / 2 * t * t + b;
            t--;
            return -c / 2 * (t * (t - 2) - 1) + b;
        };
    }

    // Navigation through clicking in all btns
    TravelNowBtn.addEventListener('click', function (e) {
        smoothScroll('#form', 4000);
    });

    ShowMoreBtn.addEventListener('click', function (e) {
        smoothScroll('.section-features', 1000);
    });

    Explorelnk.addEventListener('click', function (e) {
        smoothScroll('.section-features', 1000);
    });

    Citieslnk.addEventListener('click', function (e) {
        smoothScroll('.cities', 2000);
    });

    Hotelslnk.addEventListener('click', function (e) {
        smoothScroll('.hotels', 3000);
    });

    Signuplnk.addEventListener('click', function (e) {
        smoothScroll('#form', 4000);
    });

    Logoimg.addEventListener('click', function (e) {
        smoothScroll('html', 500);
    })

});