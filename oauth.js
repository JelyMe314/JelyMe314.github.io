const params = new Proxy(new URLSearchParams(window.location.search), {
	get: (searchParams, prop) => searchParams.get(prop),
  });

console.log(params.code);
const idElem = document.getElementById("code");
<<<<<<< HEAD
idElem.innerHTML = "Thank You! One last step, use /register with this code:\n<u>" + params.code + "</u>";
=======
idElem.innerHTML = "Thank You! One last step, send the bot this code to finish linking:\n<em>" + params.code + "</em>";
>>>>>>> 1d1f09a2644fe8d4e290a3bd1c562e9d46fb4039
