// HttpRequest idea taken from Quora
const xmlhttp = new XMLHttpRequest();

xmlhttp.onreadystatechange = function () {
  
  if (this.readyState == 4 && this.status == 200) {
    let colors_json = JSON.parse(this.responseText); //sorry, I used jQuery here
    let {colors} = colors_json;

    //forEach Loop - inside if{} block for synchronous pipeline
    HTML_Array_forEach = [];
    colors.forEach((color_in) => {
      let {color:name, category, type, code} = color_in;
      let {rgba,hex} = code;
      let string_black = (name=="black")? "color: white;" : "";
      let string = `<div>
      <h1>${name}</h1>
      <div id="card" style="background-color: ${hex};${string_black}">
        <h2>${category}</h2>
      </div>
      </div>`;
      HTML_Array_forEach.push(string); 
    });

    let HTML_together = HTML_Array_forEach.reduce((total,string) => total+string);
    const app = document.getElementById("app");
    app.innerHTML = HTML_together;
  }
};

xmlhttp.open("GET", "fancy_json.json", true);
xmlhttp.send();