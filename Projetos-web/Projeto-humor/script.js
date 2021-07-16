var btn = document.getElementById('clicker');
var mudaHumor = document.getElementById('humor');

btn.onclick = function() {

    if(btn.value === 'Feliz'){
        mudaHumor.src = '/img/mobsorrindo.jpg'
        btn.value = 'Sério';
        btn.innerHTML = 'agora estou feliz';

    } else {
        mudaHumor.src = '/img/images.jpg'
        btn.value = 'Feliz'
        btn.innerHTML = 'Mude meu humor'
    }
    
}
