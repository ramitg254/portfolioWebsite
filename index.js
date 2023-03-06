var tablinks=document.getElementsByClassName("tab-links");
var tabcontents=document.getElementsByClassName("tab-contents");

function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("active-link");
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab")
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}

var sidemenu=document.getElementById("sidemenu");
function openmenu(){
    sidemenu.style.left="0";
}
function closemenu(){
    sidemenu.style.left="-200px";
}
const scriptURL = 'https://script.google.com/macros/s/AKfycbwy7GviyVqPKPywTbZFPS0nck8VdjjAQZxNr6yQpXu5N8pkF_PCug6ObXopWC7Hp2U2HA/exec'
  const form = document.forms['submit-to-google-sheet']
  const msg=document.getElementById("msg");

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
        msg.innerHTML ="Message sent successfully"
        setTimeout(function(){
            msg.innerHTML=""
        },5000)
        form.reset()
    })
      .catch(error => console.error('Error!', error.message))
  })