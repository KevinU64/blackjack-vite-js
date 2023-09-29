import { valorCarta } from './'
// 0=primer jugador y el ultimo sera la computadora
const puntosHTML = document.querySelectorAll('small');

export const acumularPuntos = ( carta, turno, puntosJugadores, puntosHTML ) => {
    puntosJugadores[turno] = puntosJugadores[turno] + valorCarta( carta );
    puntosHTML[turno].innerText = puntosJugadores[turno];
    return puntosJugadores[turno]
}