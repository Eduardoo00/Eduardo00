const shopcontent = document.getElementById ("shopcontent");
const vercarrito = document.getElementById("vercarrito");
const modalcontainer = document.getElementById("modal-container");
const cantidadcarrito = document.getElementById("cantidadcarrito");


const productos = [
    {
     id: 1,
     nombre: "buzos",
     precio: 100,
     img:
     "https://www.distritomoda.com.ar/sites/default/files/styles/product_medium/public/imagenes/img_9070_1689863380.jpg?itok=vM_YvddA",
     cantidad:1,
    },
    {
     id:2,
     nombre: "pantalones",
     precio: 150,
     img:
     "https://www.distritomoda.com.ar/sites/default/files/styles/product_medium/public/imagenes/img-20230713-wa0062_1690382691.jpg?itok=pRVvEjpW",
     cantidad:1,
    },
    {
     id:3,
     nombre: "camperas",
     precio: 250,
     img:
     "https://www.distritomoda.com.ar/sites/default/files/styles/product_medium/public/imagenes/whatsapp_image_2023-05-31_at_12.07.29_1_1685549799.jpeg?itok=fpSmPuWu",
     cantidad:1,
    },
    {
     id:4,
     nombre: "chalecos",
     precio: 180,
     img:
     "https://www.distritomoda.com.ar/sites/default/files/styles/product_medium/public/imagenes/22ad6f43-1562-4b6b-b58c-1de05596cc9b_1687372601.jpeg?itok=hV_vPTEX",
     cantidad:1,
    },
    { 
     id:5,
     nombre: "tops",
     precio: 130,
     img:
    "https://www.distritomoda.com.ar/sites/default/files/styles/product_medium/public/imagenes/whatsapp_image_2023-07-07_at_10.24.11_1688744073.jpeg?itok=_TDNW-iY",
    cantidad:1,
    } ,
    { 
     id:6,
     nombre: "sweaters",
     precio: 300,
     img:
     "https://www.distritomoda.com.ar/sites/default/files/styles/product_medium/public/imagenes/whatsapp_image_2023-05-10_at_15.08.09_1690812314.jpeg?itok=UijItJhN",
     cantidad:1,
    } ,


];

let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

productos.forEach((Product)=> {
    let content = document.createElement("div");
    content.className= "card";
    content.innerHTML = `
     <img src="${Product.img}">
     <h3> ${Product.nombre} </h3>
     <p class="price">${Product.precio} $</p>
   `;

 shopcontent.append(content);

 let comprar = document.createElement("button");
 comprar.innerText = "comprar";
 comprar.className= "comprar"

 content.append (comprar);

  comprar.addEventListener("click", () => {
    const repeat = carrito.some((repeatproduct) => repeatproduct.id === Product.id);
    if (repeat){
        carrito.map((prod) =>  {  
        if (prod.id=== Product.id) {
        prod.cantidad++;
        }    
    });
    } else { 

    carrito.push({
      id: Product.id,
      img: Product.img,
      nombre: Product.nombre,
      precio: Product.precio,
      cantidad: Product.cantidad,
    });
      }
    console.log(carrito);
    carritoCounter();
    savelocal();
  });
});
const savelocal = () => {   
localStorage.setItem("carrito",JSON.stringify(carrito));
    };

    JSON.parse(localStorage.getItem("carrito"));