const response = await fetch('api/products.json');
const products = await response.json();

function renderProducts(products, rate = 1) {
    let productsDomString = '';
    for (let i = 0; i < products.length; i++) {
        const product = products[i];
        productsDomString += `
        <article class="product-card">
            <img src="${product.image}" alt="${product.description}">
            <h3 class="product-card__h3">${product.title}</h3>
            <p class="product-card__description">${product.description}</p>
            <div class="product-card__buttons">
                <button class="product-card__buttons-info button button-card">
                    Info
                </button>
                <button class="product-card__buttons-buy button button-card">
                    Buy - ${(product.price * rate).toFixed(2)}
                </button>
            </div>
        </article>`;
    }    
    const productsContainer = document.querySelector('.products__list');
    productsContainer.innerHTML = productsDomString;
}


let currencies;
async function updateCurrency() {
    if (!currencies) {
        const response = await fetch('https://api.exchangerate-api.com/v4/latest/USD');
        currencies = await response.json();
    }
    const currency = document.querySelector('.products_currency').value;
    const rate = currencies.rates[currency];
    renderProducts(products, rate);
}

renderProducts(products);

document.querySelector('.products_currency').addEventListener('change', updateCurrency);
