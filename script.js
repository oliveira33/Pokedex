var pokemonId = 6; //Charizard
var clickNext = new Audio('Sons/next.wav');
var clickPrevious = new Audio('Sons/previous.wav');
var notAllow = new Audio('Sons/notAllow.wav');
clickNext.volume = 0.5;
clickPrevious.volume = 0.5;

$('#btn-previous').click(async function() {
    if (pokemonId > 1) {
        pokemonId -= 1;
        clickPrevious.play();
        var data = await getData(pokemonId);
        if (data)
            fillPokemonInformations(data);
    }
    else {
        notAllow.play();
    }
});

$('#btn-next').click(async function() {
    if (pokemonId < 649) {
        pokemonId += 1;
        clickNext.play();
        var data = await getData(pokemonId);
        if (data)
            fillPokemonInformations(data);
    }
    else {
        notAllow.play();
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
        case 'normal':
            $('#pokemonType').css("background-color", "#C6C6A7");
            $('#pokemonType').css("color", "#6D6D4E");
            $('#pokemonType').css("border-color", "#6D6D4E");
          break;
        case 'fighting':
            $('#pokemonType').css("background-color", "#D67873");
            $('#pokemonType').css("color", "#7D1F1A");
            $('#pokemonType').css("border-color", "#7D1F1A");
          break;
        case 'flying':
            $('#pokemonType').css("background-color", "#C6B7F5");
            $('#pokemonType').css("color", "#6D5E9C");
            $('#pokemonType').css("border-color", "#6D5E9C");
          break;
        case 'poison':
            $('#pokemonType').css("background-color", "#C183C1");
            $('#pokemonType').css("color", "#682A68");
            $('#pokemonType').css("border-color", "#682A68");
          break;
        case 'ground':
            $('#pokemonType').css("background-color", "#EBD69D");
            $('#pokemonType').css("color", "#927D44");
            $('#pokemonType').css("border-color", "#927D44");
          break;
        case 'rock':
            $('#pokemonType').css("background-color", "#D1C17D");
            $('#pokemonType').css("color", "#786824");
            $('#pokemonType').css("border-color", "#786824");
          break;
        case 'bug':
            $('#pokemonType').css("background-color", "#C6D16E");
            $('#pokemonType').css("color", "#6D7815");
            $('#pokemonType').css("border-color", "#6D7815");
          break;
        case 'ghost':
            $('#pokemonType').css("background-color", "#A292BC");
            $('#pokemonType').css("color", "#493963");
            $('#pokemonType').css("border-color", "#493963");
          break;
        case 'steel':
            $('#pokemonType').css("background-color", "#D1D1E0");
            $('#pokemonType').css("color", "#787887");
            $('#pokemonType').css("border-color", "#787887");
          break;
        case 'electric':
            $('#pokemonType').css("background-color", "#FAE078");
            $('#pokemonType').css("color", "#A1871F");
            $('#pokemonType').css("border-color", "#A1871F");
          break;
        case 'psychic':
            $('#pokemonType').css("background-color", "#FA92B2");
            $('#pokemonType').css("color", "#A13959");
            $('#pokemonType').css("border-color", "#A13959");
          break;
        case 'ice':
            $('#pokemonType').css("background-color", "#BCE6E6");
            $('#pokemonType').css("color", "#638D8D");
            $('#pokemonType').css("border-color", "#638D8D");
          break;
        case 'dragon':
            $('#pokemonType').css("background-color", "#A27DFA");
            $('#pokemonType').css("color", "#4924A1");
            $('#pokemonType').css("border-color", "#4924A1");
          break;
        case 'dark':
            $('#pokemonType').css("background-color", "#A29288");
            $('#pokemonType').css("color", "#49392F");
            $('#pokemonType').css("border-color", "#49392F");
          break;
        case 'fairy':
            $('#pokemonType').css("background-color", "#F4BDC9");
            $('#pokemonType').css("color", "#9B6470");
            $('#pokemonType').css("border-color", "#9B6470");
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
