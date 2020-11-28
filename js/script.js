// ----------- Navbar Events ----------- //
// ----- contact
const contactForm = document.getElementById('ghostwriter-contact');
let contactElements = contactForm.elements;   // 0=name , 1=email , 2=message , 3=submit , 4=close

$("#name,#email,#message").on("change keyup paste", function(){

  if(!contactElements[0].value == "" && !contactElements[1].value == "" && contactElements[1].value.includes('@') && contactElements[1].value.includes('.')  && !contactElements[2].value == ""){
    contactElements[3].disabled = false;
  }
  else{
    contactElements[3].disabled = true;
  };

});

$(contactElements[4]).click(function() {
  setTimeout(`contactForm.reset(); $('#submit-button').html('Send');`,300);
});

$("#submit-button").click(function(){
  $("#submit-button").html('<i class="fas fa-heart"></i>');
  setTimeout(`$('#contact-modal').modal('hide');`,1000);
})

// ----- light / dark mode

const lightBtn = document.getElementById('light-btn');
const darkBtn = document.getElementById('dark-btn');
const localTheme = localStorage.getItem('ghostwriterTheme');
lightBtn.addEventListener('click',function(){renderColor("light");localStorage.setItem('ghostwriterTheme','light');},false);
darkBtn.addEventListener('click',function(){renderColor("dark");localStorage.setItem('ghostwriterTheme','dark');},false);

if(localTheme === null || localTheme === 'light'){
  localStorage.setItem('ghostwriterTheme','light');
  renderColor("light");
}
else if(localTheme === 'dark'){
  renderColor("dark");
}

function renderColor(x){

  if(x === "dark"){
    document.body.setAttribute('data-theme', 'dark');
  }
  else if(x === "light"){
    document.body.setAttribute('data-theme', 'light');
  }

}



// ------------- User Input ------------ //
var slider = document.getElementById("input-range");
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



// Code Copy Functionality

document.getElementById('copy-js').addEventListener('click', copyToClipboard);

function copyToClipboard(){
 
  let codeToBeCopied = document.getElementById('code-js').innerText;
  let tempTextarea = document.getElementById('copy-textarea');
  tempTextarea.innerHTML = codeToBeCopied;
  tempTextarea.select();
  document.execCommand('copy');

  }