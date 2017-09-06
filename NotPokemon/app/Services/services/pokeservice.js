(function() {

    var PokeService =  function(pokeDal) {

        this.getPokemon = function()
        {
            return pokeDal.getPokemon();
        };
    };

    angular.module('pokeFight').service('pokeService', ['pokeDal', PokeService]);
}());