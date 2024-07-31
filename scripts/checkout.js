import { renderCheckoutHeader } from './checkout/checkoutHeader.js';
import { renderOrderSummary } from './checkout/orderSummary.js';
import { renderPayementSummary } from './checkout/paymentSummary.js';
import  {cart} from '../data/cart-oop.js';
renderCheckoutHeader();
 renderOrderSummary();
renderPayementSummary();
cart.addToCart('dd82ca78-a18b-4e2a-9250-31e67412f98d');
console.log(cart);