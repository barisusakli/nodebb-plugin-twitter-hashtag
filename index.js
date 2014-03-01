

(function(module) {
	"use strict";


	module.parse = function(postContent, callback) {
		var regex = /\S*#(?:\[[^\]]+\]|\S+)/g;

		var matches = postContent.match(regex);
		if(!matches || !matches.length) {
			return callback(null, postContent);
		}

		for(var i=0; i<matches.length; ++i) {
			var match = matches[i].replace('</p>', '').trim();
			postContent = postContent.replace(match, '<a href="https://twitter.com/search?q=%40'+ match.slice(1) +'">' +
				match + '</a>');
		}

		return callback(null, postContent);
	}


}(module.exports));

