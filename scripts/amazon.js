import {cart,addToCart,calculateCartQuantity} from '../data/cart.js';
import {products} from '../data/product.js';
import {formatCurrency} from './utils/money.js';
let productsHTML='';

products.forEach((product)=>{
    productsHTML+=`
    <div class="product-container">
                <div class="product-image-container">
                    <img class="product-image" src="${product.image}">
                </div>
                <div class="product-name">
                    ${product.name}
                </div>
                <div class="product-rating-container">
                    <img class="product-rating-stars" src="ratings-images/rating-${product.rating.stars * 10}.png" >
                    
                    <div class="product-rating-count">${product.rating.count}</div>
                </div>
                <div class="product-price">$${formatCurrency(product.priceCents)}</div>
                <div class="product-quantity-container">
                    <select class="js-quantity-selector-${product.id}">
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>

                    </select>
                </div>
                <div class="product-spacer">
                <div class="added-to-cart js-added-to-cart-${product.id}">
                    <img src="checkmark.png">Added
                </div>
                    <button class="add-to-cart-btn button-primary js-add-to-cart" data-product-id="${product.id}">Add to Cart</button>
                </div>
            </div>
    `;
});
console.log(productsHTML);
document.querySelector('.js-products-grid').innerHTML=productsHTML;

  function updateCartQuantity(){
        const cartQuantity=calculateCartQuantity();
        document.querySelector('.js-cart-quantity').innerHTML=cartQuantity;
        console.log(cartQuantity);
}
document.querySelectorAll('.js-add-to-cart')
  .forEach((button)=>{
     button.addEventListener('click',()=>{
        const productId=button.dataset.productId;
        addToCart(productId);
        updateCartQuantity();
        
        
        
       const addedMSg= document.querySelector(`.js-added-to-cart-${productId}`);
       addedMSg.classList.add('added-to-cart-visible');
       setTimeout(()=>{
        addedMSg.classList.remove('added-to-cart-visible');
       },2000);
     });

  });