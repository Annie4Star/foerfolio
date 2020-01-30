var d = new Date();

document.getElementById('year').innerHTML = d.getFullYear();

var outgoing = coverMail();

function coverMail() {
  emailE='annmariefoerster.com'
	emailE=('admin' + '@' + emailE)
}

var span = document.getElementByClass('noshow');
span.insertAdjacentHTML = ('afterbegin', '<a href="mailto:'+ outgoing +'">');
span.insertAdjacentHTML = ('beforeend', '</a>');

function respFunction() {
    var x = document.getElementById("mobilelinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }