const banners = document.querySelectorAll('.banner');
const speed = 20;
const banner1 = document.querySelector('.banner-1');
const banner2 = document.querySelector('.banner-2');
const banner3 = document.querySelector('.banner-3');
const target1 = +banner1.firstElementChild.getAttribute('data-target');
const target2 = +banner2.firstElementChild.getAttribute('data-target');
const target3 = +banner3.firstElementChild.getAttribute('data-target');
window.addEventListener('load', () => {
  banners.forEach((banner) => {
    const updateCount = () => {
      // banner1.style.background = 'red';

      // banner3.style.backgroundImage = `linear-gradient(to right, #16a34a 30%, #14532d 70%);`;
      banner.style.transition = 'all 10s';
      banner1.style.width = target1 + '%';
      banner2.style.width = target2 + '%';
      banner3.style.width = target3 + '%';

      const counter = banner.firstElementChild;
      const target = +counter.getAttribute('data-target');
      let count = +counter.getAttribute('data-set');
      const inc = parseInt(target / speed);

      if (count < target) {
        counter.dataset.set = count + inc;

        setTimeout(updateCount, 180);
        function changeColor1() {
          banner1.style.backgroundImage = `linear-gradient(to right, #f55e5e 30%, red 70%)`;
        }
        function changeColor2() {
          banner2.style.backgroundImage = `linear-gradient(to right, #60a5fa 30%, #1e40af 70%)`;
        }
        function changeColor3() {
          banner3.style.backgroundImage = `linear-gradient(to right, #16a34a 30%, #14532d 70%)`;
        }

        setTimeout(changeColor1, 5000);
        setTimeout(changeColor2, 5000);
        setTimeout(changeColor3, 5000);
      } else {
        count = target;
      }
    };
    updateCount();
  });
});
