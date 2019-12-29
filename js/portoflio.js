var d = new Date();

var outgoing = coverMail();

function coverMail() {
    emailE='annmariefoerster.com'
	emailE=('admin' + '@' + emailE)
}

document.getElementById("theFooter").innerHTML = d.getFullYear() + "  The site is by Ann-Marie Foerster.  " + '<a itemprop="url" href="mailto:' + emailE + '">' + 'Contact me' + '</a>' + " for design inquiries.";

document.getElementById("backupContact").innerHTML = '<a itemprop="url" href="mailto:' + emailE + '">' + "Send me a direct email!" + '</a>';


function respFunction() {
    var x = document.getElementById("mobilelinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }