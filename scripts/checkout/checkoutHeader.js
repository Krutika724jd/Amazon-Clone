 import {cart} from '../../data/cart.js';
import { renderOrderSummary } from './orderSummary.js';
 export function renderCheckoutHeader(){
 let cartQuantity=0;
 cart.forEach((cartItem) => {
     cartQuantity+=cartItem.quantity;
    
 });
    const checkoutHeaderHTML =`
    <div class="header-content">
            <div class="Checkout-header-left-section">
                <a href="amazon-1.html">
                    <img src="amazon-logo.png" class="amazon-logo">
                </a>
            </div>
            <div class="Checkout-header-middle-section ">
                Checkout (<a href="amazon.html">${cartQuantity}items</a>)
            </div>
            <div class="Checkout-header-right-section">
                <img src="checkout-lock-icon.png" alt="">
            </div>

    </div>
    
    
    `;
    document.querySelector('.js-checkout-header').innerHTML=checkoutHeaderHTML;
    
    
}
renderCheckoutHeader();