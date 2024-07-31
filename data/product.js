export function getProduct(productId){
  let matchingProduct;
  products.forEach((product)=>{
      if(product.id===productId){
          matchingProduct=product;
      }
  });
  return matchingProduct;
}

export const products=[
    {
     id: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
     image:"product-images/intermediate-composite-basketball.jpg",
     name:"Black and Gray Athletic Cotton Socks-6 pairs" ,
     rating:{
       stars: 4.5,
       count:87
     },
     priceCents:1090,
    
    },
    {
        id: "83d4ca15-0f35-48f5-b7a3-1ea210004f2e",
        image:"product-images/adults-plain-cotton-tshirt-2-pack-teal.jpg",
        name:"Adults-plain-cotton-tshirt-2-pack-teal" ,
        rating:{
          stars: 4.0,
          count:200
        },
        priceCents:8890,
       
       },
       {
        id: "15b6fc6f-327a-4ec4-896f-486349e85a3d",
        image:"product-images/black-2-slot-toaster.jpg",
        name:"Black-2-slot-toaster" ,
        rating:{
          stars: 5.0,
          count:50
        },
        priceCents:1090,
       
       },
       {
        id: "54e0eccd-8f36-462b-b68a-8182611d9add",
        image:"product-images/men-golf-polo-t-shirt-blue.jpg",
        name:"Men-golf-polo-t-shirt-blue" ,
        rating:{
          stars: 3.5,
          count:100
        },
        priceCents:1090,
       
       },
       {
        id: "3ebe75dc-64d2-4137-8860-1f5a963e534b",
        image:"product-images/umbrella.jpg",
        name:"Umbrella" ,
        rating:{
          stars: 4.5,
          count:56
        },
        priceCents:1090,
       
       },
       {
        id: "3ebe75dc-64d2-4137-8860-1f5a963e534b",
        image:"product-images/women-beach-sandals.jpg",
        name:" Women-beach-sandals" ,
        rating:{
          stars: 3.0,
          count:187
        },
        priceCents:1090,
       
       },
       {
        id:  "dd82ca78-a18b-4e2a-9250-31e67412f98d",
        image:"product-images/women-stretch-popover-hoodie-black.jpg",
        name:"Women-stretch-popover-hoodie-black" ,
        rating:{
          stars: 4.0,
          count:127
        },
        priceCents:1090,
       
       }





];