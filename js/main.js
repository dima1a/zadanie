const myData = JSON.parse(data);

const createCard = ({ desc, img, price }) => `
   <li class="cards__item">
      <div class="cards__image">
         <img src="${img}" class="cards__img">
         <button class="cards__bth" onclick='console.log("${desc}")'>ADD TO CART</button>
      </div>
      <p class="cards__price">${price}</p>
   </li>
`;
  
function render() {
   const cards = myData.map(createCard).join('')
   document.querySelector('#produkt').innerHTML = cards

}
  
render ();

jQuery(function ($) {
   var $btn = $('.cards__bth');
   $(".cards__img").mouseenter(function () {
      $('.cards__bth').hide();
      $(this).next('.cards__bth').show();
   });
   $(".cards__bth").mouseenter(function () {
      $(this).show();
   });
   $(".cards__img").mouseleave(function () {
      $btn.hide();
   });
});