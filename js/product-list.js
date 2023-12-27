const products = [
    {
        id: '1',
        title: 'Baby Yoda',
        image: 'img/baby-yoda.svg',
        description: 'A little green creature with a Force',
        price: 9.99
    },
    {
        id: '2',
        title: 'Banana',
        image: 'img/banana.svg',
        description: 'A fresh, ripe banana packed with natural sweetness, perfect for a healthy snack.',
        price: 8.99
    },
    {
        id: '3',
        title: 'Viking',
        image: 'img/viking.svg',
        description: 'An intricately designed Viking figure, symbolizing strength and adventure, ideal for collectors.',
        price: 7.99
    },
    {
        id: '4',
        title: 'Girl',
        image: 'img/girl.svg',
        description: 'A charming illustration of a girl, capturing the essence of youth and joy, great for decoration.',
        price: 6.99
    },
];

function renderProducts(products) {
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
                    Buy - ${product.price}
                </button>
            </div>
        </article>`;
    }    
    const productsContainer = document.querySelector('.products__list');
    productsContainer.innerHTML = productsDomString;
}

renderProducts(products);