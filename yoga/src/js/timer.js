export function timer() {
    let deadLine = '2020-06-01 12:00:00';

    function getTimeRemaining(endTime) {
        let t = Date.parse(endTime) - Date.parse(new Date),
            s = Math.floor((t / 1000) % 60),
            m = Math.floor((t / 1000 / 60) % 60),
            h = Math.floor((t / 1000 / 60 / 60) % 24),
            d = Math.floor((t / 1000 / 60 / 60 / 24));

        if (h < 10) h = '0' + h;
        if (m < 10) m = '0' + m;
        if (s < 10) s = '0' + s;

        return {
            'total': t,
            's': s,
            'm': m,
            'h': h,
            'd': d,
        }
    }

    function setClock(id, endTime) {
        let timer = document.getElementById(id),
            hours = timer.querySelector('.hours'),
            minutes = timer.querySelector('.minutes'),
            seconds = timer.querySelector('.seconds'),
            timeInterval = setInterval(updateClock, 1000);

        function updateClock() {
            let t = getTimeRemaining(endTime);

            if (t.total <= 0) {
                clearInterval(timeInterval);
                t.h = t.m = t.s = '00';
            }

            hours.textContent = t.d + ' д. ' + t.h;
            minutes.textContent = t.m;
            seconds.textContent = t.s;
        }
    }
    setClock('timer', deadLine);
}

// module.exports = timer;