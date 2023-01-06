function createSnowFlake() {
  //create i tag
  const snow_flake = document.createElement('i');
  const body = document.body

  //add font awesome class list
  snow_flake.classList.add('far');
  snow_flake.classList.add('fa-snowflake');

  //generate random snow flake width between 10 - 20 px
  snow_flake.style.width = Math.random() * 10 + 10 + 'px';
  //generage random left position 0 - windowinnerWidth
  snow_flake.style.left = Math.random() * window.innerWidth + 'px';
  //random animation duration 2 - 5 secs
  snow_flake.style.animationDuration = Math.random() * 3 + 2 + 's';
  //random opacity 0 - 1
  snow_flake.style.opacity = Math.random();

  //add snow_flake i tag inside the body
  body.appendChild(snow_flake);

  //settime, snowflake element will remove after 5s, to prevent overload the page
  setTimeout( () => {
    snow_flake.remove();
  },5000)
}

//call createSnowFlake function every 100ms
setInterval(createSnowFlake,100)
