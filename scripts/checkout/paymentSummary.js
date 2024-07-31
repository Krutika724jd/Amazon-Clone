import { cart,calculateCartQuantity } from '../../data/cart.js';
import { getProduct } from '../../data/product.js';
import { getDeliveryOption } from '../../data/deliveryoption.js';
import { formatCurrency } from '../utils/money.js';

export function renderPayementSummary(){
   let  productPriceCents=0;
   let shippingPriceCents=0;
   cart.forEach((cartItem)=>{
    const product=getProduct(cartItem.productId);
    productPriceCents+=product.priceCents*cartItem.quantity;

    const deliveryOption=getDeliveryOption(cartItem.deliveryOptionId);
    shippingPriceCents+=deliveryOption.priceCents;
});
    const totalBeforeCents=productPriceCents+shippingPriceCents;
    const taxCents=totalBeforeCents*0.1;
    const totalCents=taxCents + totalBeforeCents;

const paymentSummaryHTML=`
   <div class="payment-summary-title">Order Summary</div>
                
                <div class="payment-summary-row">
                    <div class="js-increment-items">:</div>
                    <div class="payment-summary-money">${formatCurrency(productPriceCents)}</div>
                </div>
                <div class="payment-summary-row">
                    <div>Shipping & handling:</div>
                    <div class="payment-summary-money">${formatCurrency(shippingPriceCents)}</div>
                </div>
                <div class="payment-summary-row subTotal-row">
                    <div>Total Before tax:</div>
                    <div class="payment-summary-money">${formatCurrency(totalBeforeCents)}</div>
                </div>
                <div class="payment-summary-row">
                    <div>Estimated tax(10%):</div>
                    <div class="payment-summary-money">${formatCurrency(taxCents)}</div>
                </div>
                <div class="payment-summary-row total-row">
                    <div>Order total:</div>
                    <div class="payment-summary-money ">${formatCurrency(totalCents)}</div>
                </div>
                <button class="place-order-btn button-primary">Place your order</button>

`


 let did=document.querySelector('.js-payment-summary').innerHTML=paymentSummaryHTML;
 function updateCartQuantity(){
    const cartQuantity=calculateCartQuantity();
          document.querySelector('.js-increment-items').innerHTML=`Items(${cartQuantity}):`;
          console.log(cartQuantity);
 }
 updateCartQuantity();
console.log(did);
}
renderPayementSummary();