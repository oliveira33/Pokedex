var pokemonId = 6; //Charizard
var pokemonSpriteSrc = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/';

$(function(){
    $('#btn-previous').click(function() {
        if (pokemonId > 1) {
            pokemonId -= 1;
            $('#pokemonImage').attr("src", pokemonSpriteSrc + pokemonId + '.gif');
        }
    });

    $('#btn-next').click(function() {
        if (pokemonId < 649) {
            pokemonId += 1;
            $('#pokemonImage').attr("src", pokemonSpriteSrc + pokemonId + '.gif');
        }
    });
});