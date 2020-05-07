window.addEventListener('DOMContentLoaded', function(){

    let tab = document.querySelectorAll('.info-header-tab'),
        info = document.querySelector('.info-header'),
        tabContent = document.querySelectorAll('.info-tabcontent');

        function hideTabContent(a) {
            for(let i = a; i < tabContent.length; i++) {
                tabContent[i].classList.remove('show');
                tabContent[i].classList.add('hide');
            }
        }
        hideTabContent(1);

        function showTabContent(b) {
            if(tabContent[b].classList.contains('hide')) {
                tabContent[b].classList.remove('hide');
                tabContent[b].classList.add('show');
            }
        }

        info.addEventListener('click', function(e){
            let target = e.target;
            if (target && target.classList.contains('info-header-tab')) {
                for (let i = 0; i < tab.length; i++) {
                    if (target == tab[i]) {
                        hideTabContent(0);
                        showTabContent(i);
                    }
                }
            }
        });


        //timer

        let deadLine = '2020-05-07 12:00:00';

        function getTimeRemaining(endTime){
            let t = Date.parse(endTime) - Date.parse(new Date),
                s = Math.floor((t/1000) % 60),
                m = Math.floor((t/1000/60) % 60),
                h = Math.floor((t/1000/60/60));

                if (h < 10) h = '0' + h;
                if (m < 10) m = '0' + m;
                if (s < 10) s = '0' + s;

            return {
                'total' : t,
                's' : s,
                'm' : m,
                'h' : h,
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

                if(t.total <= 0){
                    clearInterval(timeInterval);
                    t.h = t.m = t.s = '00';
                }

                hours.textContent = t.h;
                minutes.textContent = t.m;
                seconds.textContent = t.s;
            }
        }
        setClock('timer', deadLine);
});