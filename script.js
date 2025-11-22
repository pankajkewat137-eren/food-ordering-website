
// let bagItems = [];
// let bagItemsObjects = [];
// const items = [
//     { item_image: 'assets/img/products/product-img-1.jpg', item_name: 'Strawberry', price: '85', id: '1' },
//     { item_image: 'assets/img/products/product-img-2.jpg', item_name: 'Berry', price: '70', id: '2' },
//     { item_image: 'assets/img/products/product-img-3.jpg', item_name: 'Lemon', price: '35', id: '3' },
//     { item_image: 'assets/img/products/product-img-4.jpg', item_name: 'Avocado', price: '50', id: '4' },
//     { item_image: 'assets/img/products/product-img-5.jpg', item_name: 'Green Apple', price: '45', id: '5' },
//     { item_image: 'assets/img/products/product-img-6.jpg', item_name: 'Strawberry', price: '80', id: '6' },
// ];
// onLoad();

// function onLoad() {
//     let bagItemsStr = localStorage.getItem('bagItems');
//     bagItems = bagItemsStr ? JSON.parse(bagItemsStr) : [];
//     displayItemsOnHomePage();
//     displayBagIcon();
//     // add to cart
//     LoadBagItems();
//     displayBagItems();
// }

// // Add to cart function
// function addToBag(itemId) {
//     bagItems.push(itemId);
//     localStorage.setItem('bagItems', JSON.stringify(bagItems));
//     displayBagIcon();
// }

// // Show cart item count
// function displayBagIcon() {
//     let bagItemCountElement = document.querySelector('.bag-item-count');
//     if (bagItems.length > 0) {
//         bagItemCountElement.style.visibility = 'visible';
//         bagItemCountElement.innerText = bagItems.length;
//     } else {
//         bagItemCountElement.style.visibility = 'hidden';
//     }
// }

// // Display items on the home page
// function displayItemsOnHomePage() {
//     let itemsContainerElement = document.querySelector('.shop');
//     if (!itemsContainerElement) return;

//     let innerHTML = '';
//     items.forEach(item => {
//         innerHTML += `
//         <div class="col-lg-4 col-md-6 text-center ${item.item_name.toLowerCase()}">
//             <div class="single-product-item">
//                 <div class="product-image">
//                     <a href="single-product.html"><img src="${item.item_image}" alt="${item.item_name}"></a>
//                 </div>
//                 <h3>${item.item_name}</h3>
//                 <p class="product-price"><span>Per Kg</span> ${item.price}$</p>
//                 <a onclick="addToBag('${item.id}')" class="cart-btn"><i class="fas fa-shopping-cart"></i> Add to Cart</a>
//             </div>
//         </div>
//         `;
//     });

//     itemsContainerElement.innerHTML = innerHTML;
// }




// // add to cart

// function LoadBagItems() {
//     bagItemsObjects = bagItems.map(itemId => {
//         return items.find(item => item.id === itemId);
//     }).filter(Boolean);
// }

// // Display Bag Items
// function displayBagItems() {
//     let containerElement = document.querySelector('.cart1-item');
//     if (!containerElement) return;

//     let innerHTML = '';
//     bagItemsObjects.forEach(bagItem => {
//         innerHTML += generateItemHTML(bagItem);
//     });

//     containerElement.innerHTML = innerHTML;
// }





// // Generate HTML cart Item
// function generateItemHTML(item) {
//     return `
   
//             <tr class="table-body-row">
//                 <td class="product-remove"  onclick="removeFromBag(${item.id})"><a href="#"><i class="far fa-window-close"></i></a></td>
//                 <td class="product-image"><img src="${item.item_image}" alt="${item.item_name}"></td>
//                 <td class="product-name">${item.item_name}</td>
//                 <td class="product-price">$${item.price}</td>
//                 <td class="product-total">1</td>
//             </tr>
        
//     `;
// }

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
    LoadBagItems();
    displayBagItems();
    displayBagSummary();
}
// total item bill
function displayBagSummary (){
    let displayBagSummaryElement = document.querySelector('.total-section ');
     
    if (!displayBagSummaryElement) return;

    // Calculate Subtotal
    let Subtotal = bagItemsObjects.reduce((acc, item) => acc + parseFloat(item.price), 0); // Sum of item prices
    let Shipping = 50; 
    let Total = Subtotal + Shipping; 
    displayBagSummaryElement.innerHTML=`<table class="total-table">
							<thead class="total-table-head">
								<tr class="table-total-row">
									<th>Total</th>
									<th>Price</th>
								</tr>
							</thead>
							<tbody>
								<tr class="total-data">
									<td><strong>Subtotal: </strong></td>
									<td>$${Subtotal}</td>
								</tr>
								<tr class="total-data">
									<td><strong>Shipping: </strong></td>
									<td>$${Shipping}</td>
								</tr>
								<tr class="total-data">
									<td><strong>Total: </strong></td>
									<td>$${Total}</td>
								</tr>
							</tbody>
						</table>
						<div class="cart-buttons">
							<a href="cart.html" class="boxed-btn">Update Cart</a>
							<a href="checkout.html" class="boxed-btn black">Check Out</a>
						</div>`
}
















function addToBag(itemId) {
    bagItems.push(itemId);
    localStorage.setItem('bagItems', JSON.stringify(bagItems));
    displayBagIcon();
}

function displayBagIcon() {
    let bagItemCountElement = document.querySelector('.bag-item-count');
    if (bagItems.length > 0) {
        bagItemCountElement.style.visibility = 'visible';
        bagItemCountElement.innerText = bagItems.length;
    } else {
        bagItemCountElement.style.visibility = 'hidden';
    }
}

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

function LoadBagItems() {
    bagItemsObjects = bagItems.map(itemId => {
        return items.find(item => item.id === itemId);
    }).filter(Boolean);
}

function displayBagItems() {
    let containerElement = document.querySelector('.cart1-item');
    if (!containerElement) return;

    let innerHTML = '';
    bagItemsObjects.forEach(bagItem => {
        innerHTML += generateItemHTML(bagItem);
    });

    containerElement.innerHTML = innerHTML;
}

function generateItemHTML(item) {
    return `
        <tr class="table-body-row">
            <td class="product-remove" onclick="removeFromBag(${item.id})">
                <a href="#"><i class="far fa-window-close"></i></a>
            </td>
            <td class="product-image"><img src="${item.item_image}" alt="${item.item_name}"></td>
            <td class="product-name">${item.item_name}</td>
            <td class="product-price">$${item.price}</td>
            <td class="product-total">1</td>
        </tr>
    `;
}

function removeFromBag(itemId) {
    // Remove the item from bagItems array
    bagItems = bagItems.filter(id => id !== itemId.toString());

    // Update localStorage
    localStorage.setItem('bagItems', JSON.stringify(bagItems));

    LoadBagItems();
    displayBagItems();
    displayBagIcon(); 
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

