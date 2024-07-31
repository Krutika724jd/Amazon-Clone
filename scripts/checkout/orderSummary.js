import {cart,removeFromCart,updateQuantity,updateDeliveryOption} from '../../data/cart.js';

import {getProduct} from '../../data/product.js';
import { formatCurrency } from '../utils/money.js';
/* External Library-->Code from the outside of the projects//
 Developers make a code(functions or api) and upload this on internet & we can access and make use of this code(external library)*/
import { deliveryOptions,getDeliveryOption,calculateDeliveryDate } from '../../data/deliveryoption.js';
import { renderPayementSummary } from './paymentSummary.js';
import { renderCheckoutHeader } from './checkoutHeader.js';
 
 export function renderOrderSummary(){
let cartSummaryHTML='';
cart.forEach((cartItem)=>{
    const productId=cartItem.productId;
    /*let matchingProduct;
    products.forEach((product)=>{
        if(product.id===productId){
            matchingProduct=product;
        }
    });*/
    const matchingProduct=getProduct(productId);
    const deliveryOptionId=cartItem.deliveryOptionId;
    const deliveryOption=getDeliveryOption(deliveryOptionId);
    const dateString=calculateDeliveryDate(deliveryOption);

    
    
    cartSummaryHTML+=`
            <div class="cart-item-container js-cart-item-container-${matchingProduct.id}">
                    <div class="delivery-date">Delivery date:${dateString}</div>
                    <div class="card-item-details-grid">
                        <img src="${matchingProduct.image}" class="product-image">
                        <div class="card-item-details">
                            <div class="product-name">${matchingProduct.name}</div>
                            <div class="product-price">$${formatCurrency(matchingProduct.priceCents)}</div>
                            <div class="product-quantity">
                                <span>Quantity: <span class="quantity-label js-quantity-label-${matchingProduct.id}">${cartItem.quantity}</span></span>
                                <span class="update-quantity-link link-primary js-update-link" data-product-id="${matchingProduct.id}">Update</span>
                                <input class="quantity-input js-quantity-input-${matchingProduct.id}" type="text">
                                <span class="save-quantity-link link-primary js-save-link" data-product-id="${matchingProduct.id}">Save</span>
                                <span class="delete-quantity-link link-primary js-delete-link" data-product-id="${matchingProduct.id}">Delete</span>
                            </div>
                        </div>
                        <div class="delivery-options">
                            <div class="delivery-options-title">Choose a delivery option:</div>
                            ${deliveryOptionHTML(matchingProduct,cartItem)}

                        </div>
                    </div>
                </div>
                </div>
                `;

});

function deliveryOptionHTML(matchingProduct,cartItem){
    let html='';
    deliveryOptions.forEach((deliveryOption) =>{
        const dateString=calculateDeliveryDate(deliveryOption);   

    const priceString=deliveryOption.priceCents===0?'Free'
    :`$${formatCurrency(deliveryOption.priceCents)}-`;

     const isChecked=deliveryOption.id === cartItem.deliveryOptionId;
    html+=`
     <div class="delivery-option js-delivery-option" 
     data-product-id="${matchingProduct.id}"
     data-delivery-option-id="${deliveryOption.id}">
                                <input type="radio" ${isChecked ? 'checked':'hii'} class="delivery-option-input" name="delivery-option=${matchingProduct.id}">
                                <div>
                                    <div class="delivery-option-date">${dateString}</div>
                                    <div class="delivery-option-price">${priceString} Shipping</div>
                                </div>
    </div>
                            
    `
    });
     return html;

}
document.querySelector('.js-order-summary').innerHTML=cartSummaryHTML;
console.log(cartSummaryHTML);

document.querySelectorAll('.js-update-link')
  .forEach((link)=>{
    link.addEventListener('click',()=>{
        const productId=link.dataset.productId;
        console.log(productId);
        const container = document.querySelector(
            `.js-cart-item-container-${productId}`
          );
          container.classList.add('is-editing-quantity');


    });
 });

 document.querySelectorAll('.js-save-link')
   .forEach((link)=>{
    link.addEventListener('click',()=>{
        const productId=link.dataset.productId;
        const container = document.querySelector(
            `.js-cart-item-container-${productId}`
          );
          container.classList.remove('is-editing-quantity');
          const quantityInput = document.querySelector(
            `.js-quantity-input-${productId}`
          );
          const newQuantity = Number(quantityInput.value);
          updateQuantity(productId,newQuantity);
          renderCheckoutHeader();
        renderOrderSummary();
        renderPayementSummary();

    });
   });
document.querySelectorAll('.js-delete-link')
 .forEach((link1)=>{
    link1.addEventListener('click',()=> {
        const productId=link1.dataset.productId;
        
        removeFromCart(productId);
        /*const container = document.querySelector(
            `.js-cart-item-container-${productId}`
          );
          container.remove();*/
          renderCheckoutHeader();
          renderOrderSummary();
          renderPayementSummary();
          
    });
 });

 
 
   
 document.querySelectorAll('.js-delivery-option')
    .forEach((element)=>{
        element.addEventListener('click',()=>{
            const {productId,deliveryOptionId}=element.dataset;
            updateDeliveryOption(productId,deliveryOptionId);
            renderPayementSummary();
            renderOrderSummary();
        
        });

    });
}
renderOrderSummary();