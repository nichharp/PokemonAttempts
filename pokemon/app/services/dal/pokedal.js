"use strict";

(function () {

    angular.module("pokeFight").service("pokeDal", ["dal", PokeDal]);

    function PokeDal (dal) {

        this.getPokemon = function () {
            return dal.http.GET("http://pokeapi.co/api/v2/");
        };

    }
}());