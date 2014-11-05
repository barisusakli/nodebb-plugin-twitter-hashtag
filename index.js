'use strict';

(function(module) {
	var regex = /(?:\s|^)(?:#(?!\d+(?:\s|$)))(\w+)(?=\s|$)/gi;

	module.parse = function(data, callback) {
		if (!data || !data.postData || !data.postData.content) {
			return callback(null, data);
		}

		var matches = data.postData.content.match(regex);
		if(!matches || !matches.length) {
			return callback(null, data);
		}

		for(var i=0; i<matches.length; ++i) {
			var match = matches[i].replace('</p>', '').trim();
			data.postData.content = data.postData.content.replace(match, '<a href="https://twitter.com/search?q=%40'+ match.slice(1) +'">' +
				match + '</a>');
		}

		callback(null, data);
	};
}(module.exports));

