// ----------- Navbar Events ----------- //
// ----- contact
const contactForm = document.getElementById('ghostwriter-contact');
let contactElements = contactForm.elements;   // 0=name , 1=email , 2=message , 3=submit , 4=close

$("#name,#email,#message").on("change keyup paste", function(){

  if(!contactElements[0].value == "" && !contactElements[1].value == "" && contactElements[1].value.includes('@'&&'.')  && !contactElements[2].value == ""){
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

const darkBtn = document.getElementById('dark-btn');
darkBtn.addEventListener('click',function(){renderColor()},false);

const localTheme = localStorage.getItem('ghostwriterTheme');

// if(localTheme === null || localTheme === 'light'){
//   localStorage.setItem('ghostwriterTheme','light');
//   renderColor("light");
// }
// else if(localTheme === 'dark'){
//   renderColor("dark");
// }

function renderColor(x){
  $('body,header,footer,.footer-box-2,.tabs-section').css('background-color','#242425');
  $('.footer-box-1,main,.working-section,.box-3,.box-4').css('background-color','#2E2E2E');
  $('main,.tabs-section,.footer-box-1').css('box-shadow','none');
  $('main').css({'border-top-left-radius':'20px','border-top-right-radius':'20px'})
  $('.box-1,.box-2').css({'background-color':'#272727','box-shadow':'none'});
  $('#timeInput,#input-text,.output-window,#name,#email').css({'background-color':'#272727','color':'#ccc','border-color':'#FFC900'});
  $('.form-badge').css({'background-color':'#FFC900','color':'#000'});
  $('.code-badge').css({'background-color':'#242425','color':'#ccc'});
  $('.pre-html,.pre-js').css('color','#fff');
  $('.modal-content').css('background-color','#272727');
  $('.modal-header').css('background-color','#272727');
  $('#contact-text').css('color','#ccc');
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