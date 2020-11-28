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

    $('body,header,footer,.footer-box-2,.tabs-section').css('background-color','#242425');
    $('.footer-box-1,main,.working-section,.box-3,.box-4').css('background-color','#2E2E2E');
    $('main,.tabs-section,.footer-box-1').css('box-shadow','none');
    $('main').css({'border-top-left-radius':'20px','border-top-right-radius':'20px'});
    $('.box-1,.box-2').css({'background-color':'#272727','box-shadow':'none'});
    $('#timeInput,#input-text,.output-window,#name,#email').css({'background-color':'#272727','color':'#ccc','border-color':'#333333'});
    $('#name,#email').css('border-color','#FFC900')
    $('.form-badge').css({'background-color':'#FFC900','color':'#000'});
    $('.code-badge').css({'background-color':'#242425','color':'#ccc'});
    $('.pre-html,.pre-js').css('color','#fff');
    $('.modal-content').css('background-color','#272727');
    $('.modal-header').css('background-color','#272727');
    $('#contact-text').css('color','#ccc');
    $('.contact-message').css({'background-color':'#272727','border':'2px solid #FFC900','color':'#ccc','border-radius':'10px'});

  }
  else if(x === "light"){
    
    $('body,header,footer,.footer-box-2,.tabs-section').css('background-color','#FFC900');
    $('.footer-box-1,main').css('background-color','#FFC900');
    $('main,.working-section,.box-1,.box-2,.box-3,.box-4').css({'background-color':'#fff'});

    $('.footer-box-1').css({'-webkit-box-shadow':'inset 0px 6px 22px -6px rgba(56,56,56,0.81)','-moz-box-shadow':'inset 0px 6px 22px -6px rgba(56,56,56,0.81)','box-shadow':'inset 0px 6px 22px -6px rgba(56,56,56,0.81)'});
  

    $('.tabs-section').css({'-webkit-box-shadow':'inset 3px -8px 25px -9px rgba(56,56,56,0.81)','-moz-box-shadow':'inset 3px -8px 25px -9px rgba(56,56,56,0.81)','box-shadow':'inset 3px -8px 25px -9px rgba(56,56,56,0.81)'})
    $('main').css({'box-shadow':'inset -5px 0 5px -5px #333, inset 5px 0 5px -5px #333','border-top-left-radius':'0px','border-top-right-radius':'0px'});
    $('.box-1,.box-2').css({'-webkit-box-shadow':'0px 0px 16px -5px rgba(92,92,92,1)','-moz-box-shadow':'0px 0px 16px -5px rgba(92,92,92,1)','box-shadow':'0px 0px 16px -5px rgba(92,92,92,1)'});

    $('#timeInput,#input-text,.output-window,#name,#email').css({'background-color':'#fff','color':'#485056','border-color':'#ccc'});
    $('.form-badge').css({'background-color':'#037BFE','color':'#fff'});
    $('.code-badge').css({'background-color':'#fff','color':'#485056'});
    $('.pre-html,.pre-js').css('color','#272727');
    $('.modal-content').css('background-color','#fff');
    $('.modal-header').css('background-color','#FFC900');
    $('#contact-text').css('color','#272727');
    $('.contact-message').css({'background-color':'#fff','border':'2px solid #ccc','color':'#272727','border-radius':'10px'});

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