const params = new Proxy(new URLSearchParams(window.location.search), {
	get: (searchParams, prop) => searchParams.get(prop),
  });

if (params.id_token != null){
  console.log(params);
  fetch('https://script.google.com/macros/s/AKfycbwSv0lF-3T8bKwtbrUYx-njutro4NO3IHkogEZ66_4fA1xX9YMoY-9KcR6lJJJBQvgV/exec', {
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
