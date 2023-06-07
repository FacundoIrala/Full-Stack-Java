function info_Persona(){
    // Capturo los elementos del html
    const value_Nombre = get_Value('nombreInput');
    const value_Apellido = get_Value('apellidoInput');
    const value_Email = get_Value('correoInput');
    const value_Cantidad = get_Value('cantidadInput');
    const value_Categoria = get_Value('inputCategoria');
    // const resultado = get_Value('nombreInput');
    // ver y modificar

    const persona = {
        nombre: value_Nombre,
        apellido: value_Apellido,
        email: value_Email,
        cantidad: value_Cantidad,
        categoria: value_Categoria
    };
    console.log(persona);
    guardar_Dato_Persona("persona",persona);
}

calcular_Precio = () => {
    info_Persona()
    event.preventDefault();
    const ticket = 200;
    let resultado;
    let descuento;
    let resultado_Final;
    
    const value_Nombre = get_Value('nombreInput');
    const value_Apellido = get_Value('apellidoInput');
    const value_Email = get_Value('correoInput');
    const cantidad_Tickets = parseInt(get_Value("cantidadInput"));
    const opcion = get_Value("inputCategoria");

    switch(opcion){
        case "estudiante":
            resultado = cantidad_Tickets * ticket;
            descuento = (resultado * 80) / 100;
            resultado_Final = resultado - descuento;
            break;
        case "trainee":
            resultado = cantidad_Tickets * ticket;
            descuento = (resultado * 50) / 100;
            resultado_Final = resultado - descuento;
            break;
        case "junior":
            resultado = cantidad_Tickets * ticket;
            descuento = (resultado * 15) / 100;
            resultado_Final = resultado - descuento;
            break;
        default:
            msj_Alert("Error,eliga una de las categorias");
        }
    
    if(value_Nombre === ""){
        msj_Alert("Error, ingrese su nombre antes de continuar");
    }
    else if(value_Apellido === ""){
        msj_Alert("Error, ingrese su apellido antes de continuar");
    }
    else if(value_Email === "") // !value_Email.includes('@') 
    {
        msj_Alert("Error, ingrese su email correctamente antes de continuar");
    }
    // cantidad 
    else if(!Number(cantidad_Tickets)){
        msj_Alert("Error, ingrese la cantidad que desee para continuar");
        resultado_Final =  0 ;
    }
      
    document.getElementById("total_Pagar").innerText = (`Total a pagar $${resultado_Final}`);     
    
    if(Number(resultado_Final)){
        msj_Alert("¡Resumen generado exitosamente!");
    }
    else if(resultado_Final === undefined){
        let total_Pagar_Undefined = document.getElementById("total_Pagar");
        total_Pagar_Undefined.innerText = ("Total a pagar $0 ");
    }
}


function guardar_Dato_Persona(nombre, dato){
    localStorage.setItem(nombre, JSON.stringify(dato));
}

function get_Value(id){
    return document.getElementById(id).value; 
}

function borrar_Form() {
    document.getElementById("formulario").reset();
    let total_Pagar_Undefined = document.getElementById("total_Pagar");
    total_Pagar_Undefined.innerText = ("Total a pagar $0 ");
}

function msj_Alert(texto){
    var mensaje = document.createElement("div");
    mensaje.textContent = texto;
    mensaje.style.position = "fixed";
    mensaje.style.left = "50%";
    mensaje.style.transform = "translateX(-50%)";
    mensaje.style.padding = "12px";
    mensaje.style.borderRadius = "10px";
    mensaje.className = "w-100 alert alert-info text-center shadow"
    document.body.appendChild(mensaje);
  
    setTimeout(() => {
        mensaje.style.transition = "all 500ms";
        mensaje.style.top = "0px";
    }, 500);
  
    setTimeout(() => {
      document.body.removeChild(mensaje);
    }, 3500);
}
    
const btn_Borrar = document.getElementById("borrar");
const btn_Resumen = document.getElementById("resumen");

btn_Borrar.addEventListener('click',borrar_Form);
btn_Resumen.addEventListener('click',calcular_Precio)
