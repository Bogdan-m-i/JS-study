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

        let deadLine = '2020-06-01 12:00:00';

        function getTimeRemaining(endTime){
            let t = Date.parse(endTime) - Date.parse(new Date),
                s = Math.floor((t/1000) % 60),
                m = Math.floor((t/1000/60) % 60),
                h = Math.floor((t/1000/60/60) % 24),
                d = Math.floor((t/1000/60/60/24));

                if (h < 10) h = '0' + h;
                if (m < 10) m = '0' + m;
                if (s < 10) s = '0' + s;

            return {
                'total' : t,
                's' : s,
                'm' : m,
                'h' : h,
                'd' : d,
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

                hours.textContent = t.d + ' д. ' + t.h;
                minutes.textContent = t.m;
                seconds.textContent = t.s;
            }
        }
        setClock('timer', deadLine);

        
        //modal

        let more = document.querySelector('.more'),
            overlay = document.querySelector('.overlay'),
            close = document.querySelector('.popup-close');

            document.body.addEventListener('click', function(e) {
                if(e.target.classList.contains('more') || e.target.classList.contains('description-btn')) {
                    overlay.style.display = 'block';
                    e.target.classList.add('more-splash');
                    document.body.style.overflow = 'hidden';
                }
            });


            close.addEventListener('click', function(){
                overlay.style.display = 'none';
                more.classList.remove('more-splash');
                document.body.style.overflow = '';
                
            });


            //form

            let message = {
                loading: 'Загрузка',
                success: 'Спасибо! Скоро мы с вами свяжемся!',
                failure: 'Что-то пошло не так...'
            };

            let form = document.querySelector('.main-form'),
                input = document.getElementsByTagName('input'),
                statusMessage = document.createElement('div');

                statusMessage.classList.add('status');

            document.body.addEventListener('submit', (e) => {
                e.preventDefault();

                form = e.target;

                form.appendChild(statusMessage);

                let request = new XMLHttpRequest();
                request.open('POST', 'server.php');
                //request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
                //request.setRequestHeader('Content-Type', 'application/json; charset=utf-8');

                let formData = new FormData(form);
                // let obj = {};
                // formData.forEach((v,k)=>{
                //     obj[k] = v;
                // });

                // let json = JSON.stringify(obj);

                request.send(formData);

                request.addEventListener('readystatechange', () => {
                    if(request.readyState < 4) {
                        statusMessage.innerHTML = message.loading;
                    } else if (request.readyState === 4 && request.status == 200) {
                        statusMessage.innerHTML = message.success;
                    } else {
                        statusMessage.innerHTML = message.failure;
                    }
                });

                for (let i = 1; i < input.length; i++) {
                    input[i].value = '';
                }
            });

});