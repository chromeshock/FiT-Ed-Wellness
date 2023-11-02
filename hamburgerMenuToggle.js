/*// Toggle menu
document.querySelector('.hamburger-icon').addEventListener('click', () => {
  const hamburgerIcon = document.querySelector('.hamburger-icon');
  const hamburger = document.querySelector('.hamburger');

  // Toggle icon and menu visibility
  if (hamburgerIcon.textContent === '☰') {
    hamburgerIcon.textContent = '✖';
    hamburger.style.width = '100%';  // Set width to 100% to display content
    hamburger.style.padding = '100px'; // Set padding to
  } else {
    hamburgerIcon.textContent = '☰';
    hamburger.style.display = 'none';  // Set width to 0 to hide content
  }
});*/


document.querySelector('.hamburger-icon').addEventListener('click', () => {
  const hamburgerIcon = document.querySelector('.hamburger-icon');
  const hamburger = document.querySelector('.hamburger');
  const header = document.querySelector('.bigger-header'); // select the header

  if (hamburgerIcon.textContent === '☰') {
    hamburgerIcon.textContent = '✖';
    hamburger.style.visibility = 'visible';
    hamburger.style.width = '100%';  // Or whatever width you want
    header.classList.add('move-down');  // move the header down
  } else {
    hamburgerIcon.textContent = '☰';
    hamburger.style.visibility = 'hidden';
    hamburger.style.width = '0';
    header.classList.remove('move-down'); // move the header back up
  }
});
