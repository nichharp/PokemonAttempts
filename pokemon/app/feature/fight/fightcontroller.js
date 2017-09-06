// (function() {
//     console.log("started fightController");
//     var fightController =  function(GetJsonService)
//     {
//         var vm = this;
//         console.log("inside fightController");
//         function init() {
//             GetJsonService.getPokemon().then(function (results) {
//                 console.log("you got the pokemon, they are: "+results);
//                 vm.pokemon = results;
//             }, function(error) {
//                 vm.error = true;
//                 vm.errorMessage = error;
//             });
//         }
//         console.log("done init" + vm.pokemon);
//         init();
//     };
//     angular.module('pokeFight').controller('fightController', ['GetJsonService',fightController]);
// }());


(function() {

    var PokeBattleController =  function() {
        var vm = this;
    };

    angular.module('pokeFight').controller('pokeBattleController', [PokeBattleController]);
}());