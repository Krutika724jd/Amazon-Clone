

// Now we are making object to store all the functions in it as a methods
 export const cart={
    cartItems:undefined,// it's a property :value

    // Here we are using shorthand syntax to define methods
    //loadFromStorage : function(){}
    loadFromStorage(){
    this.cartItems=JSON.parse(localStorage.getItem('cart-oop'));/*--Read data from localStorage*/
if(!this.cartItems){ 
    // we use cart.cartItems to access the [cartItems] from the [cart] object
    // So wherever we are using this.cartItems we are actually replacing cart.cartItems

this.cartItems=[  
    {
    productId:"e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
    quantity:2,
    deliveryOptionId:'1'
    },
    {
    productId:"83d4ca15-0f35-48f5-b7a3-1ea210004f2e",
    quantity:1,
    deliveryOptionId:'2'
    }];
}
},

     saveToStorage(){
    localStorage.setItem('cart-oop',JSON.stringify(this.cartItems));/* --Save data to localStorage*/
},

 calculateCartQuantity(){
    let cartQuantity=0;
        this.cartItems.forEach((cartItem) =>{
            cartQuantity+=cartItem.quantity;
        });
        return cartQuantity;
},

  addToCart(productId){
    let matchingItem;
    
            this.cartItems.forEach((cartItem)=>{
                if(productId=== cartItem.productId){
                    matchingItem=cartItem;
                }
            });
    
            const quantitySelector=document.querySelector(`.js-quantity-selector-${productId}`);
            const quantity=Number(quantitySelector.value);
            
            if(matchingItem){
                matchingItem.quantity+=quantity;
            }else{
                this.cartItems.push({
                    productId:productId,
                    quantity:quantity
                });
            }
            this.saveToStorage();
     },
    updateQuantity(productId,newQuantity){
        let matchingItem;
    
            this.cartItems.forEach((cartItem)=>{
                if(productId=== cartItem.productId){
                    matchingItem=cartItem;
                }
            });
            matchingItem.quantity=newQuantity;
            this.saveToStorage();
     },
     removeFromCart(productId){
        /* step1:- Make new empty array
        step2:- make the productId !== cartItem.productId
        step3:- add other productId into new array except the click delete link one */
        const newCart=[];
        this.cartItems.forEach((cartItem)=>{
        if(cartItem.productId !==productId){
            newCart.push(cartItem);
        }
    });
       this.cartItems=newCart;
       this.saveToStorage();
    
},
    updateDeliveryOption(productId, deliveryOptionId) {
        let matchingItem;
      
        this.cartItems.forEach((cartItem) => {
          if (productId === cartItem.productId) {
            matchingItem = cartItem;
          }
        });
      
        matchingItem.deliveryOptionId = deliveryOptionId;
      
        this.saveToStorage();
      }
    
}
cart.loadFromStorage();
cart.addToCart('dd82ca78-a18b-4e2a-9250-31e67412f98d');
console.log(cart);
// export let cart;



 
 


 