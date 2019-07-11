alert('Hello World');
//import * as data from './fancy_json.json';

function loadJSON(callback) {
    var xobj = new XMLHttpRequest();
     xobj.overrideMimeType("application/json");
     xobj.open('GET', 'fancy_json.json', true); 
     xobj.onreadystatechange = function () {
        if (xobj.readyState == 4 && xobj.status == "200") {
            callback(xobj.responseText);
        }
    };
    console.log(xobj);
    xobj.send(null); 
}

loadJSON()

/*
let colors_fetched;

fetch("fancy_json.json")
.then(response => response.json())
.then(parsed => colors_fetched);
  
// or if you can use async/await
//let response = await fetch("fancy_json.json");
//let parsed = await response.json();
*/

let colors_jquery_function = $.getJSON("fancy_json.json", function(json) {
    let colors_jquery = this.responseJSON;
    console.log(colors_jquery);
    console.log("JSON file read");
  });

/*original
const addHtml() => {
  colors.map(color => `<div>
  <h1>${color.name}</h1>
  <div id="card" style={{background: ${color.code.hex}}}>
    <h2>${color.category}</h2>
  </div>
</div>`);
}
*/