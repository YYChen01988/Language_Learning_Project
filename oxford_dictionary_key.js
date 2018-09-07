var Dictionary = require("	https://od-api.oxforddictionaries.com/api/v1");
var app_id = "a3b0b05c";
var app_key = "354e7083dfd49014b8d5874619d8d867";

var dict = new Dictionary(app_id, app_key);
dict.find("ace",function(error,data){if(error) return console.log(error); console.log(data); });
