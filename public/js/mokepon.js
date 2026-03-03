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
    // 1. Limpieza total de variables de estado al iniciar
    jugadorId = null
    enemigoId = null
    mokeponesEnemigos = []
    ataqueJugador = []
    ataqueEnemigo = []

    // 2. Control de pestañas (LocalStorage)
    if (localStorage.getItem('pestana_abierta')) {
        botonJugarSolo.disabled = true;
        botonJugarSolo.style.filter = "grayscale(100%)";
        botonJugarSolo.style.cursor = "not-allowed";
    } else {
        localStorage.setItem('pestana_abierta', 'true');
    }

    window.onbeforeunload = () => {
        localStorage.removeItem('pestana_abierta');
    };
  
    // 3. Ocultar secciones iniciales
    sectionSeleccionarAtaque.style.display = "none";
    sectionVerMapa.style.display = "none";  

    // 4. Generar tarjetas de Mokepones
    mokepones.forEach((mokepon) => {
        opcionMokepones = `
        <input type="radio" name="mascota" id=${mokepon.nombre}>
        <label class="tarjeta-de-mokepon" for=${mokepon.nombre}>
          <p>${mokepon.nombre}</p>
          <img src=${mokepon.foto} alt=${mokepon.nombre}>
        </label>
        `;
        contenedorTarjetas.innerHTML += opcionMokepones;
    });

    // 5. IMPORTANTE: Los inputs se asignan AFUERA del forEach para que existan todos
    inputHipodoge = document.getElementById("Hipodoge");
    inputCapipepo = document.getElementById("Capipepo");
    inputRatigueya = document.getElementById("Ratigueya");
    inputLangostelvis = document.getElementById("Langostelvis");
    inputTucapalma = document.getElementById("Tucapalma");
    inputPydos = document.getElementById("Pydos");

    // 6. Listeners de botones
    botonMascotaJugador.addEventListener("click", seleccionarMascotaJugador);    
    botonReiniciar.addEventListener("click", reiniciarJuego);
    botonJugarSolo.addEventListener("click", aparecerNpcs);

    // 7. Conexión al servidor
    unirseAlJuego();
}

function unirseAlJuego() {
    fetch("http://localhost:8080/unirse")
        .then(function (res) {
            if (res.ok) {
                res.text()
                    .then(function (id) {
                        console.log(id)
                        jugadorId = id
                        // IMPORTANTE: Limpiamos enemigos locales para evitar fantasmas del refresh
                        mokeponesEnemigos = [] 
                    })
            }
        })
}
function seleccionarMascotaJugador() {
    // 1. Detectar cuál está seleccionado
    if (inputHipodoge.checked) mascotaJugador = "Hipodoge"
    else if (inputCapipepo.checked) mascotaJugador = "Capipepo"
    else if (inputRatigueya.checked) mascotaJugador = "Ratigueya"
    else if (inputLangostelvis.checked) mascotaJugador = "Langostelvis"
    else if (inputTucapalma.checked) mascotaJugador = "Tucapalma"
    else if (inputPydos.checked) mascotaJugador = "Pydos"
    else {
        alert('Selecciona una mascota')
        return
    }

    // 2. Ocultar sección de selección y mostrar mapa
    sectionSeleccionarMascota.style.display = 'none'
    sectionVerMapa.style.display = 'flex'
    
    // 3. Actualizar interfaz y servidor
    spanMascotaJugador.innerHTML = mascotaJugador
    seleccionarMokepon(mascotaJugador) // Envía al servidor
    extraerAtaques(mascotaJugador)
    iniciarMapa() // Activa el canvas
}

function seleccionarMokepon(mascotaJugador) {
  fetch(`http://localhost:8080/mokepon/${jugadorId}`,{
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
        boton.onclick = (e) => {
            if (ataqueJugador.length < 5) {
                let textoAtaque = e.target.textContent;
                
                if (textoAtaque === '🔥') {
                    ataqueJugador.push('FUEGO');
                } else if (textoAtaque === '💧') {
                    ataqueJugador.push('AGUA');
                } else {
                    ataqueJugador.push('TIERRA');
                }
                
                console.log(ataqueJugador);
                boton.style.background = '#112f58';
                boton.disabled = true;

                // Solo cuando tú terminas tus 5 clics, el enemigo responde
                if (ataqueJugador.length === 5) {
                    enviarAtaques();
                }
            }
        };
    });
}

function enviarAtaques() {
    if (enemigoId && enemigoId.startsWith("NPC")) {
        // Lógica para el ataque aleatorio del NPC
        ataqueEnemigo = [];
        let ataquesDisponibles = [...ataquesMokeponEnemigo]; 

        for (let i = 0; i < 5; i++) {
            let indice = Math.floor(Math.random() * ataquesDisponibles.length);
            let nombre = ataquesDisponibles[indice].nombre;

            if (nombre === "🔥") {
                ataqueEnemigo.push("FUEGO");
            } else if (nombre === "💧") {
                ataqueEnemigo.push("AGUA");
            } else {
                ataqueEnemigo.push("TIERRA");
            }
        }
        elGanador();
    } else {
        // Modo Multijugador normal
        fetch(`http://localhost:8080/mokepon/${jugadorId}/ataques`, {
            method: "post",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ ataques: ataqueJugador })
        });
        intervalo = setInterval(obtenerAtaques, 50);
    }
}
function obtenerAtaques() {
  fetch(`http://localhost:8080/mokepon/${enemigoId}/ataques`)
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
    spanMascotaEnemigo.innerHTML = enemigo.nombre;
    // IMPORTANTE: Aquí guardamos los ataques reales de ese Mokepon (del array de la clase)
    ataquesMokeponEnemigo = enemigo.ataques; 
    secuenciaAtaque();
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
    // Si tenemos un ID de jugador, avisamos al servidor antes de recargar
    if (jugadorId) {
        fetch(`http://localhost:8080/reiniciar/${jugadorId}`)
            .then(() => {
                // Una vez el servidor confirma, limpiamos y recargamos
                localStorage.removeItem('pestana_abierta');
                location.reload();
            })
            .catch(() => {
                // En caso de error de red, recargamos de todos modos
                location.reload();
            });
    } else {
        location.reload();
    }
}

function aleatorio(min, max) {
    return  Math.floor(Math.random()*(max-min+1)+min)
}

function pintarCanvas() {
    mascotaJugadorObjeto.x = mascotaJugadorObjeto.x + mascotaJugadorObjeto.velocidadX
    mascotaJugadorObjeto.y = mascotaJugadorObjeto.y + mascotaJugadorObjeto.velocidadY
    
    lienzo.clearRect(0, 0, mapa.width, mapa.height)
    lienzo.drawImage(mapaBackground, 0, 0, mapa.width, mapa.height)
    
    mascotaJugadorObjeto.pintarMokepon()

    // ENVIAR NUESTRA POSICIÓN Y RECIBIR LA DE LOS DEMÁS
    enviarPosicion(mascotaJugadorObjeto.x, mascotaJugadorObjeto.y)

    // DIBUJAR A LOS ENEMIGOS
    mokeponesEnemigos.forEach(function (enemigo) {
        enemigo.pintarMokepon()
        revisarColision(enemigo) // Esto activará la pelea si chocan
    })
}

function enviarPosicion(x, y) {
  fetch(`http://localhost:8080/mokepon/${jugadorId}/posicion`, {
    method: "post",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ x, y })
  })
  .then(function(res) {
    if (res.ok) {
      res.json().then(function ({ enemigos }) {
        // 1. Filtramos los nuevos enemigos que vienen del servidor
        const nuevosEnemigosServidor = enemigos.map(function (enemigo) {
          // Si el enemigo del servidor no tiene mokepon, lo ignoramos
          if (enemigo.mokepon === undefined) {
             return null;
          }

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
        
          if (mokeponEnemigo) {
            mokeponEnemigo.x = enemigo.x;
            mokeponEnemigo.y = enemigo.y;
            return mokeponEnemigo;
          }
          return null;
        }).filter(enemigo => enemigo !== null);

        // 2. Mantenemos a los NPCs locales que ya estaban en la lista
        // Buscamos los que tienen ID que empieza con "NPC"
        const npcsActuales = mokeponesEnemigos.filter(enemigo => 
            enemigo.id && enemigo.id.startsWith("NPC")
        );

        // 3. COMBINAMOS AMBOS: NPCs locales + Jugadores del servidor
        mokeponesEnemigos = npcsActuales.concat(nuevosEnemigosServidor);
      });
    }
  });
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

function revisarColision(enemigo) {
    const arribaEnemigo = enemigo.y;
    const abajoEnemigo = enemigo.y + enemigo.alto;
    const derechaEnemigo = enemigo.x + enemigo.ancho;
    const izquierdaEnemigo = enemigo.x;

    const arribaMascota = mascotaJugadorObjeto.y;
    const abajoMascota = mascotaJugadorObjeto.y + mascotaJugadorObjeto.alto;
    const derechaMascota = mascotaJugadorObjeto.x + mascotaJugadorObjeto.ancho;
    const izquierdaMascota = mascotaJugadorObjeto.x;

    if (abajoMascota < arribaEnemigo || arribaMascota > abajoEnemigo || derechaMascota < izquierdaEnemigo || izquierdaMascota > derechaEnemigo) {
        return;
    }

    detenerMovimiento();
    clearInterval(intervalo);
    
    // Guardamos el ID del enemigo (sea NPC o Humano)
    enemigoId = enemigo.id;
    
    sectionSeleccionarAtaque.style.display = "flex";
    sectionVerMapa.style.display = "none";
    
    seleccionarMascotaEnemigo(enemigo);
}

const botonJugarSolo = document.getElementById("boton-jugar-solo")
botonJugarSolo.addEventListener("click", aparecerNpcs)

function aparecerNpcs() {
    if (!mascotaJugador) {
        alert("Primero selecciona tu mascota");
        return;
    }

    // Definimos los 6 NPCs con sus ataques y posiciones
    let hipodogeNpc = new Mokepon("Hipodoge", "./imagenes/hipodoge.png", 5, "./imagenes/hipodoge.png", "NPC_Hipo");
    hipodogeNpc.ataques.push(...HIPODOGE_ATAQUES);
    hipodogeNpc.x = 80; hipodogeNpc.y = 120;

    let capipepoNpc = new Mokepon("Capipepo", "./imagenes/capipepo.png", 5, "./imagenes/capipepo.png", "NPC_Capi");
    capipepoNpc.ataques.push(...CAPIPEPO_ATAQUES);
    capipepoNpc.x = 300; capipepoNpc.y = 50;

    let ratigueyaNpc = new Mokepon("Ratigueya", "./imagenes/ratigueya.png", 5, "./imagenes/ratigueya.png", "NPC_Rati");
    ratigueyaNpc.ataques.push(...RATIGUEYA_ATAQUES);
    ratigueyaNpc.x = 150; ratigueyaNpc.y = 220;

    let langostelvisNpc = new Mokepon("Langostelvis", "./imagenes/langostelvis.png", 5, "./imagenes/langostelvis.png", "NPC_Lango");
    langostelvisNpc.ataques.push(...LANGOSTELVIS_ATAQUES);
    langostelvisNpc.x = 350; langostelvisNpc.y = 280;

    let tucapalmaNpc = new Mokepon("Tucapalma", "./imagenes/tucapalma.png", 5, "./imagenes/tucapalma.png", "NPC_Tuca");
    tucapalmaNpc.ataques.push(...TUCAPALMA_ATAQUES);
    tucapalmaNpc.x = 50; tucapalmaNpc.y = 300;

    let pydosNpc = new Mokepon("Pydos", "./imagenes/pydos.png", 5, "./imagenes/pydos.png", "NPC_Pydos");
    pydosNpc.ataques.push(...PYDOS_ATAQUES);
    pydosNpc.x = 400; pydosNpc.y = 100;

    // Llenamos la lista de enemigos para que aparecerán en el mapa
    mokeponesEnemigos = [hipodogeNpc, capipepoNpc, ratigueyaNpc, langostelvisNpc, tucapalmaNpc, pydosNpc];
    
    botonJugarSolo.style.display = "none";
}



window.addEventListener("load", iniciarJuego);