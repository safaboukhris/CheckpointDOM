$(".heart.fa").click(function() {           $(this).toggleClass("fa-heart fa-heart-o");         });
//Selector element from HTML
const container = document.getElementById("container");
const products = container.getElementsByClassName("product");
const totalPrice = document.getElementById("total-cost");
let total = 0;
for (let i=0 ; i < products.length ; i++){
    const product = products[i];
    //selection element from HTML
    const minus = product.getElementsByClassName("minus")[0];
    const plus = product.getElementsByClassName("plus")[0];
    const quantity = product.getElementsByTagName("input")[0];
    const remove = product.getElementsByClassName("remove")[0];
    const price = parseInt(
        product.getElementsByClassName("totalPrice")[0].innerText.substring(1));
        //Adding event to button: decrease
        minus.addEventListener("click", () => {
            if (quantity.value > 1) {
            quantity.value--;
            total -= price;
            totalPrice.innerText = `total Price : $${total}`;
            }
        });
        //adding event to button: increase
        plus.addEventListener("click", () => {
        quantity.value++;
        total += price;
        totalPrice.innerText = `total Price : $${total} ` 
        });
        //JS removing button
        remove.addEventListener("click", () => {
        product.remove();
          total -= price * quantity.value;
        totalPrice.innerText= `total Price: $${total}`;
        });
        total += price * quantity.value ;
        totalPrice.innerText= `total Price : $${total}`;

}






