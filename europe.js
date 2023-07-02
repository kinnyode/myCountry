const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      // Add the animation class
      entry.target.classList.add('dykassets-animation');
      entry.target.classList.add('flexbox-animation');
      
    }
  });
});

const viewbox = document.querySelectorAll('.dykassets');
viewbox.forEach(image => {
  observer.observe(image);

  const viewbox = document.querySelectorAll('.flexbox');
viewbox.forEach(image => {
  observer.observe(image);

});

});
