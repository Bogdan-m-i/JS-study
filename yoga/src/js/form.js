function form() {
    let message = {
        loading: 'Загрузка',
        success: 'Спасибо! Скоро мы с вами свяжемся!',
        failure: 'Что-то пошло не так...',
    };

    let form = document.querySelector('.main-form'),
        input = document.getElementsByTagName('input'),
        statusMessage = document.createElement('div');

    statusMessage.classList.add('status');

    document.body.addEventListener('submit', (e) => {
        e.preventDefault();

        form = e.target;

        form.appendChild(statusMessage);

        let formData = new FormData(form);
        // let obj = {};
        // formData.forEach((v,k)=>{
        //     obj[k] = v;
        // });

        // let json = JSON.stringify(obj);

        function postData(formData) {
            statusMessage.innerHTML = message.loading;
            return new Promise((resolve, reject) => {

                let request = new XMLHttpRequest();
                request.open('POST', './server.php');
                //request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
                //request.setRequestHeader('Content-Type', 'application/json; charset=utf-8');

                request.onreadystatechange = () => {
                    // if(request.readyState < 4) {
                    //     resolve();
                    // } else 
                    //if (request.readyState === 4 && request.status == 200) {
                    if (request.status == 200) {
                        console.log('--ok');
                        resolve();
                    } else {
                        console.log('--no');
                        reject();
                    }
                    console.log(`${request.readyState} ${request.status}`);
                };

                request.send(formData);
            });
        }

        postData(formData)
            .finally(() => {
                console.log('finally');
            })
            .then(() => {
                return new Promise((resolve, reject) => {
                    setTimeout(() => {
                        resolve(statusMessage.innerHTML = message.success);
                    }, 1000);
                });
            })
            .catch(() => {
                return new Promise((resolve, reject) => {
                    setTimeout(() => {
                        resolve(statusMessage.innerHTML = message.failure);
                    }, 1000);
                });
            })
            .then(() => {
                console.log('xxxxx');
            })
            .then(() => {
                for (let i = 1; i < input.length; i++) {
                    input[i].value = '';
                }
            })

    });
}

export default form;