
export let cart;
loadFromStorage() ;
 export function loadFromStorage(){
    cart=JSON.parse(localStorage.getItem('cart'));/*--Read data from localStorage*/
if(!cart){
cart=[
    {
    productId:"e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
    quantity:2,
    deliveryOptionId:'1'
    },
    {
    productId:"83d4ca15-0f35-48f5-b7a3-1ea210004f2e",
    quantity:1,
    deliveryOptionId:'2'
    }
    
];
}
}

function saveToStorage(){
    localStorage.setItem('cart',JSON.stringify(cart));/* --Save data to localStorage*/
}

export function calculateCartQuantity(){
    let cartQuantity=0;
        cart.forEach((cartItem) =>{
            cartQuantity+=cartItem.quantity;
        });
        return cartQuantity;

}

 export function addToCart(productId){
let matchingItem;

        cart.forEach((cartItem)=>{
            if(productId=== cartItem.productId){
                matchingItem=cartItem;
            }
        });

        const quantitySelector=document.querySelector(`.js-quantity-selector-${productId}`);
        const quantity=Number(quantitySelector.value);
        
        if(matchingItem){
            matchingItem.quantity+=quantity;
        }else{
            cart.push({
                productId:productId,
                quantity:quantity
            });
        }
        saveToStorage();
 }
 export function updateQuantity(productId,newQuantity){
    let matchingItem;

        cart.forEach((cartItem)=>{
            if(productId=== cartItem.productId){
                matchingItem=cartItem;
            }
        });
        matchingItem.quantity=newQuantity;
        saveToStorage();
 }

export function removeFromCart(productId){
    /* step1:- Make new empty array
    step2:- make the productId !== cartItem.productId
    step3:- add other productId into new array except the click delete link one */
    const newCart=[];
    cart.forEach((cartItem)=>{
    if(cartItem.productId !==productId){
        newCart.push(cartItem);
    }
});
   cart=newCart;
   saveToStorage();

 }
 export function updateDeliveryOption(productId, deliveryOptionId) {
    let matchingItem;
  
    cart.forEach((cartItem) => {
      if (productId === cartItem.productId) {
        matchingItem = cartItem;
      }
    });
  
    matchingItem.deliveryOptionId = deliveryOptionId;
  
    saveToStorage();
  }