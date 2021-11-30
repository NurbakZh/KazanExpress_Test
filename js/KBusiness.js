//start counting the percentage on circle
var fired = false;
function startCount() {
  const percentage = document.getElementById("perc");
  var windowheight1 = window.innerHeight;
  var revealtop1 = percentage.getBoundingClientRect().top;
  var revealpoint1 = 10;
  if(revealtop1 < windowheight1 - revealpoint1) {
    let counter = 0;
    setInterval(()=> {
      if (counter==672) {
        clearInterval();
      }
      else {
        counter+=1;
        percentage.textContent = counter + "%";
      }
    },3);
    fired = true;
    }
}

window.addEventListener('scroll',function(e) {
  reveal();
  if(fired==false) {
    startCount();
  }
})

//reveal dots on graph
function reveal() {
  var reveals = document.querySelectorAll('.reveal');
  for(var i=0; i<reveals.length;i++) {
    var windowheight = window.innerHeight;
    var revealtop = reveals[i].getBoundingClientRect().top;
    var revealpoint = 10;
    if(revealtop < windowheight - revealpoint) {
      reveals[i].classList.add('active');
    }
    else {
      reveals[i].classList.remove('active');
    }
  }
}

//one checkbox only
function onlyOne(checkbox) {
    var checkboxes = document.getElementsByName("group1")
    checkboxes.forEach((item) => {
        if (item !== checkbox) item.checked = true
    })
}