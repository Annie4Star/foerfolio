var d = new Date();

document.getElementById('year').innerHTML = d.getFullYear();

var outgoing = coverMail();

function coverMail() {
  emailE='annmariefoerster.com'
	emailE=('admin' + '@' + emailE)
}

document.getElementById("NameObfuse").innerHTML = "<a href='mailto:" + emailE + "'>Ann Foerster</a>";

document.getElementById("EnvelopeObfuse").innerHTML = "<a href='mailto:" + emailE + "'><img src='icons/studicons-mail.png' class='lighten' alt='Email' title='Email' title='Email'></a>";

document.getElementById("backupContact").innerHTML = "You can always <a href='mailto:" + emailE + "'>email me here</a> if you are having issues with the form, or prefer email.";

function respFunction() {
    var x = document.getElementById("mobilelinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }