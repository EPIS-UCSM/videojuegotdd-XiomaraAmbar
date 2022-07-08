
let palabra = '';
let cant_aciertos = 0;
let cant_errores = 0;
let cant_adivinar = 0;
const palabrasecreta = [
    'Los dulces son deliciosos'
];
const btn = id('jugar');
const imagen = id('imagen');
btn.addEventListener('click',iniciar);
const btn_letras = document.querySelectorAll("#alfabeto button");
function id (str){
    return document.getElementById(str);
}
function obtener_random(num_min, num_max){
    const amplitud_valores = num_max - num_min;
    const valor_al_azar = Math.floor(Math.random() * amplitud_valores) + num_min;
    return valor_al_azar;
}
function iniciar(event){
    
    imagen.src = 'img/imagen0.png';
    id('resultado').innerHTML = "";
    btn.disabled = true;
    cant_adivinar = 0;
    cant_aciertos= 0;
    cant_errores = 0;
    const parrafo = id('adivinarfrase');
    parrafo.innerHTML = '';
    const cant_palabras = palabrasecreta.length;
    const valor_mas_bajo = 0;
    const valor_al_azar = obtener_random(valor_mas_bajo,cant_palabras);
    palabra = palabrasecreta[valor_al_azar];
    console.log(palabra + " " + palabra.length);
    const cant_letras = palabra.length;
    for(let i = 0; i < btn_letras.length; i++){
        btn_letras[ i ].disabled = false;
    }
    for(let i = 0; i < cant_letras; i++){
        const span = document.createElement('span');
        if(palabra[i]==" "){
            span.className = 'espacio';
        }
        else{
            cant_adivinar++;
            
            
        }
        parrafo.appendChild( span );
       
    }
    console.log(palabra + " " + cant_adivinar);
}


for(let i = 0; i < btn_letras.length; i++){
    btn_letras[ i ].addEventListener('click', click_letras);
}

function click_letras(event){
    const spans = document.querySelectorAll('#adivinarfrase span');
    const button = event.target;
    button.disabled = true;
    const letra = button.innerHTML.toLowerCase();
    const frase = palabra.toLowerCase();

    let acerto = false;

    for(let i = 0; i < frase.length; i++){
        if(letra == frase[i]){
            spans[i].innerHTML = letra;
            cant_aciertos++;
            acerto = true;
        }
        
    }
    if (acerto == false){
        cant_errores++;
        const source = `img/imagen${cant_errores}.png`;
            
        imagen.src = source;
    }
    if(cant_errores == 7){
        id('resultado').innerHTML ="Perdiste, la palabra secreta es: " + palabra;
        game_over();
    }
    else if(cant_aciertos == cant_adivinar){
        id('resultado').innerHTML = "¡¡¡¡BRAVO, GANASTE!!!!";
        game_over();
    }
    console.log("la letra " + letra + " en la palabra  "+ palabra + "¿existe?: " + acerto);
}

function game_over(){
    for(let i = 0; i < btn_letras.length; i++){
        btn_letras[ i ].disabled = true;

    }
    btn.disabled = false;
}
game_over();