const { exec } = require('child_process')
var Obniz = require("obniz");

var obniz = new Obniz.M5StickC("5850-4725");
obniz.onconnect = async function () {
    c_state=false;
    obniz.buttonA.onchange = function(state) {
      if (c_state !== state){
        obniz.display.drawing(false);
        obniz.display.clear();
        c_state = state;
        toggle();
        if(state === true){
          obniz.display.print("unmuted");
          obniz.led.on();
        }else{
          obniz.display.print("muted");
          obniz.led.off();
        }
        obniz.display.drawing(true);
      }
    }
}

function toggle(){

  exec('osascript togglemute.scpt', (err, stdout, stderr) => {
    if (err) {
      console.log(`stderr: ${stderr}`)
      return
    }
    //console.log(`stdout: ${stdout}`)
  });
}
