let colors_json = 
{
    "colors": [
      {
        "color": "black",
        "category": "hue",
        "type": "primary",
        "code": {
          "rgba": [255,255,255,1],
          "hex": "#000"
        }
      },
      {
        "color": "white",
        "category": "value",
        "code": {
          "rgba": [0,0,0,1],
          "hex": "#FFF"
        }
      },
      {
        "color": "red",
        "category": "hue",
        "type": "primary",
        "code": {
          "rgba": [255,0,0,1],
          "hex": "#F00"
        }
      },
      {
        "color": "blue",
        "category": "hue",
        "type": "primary",
        "code": {
          "rgba": [0,0,255,1],
          "hex": "#00F"
        }
      },
      {
        "color": "yellow",
        "category": "hue",
        "type": "primary",
        "code": {
          "rgba": [255,255,0,1],
          "hex": "#FF0"
        }
      },
      {
        "color": "green",
        "category": "hue",
        "type": "secondary",
        "code": {
          "rgba": [0,255,0,1],
          "hex": "#0F0"
        }
      }
    ]
   };

let {colors} = colors_json;

// Map loop
let HTML_Array_map = colors.map(color_in => {
  // there are a lot of things named "color" so I prefer to use an alias "name" instead
  let {color:name, category, type, code} = color_in;
  let {rgba,hex} = code;
  // I want to see white text if background color is black
  let string_black = (name=="black")? "color: white;" : "";
  string = `<div>
  <h1>${name}</h1>
  <div id="card" style="background-color: ${hex};${string_black}">
    <h2>${category}</h2>
  </div>
  </div>`;
  return string;
});

let HTML_together = HTML_Array_map.reduce((total,string) => total+string);

// without this event listener, app is null
document.addEventListener("DOMContentLoaded", function(event){
  const app = document.getElementById("app");
  app.innerHTML = HTML_together;
});