'use strict';
(function () {

	angular
		.module('paceMaker')
		.factory('openWeather', openWeather);

	openWeather.$inject = ['$http', '$q'];
	function openWeather($http, $q) {

		
		var getWeather = function() {
			var baseUrl = "http://api.openweathermap.org/data/2.5/weather?id=";
			var cityId = "2960991&"; // waterford city
			var units = "units=metric&";
			var api = "APPID=3ddc1ebb7cd00b6a4c4ee72eafa578b4";
			var deferred = $q.defer();

			$http.get(baseUrl + cityId + units + api)
				.success(function(data) {
					deferred.resolve(data);
				})
				.error(function(err) {
					deferred.reject(err);
				});
				return deferred.promise;
		};

		return {
 			getWeather: getWeather
		};
	}

})();