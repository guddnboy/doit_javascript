var radius = document.querySelector('#radius');
var start = document.querySelector('#start');

start.addEventListener('click', function(){
    document.querySelector('#round').value = 2 * Math.PI * Number(radius.value);
    document.querySelector('#area').value = 4 * Math.PI * Number(radius.value) * Number(radius.value);
});