const validate = require('./lib/validate');

/**
 * This function find pokemons according to the directions passed
 * @param {string} directions direction for move
 * @returns number
 */

const findPokemon = (directions) => {
    let crossed = ['0,0'];
    let pokemons = 1;
    const coords = {
        x: 0,
        y: 0
    };
    
    if(directions === '' || directions === null || directions === undefined){
        return pokemons;
    };

    const instructions = directions.toUpperCase().split('');
    instructions.forEach(mov => {
        mov === 'N' && coords.y++;
        mov === 'S' && coords.y--;
        mov === 'E' && coords.x++;
        mov === 'O' && coords.x--;
        let exist = validate.crossedThere(crossed, `${coords.y},${coords.x}`);
        !exist && pokemons++;
        crossed.push(`${coords.y},${coords.x}`);
    });

    return pokemons;
};

module.exports = {
    findPokemon
};