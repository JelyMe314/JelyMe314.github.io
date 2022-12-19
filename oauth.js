const params = new Proxy(new URLSearchParams(window.location.search), {
	get: (searchParams, prop) => searchParams.get(prop),
  });

console.log(params.code);
const idElem = document.getElementById("code");
idElem.innerHTML = "Thank You! One last step, send the bot this code to finish linking:\n<i>" + params.code + "</i>";