const handler = require('../src/index');

describe('Find Pokemon', () => {
    test('Deveria encontrar 1 pokemon se nao passamos instrucoes', () => {
        const result = handler.findPokemon();
        expect(result).toEqual(1);
    });

    test('Deveria encontrar 4 pokemons se passamos (neso)', () => {
        const result = handler.findPokemon();
        expect(result).toEqual(1);
    });

    test('Deveria encontrar 2 pokemons se passamos (E)', () => {
        const result = handler.findPokemon('E');
        expect(result).toEqual(2);
    });

    test('Deveria encontrar 4 pokemons se passamos (NESO)', () => {
        const result = handler.findPokemon('NESO');
        expect(result).toEqual(4);
    });

    test('Deveria encontrar 2 pokemons se passamos (NSNSNSNSNS)', () => {
        const result = handler.findPokemon('NSNSNSNSNS');
        expect(result).toEqual(2);
    });

    test('Deveria encontrar 6 pokemons se passamos (NESENO)', () => {
        const result = handler.findPokemon('NESENO');
        expect(result).toEqual(6);
    });

    test('Deveria encontrar 4 pokemons se passamos (NESONESO)', () => {
        const result = handler.findPokemon('NESONESO');
        expect(result).toEqual(4);
    });

    test('Deveria encontrar 17 pokemons se passamos (NNESOOSONESSESONEENESONO)', () => {
        const result = handler.findPokemon('NNESOOSONESSESONEENESONO');
        expect(result).toEqual(17);
    });
});

// describe('Test custom', () => {
//     test('Insira uma descricao para o teste', () => {
//         const result = handler.findPokemon('passe instrucoes aqui');
//         expect(result).toEqual('insira o numero esperado de pokemons encontrados');
//     })
// })