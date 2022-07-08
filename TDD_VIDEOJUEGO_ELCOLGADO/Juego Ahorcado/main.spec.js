

const { test } = require("@jest/globals");
const Ahorcado = require('./main');

describe('JuegoAhorcado tests',() =>{
    const palabrasecreta = "manzana"
    let juegoAhorcado;
    beforeEach(()=>{
        juegoAhorcado = new Ahorcado(palabrasecreta);
    })
    test('Inicializacion', ()=>{ 
        expect(juegoAhorcado.intentos).toBe(7);
        expect(juegoAhorcado.estado.length).toBe(palabrasecreta.length);
        let indice;
        for(indice = 0; indice<palabrasecreta.length;indice++){
            expect(juegoAhorcado.estado[indice]).toBeUndefined();
        }
    })
    test('Se disminuirá las vidas al equivocarse', ()=>{ 
        let letra = "v";
        expect(juegoAhorcado.intentos).toBe(7);
        juegoAhorcado.adivinarletra(letra);
        expect(juegoAhorcado.intentos).toBe(6);
        letra = "z";
        juegoAhorcado.adivinarletra(letra);
        expect(juegoAhorcado.intentos).toBe(6);
    })
} );