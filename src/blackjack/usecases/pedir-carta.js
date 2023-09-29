/**
 * Esta funcion permite tomar una carta
 * @param {Array<String>} deck 
 * @returns {String} Retorna una carta del deck
 */
export const pedirCarta = ( deck ) => {
    if ( !deck || deck.length === 0){
        throw 'No hay cartas en el deck'
    }
    return deck.pop();
}