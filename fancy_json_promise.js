// HttpRequest idea taken from Quora
const xmlhttp = new XMLHttpRequest();
const filename = "fancy_json.json";

function readFile(filename_in){
  return new Promise( (resolve,reject) => {
    xmlhttp.onreadystatechange = function () {
      if (this.status === 404) 
        reject(new Error('JSON File not found'));
      if (this.readyState == 4 && this.status == 200) {
        if (this.responseText == "") 
          reject(new Error('Empty JSON error'));
        obj_json = JSON.parse(this.responseText); //sorry, I used jQuery here.
        obj_json ? resolve(obj_json) : reject(new Error('Parsing error'));
      }
    }
    xmlhttp.open("GET", filename_in, true);
    xmlhttp.send();
  })
};

readFile(filename)
.then(obj_json => everythingElse(obj_json))
.catch(err => console.error(err))


function everythingElse(colors_json){
    let {colors} = colors_json;

    //forEach Loop
    let HTML_Array_forEach = [];
    let string,string_black;
    colors.forEach((color_in) => {
      let {color:name, category, type, code} = color_in;
      let {rgba,hex} = code;
      string_black = (name=="black") ? "color: white;" : "";
      string = `<div>
      <h1>${name}</h1>
      <div id="card" style="background-color: ${hex};${string_black}">
        <h2>${category}</h2>
      </div>
      </div>`;
      HTML_Array_forEach.push(string); 
    });

    HTML_together = HTML_Array_forEach.reduce((total,string) => total+string);
    //closure used here - function has access to document too
    const app = document.getElementById("app");
    app.innerHTML = HTML_together;
};


