// Import the page-mod API
var pageMod = require("sdk/page-mod");

// Youtube
pageMod.PageMod({
	include: "*.youtube.com",
	contentScriptWhen: "start",
	contentStyle: '#watch-discussion { display: none; }'
});

// 9gag
pageMod.PageMod({
	include: "*.9gag.com",
	contentScriptWhen: "start",
	contentStyle: '.post-comment { display: none; }'
});



