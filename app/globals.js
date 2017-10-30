'use strict';

angular.module('pool.globals', [])

.factory('GLOBALS', function() {
	return {
		pool_name: "XMRCrypto-Pool.net",
		api_url : 'https://api.xmr.crypto-pool.net',
		api_refresh_interval: 5000,
		app_update_interval: 5*60000
	};
});