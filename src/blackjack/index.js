import _ from 'underscore';

import { crearDeck, pedirCarta, turnoComputadora, acumularPuntos, crearCarta } from './usecases';

const miModulo = (() => {
  'use strict';

  let deck = [];
  const tipos = ['C','D','H','S'],
        especiales = ['A','J','Q','K'];
  
  let puntosJugadores = [];
  
  // Referencias del HTML
  const btnPedir = document.querySelector('#btnPedir'),
        btnDetener = document.querySelector('#btnDetener'),
        btnNuevo = document.querySelector('#btnNuevo');

  const puntosHTML = document.querySelectorAll('small'),
        divCartasJugadores = document.querySelectorAll('.divCartas')
  
  // Esta funcion inicializa el juego
  const inicializarJuego = ( numJugadores = 2 ) => {
      deck = crearDeck( tipos, especiales );
      puntosJugadores = [];
      for( let i = 0; i < numJugadores; i++) {
          puntosJugadores.push(0);
      }
      console.clear();
      btnPedir.disabled = false;
      btnDetener.disabled = false;
      puntosHTML.forEach(elem => elem.innerText = 0);
      divCartasJugadores.forEach(cart => cart.innerHTML = '');
  }
    
  // Eventos
  btnPedir.addEventListener('click',()=> {

      const carta = pedirCarta( deck );
      const puntosJugador = acumularPuntos( carta, 0, puntosJugadores, puntosHTML );
  
      crearCarta( carta, 0, divCartasJugadores );

      if( puntosJugador > 21 ){
          console.warn('PERDISTE');
          btnPedir.disabled = true
          btnDetener.disabled = true
          turnoComputadora( puntosJugador, deck, puntosJugadores, puntosHTML, divCartasJugadores);
      }else if ( puntosJugador === 21){
          console.warn('GENIAL')
          btnPedir.disabled = true
          btnDetener.disabled = true
          turnoComputadora( puntosJugador, deck, puntosJugadores, puntosHTML, divCartasJugadores);
      }
  });
  
  btnDetener.addEventListener('click', () => {
      btnPedir.disabled = true
      btnDetener.disabled = true
      turnoComputadora( puntosJugadores[0], deck, puntosJugadores, puntosHTML, divCartasJugadores);
  });
  
  btnNuevo.addEventListener('click', () => {

      inicializarJuego();
      
  });

  return 'Hola Mundo'

})();
