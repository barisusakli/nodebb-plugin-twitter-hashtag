'use strict';

(function(module) {
	module.parse = function(postContent, callback) {
		var regex = /(?:\s|^)(?:#(?!\d+(?:\s|$)))(\w+)(?=\s|$)/gi;

		var matches = postContent.match(regex);
		if(!matches || !matches.length) {
			return callback(null, postContent);
		}

		for(var i=0; i<matches.length; ++i) {
			var match = matches[i].replace('</p>', '').trim();
			postContent = postContent.replace(match, '<a href="https://twitter.com/search?q=%40'+ match.slice(1) +'">' +
				match + '</a>');
		}

		callback(null, postContent);
	};
}(module.exports));

