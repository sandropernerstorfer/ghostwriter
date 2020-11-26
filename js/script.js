var slider = document.getElementById("formControlRange");
var output = document.getElementById("timeInput");
output.value = slider.value; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function() {
  output.value = this.value;
}


// Listen for input event on numInput.
output.onkeydown = function(e) {
    if(!((e.keyCode > 95 && e.keyCode < 106)
      || (e.keyCode > 47 && e.keyCode < 58) 
      || e.keyCode == 8)) {
        return false;
    }
}


output.oninput = function() {
  slider.value = this.value;
  if(this.value==''){slider.value = 0};
}