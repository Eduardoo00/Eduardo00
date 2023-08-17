const shopcontent = document.getElementById ("shopcontent");
const vercarrito = document.getElementById("vercarrito");
const modalcontainer = document.getElementById("modal-container");
const cantidadcarrito = document.getElementById("cantidadcarrito");

let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

const getProducts = async () => {
  const response = await fetch("data.json");
  const data = await response.json();

  data.forEach((Product)=> {
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
};

getProducts();


const savelocal = () => {   
localStorage.setItem("carrito",JSON.stringify(carrito));
    };