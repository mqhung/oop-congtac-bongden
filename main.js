let lamp = new Lamp();
let button = new Button(lamp);
document.write(lamp.getStatus() + "<br>");
document.write("Connect button to Lamp: " + button.connectToLamp(lamp) + "<br>");
document.write(button.switchOn(lamp) +"<br>");
document.write(lamp.getStatus() + "<br>");
document.write(button.switchOff(lamp) +"<br>");
document.write(lamp.getStatus() + "<br>");