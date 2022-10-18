var d = new Date();

document.getElementById('year').innerHTML = d.getFullYear();

var outgoing = coverMail();

function coverMail() {
  emailE='annmariefoerster.com'
	emailE=('admin' + '@' + emailE)
}

document.getElementById("NameObfuse").innerHTML = "<a href='mailto:" + emailE + "'>Ann Foerster</a>";

document.getElementById("EnvelopeObfuse").innerHTML = "<a href='mailto:" + emailE + "'><i class='fas fa-envelope' alt='Email'></i></a>";

document.getElementById("backupContact").innerHTML = "You can always <a href='mailto:" + emailE + "'>email me here</a> if you are having issues with the form, or prefer email.";

function respFunction() {
    var x = document.getElementById("mobilelinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }

  function fnCheckForRestrictedWords () {
    var restrictedWords = new Array("google", "rank", "ranking");
    var txtInput = document.getElementById("company").value;
    var error = 0;
    for (var i = 0; i < restrictedWords.length; i++) {
      var val = restrictedWords[i];
      if ((txtInput.toLowerCase()).indexOf(val.toString()) > -1) {
        error = error + 1;
      }
    }
    if (error > 0) {
      alert('There have been too many fraudulent submissions using this term, and its use in requests to contact me has been blocked.')
    }
    else {
      document.contform.submit();
    }
  }