(function() {
    // var Main = function($scope, $http, $log, $anchorScroll, $location) {
        //     var onPokeComplete = function (response) {
        //
        //         $scope.user = response.data;
        //         $http.get($scope.user.repos_url).then(onRepos, onError);
        //     }
        //     var onRepos = function (response) {
        //         $scope.repos = response.data;
        //         $location.hash("Pokemon");
        //         $anchorScroll();
        //     }
        //     var onError = function (reason) {
        //         $scope.error= "could not retrieve pokemon";
        //     }
        // }
        // pokeApp.controller("Main", ["$http", "$q", "$log", Main]);


        // function GetJsonService ($http, $q) {
        //     this.http = (function serviceCaller() {
        //         return {
        //             GET: function (apiPath) {
        //                 console.log("started GetJsonService");
        //
        //                 var deferred = $q.defer();
        //                 $http.get(apiPath).then(function (result) {
        //                     deferred.resolve(result.data);
        //                 }, function (e) {
        //                     deferred.reject(e);
        //                 });
        //                 return deferred.promise;
        //             },
        //
        //             POST: function (apiPath, itemToSave) {
        //                 var deferred = $q.defer();
        //                 $http(
        //                     {
        //                         method: "post",
        //                         url: apiPath,
        //                         headers: {
        //                             "Accept": "application/json, text/plain, */*",
        //                             "Content-Type": "application/json;charset=UTF-8"
        //                         },
        //                         data: JSON.stringify(itemToSave)
        //                     }
        //                 ).then(function (results) {
        //                     deferred.resolve(results.data);
        //                 }, function (e) {
        //                     deferred.reject(e);
        //                 });
        //                 return deferred.promise;
        //             }
        //
        //         }
        console.log("started gettingJson");

        function pokeSubmit() {
            console.log("in pokeSubmit");

            var param = document.getElementById("pokeInput").value;
            console.log(param);
            var pokeURL = "http://pokeapi.co/api/v1/pokemon/" + param;
            console.log("got URL");
            $.getJSON(pokeURL, function (data) {
                console.log(data);
                console.log(JSON.stringify(data, null, "  "));

            });
        }
console.log("ending gettingJson");
    // }
})();


