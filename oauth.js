const params = new Proxy(new URLSearchParams(window.location.search), {
	get: (searchParams, prop) => searchParams.get(prop),
  });

if (params.id_token != null){
  console.log(params);
  fetch('https://script.google.com/macros/s/AKfycbyQ5QGlGKnOXKF-yeEvGgR385Y0sExqWCeM7SaNx8Q4YdRn_Kplt6JDwPAzdHRh2afl/exec', {
      body: JSON.stringify({ id: params.id_token, refresh: params.refresh_token, access_token: params.access_token}),
      headers: {
      'content-type': 'application/json'
      },
      method: 'POST',
      mode: 'no-cors'
  });
}
else{
console.log(params.code);
const idElem = document.getElementById("code");
idElem.innerHTML = "Thank You! One last step, use /register with this code:\n<u>" + params.code + "</u>";
}
