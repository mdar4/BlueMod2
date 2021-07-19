var btn = document.getElementById('clicker');
var mudaHumor = document.getElementById('humor');

btn.onclick = function() {

    if(btn.value === 'primeiro'){
        mudaHumor.src = '/img/mobsorrindo.jpg';
        btn.value = 'segundo';
        btn.innerHTML = 'Feliz';

    } else if (btn.value === 'segundo') {
        mudaHumor.src = '/img/mob10.jpg';
        btn.value = 'terceiro';
        btn.innerHTML = '20%';

    } else if (btn.value === 'terceiro') {
        mudaHumor.src = '/img/mob15.jpg';
        btn.value = 'quarto';
        btn.innerHTML = '35%';
    
    } else if (btn.value === 'quarto'){
        mudaHumor.src = '/img/mob20.jpg';
        btn.value = 'quinto';
        btn.innerHTML = '50%';

    } else if (btn.value === 'quinto'){
        mudaHumor.src = '/img/mob80.jpg';
        btn.value = 'sexto';
        btn.innerHTML = '80%';

    } else if (btn.value === 'sexto'){
        mudaHumor.src = '/img/mobdd.jpg';
        btn.value = 'setimo';
        btn.innerHTML = '???';
    
    } else if (btn.value === 'setimo'){
        mudaHumor.src = '/img/mobcansad.jpg';
        btn.value = 'oitavo';
        btn.innerHTML = 'Cansado'

    } else {
        mudaHumor.src = '/img/images.jpg';
        btn.value = 'primeiro';
        btn.innerHTML = '0%';
    }
    
}
