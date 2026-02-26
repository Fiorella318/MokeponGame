const sectionSeleccionarAtaque = document.getElementById("seleccionar-ataque");
const sectionReiniciar = document.getElementById("reiniciar");
const botonMascotaJugador = document.getElementById("boton-mascota");
const botonReiniciar = document.getElementById("boton-reiniciar");
sectionReiniciar.style.display="none";

const sectionSeleccionarMascota = document.getElementById("seleccionar-mascotas");
const spanMascotaJugador = document.getElementById("mascota-jugador");  

const spanMascotaEnemigo = document.getElementById("mascota-enemigo");

const spanVidasJugador = document.getElementById("vidas-jugador");
const spanVidasEnemigo = document.getElementById("vidas-enemigo");

const sectionMensajes = document.getElementById("resultado");
const ataques = document.getElementById("ataques");
const ataquesEnemigo = document.getElementById("ataques-enemigo");

const contenedorTarjetas = document.getElementById("contenedor-Tarjetas");
const contenedorAtaques = document.getElementById("contenedor-ataques")

const sectionVerMapa = document.getElementById("ver-mapa");
const mapa = document.getElementById("mapa");

let jugadorId = null;
let enemigoId = null;
let mokepones = [];
let mokeponesEnemigos = [];
let ataqueJugador = [];
let ataqueEnemigo = [];
let opcionMokepones;
let inputHipodoge;
let inputCapipepo;
let inputRatigueya; 
let inputLangostelvis;
let inputTucapalma;
let inputPydos;
let mascotaJugador;
let mascotaJugadorObjeto;
let ataquesMokepon;
let ataquesMokeponEnemigo;
let botonFuego; 
let botonAgua;
let botonTierra;
let botones = [];
let indexAtaqueJugador;
let indexAtaqueEnemigo;
let victoriasJugador = 0;
let victoriasEnemigo = 0;
let vidasJugador = 3;
let vidasEnemigo = 3;
let lienzo = mapa.getContext("2d");
let intervalo;
let mapaBackground = new Image();
mapaBackground.src = "./imagenes/mokemap.jpg";
let alturaBuscada;
let anchoMapa = window.innerWidth - 20;
const anchoMaxMapa = 600;

if (anchoMapa > anchoMaxMapa) {
  anchoMapa = anchoMaxMapa - 20;
}

alturaBuscada = anchoMapa * 600 / 800;
mapa.width = anchoMapa;
mapa.height = alturaBuscada;

//Creación de clase:
class Mokepon {
  constructor(nombre, foto, vida, fotoMapa, id= null ) {
    this.id = id;
    this.nombre = nombre;
    this.foto = foto;
    this.vida = vida;
    this.ataques = [];
    this.ancho = 90;
    this.alto = 75;
    this.x = aleatorio(0, mapa.width - this.ancho);
    this.y = aleatorio(0, mapa.height - this.alto);
    this.mapaFoto = new Image();
    this.mapaFoto.src = fotoMapa;
    this.velocidadX = 0;
    this.velocidadY = 0;
  }

  pintarMokepon() {    
    lienzo.drawImage (
    this.mapaFoto,
    this.x,
    this.y,
    this.ancho,
    this.alto, 
  );
  }
}

//Creación de objetos, el nombre lo estoy trayendo del "for" en HTML
let hipodoge = new Mokepon("Hipodoge", "./imagenes/hipodoge.png", 5, "./imagenes/hipodoge.png");

let capipepo = new Mokepon("Capipepo", "./imagenes/capipepo.png", 5, "./imagenes/capipepo.png");

let ratigueya = new Mokepon("Ratigueya", "./imagenes/ratigueya.png", 5, "./imagenes/ratigueya.png");

let langostelvis = new Mokepon("Langostelvis", "./imagenes/langostelvis.png", 5, "./imagenes/langostelvis.png");

let tucapalma = new Mokepon("Tucapalma", "./imagenes/tucapalma.png", 5,"./imagenes/tucapalma.png");

let pydos = new Mokepon("Pydos", "./imagenes/pydos.png", 5, "./imagenes/pydos.png");




const HIPODOGE_ATAQUES = [
  {nombre: "💧", id: "boton-agua"},
  {nombre: "💧", id: "boton-agua"},
  {nombre: "💧", id: "boton-agua"},
  {nombre: "🔥", id: "boton-fuego"},
  {nombre: "🌱", id: "boton-tierra"},
];

const CAPIPEPO_ATAQUES = [
  {nombre: "🌱", id: "boton-tierra"},
  {nombre: "🌱", id: "boton-tierra"},
  {nombre: "🌱", id: "boton-tierra"},
  {nombre: "💧", id: "boton-agua"},
  {nombre: "🔥", id: "boton-fuego"},
];

const RATIGUEYA_ATAQUES = [
  {nombre: "🔥", id: "boton-fuego"},
  {nombre: "🔥", id: "boton-fuego"},
  {nombre: "🔥", id: "boton-fuego"},
  {nombre: "💧", id: "boton-agua"},
  {nombre: "🌱", id: "boton-tierra"},
]

const LANGOSTELVIS_ATAQUES = [
  {nombre: "💧", id: "boton-agua"},
  {nombre: "💧", id: "boton-agua"},
  {nombre: "🔥", id: "boton-fuego"},
  {nombre: "🔥", id: "boton-fuego"},
  {nombre: "🌱", id: "boton-tierra"},
]

const TUCAPALMA_ATAQUES = [
  {nombre: "🌱", id: "boton-tierra"},
  {nombre: "🌱", id: "boton-tierra"},
  {nombre: "🔥", id: "boton-fuego"},
  {nombre: "🔥", id: "boton-fuego"},
  {nombre: "💧", id: "boton-agua"},
]

const PYDOS_ATAQUES = [
  {nombre: "🔥", id: "boton-fuego"},
  {nombre: "🔥", id: "boton-fuego"},
  {nombre: "💧", id: "boton-agua"},
  {nombre: "💧", id: "boton-agua"},
  {nombre: "🌱", id: "boton-tierra"},
]

hipodoge.ataques.push(...HIPODOGE_ATAQUES);

capipepo.ataques.push(...CAPIPEPO_ATAQUES);

ratigueya.ataques.push(...RATIGUEYA_ATAQUES);

langostelvis.ataques.push(...LANGOSTELVIS_ATAQUES);

tucapalma.ataques.push(...TUCAPALMA_ATAQUES);

pydos.ataques.push(...PYDOS_ATAQUES);



mokepones.push(hipodoge, capipepo, ratigueya, langostelvis, tucapalma, pydos);

function iniciarJuego() {
    sectionSeleccionarAtaque.style.display = "none";
    sectionVerMapa.style.display = "none";  

    mokepones.forEach((mokepon)=> {
        opcionMokepones = `
        <input type="radio" name="mascota" id=${mokepon.nombre}>
        <label class="tarjeta-de-mokepon" for=${mokepon.nombre}>
          <p>${mokepon.nombre}</p>
          <img src=${mokepon.foto} alt=${mokepon.nombre}>
        </label>
      `;
    contenedorTarjetas.innerHTML += opcionMokepones;

    inputHipodoge = document.getElementById("Hipodoge");
    inputCapipepo = document.getElementById("Capipepo");
    inputRatigueya = document.getElementById("Ratigueya");
    inputLangostelvis = document.getElementById("Langostelvis");
    inputTucapalma = document.getElementById("Tucapalma");
    inputPydos = document.getElementById("Pydos");
    });
    
    

    botonMascotaJugador.addEventListener("click", seleccionarMascotaJugador);    
    
    botonReiniciar.addEventListener("click", reiniciarJuego);

    unirseAlJuego();
}

function unirseAlJuego() {
  fetch("http://10.30.21.45:8080/unirse")
      .then(function(res) {
      if (res.ok){
        res.text()
          .then(function (respuesta) {
            console.log(respuesta);
            jugadorId = respuesta;
          })
      }
    })
}

function seleccionarMascotaJugador() {
    if (!inputHipodoge.checked && !inputCapipepo.checked && !inputRatigueya.checked &&
        !inputLangostelvis.checked && !inputTucapalma.checked && !inputPydos.checked) {
        alert('Selecciona una mascota');
        return; // Detiene la función si no hay selección
    }

    // Aquí ya sabemos que hay una mascota seleccionada
    sectionSeleccionarMascota.style.display = 'none';

    if (inputHipodoge.checked) mascotaJugador = inputHipodoge.id;
    else if (inputCapipepo.checked) mascotaJugador = inputCapipepo.id;
    else if (inputRatigueya.checked) mascotaJugador = inputRatigueya.id;
    else if (inputLangostelvis.checked) mascotaJugador = inputLangostelvis.id;
    else if (inputTucapalma.checked) mascotaJugador = inputTucapalma.id;
    else if (inputPydos.checked) mascotaJugador = inputPydos.id;

    spanMascotaJugador.innerHTML = mascotaJugador;
    seleccionarMokepon(mascotaJugador);
    extraerAtaques(mascotaJugador);
    sectionVerMapa.style.display = 'flex';
    iniciarMapa();
}



function seleccionarMokepon(mascotaJugador) {
  fetch(`http://10.30.21.45:8080/mokepon/${jugadorId}`,{
    method: "post",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      mokepon: mascotaJugador
    })
  })
}

function extraerAtaques(mascotaJugador) {
  let ataques
    for (let i = 0; i < mokepones.length; i++) {
        if (mascotaJugador === mokepones[i].nombre) {
            ataques = mokepones[i].ataques
        }
        
    }
    mostrarAtaques(ataques)
}

function mostrarAtaques(ataques) {
  ataques.forEach((ataque) => {
    ataquesMokepon = `
    <button id=${ataque.id} class="boton-ataque BAtaque">${ataque.nombre}</button> 
    `; /*BAtaque es una nueva clase*/
    contenedorAtaques.innerHTML += ataquesMokepon;
  });

  botonFuego = document.getElementById("boton-fuego");
  botonAgua = document.getElementById("boton-agua");
  botonTierra = document.getElementById("boton-tierra");
  botones = document.querySelectorAll(".BAtaque"); /*Selecciona todos los botones de ataque que tengan la misma. No Id porque los Id son únicos*/

  
}

function secuenciaAtaque() {
  botones.forEach((boton) => {
        boton.addEventListener('click', (e) => {
            if (e.target.textContent === '🔥') {
                ataqueJugador.push('FUEGO')
                console.log(ataqueJugador)
                boton.style.background = '#112f58'
                boton.disabled = true   
            } else if (e.target.textContent === '💧') {
                ataqueJugador.push('AGUA')
                console.log(ataqueJugador)
                boton.style.background = '#112f58'
                boton.disabled = true  
            } else {
                ataqueJugador.push('TIERRA')
                console.log(ataqueJugador)
                boton.style.background = '#112f58'
                boton.disabled = true  
            }
            if(ataqueJugador.length === 5) {
              enviarAtaques();
            }
    });
  });
}

function enviarAtaques() {
  fetch(`http://10.30.21.45:8080/mokepon/${jugadorId}/ataques`,{
    method: "post",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      ataques: ataqueJugador
    })
  })

  intervalo = setInterval(obtenerAtaques, 50);
}

function obtenerAtaques() {
  fetch(`http://10.30.21.45:8080/mokepon/${enemigoId}/ataques`)
    .then(function (res) {
      if (res.ok) {
        res.json()
          .then(function ({ ataques }) {
            if (ataques.length === 5) {
              ataqueEnemigo = ataques
              elGanador()
            }
          })
        }
    })
}


function seleccionarMascotaEnemigo(enemigo) {
  spanMascotaEnemigo.innerHTML = enemigo.nombre
  ataquesMokeponEnemigo = enemigo.ataques
  secuenciaAtaque()
}


function seleccionarAtaqueEnemigo() {
   console.log("Ataques enemigo", ataquesMokeponEnemigo);
    let indiceAleatorio = aleatorio(0, ataquesMokeponEnemigo.length -1);
    if (indiceAleatorio == 0|| indiceAleatorio == 1 ) {
      ataqueEnemigo.push("FUEGO");
    } else if (indiceAleatorio == 3 || indiceAleatorio == 4) {
      ataqueEnemigo.push("AGUA");
    } else {
      ataqueEnemigo.push("TIERRA"); 
    }
    console.log(ataqueEnemigo);
    iniciarPelea();
    //elGanador();
 //   spanAtaqueEnemigo.innerHTML = ataques[ataqueEnemigo];
}

function iniciarPelea() {
  if (ataqueJugador.length === 5) {
    elGanador();
  }
}

function crearMensaje(resultado) {
    let nuevoAtaqueDelJugador = document.createElement("p");
    let nuevoAtaqueDelEnemigo = document.createElement("p");

    sectionMensajes.innerHTML = resultado;
    nuevoAtaqueDelJugador.innerHTML = indexAtaqueJugador;
    nuevoAtaqueDelEnemigo.innerHTML = indexAtaqueEnemigo;


    ataques.appendChild(nuevoAtaqueDelJugador);
    ataquesEnemigo.appendChild(nuevoAtaqueDelEnemigo);

}

function crearMensajeFinal(resultadoFinal) {
    sectionMensajes.innerHTML = resultadoFinal; 

    sectionReiniciar.style.display = "block";

}

function indexOponentes (jugador, enemigo) {
  indexAtaqueJugador = ataqueJugador[jugador];
  indexAtaqueEnemigo = ataqueEnemigo[enemigo];
}

function elGanador () {
  clearInterval(intervalo);

  for (let index = 0; index < ataqueJugador.length; index++) {
    if (ataqueJugador[index] === ataqueEnemigo[index]){
      indexOponentes(index, index)
      crearMensaje("🤷‍♀️EMPATE🤷‍♀️");
    } else if (ataqueJugador[index] === "FUEGO" && ataqueEnemigo[index] === "TIERRA") {
      indexOponentes (index, index);
      crearMensaje("🎉GANASTE🎉");
      victoriasJugador ++;
      spanVidasJugador.innerHTML = victoriasJugador;
    } else if (ataqueJugador[index] === "AGUA" && ataqueEnemigo[index] === "FUEGO") {
      indexOponentes(index, index);
      crearMensaje("🎉GANASTE🎉");
      victoriasJugador ++;
      spanVidasJugador.innerHTML = victoriasJugador;
    } else if (ataqueJugador[index] === "TIERRA" && ataqueEnemigo[index] === "AGUA") {
      indexOponentes(index, index);
      crearMensaje("🎉GANASTE🎉");
      victoriasJugador ++;
      spanVidasJugador.innerHTML = victoriasJugador;
    }else {
      indexOponentes(index, index);
      crearMensaje("PERDISTE😵😓");
      victoriasEnemigo ++;
      spanVidasEnemigo.innerHTML = victoriasEnemigo;
    }
  }
  revisarVidas();
}

function revisarVidas() {
  if (victoriasJugador == victoriasEnemigo) {
    crearMensajeFinal(`
      <p>Esto fue un EMPATE!!!</p>
      <p>:/</p>
    `);
  } else if (victoriasJugador > victoriasEnemigo) {
    crearMensajeFinal(`
  <p>🎉🎉🎉🎉</p>
  <p>FELICITACIONES!!!</p>
  <p>GANASTE EL COMBATE :D</p>
  `);
    } else if (victoriasJugador < victoriasEnemigo)
   {
    crearMensajeFinal(`
    <p>😓😓😓😓</p>
    <p>Lo siento! </p>
    <p>PERDISTE EL COMBATE :(</p>
    `);
    }
}


function reiniciarJuego() {
  location.reload();
}

function aleatorio(min, max) {
    return  Math.floor(Math.random()*(max-min+1)+min)
}

function pintarCanvas() {
  mascotaJugadorObjeto.x = mascotaJugadorObjeto.x + mascotaJugadorObjeto.velocidadX;
  mascotaJugadorObjeto.y = mascotaJugadorObjeto.y + mascotaJugadorObjeto.velocidadY;  
  lienzo.clearRect(0, 0, mapa.width, mapa.height);
  lienzo.drawImage (
    mapaBackground,
    0,
    0,
    mapa.width,
    mapa.height,
  )
  mascotaJugadorObjeto.pintarMokepon();

  enviarPosicion(mascotaJugadorObjeto.x, mascotaJugadorObjeto.y)

  mokeponesEnemigos.forEach(function (mokepon) {
    mokepon.pintarMokepon();
    revisarColision(mokepon);
  })
}

function enviarPosicion(x, y) {
  fetch(`http://localhost:8080/mokepon/${jugadorId}/posicion`,{
    method: "post",
    headers: {
    "Content-Type": "application/json"
  },
    body: JSON.stringify({
    x,
    y
  })
})
  .then(function(res) {
    if (res.ok) {
      res.json()
        .then(function ({enemigos}){
          console.log(enemigos);
          mokeponesEnemigos = enemigos.map(function (enemigo){
            let mokeponEnemigo = null;
            const mokeponNombre = enemigo.mokepon.nombre || "";
            if (mokeponNombre === "Hipodoge") {
              mokeponEnemigo = new Mokepon("Hipodoge", "./imagenes/hipodoge.png", 5, "./imagenes/hipodoge.png", enemigo.id);
            } else if (mokeponNombre === "Capipepo") {
              mokeponEnemigo = new Mokepon("Capipepo", "./imagenes/capipepo.png", 5, "./imagenes/capipepo.png", enemigo.id);
            } else if (mokeponNombre === "Ratigueya") {
              mokeponEnemigo = new Mokepon("Ratigueya", "./imagenes/ratigueya.png", 5, "./imagenes/ratigueya.png", enemigo.id);
            } else if (mokeponNombre === "Langostelvis") {
              mokeponEnemigo = new Mokepon("Langostelvis", "./imagenes/langostelvis.png", 5, "./imagenes/langostelvis.png", enemigo.id);
            } else if (mokeponNombre === "Tucapalma") {
              mokeponEnemigo = new Mokepon("Tucapalma", "./imagenes/tucapalma.png", 5,"./imagenes/tucapalma.png", enemigo.id);
            } else if (mokeponNombre === "Pydos") {
              mokeponEnemigo = new Mokepon("Pydos", "./imagenes/pydos.png", 5, "./imagenes/pydos.png", enemigo.id);
            }
          
            mokeponEnemigo.x = enemigo.x;
            mokeponEnemigo.y = enemigo.y;

            return mokeponEnemigo;
        });
      })
    }
  })
}

function moverDerecha() {
  mascotaJugadorObjeto.velocidadX = 5;
}

function moverIzquierda() {
  mascotaJugadorObjeto.velocidadX = -5;
}

function moverAbajo() {
  mascotaJugadorObjeto.velocidadY = 5;
}

function moverArriba() {
  mascotaJugadorObjeto.velocidadY = - 5;
}


function detenerMovimiento() {
  mascotaJugadorObjeto.velocidadX = 0;
  mascotaJugadorObjeto.velocidadY = 0;  
}

function teclaPresionada(event){
  //con switch case es como tener muchos if juntos
  switch (event.key) {
    case "ArrowUp":
      moverArriba();
      break;
    case "ArrowDown":
      moverAbajo();
      break;
    case "ArrowLeft":
      moverIzquierda();
      break;
    case "ArrowRight":
      moverDerecha();
      break;
    default:
      break;
  }
}

function iniciarMapa() {
  mascotaJugadorObjeto = obtenerObjetoMascota(mascotaJugador);
  console.log(mascotaJugadorObjeto, mascotaJugador);
  
  intervalo = setInterval (pintarCanvas, 50);


  window.addEventListener("keydown", teclaPresionada);
  window.addEventListener("keyup", detenerMovimiento);
}

function obtenerObjetoMascota () {
  for (let i = 0; i < mokepones.length; i++) {
    if (mascotaJugador === mokepones[i].nombre) {
      return mokepones[i];
    }
  }
}

function revisarColision (enemigo) {
  const arribaEnemigo = enemigo.y;
  const abajoEnemigo = enemigo.y  + enemigo.alto;
  const derechaEnemigo = enemigo.x + enemigo.ancho;
  const izquierdaEnemigo = enemigo.x;

  const arribaMascota = mascotaJugadorObjeto.y;
  const abajoMascota = mascotaJugadorObjeto.y  + mascotaJugadorObjeto.alto;
  const derechaMascota = mascotaJugadorObjeto.x + mascotaJugadorObjeto.ancho;
  const izquierdaMascota = mascotaJugadorObjeto.x;
  if (
    abajoMascota < arribaEnemigo ||
    arribaMascota > abajoEnemigo ||
    derechaMascota < izquierdaEnemigo ||
    izquierdaMascota > derechaEnemigo 
  ) {
    return;
  } 
  detenerMovimiento();
  clearInterval(intervalo);
  console.log('Se detecto una colision');

  enemigoId = enemigo.id;
  sectionSeleccionarAtaque.style.display = "flex";
  sectionVerMapa.style.display = "none";
  seleccionarMascotaEnemigo(enemigo);
  
  //alert("Hay colisión con " + enemigo.nombre);
}
window.addEventListener("load", iniciarJuego);