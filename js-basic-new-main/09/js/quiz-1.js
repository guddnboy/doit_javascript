var price = 24000;

var sidemenu = document.querySelectorAll('.checkbx');
var totalPrice = document.querySelector('#total');

totalPrice.value = price + "원";

for (var i = 0; i < sidemenu.length; i++){
    sidemenu[i].onclick = function(){
        if (this.checked == true){
            price += parseInt(this.value);
        }
        else {
            price -= parseInt(this.value);
        }
        totalPrice.value = price +'원';
    }
}