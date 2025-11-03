const promoDiv = document.querySelector('.Promo');
const promoText = promoDiv.querySelector('p');

promoDiv.style.cursor = 'pointer';

promoDiv.addEventListener('click', function () {
    alert("Enjoy your free delivery on orders over $50!");
});

promoDiv.addEventListener('mouseenter', function () {
    promoText.textContent = "Click here to claim offer!";
    promoDiv.style.backgroundColor = '#ff1f4c';
});
promoDiv.addEventListener('mouseleave', function () {
    promoText.textContent = "Get Free Delivery on Orders Over $50!";
    promoDiv.style.backgroundColor = 'rgb(214, 26, 57)';
});