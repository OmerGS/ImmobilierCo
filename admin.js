/* 
The following functions are used to calculate the difference between two colors.
They are original from https://stackoverflow.com/a/52453462/3695983
*/
function deltaE(rgbA, rgbB) {
    let labA = rgb2lab(rgbA);
    let labB = rgb2lab(rgbB);
    let deltaL = labA[0] - labB[0];
    let deltaA = labA[1] - labB[1];
    let deltaB = labA[2] - labB[2];
    let c1 = Math.sqrt(labA[1] * labA[1] + labA[2] * labA[2]);
    let c2 = Math.sqrt(labB[1] * labB[1] + labB[2] * labB[2]);
    let deltaC = c1 - c2;
    let deltaH = deltaA * deltaA + deltaB * deltaB - deltaC * deltaC;
    deltaH = deltaH < 0 ? 0 : Math.sqrt(deltaH);
    let sc = 1.0 + 0.045 * c1;
    let sh = 1.0 + 0.015 * c1;
    let deltaLKlsl = deltaL / (1.0);
    let deltaCkcsc = deltaC / (sc);
    let deltaHkhsh = deltaH / (sh);
    let i = deltaLKlsl * deltaLKlsl + deltaCkcsc * deltaCkcsc + deltaHkhsh * deltaHkhsh;
    return i < 0 ? 0 : Math.sqrt(i);
  }
  
  function rgb2lab(rgb){
    let r = rgb[0] / 255, g = rgb[1] / 255, b = rgb[2] / 255, x, y, z;
    r = (r > 0.04045) ? Math.pow((r + 0.055) / 1.055, 2.4) : r / 12.92;
    g = (g > 0.04045) ? Math.pow((g + 0.055) / 1.055, 2.4) : g / 12.92;
    b = (b > 0.04045) ? Math.pow((b + 0.055) / 1.055, 2.4) : b / 12.92;
    x = (r * 0.4124 + g * 0.3576 + b * 0.1805) / 0.95047;
    y = (r * 0.2126 + g * 0.7152 + b * 0.0722) / 1.00000;
    z = (r * 0.0193 + g * 0.1192 + b * 0.9505) / 1.08883;
    x = (x > 0.008856) ? Math.pow(x, 1/3) : (7.787 * x) + 16/116;
    y = (y > 0.008856) ? Math.pow(y, 1/3) : (7.787 * y) + 16/116;
    z = (z > 0.008856) ? Math.pow(z, 1/3) : (7.787 * z) + 16/116;
    return [(116 * y) - 16, 500 * (x - y), 200 * (y - z)]
  }
  
  /*
  Function that converts RGB to shortened HEX (#rgb instead of #rrggbb).
  Initially based on CSS Tricks: https://css-tricks.com/converting-color-spaces-in-javascript/
  */
  function simplifiedRGBToHex(color) {
    const hex = [
      Math.round(color[0]/16).toString(16),
      Math.round(color[1]/16).toString(16),
      Math.round(color[2]/16).toString(16)
    ];
    return "#" + hex.join("");
  }
  
  /*
  The code
  */
  
  // Create a canvas to set and read the image from
  const canvas = document.createElement("canvas");
  canvas.width = 912;
  canvas.height = 389;
  const context = canvas.getContext('2d');
  
  // Load the image (original from Wikimedia: https://upload.wikimedia.org/wikipedia/commons/2/23/US_one_dollar_bill%2C_obverse%2C_series_2009.jpg)
  base_image = new Image();
  base_image.crossOrigin = "Anonymous";
  base_image.src = 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/1506195/US_one_dollar_bill%2C_obverse%2C_series_2009.jpg';
  
  // When the image is loaded
  base_image.onload = function(){
    
    const width = 912;
    const height = 389;
    
    // draw it into the canvas
    context.drawImage(base_image, 0, 0, 1216, 519, 0, 0 , width, height);
    
    // High values = less colors/quality and smaller size; low values = more colors/quality and higher sizes
    const minDiff = 20;
    let shadows = [];
    let count = 0;
    
    // traverse the whole image pixel by pixel
    for (let x = 0; x < width; x++) { 
      for (let y = 0; y < height; y++) { 
        // get the color of that particular pixel and compare to the background green
        const color = context.getImageData(x, y, 1, 1).data;
        const delta = deltaE(color, [235, 238, 199]);
        
        // if the difference is big enough, then include it to the box-shadow
        if (delta > minDiff) {
          // convert the color to a shortened HEX (lose quality, but smaller size)
          const newColor = simplifiedRGBToHex(color);
          // in a previous iteration I gound that #998 is the most common color, so I used it as the main color to cut the size a little
          shadows.push(`${x}px ${y}px${newColor === "#998" ? "" : newColor}`);
          count++;
        }
      }
    }
  
    // console.log(shadows.join(","));
    console.log("Number of color points: ", count);
    const styles = document.createElement("style");
    styles.innerHTML = `#bank-note::before { box-shadow: ${shadows.join(",")}; }`;
    document.querySelector("body").appendChild(styles);
    
    // delete styles;
    // delete canvas;
    
  }
  
  
  