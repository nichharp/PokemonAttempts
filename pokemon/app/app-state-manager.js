"use strict";

(function () {

    angular.module('pokeFight').config(function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise("/fight");

        $stateProvider.state("fight", {
            url: "/fight",
            templateUrl: "app/feature/fight/fight.html"
        }).state("search", {
            url: "/search",
            templateUrl: "app/feature/search/search.html"
        }).state("box", {
            url: "/box",
            templateUrl: "app/feature/box/box.html"
        })
    });
}());