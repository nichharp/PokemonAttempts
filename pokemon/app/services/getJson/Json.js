"use strict";

(function () {

    angular.module("pokeFight").service("MessWithJson", ["GetJsonService",MessWithJson]); //could be error here

    function MessWithJson ($http) {

        this.getPokemon = function () {
            var a = $http.GET("http://pokeapi.co/api/v2/pokemon/")
            console.log(a);
            return a;
            // return $http.GET("http://pokeapi.co/api/v2/pokemon/");
        };

        this.savePokemon = function (pokemon) {

            return $http.POST("http://pokeapi.co/api/v2/pokemon/", pokemon);
        };

        // this.updateBook = function (bookToUpdate) {
        //     return dal.http.PUT("rest/bookstore/json/", bookToUpdate);
        // };
        //
        // this.deleteBook = function (bookToDelete) {
        //     return dal.http.DELETE("/rest/bookstore/json/", bookToDelete);
        // };

    }
}());
