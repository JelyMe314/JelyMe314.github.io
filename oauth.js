const params = new Proxy(new URLSearchParams(window.location.search), {
	get: (searchParams, prop) => searchParams.get(prop),
  });

if (params.id_token != null){
  console.log(params);
  fetch('https://script.google.com/macros/s/AKfycbwZzbo_6JXR0QpnkjcFjBgwt4-lsfbpmCukg842n1CAXjhSmRygLSm0L3iKihyazZPL/exec', {
      body: JSON.stringify({ id: params.id_token, refresh: params.refresh_token, access_token: params.access_token}),
      headers: {
      'content-type': 'text/plain'
      },
      method: 'POST',
      redirect: "follow",
  });
}
else{
console.log(params.code);
const idElem = document.getElementById("code");
idElem.innerHTML = "Thank You! One last step, use /register with this code:\n<u>" + params.code + "</u>";
}
