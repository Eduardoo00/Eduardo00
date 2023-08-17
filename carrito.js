 const pintarcarrito =() => {
    modalcontainer. innerHTML ="";
    modalcontainer.style.display ="flex";
    const modalheader= document.createElement ("div");
    modalheader.className= "modal_header";
    modalheader.innerHTML=`
    <h1 class="modal-header-title">carrito.</h1>
    `;
    modalcontainer.append(modalheader);

    const modalbutton = document.createElement("h1");
    modalbutton.innerText = "Salir X";
    modalbutton.className ="modal-header-button";

   modalbutton.addEventListener("click", () => {
    modalcontainer.style.display= "none";

   });

    modalheader.append (modalbutton);

    carrito.forEach((Product) => {
        let carritocontent = document.createElement("div");
        carritocontent.className ="modal-content";
        carritocontent.innerHTML =`
          <img src="${Product.img}">
          <h3>${Product.nombre}</h3>
          <p>${Product.precio} $</p>
          <span class="restar"> - </span>
          <p>cantidad: ${Product.cantidad}</p>
          <span class="sumar"> + </span>
          <p>total: ${Product.cantidad * Product.precio}</p>
        `;   
        modalcontainer.append(carritocontent);

        let restar = carritocontent.querySelector(".restar");

        restar.addEventListener ("click", () => {
          if (Product.cantidad !== 1) {
            Product.cantidad--;
          } 
          savelocal();
          pintarcarrito();
        });

        let sumar = carritocontent.querySelector (".sumar");
        sumar.addEventListener ("click", () => {
          Product.cantidad++;
          savelocal();
          pintarcarrito();
        });

      let eliminar= document.createElement("samp")
      eliminar.innerText = "❌" ;
      eliminar.classList = "delete-Product";
      carritocontent.append (eliminar);
      eliminar.addEventListener ("click" , eliminarproducto);

    });

    const total = carrito.reduce((acc, el) => acc + el.precio * el.cantidad,0);

    const totalbuying = document.createElement("div");
    totalbuying. className="total-content";
    totalbuying. innerHTML =`total a pagar: ${total} $`;
    modalcontainer.append(totalbuying);
    
 };
  vercarrito.addEventListener ("click", pintarcarrito);

  const eliminarproducto = () => {
    const foundid = carrito.find((element) => element.id);
    console.log(foundid);

    carrito = carrito.filter ((carritoid) => {
        return carritoid !== foundid;
    }); 
    carritoCounter();
    savelocal();
    pintarcarrito();
  };

  const carritoCounter = () => {
    cantidadcarrito.style.display = "block";
    cantidadcarrito.innerText= carrito.length;
  };