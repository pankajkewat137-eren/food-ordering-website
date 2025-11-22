
let bagItems = [];
let bagItemsObjects = [];
const items = [
    { item_image: 'assets/img/products/product-img-1.jpg', item_name: 'Strawberry', price: '85', id: '1' },
    { item_image: 'assets/img/products/product-img-2.jpg', item_name: 'Berry', price: '70', id: '2' },
    { item_image: 'assets/img/products/product-img-3.jpg', item_name: 'Lemon', price: '35', id: '3' },
    { item_image: 'assets/img/products/product-img-4.jpg', item_name: 'Avocado', price: '50', id: '4' },
    { item_image: 'assets/img/products/product-img-5.jpg', item_name: 'Green Apple', price: '45', id: '5' },
    { item_image: 'assets/img/products/product-img-6.jpg', item_name: 'Strawberry', price: '80', id: '6' },
];
onLoad();

function onLoad() {
    let bagItemsStr = localStorage.getItem('bagItems');
    bagItems = bagItemsStr ? JSON.parse(bagItemsStr) : [];
    displayItemsOnHomePage();
    displayBagIcon();
    // add to cart
    LoadBagItems();
    displayBagItems();
}

// Add to cart function
function addToBag(itemId) {
    bagItems.push(itemId);
    localStorage.setItem('bagItems', JSON.stringify(bagItems));
    displayBagIcon();
}

// Show cart item count
function displayBagIcon() {
    let bagItemCountElement = document.querySelector('.bag-item-count');
    if (bagItems.length > 0) {
        bagItemCountElement.style.visibility = 'visible';
        bagItemCountElement.innerText = bagItems.length;
    } else {
        bagItemCountElement.style.visibility = 'hidden';
    }
}

// Display items on the home page
function displayItemsOnHomePage() {
    let itemsContainerElement = document.querySelector('.shop');
    if (!itemsContainerElement) return;

    let innerHTML = '';
    items.forEach(item => {
        innerHTML += `
        <div class="col-lg-4 col-md-6 text-center ${item.item_name.toLowerCase()}">
            <div class="single-product-item">
                <div class="product-image">
                    <a href="single-product.html"><img src="${item.item_image}" alt="${item.item_name}"></a>
                </div>
                <h3>${item.item_name}</h3>
                <p class="product-price"><span>Per Kg</span> ${item.price}$</p>
                <a onclick="addToBag('${item.id}')" class="cart-btn"><i class="fas fa-shopping-cart"></i> Add to Cart</a>
            </div>
        </div>
        `;
    });

    itemsContainerElement.innerHTML = innerHTML;
}

// Search bar filter function
function myFunction() {
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById('myInput');
    filter = input.value.toUpperCase();
    ul = document.getElementById("myUL");
    li = ul.getElementsByTagName('li');

    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        txtValue = a.textContent || a.innerText;
        li[i].style.display = txtValue.toUpperCase().indexOf(filter) > -1 ? "" : "none";
    }
}



// add to cart

function LoadBagItems() {
    bagItemsObjects = bagItems.map(itemId => {
        return items.find(item => item.id === itemId);
    }).filter(Boolean); // Remove undefined values
}

// Display Bag Items
function displayBagItems() {
    let containerElement = document.querySelector('.cart-table-wrap');
    if (!containerElement) return;

    let innerHTML = '';
    bagItemsObjects.forEach(bagItem => {
        innerHTML += generateItemHTML(bagItem);
    });

    containerElement.innerHTML = innerHTML;
}

// Generate HTML for a Single Bag Item
function generateItemHTML(item) {
    return `
    <table class="cart-table">
        <thead class="cart-table-head">
            <tr class="table-head-row">
                <th class="product-remove"></th>
                <th class="product-image">Product Image</th>
                <th class="product-name">Name</th>
                <th class="product-price">Price</th>
                <th class="product-total">Total</th>
            </tr>
        </thead>
        <tbody>
            <tr class="table-body-row">
                <td class="product-remove"><a href="#"><i class="far fa-window-close"></i></a></td>
                <td class="product-image"><img src="${item.item_image}" alt="${item.item_name}"></td>
                <td class="product-name">${item.item_name}</td>
                <td class="product-price">$${item.price}</td>
                <td class="product-total">1</td>
            </tr>
        </tbody>
    </table>
    `;
}




