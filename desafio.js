
let nome = "";
let level = 0;
let sexo = "";
let vida = "";

let pokedex = [];

function adicionarPokemon(nome, level, sexo, vida) {
    // Cria um novo objeto Pokémon com os atributos fornecidos
    let novoPokemon = {
        nome: nome,
        level: level,
        sexo: sexo,
        vida: vida
    };
    
    // Adiciona o novo Pokémon ao array pokedex
    pokedex.push(novoPokemon);
console.log(novoPokemon.nome + " Cadastrado com sucesso")
}

// Exemplo de uso da função
adicionarPokemon("Poochyena", 2, "M", "13/13");
adicionarPokemon("Zigzagoon", 2, "F", "13/13");
adicionarPokemon("Dragonite", 5, "M", "25/25");
adicionarPokemon("Dragonite", 5, "F", "25/25");
adicionarPokemon("Dragonite", 5, "F", "25/25");
adicionarPokemon("Poochyena", 3, "F", "15/15");
adicionarPokemon("Hurmple", 2, "M", "7/14")



