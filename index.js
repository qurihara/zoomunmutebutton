var Obniz = require("obniz");

var obniz = new Obniz.M5StickC("xxxx");
obniz.onconnect = async function () {
    obniz.buttonA.onchange = function(state) {
      obniz.display.drawing(false);
      obniz.display.clear();
      obniz.display.print(state);
      obniz.display.drawing(true);
    }
}
