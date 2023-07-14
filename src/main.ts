import './style.css'

const navBtn = document.querySelector('#menu') as Element;
const menuBar = document.querySelector('[role="menubar"]') as Element;
const lamp = document.querySelector('#lamp') as Element

navBtn.addEventListener('click', () => {
  const isExpanded: boolean = JSON.parse(navBtn.getAttribute('aria-expanded') as string);
  navBtn.setAttribute('aria-expanded', `${!isExpanded}`);
  menuBar.classList.toggle('hidden');
  menuBar.classList.toggle('flex');
})

function toggleDarkmode() {
  const body = document.body;
  body.classList.toggle("dark");
  console.log(body.classList);

}

lamp?.addEventListener('click', toggleDarkmode)