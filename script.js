var pokemonId = 6; //Charizard
var pokemonSpriteSrc = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/';

$('#btn-previous').click(async function() {
    if (pokemonId > 1) {
        pokemonId -= 1;
        var data = await getData(pokemonId);
        if (data)
            fillPokemonInformations(data);
    }
});

$('#btn-next').click(async function() {
    if (pokemonId < 649) {
        pokemonId += 1;
        var data = await getData(pokemonId);
        if (data)
            fillPokemonInformations(data);
    }
});

const url_api = 'https://pokeapi.co/api/v2/pokemon/';
async function getData(id) {
    const response = await fetch(url_api + id);
    const data = await response.json();
    return data;
}

function fillPokemonInformations(data) {
    var generationV = data.sprites.versions["generation-v"];
    $('#pokemonImage').attr("src", generationV["black-white"].animated.front_default);
    $('#pokemonNumber').html('Nº' + pad(data.id, 3));
    $('#pokemonName').html(data.name);
    fillPokemonType(data);
}

function fillPokemonType(data) {
    $('#pokemonType').html(data.types[0].type.name);

    switch(data.types[0].type.name) {
        case 'grass':
            $('#pokemonType').css("background-color", "#A7DB8D");
            $('#pokemonType').css("color", "#4E8234");
            $('#pokemonType').css("border-color", "#4E8234");
          break;
        case 'fire':
            $('#pokemonType').css("background-color", "#F5AC78");
            $('#pokemonType').css("color", "#9C531F");
            $('#pokemonType').css("border-color", "#9C531F");
          break;
        case 'water':
            $('#pokemonType').css("background-color", "#9DB7F5");
            $('#pokemonType').css("color", "#445E9C");
            $('#pokemonType').css("border-color", "#445E9C");
          break;
        default:
            $('#pokemonType').css("background-color", "white");
            $('#pokemonType').css("color", "black");
            $('#pokemonType').css("border-color", "black");
      }
}

function pad(num, size) {
    num = num.toString();
    while (num.length < size) num = "0" + num;
    return num;
}
