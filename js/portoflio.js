var d = new Date();

var outgoing = coverMail();

function coverMail() {
    emailE='annmariefoerster.com'
	emailE=('admin' + '@' + emailE)
}

document.getElementById("theFooter").innerHTML = d.getFullYear() + "  The site is by Ann-Marie Foerster.  " + '<a href="mailto:' + emailE + '">' + 'Contact me' + '</a>' + " for design inquiries.";

document.getElementById("backupContact").innerHTML = '<a href="mailto:' + emailE + '">' + "Send me a direct email!" + '</a>';


function respFunction() {
    var x = document.getElementById("mobilelinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }

$('#contact_form').submit(function(e) {
    e.preventDefault();
    var first_name = $('#first_name').val();
    var last_name = $('#last_name').val();
    var email = $('#email').val();
	var message  = $('#message').val();
     
    $(".error").remove();
 
    if (first_name.length < 1) {
      $('#first_name').after('<span class="error">This field is required</span>');
    }
    if (last_name.length < 1) {
      $('#last_name').after('<span class="error">This field is required</span>');
    }
    if (email.length < 1) {
      $('#email').after('<span class="error">This field is required</span>');
    } else {
      var regEx = /^[A-Z0-9][A-Z0-9._%+-]{0,63}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/;
      var validEmail = regEx.test(email);
      if (!validEmail) {
        $('#email').after('<span class="error">Enter a valid email</span>');
      }
    }
  });
  document.getElementById("contact_form").onsubmit = function() {success()};

 function success() {
     alert("Thank you for contacting me.  I'll be with you shortly.");
     document.forms["contact_form"].reset();	 
 }