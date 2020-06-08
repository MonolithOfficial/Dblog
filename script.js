// const str = `[{"title": "article1", "category": "category1", "number": "1"}, 
//             {"title": "article2", "category": "category2", "number": "2"},
//             {"title": "article3", "category": "category3", "number": "3"},
//             {"title": "article4", "category": "category4", "number": "4"},
//             {"title": "article6", "category": "category5", "number": "5"}]`

// jsonData = JSON.parse(str);
// var i;
// output = '';
// for (i = 0; i < jsonData.length; i++){
//     console.log(jsonData[i].title);
//     output += `
//         <div class article number ${jsonData[i].number}>
//             <img src="img/monolith.jpg" alt="article${jsonData[i].number}" title="article${jsonData[i].number}">
//             <p style="color: white">${jsonData[i].title}</p>
//             <p style="color: white">${jsonData[i].category}</p>
//         </div>
//     `
// }

// document.querySelector('#similarArticles').innerHTML = output;

fetch('json/articles.json')
    .then(data => data.json())
    .then(data => {
        console.log(data);
    });