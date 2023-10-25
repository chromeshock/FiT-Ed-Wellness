/*toggle menu*/
document.querySelector('.hamburger-icon').addEventListener('click', () => {
  const hamburgerIcon = document.querySelector('.hamburger-icon');
  const hamburger = document.querySelector('.hamburger');

  /*toggle icon*/
   if (hamburgerIcon.textContent === '☰') {
    hamburgerIcon.textContent = '✖';
  } else {
    hamburgerIcon.textContent = '☰';
  }


  if (hamburger.style.visibility === 'hidden') {
    hamburger.style.visibility = 'visible';
  } else {
    hamburger.style.visibility = 'hidden';
  }
});
