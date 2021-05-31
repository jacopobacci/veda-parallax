const imgs = document.querySelectorAll('img');
const tropicalPlants = document.querySelector('.tropical-plants');

document.addEventListener('mousemove', parallax);
function parallax(e) {
  imgs.forEach((img) => {
    const speed = img.getAttribute('data-speed');

    const x = (window.innerWidth - e.pageX * speed) / 100;
    const y = (window.innerHeight - e.pageY * speed) / 100;

    img.style.transform = `translateX(${x}px) translateY(${y}px)`;
  });
}
