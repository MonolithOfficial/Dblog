import fs from 'fs';

var div = document.getElementById("similarArticles")[0];


var data = fs.readFileSync("articles.json", "utf8");
jsonData = JSON.parse(data);
console.log(jsonData);