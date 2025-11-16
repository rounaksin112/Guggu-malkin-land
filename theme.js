
function toggleTheme(){
  document.documentElement.classList.toggle('premium');
  // save preference
  if(document.documentElement.classList.contains('premium')){
    localStorage.setItem('theme','premium');
  } else {
    localStorage.removeItem('theme');
  }
}
window.addEventListener('DOMContentLoaded', function(){
  if(localStorage.getItem('theme') === 'premium') document.documentElement.classList.add('premium');
});
