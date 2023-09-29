import { pedirCarta, acumularPuntos, crearCarta, determinarGanador } from './';
/**
 * Turno de la computadora
 * @param {Number} puntosMinimos Puntos minimos para que gane la computadora
 * @param {Array<String>} deck 
 */
export const turnoComputadora = ( puntosMinimos, deck=[], puntosJugadores, puntosHTML, divCartasJugadores) => {

    if( !puntosMinimos ) throw new Error('Puntos Minimos son necesarios');
    if( !deck ) throw new Error('El deck es necesario');

    let puntosComputadora = 0;

    do{
        const carta = pedirCarta( deck );
        puntosComputadora = acumularPuntos( carta, puntosJugadores.length-1, puntosJugadores, puntosHTML );
        crearCarta( carta, puntosJugadores.length-1,divCartasJugadores );      
      
    }while( (puntosComputadora < puntosMinimos ) && ( puntosMinimos <= 21 ) );
    determinarGanador( puntosJugadores )

}