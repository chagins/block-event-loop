(function(){
  const button = document.getElementById('btn');
  const logger = document.getElementById('logger');
  const location = document.getElementById('location');
  
  button.addEventListener('click', heavyLoad);
  updateLocation();
  let prevTime = +(new Date());

  setInterval(tick, 100);

  function output(text) {
    const str = text + logger.innerHTML;
    logger.innerHTML = str.substring(0, 302);
  }

  function tick() {
    const now = +(new Date());
    output(`100ms ${prevTime - now}<br>`);
    prevTime = now;
  }

  function heavyLoad(){
    output(`Loading...<br>`);
    setTimeout(() => {
      Array(5000000).fill(0).map(() => Math.random()).sort();
    }, 100);
  }

  function updateLocation() {
    location.innerHTML = window.location.origin;
  }
  
})()