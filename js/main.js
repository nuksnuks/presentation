const front = document.getElementById('frontb');
const cases = document.getElementById('casesb');
const aboutme = document.getElementById('aboutmeb');

document.getElementById("front").style.display = localStorage.getItem('frontvis');
document.getElementById("cases").style.display = localStorage.getItem('casesvis');
document.getElementById("aboutme").style.display = localStorage.getItem('aboutmevis');

front.style.backgroundColor = localStorage.getItem('frontbutton');
cases.style.backgroundColor = localStorage.getItem('casesbutton');
aboutme.style.backgroundColor = localStorage.getItem('aboutbutton');

front.style.opacity = localStorage.getItem('frontbo');
cases.style.opacity = localStorage.getItem('casesbo');
aboutme.style.opacity = localStorage.getItem('aboutmebo');

function frontclick() {
  localStorage.setItem('frontvis', 'block');
  localStorage.setItem('casesvis', 'none');
  localStorage.setItem('aboutmevis', 'none');

  document.getElementById("front").style.display = localStorage.getItem('frontvis');
  document.getElementById("cases").style.display = localStorage.getItem('casesvis');
  document.getElementById("aboutme").style.display = localStorage.getItem('aboutmevis');

  localStorage.setItem('frontbutton','cornflowerblue');
  localStorage.setItem('casesbutton','white');
  localStorage.setItem('aboutbutton','white');

  front.style.backgroundColor = localStorage.getItem('frontbutton');
  cases.style.backgroundColor = localStorage.getItem('casesbutton');
  aboutme.style.backgroundColor = localStorage.getItem('aboutbutton');

  localStorage.setItem('frontbo','1');
  localStorage.setItem('casesbo', '0.6');
  localStorage.setItem('aboutmebo','0.6');

  front.style.opacity = localStorage.getItem('frontbo');
  cases.style.opacity = localStorage.getItem('casesbo');
  aboutme.style.opacity = localStorage.getItem('aboutmebo');
}
function casesclick() {
  localStorage.setItem('frontvis', 'none');
  localStorage.setItem('casesvis', 'block');
  localStorage.setItem('aboutmevis', 'none');

  document.getElementById("front").style.display = localStorage.getItem('frontvis');
  document.getElementById("cases").style.display = localStorage.getItem('casesvis');
  document.getElementById("aboutme").style.display = localStorage.getItem('aboutmevis');

  localStorage.setItem('frontbutton','white');
  localStorage.setItem('casesbutton', 'cornflowerblue');
  localStorage.setItem('aboutbutton','white');

  front.style.backgroundColor = localStorage.getItem('frontbutton');
  cases.style.backgroundColor = localStorage.getItem('casesbutton');
  aboutme.style.backgroundColor = localStorage.getItem('aboutbutton');

  localStorage.setItem('frontbo','0.6');
  localStorage.setItem('casesbo', '1');
  localStorage.setItem('aboutmebo','0.6');

  front.style.opacity = localStorage.getItem('frontbo');
  cases.style.opacity = localStorage.getItem('casesbo');
  aboutme.style.opacity = localStorage.getItem('aboutmebo');
}
function aboutmeclick() {
  localStorage.setItem('frontvis', 'none');
  localStorage.setItem('casesvis', 'none');
  localStorage.setItem('aboutmevis', 'block');

  document.getElementById("front").style.display = localStorage.getItem('frontvis');
  document.getElementById("cases").style.display = localStorage.getItem('casesvis');
  document.getElementById("aboutme").style.display = localStorage.getItem('aboutmevis');

  localStorage.setItem('frontbutton','white');
  localStorage.setItem('casesbutton', 'white');
  localStorage.setItem('aboutbutton', 'cornflowerblue');

  front.style.backgroundColor = localStorage.getItem('frontbutton');
  cases.style.backgroundColor = localStorage.getItem('casesbutton');
  aboutme.style.backgroundColor = localStorage.getItem('aboutbutton');

  localStorage.setItem('frontbo','0.6');
  localStorage.setItem('casesbo', '0.6');
  localStorage.setItem('aboutmebo','1');

  front.style.opacity = localStorage.getItem('frontbo');
  cases.style.opacity = localStorage.getItem('casesbo');
  aboutme.style.opacity = localStorage.getItem('aboutmebo');
}

front.addEventListener('click', frontclick);
cases.addEventListener('click', casesclick);
aboutme.addEventListener('click', aboutmeclick);
