// Placeholder for future animations or counters
console.log("Home page JS loaded!");
// Counter Animation
const counters = document.querySelectorAll('.features h2');

const options = {
  root: null,
  threshold: 0.3
};

const counterObserver = new IntersectionObserver(function(entries, observer) {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      const counter = entry.target;
      const updateCount = () => {
        const target = +counter.getAttribute('data-target');
        const count = +counter.innerText;
        const increment = target / 100; // speed

        if(count < target){
          counter.innerText = Math.ceil(count + increment);
          setTimeout(updateCount, 20); // animation speed
        } else {
          counter.innerText = target;
        }
      };
      updateCount();
      observer.unobserve(counter); // ek baar animation complete ho jaye
    }
  });
}, options);

counters.forEach(counter => counterObserver.observe(counter));
