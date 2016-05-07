'use strict';
(function() {

	angular
		.module('paceMaker')
		.service('co2Calculator', co2Calculator);

	function co2Calculator() {

		var assignCo2Band = function(band) {
			var emissions = 0;
			switch(band) {
				case 'A1':
					emissions = 40;
					break;
				case 'A2':
					emissions = 90;
					break;
				case 'A3':
					emissions = 100;
					break;
				case 'A4':
					emissions = 115;
					break;
				case 'B1':
					emissions = 125;
					break;
				case 'B2':
					emissions = 135;
					break;
				case 'C':
					emissions = 148;
					break;
				case 'D':
					emissions = 163;
					break;
				case 'E':
					emissions = 180;
					break;
				case 'F':
					emissions = 223;
					break;
				case 'G':
					emissions = 230;
					break;
			}
			return emissions;
		};

		var CO2savings = function(distance, co2_band) {
			return ((distance * assignCo2Band(co2_band))/1000).toFixed(3);
		};

		var CO2Value = function(CO2savings, co2_value) {
			return ((CO2savings * co2_value)/1000).toFixed(2);
		};

		var bandOptions = ["A1", "A2", "A3", "A4", "B1", "B2", "C", "D", "E", "F", "G"];

		return {
			CO2savings: CO2savings,
			CO2Value: CO2Value,
			bandOptions: bandOptions
		};
	}
	

})();