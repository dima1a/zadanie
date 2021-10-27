const myData = [
    {
        "img":"http:\/\/lorempixel.com\/400\/800\/",
        "desc":"Duis ac arcu vitae diam elementum suscipit.",
        "price":"\u20ac189.00"
     },
     {
        "img":"http:\/\/lorempixel.com\/300\/300\/",
        "desc":"Donec ac tortor ut lorem elementum condimentum eget ut urna.",
        "price":"\u20ac39.00"
     },
     {
        "img":"http:\/\/lorempixel.com\/200\/700\/",
        "desc":"In a erat eu tortor imperdiet facilisis.",
        "price":"\u20ac659.00"
     },
     {
        "img":"http:\/\/lorempixel.com\/500\/200\/",
        "desc":"Anon non enim eu lorem elementum sollicitudin eget non ex.",
        "price":"\u20ac9.00"
     },
     {
        "img":"http:\/\/lorempixel.com\/400\/800\/",
        "desc":"Duis ac arcu vitae diam elementum suscipit.",
        "price":"\u20ac189.00"
     },
     {
        "img":"http:\/\/lorempixel.com\/350\/300\/",
        "desc":"Mauris nec neque sed est rhoncus scelerisque.",
        "price":"\u20ac49.00"
     },
     {
        "img":"http:\/\/lorempixel.com\/600\/400\/",
        "desc":"In euismod purus quis diam elementum imperdiet.",
        "price":"\u20ac1389.00"
     },
     {
        "img":"http:\/\/lorempixel.com\/200\/700\/",
        "desc":"Duis elementum nisi non aliquet placerat.",
        "price":"\u20ac123.00"
     },
     {
        "img":"http:\/\/lorempixel.com\/300\/400\/",
        "desc":"Donec volutpat metus id turpis cursus volutpat.",
        "price":"\u20ac87.00"
     },
     {
        "img":"http:\/\/lorempixel.com\/400\/300\/",
        "desc":"Donec dictum nibh vitae libero venenatis, at faucibus orci rhoncus.",
        "price":"\u20ac53.00"
     },
     {
        "img":"http:\/\/lorempixel.com\/500\/500\/",
        "desc":"Donec ac elit at arcu mollis consectetur.",
        "price":"\u20ac29.00"
     },
     {
        "img":"http:\/\/lorempixel.com\/400\/400\/",
        "desc":"Suspendisse fermentum libero sed lorem pellentesque, eget rhoncus ligula placerat.",
        "price":"\u20ac169.00"
     }
  ]
  
  const createCard = ({ img, price }) => `
    <div class="cards__item" onclick="#';">
        <div class="cards__image">
            <img src="${img}">
        </div>
        <p class="cards__price">${price}</p>
    </div>
  `;
  
  function render() {
    const cards = myData.map(createCard).join('')
    document.querySelector('#produkt').innerHTML = cards
  }
  
  render ();