
document.addEventListener('DOMContentLoaded', function(){

    let button = document.getElementById('where');
    let location = document.getElementById('text');

    button.addEventListener('click', function() {
        if (location.style.display === 'block') {
            location.style.display = 'none';
        } else {
            location.style.display = 'block';
        }
    })

});