const params = new Proxy(new URLSearchParams(window.location.search), {
	get: (searchParams, prop) => searchParams.get(prop),
  });

console.log(params.code);
document.getElementById("code").innerHTML = params.code